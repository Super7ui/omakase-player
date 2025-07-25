export declare function isNullOrUndefined(value: any): boolean;
export declare function hasFunction(obj: any, functionName: string): boolean;
export declare function hasProperty(obj: any, prop: string): boolean;
export declare function callFunctionByName<T extends object>(obj: T, fnName: keyof T, ...args: any[]): any;
export declare function removeEmptyValues<T extends Record<string, any>>(obj: T): T;
