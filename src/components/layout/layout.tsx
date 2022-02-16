import '../../styles/global.css';

import { LocaleContext, LocalizedLink } from 'gatsby-theme-i18n';
import * as React from 'react';

import { PageFooter } from '../footer/footer';
import { Seo } from '../seo';
import { SkipLink } from '../skip-link/skip-link';
import { TitleSvg } from '../svg/app-title-svg';
import { content, header } from './layout.module.css';

interface LayoutProps {
    title?: string;
    description?: string;
    image?: string;
    /** The path to be used in the lang switch link */
    langSwitchPath: string;
    /** The relative path of the page; e.g. '/about/' */
    relativePath: string;
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const currentLocale = React.useContext(LocaleContext);
    const otherLocale = currentLocale === 'en' ? 'de' : 'en';
    const aboutLabel = currentLocale === 'en' ? 'About' : 'Über diese Seite';
    const langSwitchLabel = currentLocale === 'en'
    ? <><span className="bold">EN</span> | DE</>
    : <>EN | <span className="bold">DE</span></>;
    const langSwitchAriaLabel = currentLocale === 'en'
    ? 'Switch to German page'
    : 'Zur englischen Version wechseln';
    const langSwitchPath = props.langSwitchPath ? props.langSwitchPath : props.relativePath;

    return (
        <>
            <Seo
                title={props.title}
                description={props.description}
                image={props.image}
                relativePath={props.relativePath}
            />
            <SkipLink />
            <header className={header}>
                <LocalizedLink to="/" language={currentLocale} aria-label="Homepage: Oida, is des org!">
                    <TitleSvg />
                </LocalizedLink>
                <nav>
                    <LocalizedLink
                        to="/about"
                        language={currentLocale}
                    >
                        {aboutLabel}
                    </LocalizedLink>
                    <LocalizedLink
                        to={langSwitchPath}
                        language={otherLocale}
                        aria-label={langSwitchAriaLabel}
                    >
                        {langSwitchLabel}
                    </LocalizedLink>
                </nav>
            </header>
            <main
                id="maincontent"
                className={content}
            >
                {props.children}
            </main>
            <PageFooter />
        </>
    );
};

export default Layout;
