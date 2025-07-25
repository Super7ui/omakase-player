import { Verticals } from '../../common';
export type MarkerRender = 'lane' | 'spanning';
export type MarkerSymbolType = 'none' | 'square' | 'triangle' | 'circle';
export interface MarkerStyle {
    color: string;
    renderType: MarkerRender;
    symbolType: MarkerSymbolType;
    symbolSize: number;
    lineStrokeWidth: number;
    lineOpacity: number;
}
export interface MarkerHandleStyle {
    color: string;
    symbolType: MarkerSymbolType;
    symbolSize: number;
    lineStrokeWidth: number;
    lineOpacity: number;
}
export interface MarkerHandleVerticals {
    area: Verticals;
    handle: Verticals;
}
export declare const MARKER_STYLE_DEFAULT: MarkerStyle;
