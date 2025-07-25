import { Observable, Subject } from 'rxjs';
import { Destroyable, UnwrapObservable } from '../types';
export interface OmpBroadcastErrorMessage {
    name: string;
    message: string;
}
export interface OmpBroadcastMessageResponse<DataType> {
    messageType: 'messageResponse';
    requestMessageId: string;
    data?: DataType;
    error?: OmpBroadcastErrorMessage;
}
export interface OmpBroadcastMessage<DataType> {
    messageType: 'message';
    messageId: string;
    actionName: string;
    data?: DataType;
}
export interface OmpBroadcastSendOptions {
    timeout: number;
}
export declare class OmpBroadcastChannel implements Destroyable {
    private readonly _channelId;
    private readonly _onMessage$;
    private readonly _onResponse$;
    private _broadcastChannel;
    private _messageListener;
    private _messageerrorListener;
    protected _destroyed$: Subject<void>;
    constructor(channelId: string);
    private init;
    protected _sendAndObserveResponse<DataType>(message: OmpBroadcastMessage<any>, sendOptions?: Partial<OmpBroadcastSendOptions>): Observable<OmpBroadcastMessageResponse<DataType>>;
    protected sendResponse<T>(responseToMessageId: string, responseValue: Observable<T> | any): void;
    protected createMessageStream(actionName: string): Observable<OmpBroadcastMessage<any>>;
    protected createDataStream<T>(actionName: string): Observable<T>;
    protected sendMessage<DataType>(message: OmpBroadcastMessage<DataType>): void;
    protected createMessage<DataType>(actionName: string, data?: DataType): OmpBroadcastMessage<DataType>;
    private _sendResponse;
    private _sendErrorResponse;
    get channelId(): string;
    destroy(): void;
}
export type OmpBroadcastChannelActionsMap<T extends Record<string, {
    requestType?: any;
    responseType?: any;
}>> = {
    [K in Extract<keyof T, string>]: {
        requestType: T[K]['requestType'] extends undefined ? [void] : T[K]['requestType'];
        responseType: T[K]['responseType'] extends undefined ? void : T[K]['responseType'];
    };
};
export type OmpBroadcastChannelActionName<T extends OmpBroadcastChannelActionsMap<any>> = Extract<keyof T, string>;
/**
 * If remote method response is awaited value is always Observable. For methods that already return Observable we need to unwrap it as return type is already Observable
 */
export declare class TypedOmpBroadcastChannel<T extends OmpBroadcastChannelActionsMap<any>> extends OmpBroadcastChannel {
    constructor(channelId: string);
    createRequestStream<ActionName extends OmpBroadcastChannelActionName<T>, ResponseType extends T[ActionName]['responseType']>(action: ActionName): Observable<UnwrapObservable<ResponseType>>;
    createRequestResponseStream<ActionName extends OmpBroadcastChannelActionName<T>, RequestType extends T[ActionName]['requestType'], ResponseType extends T[ActionName]['responseType']>(action: ActionName): Observable<[UnwrapObservable<RequestType>, (response: ResponseType) => void]>;
    sendAndObserveResponse<ActionName extends OmpBroadcastChannelActionName<T>, RequestType extends T[ActionName]['requestType'], ResponseType extends T[ActionName]['responseType']>(action: ActionName, arg?: RequestType, sendOptions?: Partial<OmpBroadcastSendOptions>): Observable<UnwrapObservable<ResponseType>>;
    send<ActionName extends OmpBroadcastChannelActionName<T>, RequestType extends T[ActionName]['requestType']>(action: ActionName, arg?: RequestType): void;
}
