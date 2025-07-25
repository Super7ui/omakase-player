export declare class BrowserProvider {
    private static _instance;
    private _userAgent;
    private _isFirefox;
    private _isEdge;
    private _isChromium;
    private _isChrome;
    private _isAndroid;
    private _isSafari;
    private constructor();
    static instance(): BrowserProvider;
    get isSafari(): boolean;
    get isFirefox(): boolean;
    get isEdge(): boolean;
    get isChromium(): boolean;
    get isChrome(): boolean;
    get isAndroid(): boolean;
}
