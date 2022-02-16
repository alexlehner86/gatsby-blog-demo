export interface InternationalizationConfigItem {
    code: string;
    hrefLang: string;
    dateFormat: string;
    langDir: string;
    localName: string;
    name: string;
}

/**
 * Matches data structure in /i18n/config.json
 */
export type InternationalizationConfig = InternationalizationConfigItem[];
