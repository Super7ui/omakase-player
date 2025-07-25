export declare class BlobUtil {
    private static _blobs;
    static createBlob(blobParts: BlobPart[], options?: BlobPropertyBag): Blob;
    static createObjectURL(blob: Blob): string;
    static createBlobURL(blobParts: BlobPart[], options?: BlobPropertyBag): string;
    static revokeObjectURL(url: string): void;
    static revokeAll(): void;
}
