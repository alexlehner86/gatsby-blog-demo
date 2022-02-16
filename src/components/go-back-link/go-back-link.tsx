import { LocaleContext, LocalizedLink } from 'gatsby-theme-i18n';
import * as React from 'react';

import { goBackLinkContainer } from './go-back-link.module.css';

export const GoBackLink: React.FunctionComponent = () => {
    const locale = React.useContext(LocaleContext);
    const backLabel = locale === 'en' ? 'back' : 'Zurück';

    return (
        <div
            className={goBackLinkContainer}
        >
            <LocalizedLink
                to="/"
                language={locale}
            >
                <span aria-hidden="true">&larr;&nbsp;</span>{backLabel}
            </LocalizedLink>
        </div>
    );
};
