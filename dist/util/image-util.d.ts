import Konva from 'konva';
import { Observable } from 'rxjs';
import { AuthenticationData } from '../authentication/model';
import { OmakaseVttCueXTWH } from '../types';
export declare class ImageUtil {
    static getProtectedImageUrl(url: string, authentication: AuthenticationData): Observable<string>;
    static createKonvaImage(url: string, authentication?: AuthenticationData): Observable<Konva.Image>;
    private static _spriteCache;
    static createKonvaImageFromSprite(url: string, xywh: OmakaseVttCueXTWH, authentication?: AuthenticationData): Observable<Konva.Image>;
    static cropSpriteImage(image: Konva.Image, xywh: OmakaseVttCueXTWH): Konva.Image;
    static createKonvaImageSizedByWidth(url: string, width: number, authentication?: AuthenticationData): Observable<Konva.Image>;
    static createKonvaImageSizedByHeight(url: string, height: number, authentication?: AuthenticationData): Observable<Konva.Image>;
    static createKonvaImageFromSpriteByHeight(imageUrl: string, xywh: OmakaseVttCueXTWH, height: number, authentication?: AuthenticationData): Observable<Konva.Image>;
    static createKonvaImageFromSpriteByWidth(imageUrl: string, xywh: OmakaseVttCueXTWH, width: number, authentication?: AuthenticationData): Observable<Konva.Image>;
    static calculateProportionalHeight(width: number, image: Konva.Image): number;
    static calculateProportionalWidth(height: number, image: Konva.Image): number;
    static calculateProportionalHeightForSprite(width: number, xywh: OmakaseVttCueXTWH): number;
    static calculateProportionalWidthForSprite(height: number, xywh: OmakaseVttCueXTWH): number;
}
