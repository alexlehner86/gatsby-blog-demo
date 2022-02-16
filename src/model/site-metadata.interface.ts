export interface SiteMetadata {
    siteUrl: string;
    title: string;
    description: string;
    image: string;
}

export interface SiteMetadataQueryResult {
    site: {
        siteMetadata: SiteMetadata;
    }
}
