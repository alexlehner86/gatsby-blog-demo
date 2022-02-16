import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { DATETIME_VALID_DATE_STRING_FORMAT } from '../const/app.const';
import { MdxBlogPostPageContext } from '../model/mdx-post-metadata.interface';
import { getLangSwitchPath, getRelativePath } from '../utils/app.utils';
import { GoBackLink } from './go-back-link/go-back-link';
import Layout from './layout/layout';
import { LinkInBlogPost } from './link-in-blog-post/link-in-blog-post';
import { PostedOnDate } from './posted-on-date/posted-on-date';
import { SocialSharingLinks } from './social-sharing/social-sharing-links';

// Enable code highlighting
deckDeckGoHighlightElement();

// Use custom components for some elements in the blog posts
const mdxComponents: MDXProviderComponentsProp = {
    a: LinkInBlogPost,
}

const PostLayout: React.FunctionComponent<PageProps<any, MdxBlogPostPageContext>> = (props) => {
    const currentLocale = React.useContext(LocaleContext);
    const { title, description, image } = props.pageContext.frontmatter;
    // This is necessary so that static html files created with static site generation include correct meta data.
    const relativePath = getRelativePath(props.pageContext.locale, props.pageContext.originalPath);
    const creationDate = dayjs(props.pageContext.frontmatter.date);
    const dateLabel = creationDate.format(props.pageContext.dateFormat);
    const datetimeValue = creationDate.format(DATETIME_VALID_DATE_STRING_FORMAT);

    return (
        <Layout
            title={title}
            description={description}
            image={image}
            langSwitchPath={getLangSwitchPath(props.pageContext.originalPath, currentLocale)}
            relativePath={relativePath}
        >
            <PostedOnDate dateLabel={dateLabel} datetimeValue={datetimeValue} />
            <MDXProvider components={mdxComponents}>{props.children}</MDXProvider>
            <PostedOnDate dateLabel={dateLabel} datetimeValue={datetimeValue} isBottom={true} />
            <SocialSharingLinks blogTitle={title} relativePath={relativePath} />
            <GoBackLink />
        </Layout>
    );
};

export default PostLayout;
