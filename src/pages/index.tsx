import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import * as React from 'react';

import { HomepageContentGerman } from '../components/homepage/homepage-content-de';
import { HomepageContentEnglish } from '../components/homepage/homepage-content-en';
import Layout from '../components/layout/layout';
import { DATETIME_VALID_DATE_STRING_FORMAT } from '../const/app.const';
import { InternationalizationConfig } from '../model/i18n-config.interface';
import { MdxBlogPostQueryResult } from '../model/mdx-post-metadata.interface';
import { blogPosts, imageWrapper, secondaryInfo } from '../styles/index.module.css';
import { getRelativePath } from '../utils/app.utils';

export default function IndexPage() {
    const { locale, config } = useLocalization();
    const dateFormat = (config as InternationalizationConfig).find(c => c.code === locale)?.dateFormat;
    const data = useStaticQuery<MdxBlogPostQueryResult>(graphql`
        query GetBlogPosts {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    id
                    fields {
                        locale
                    }
                    frontmatter {
                        title
                        description
                        date
                    }
                    slug
                }
            }
        }
    `);
    // Only show posts for the current locale (English or German)
    const posts = data.allMdx.nodes.filter(node => node.fields.locale === locale);
    const altText = locale === 'en'
        ? 'Alexander Lehner on a bridge over the Danube channel in Vienna'
        : 'Alexander Lehner auf einer Brücke über dem Donaukanal in Wien';
    // This is necessary so that static html file created with static site generation includes correct meta data.
    const relativePath = getRelativePath(locale, '/');

    return (
        <Layout
            langSwitchPath='/'
            relativePath={relativePath}
        >
            {locale === 'en' ? <HomepageContentEnglish /> : <HomepageContentGerman />}
            <ul className={blogPosts}>
                {posts.map(post => (
                    <li key={post.id}>
                        <LocalizedLink to={`/${post.slug}`} language="">
                            {post.frontmatter.title}
                        </LocalizedLink>
                        {/* span with space is necessary so that secondary info can flow to next line */}
                        <span> </span>
                        <span className={secondaryInfo}>
                            (
                            <time
                                dateTime={dayjs(post.frontmatter.date).format(DATETIME_VALID_DATE_STRING_FORMAT)}
                            >
                                {dayjs(post.frontmatter.date).format(dateFormat)}
                            </time>
                            )
                        </span>
                    </li>
                ))}
            </ul>
            <hr />
        </Layout>
    );
};
