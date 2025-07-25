import { Subject } from 'rxjs';
import { Video } from '../video/model';
export declare class OmakaseInlineEdit extends HTMLElement {
    onEdit$: Subject<string>;
    private _text;
    private _isEditing;
    private _isClicked;
    private _validationFn?;
    private _container;
    private _input;
    private _span;
    private _select?;
    constructor();
    set validationFn(validationFn: (text: string) => boolean);
    setText(text: string): void;
    setTimecode(timecode: string, video: Video, minTime?: number, maxTime?: number): void;
    setOptions(options: string[]): void;
    private enableEditMode;
    private disableEditMode;
    private undoChanges;
    private stopPropagation;
    private handleClick;
    private handleKeyDown;
    private handleKeyUp;
}
