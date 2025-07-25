import { Destroyable } from '../types';
export declare class DestroyUtil {
    static destroy(...destroyables: (Destroyable | undefined)[]): void;
    static nullify(...nullifiables: any[]): void;
}
export declare function nullifier(...nullifiables: any[]): void;
export declare function destroyer(...destroyables: (Destroyable | undefined)[]): void;
