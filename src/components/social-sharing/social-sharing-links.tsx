import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { DOMAIN } from '../../const/app.const';
import { FacebookSvg } from '../svg/facebook-svg';
import { LinkedInSvg } from '../svg/linkedin-svg';
import { RedditSvg } from '../svg/reddit-svg';
import { TwitterSvg } from '../svg/twitter-svg';
import { linkContainer } from './social-sharing-links.module.css';
import {
    getShareOnFacebookUrl,
    getShareOnLinkedInUrl,
    getShareOnRedditUrl,
    getShareOnTwitterUrl,
} from './social-sharing-links.util';

interface SocialSharingLinksProps {
    blogTitle: string;
    relativePath: string;
}

export const SocialSharingLinks: React.FunctionComponent<SocialSharingLinksProps> = (props) => {
    const locale = React.useContext(LocaleContext);
    const isEnglish = locale === 'en';
    const sectionHeading = isEnglish ? 'Social Sharing Links' : 'In sozialen Netzwerken teilen';
    const facebookLabel = isEnglish ? 'Share on Facebook' : 'Auf Facebook teilen';
    const linkedInLabel = isEnglish ? 'Share on LinkedIn' : 'Auf LinkedIn teilen';
    const redditLabel = isEnglish ? 'Share on Reddit' : 'Auf Reddit teilen';
    const twitterLabel = isEnglish ? 'Share on Twitter' : 'Auf Twitter teilen';
    const url = DOMAIN + props.relativePath;

    return (
        <section className={linkContainer}>
            <h2 className="sr-only">{sectionHeading}</h2>
            <a
                href={getShareOnTwitterUrl(url, props.blogTitle)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={twitterLabel}
                title={twitterLabel}
            >
                <TwitterSvg />
            </a>
            <a
                href={getShareOnFacebookUrl(url)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={facebookLabel}
                title={facebookLabel}
            >
                <FacebookSvg />
            </a>
            <a
                href={getShareOnLinkedInUrl(url)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedInLabel}
                title={linkedInLabel}
            >
                <LinkedInSvg />
            </a>
            <a
                href={getShareOnRedditUrl(url, props.blogTitle)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={redditLabel}
                title={redditLabel}
            >
                <RedditSvg />
            </a>
        </section>
    );
};
