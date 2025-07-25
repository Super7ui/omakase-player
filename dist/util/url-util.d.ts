export declare class UrlUtil {
    static isUrlAbsolute(url: string): boolean;
    static absolutizeUrl(rootUrl: string, url: string): string;
    static formatBase64Url(mime: string, base64: string): string;
    static getFilenameFromUrl(url: string): string;
}
