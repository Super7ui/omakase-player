import { Destroyable, OmpAudioRouterChangeEvent, OmpAudioRouterInputSoloMuteEvent } from '../types';
import { Subject } from 'rxjs';
import { OmpAudioRouterInputSoloMuteState, OmpAudioRouterState, OmpAudioRoutingConnection, OmpAudioRoutingInputType, OmpAudioRoutingPath } from './model';
import { AudioRouterApi } from '../api/audio-router-api';
import { OmpAudioEffect, OmpAudioEffectFilter, OmpAudioEffectParam, OmpAudioEffectsGraph, OmpAudioEffectsGraphDef } from '../audio';
export declare class OmpAudioRouter implements AudioRouterApi, Destroyable {
    readonly onChange$: Subject<OmpAudioRouterChangeEvent>;
    readonly onInputSoloMute$: Subject<OmpAudioRouterInputSoloMuteEvent>;
    protected _audioContext: AudioContext;
    protected _inputsNumber: number;
    protected _outputsNumber: number;
    protected _sourceAudioNode?: AudioNode;
    protected _channelSplitterNode: ChannelSplitterNode;
    protected _channelMergerNode: ChannelMergerNode;
    protected _initialRoutingConnections: OmpAudioRoutingConnection[];
    /**
     * Mapped by routing path input, then by routing path output
     * @protected
     */
    protected _connectionsByInputOutput: Map<number, Map<number, OmpAudioRoutingConnection>>;
    protected _effectsGraphsByInputOutput: Map<number, Map<number, OmpAudioEffectsGraph | undefined>>;
    protected _lastChangedSoloMuteStateInput: number | undefined;
    /**
     * Mapped input states, stores solo and mute flag/connections for each input
     * @protected
     */
    protected _soloMuteStatesByInput: Map<number, OmpAudioRouterInputSoloMuteState>;
    protected _destroyed$: Subject<void>;
    protected static readonly defaultAudioOutputsResolver: (maxChannelCount: number) => number;
    constructor(audioContext: AudioContext, audioOutputNode: AudioNode, inputsNumber: number, outputsNumberResolver?: (maxChannelCount: number) => number);
    get isSourceConnected(): boolean;
    disconnectSource(): void;
    connectSource(audioNode: AudioNode): void;
    updateConnections(connections: OmpAudioRoutingConnection[]): void;
    getInitialRoutingConnections(): OmpAudioRoutingConnection[];
    private getInputInitialRoutingConnections;
    private getRoutingConnections;
    get sourceAudioNode(): AudioNode | undefined;
    get inputsNumber(): number;
    get outputsNumber(): number;
    getAudioRouterState(): OmpAudioRouterState;
    getAudioRouterInputSoloMuteState(): OmpAudioRouterInputSoloMuteState;
    toggleSolo(routingPath: OmpAudioRoutingInputType): void;
    toggleMute(routingPath: OmpAudioRoutingInputType): void;
    setAudioEffectsGraphs(effectsGraphDef: OmpAudioEffectsGraphDef, routingPath?: Partial<OmpAudioRoutingPath>): void;
    removeAudioEffectsGraphs(routingPath?: Partial<OmpAudioRoutingPath>): void;
    findAudioEffectsGraphs(routingPath?: Partial<OmpAudioRoutingPath>): OmpAudioEffectsGraph[];
    findAudioEffects(filter?: {
        routingPath?: Partial<OmpAudioRoutingPath>;
    } & OmpAudioEffectFilter): OmpAudioEffect[];
    setAudioEffectsParams(param: OmpAudioEffectParam, filter?: {
        routingPath?: Partial<OmpAudioRoutingPath>;
    } & OmpAudioEffectFilter): void;
    resetInputsSoloMuteState(): void;
    protected resetInputSoloMuteState(inputNumber: number): void;
    protected createInitialSoloMuteState(inputNumber: number): OmpAudioRouterInputSoloMuteState;
    setInitialRoutingConnections(connections: OmpAudioRoutingConnection[]): void;
    private getByRoutingPath;
    protected emitChange(): void;
    protected emitInputSoloMute(): void;
    protected _updateConnection(newConnection: OmpAudioRoutingConnection, emitEvent?: boolean): void;
    protected _solo(inputNumber: number): void;
    protected _unsolo(inputNumber: number, checkMute?: boolean): void;
    protected _mute(inputNumber: number): void;
    protected _unmute(inputNumber: number): void;
    protected _updateInputsSoloMuteState(): void;
    private setInputSoloMuteState;
    private connectEffectsGraph;
    private disconnectEffectsGraph;
    private _setEffectsGraphs;
    private _setEffectsGraph;
    destroy(): void;
}
