import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { footer } from './footer.module.css';

export const PageFooter: React.FunctionComponent = () => {
    const locale = React.useContext(LocaleContext);
    const imprintText = locale === 'en'
        ? 'Imprint: Content by Alexander Lehner, Vienna/Austria.'
        : 'Impressum: Inhalte von Alexander Lehner, Wien/Österreich.';

    return (
        <footer className={footer}>
            <p>{imprintText}</p>
        </footer>
    );
};
