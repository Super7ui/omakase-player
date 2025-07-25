export declare class OmpError extends Error {
    constructor(message: string, name?: string);
}
export declare class OmpBroadcastChannelError extends OmpError {
    constructor(message: string);
}
export declare class OmpBroadcastChannelTimeoutError extends OmpError {
    constructor(message: string);
}
export declare class OmpVideoWindowPlaybackError extends OmpError {
    constructor(message: string);
}
