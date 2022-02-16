export const getShareOnFacebookUrl = (url: string): string => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
};

export const getShareOnLinkedInUrl = (url: string): string => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
};

export const getShareOnRedditUrl = (url: string, blogTitle: string): string => {
    return `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(blogTitle)}`;
};

export const getShareOnTwitterUrl = (url: string, blogTitle: string): string => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(url)}`;
};
