export declare class ColorUtil {
    static randomHexColor(): string;
    static inverseFillGradient(gradient: (string | number)[]): (string | number)[];
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    } | undefined;
    static getLuminance({ r, g, b }: {
        r: number;
        g: number;
        b: number;
    }): number;
    static rgbToHex({ r, g, b }: {
        r: number;
        g: number;
        b: number;
    }): string;
    static isLightColor(hex: string): boolean;
    static lightenColor(hex: string, percent: number): string;
}
