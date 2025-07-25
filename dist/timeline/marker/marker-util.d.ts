import Konva from 'konva';
import { MarkerSymbolType } from './marker-types';
export declare class MarkerUtil {
    static createPeriodSymbol(style: {
        handleType: 'start' | 'end';
        symbolType: MarkerSymbolType;
        symbolSize: number;
        color: string;
    }): Konva.Shape;
    static createMomentSymbol(style: {
        symbolType: MarkerSymbolType;
        symbolSize: number;
        color: string;
    }): Konva.Shape;
}
