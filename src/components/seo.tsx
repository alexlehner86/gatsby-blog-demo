import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { TWITTER_ACCOUNT_NAME } from '../const/app.const';
import { SiteMetadataQueryResult } from '../model/site-metadata.interface';

interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
    /** The relative path of the page; e.g. '/about/' */
    relativePath: string;
}

export const Seo: React.FunctionComponent<SeoProps> = (props = { relativePath: '/' }) => {
    const data = useStaticQuery<SiteMetadataQueryResult>(graphql`
        query GetSiteMetadataQuery {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `);
    const defaults = data?.site?.siteMetadata;
    const title = props.title || defaults.title;
    const description = props.description || defaults.description;
    const image = props.image ?? defaults.image;
    const url = defaults.siteUrl + props.relativePath;

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="author" content="Alexander Lehner" />
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/** Open Graph properties (used by LinkedIn, Facebook, etc.) */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/** Twitter properties */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content={TWITTER_ACCOUNT_NAME} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}