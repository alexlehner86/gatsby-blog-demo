import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { AboutContentGerman } from '../components/about/about-content-de';
import { AboutContentEnglish } from '../components/about/about-content-en';
import { GoBackLink } from '../components/go-back-link/go-back-link';
import Layout from '../components/layout/layout';
import { getRelativePath } from '../utils/app.utils';

export default function AboutPage() {
    const locale = React.useContext(LocaleContext);
    const title = locale === 'en'
        ? 'About This Site - Oida, is des org!'
        : 'Über diese Seite - Oida, is des org!';
    const description = locale === 'en'
        ? 'More information about this site.'
        : 'Mehr Informationen über diese Seite.';
    const slug = '/about/';
    // This is necessary so that static html file created with static site generation includes correct meta data.
    const relativePath = getRelativePath(locale, slug);

    return (
        <Layout
            title={title}
            description={description}
            langSwitchPath={slug}
            relativePath={relativePath}
        >
            {locale === 'en' ? <AboutContentEnglish /> : <AboutContentGerman />}
            <GoBackLink />
        </Layout>
    );
};
