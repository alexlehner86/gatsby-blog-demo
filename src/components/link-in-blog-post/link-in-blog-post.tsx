import * as React from 'react';

interface LinkInBlogPostProps {
    href: string;
}

export const LinkInBlogPost: React.FunctionComponent<LinkInBlogPostProps> = (props) => {
    if (props.href.includes('oidaisdes.org') || props.href[0] === '/') {
        return <a href={props.href}>{props.children}</a>
    } else {
        // Open external links in new tab
        return (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
        )
    }
};
