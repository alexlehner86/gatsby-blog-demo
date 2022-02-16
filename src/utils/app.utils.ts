/**
 * Returns the relative path based on the locale and originalPath of a route.
 * Example: getRelativePath('de', '/blog-article.de/') returns '/de/blog-article.de/
 */
export const getRelativePath = (locale: string, originalPath: string): string => {
    return locale === 'en' ? originalPath : `/${locale}${originalPath}`;
}

/**
 * Returns the path for the blog post in the alternate language.
 * e.g. '/blog-post.de/' is transformed into '/blog-post.en';
 */
export const getLangSwitchPath = (path: string, currentLocale: string): string => {
    const targetLocale = currentLocale === 'en' ? 'de' : 'en';
    return path.replace(`.${currentLocale}/`, `.${targetLocale}/`);
};
