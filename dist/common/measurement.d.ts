export type Position = {
    x: number;
    y: number;
};
export type Dimension = {
    width: number;
    height: number;
};
export type RectMeasurement = Position & Dimension;
export type Horizontals = {
    x: number;
    width: number;
};
export type Verticals = {
    y: number;
    height: number;
};
export interface OnMeasurementsChange {
    onMeasurementsChange(): void;
}
export interface HasRectMeasurement {
    getRect(): RectMeasurement;
}
