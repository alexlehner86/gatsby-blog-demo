import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { skipLinkContainer } from './skip-link.module.css';

export const SkipLink: React.FunctionComponent = () => {
    const locale = React.useContext(LocaleContext);
    const skipLinkLabel = locale === 'en' ? 'Skip to main content' : 'Zum Hauptinhalt springen';

    return (
        <div className={skipLinkContainer}>
            <a href="#maincontent">
                {skipLinkLabel}
            </a>
        </div>
    );
};
