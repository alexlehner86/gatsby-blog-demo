import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { GoBackLink } from '../components/go-back-link/go-back-link';
import Layout from '../components/layout/layout';

export default function AboutPage() {
    const locale = React.useContext(LocaleContext);
    const title = locale === 'en'
        ? 'Page not found - Oida, is des org!'
        : 'Seite nicht gefunden - Oida, is des org!';
    const heading = locale === 'en'
        ? 'Page not found'
        : 'Seite nicht gefunden';
    const paragraph = locale === 'en'
        ? 'Oops! The page you are looking for doesn\'t exist.'
        : 'Oida! Die aufgerufene Seite existiert nicht.';

    return (
        <Layout
            title={title}
            relativePath="/404"
        >
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <GoBackLink />
        </Layout>
    );
};
