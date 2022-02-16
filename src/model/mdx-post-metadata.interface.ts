/**
 * Data provided by Gatsby for each MDX post via the `pageContext` prop.
 * Includes the metadata defined at the start of every MDX file in the src/posts folder.
 */
export interface MdxBlogPostPageContext {
    dateFormat: string;
    frontmatter: {
        date: string;
        description: string;
        image?: string;
        title: string;
    };
    hrefLang: string;
    locale: string;
    originalPath: string;
}

/**
 * Data provided by Gatsby for each MDX post via the `pageContext` prop.
 * Includes page id, slug and the metadata defined at the start of every MDX file in the src/posts folder.
 */
export interface MdxBlogPost {
    id: string;
    fields: {
        locale: string;
    };
    frontmatter: {
        date: string;
        title: string;
        description: string;
    };
    slug: string;
}

export interface MdxBlogPostQueryResult {
    allMdx: {
        nodes: MdxBlogPost[];
    }
}