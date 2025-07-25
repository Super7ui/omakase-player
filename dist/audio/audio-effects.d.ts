import { OmpAudioGraphDef, OmpAudioNodeConnectionDef, OmpAudioNodeDef } from './model';
import { OmpAudioNodeParamType, OmpAudioNodeType } from '../video';
import { BaseOmpAudioNode, OmpAudioGraph, OmpAudioNode, OmpAudioNodeParam, OmpAudioNodeValueParam } from './omp-web-audio';
import { OmpAudioRoutingPath } from '../video';
export declare class OmpAudioEffectsGraphDefBuilder {
    protected _effectDefs: OmpAudioEffectDef[];
    protected _effectDefsMap: Map<string, OmpAudioEffectDef>;
    protected _sourceEffectDefs?: OmpAudioEffectDef[];
    protected _destinationEffectDefs?: OmpAudioEffectDef[];
    private constructor();
    static instance(): OmpAudioEffectsGraphDefBuilder;
    addEffects(nodes: OmpAudioEffectDef[]): this;
    addEffect(node: OmpAudioEffectDef): this;
    connections(connections: [{
        from: string;
        to: string;
    }]): this;
    connect(sourceNodeId: string, destinationNodeId: string): this;
    sourceEffectsIds(ids: string[]): this;
    destinationEffectsIds(ids: string[]): this;
    build(): OmpAudioEffectsGraphDef;
}
/**
 * Audio effects graph definition. Contains {@link OmpAudioEffectDef}'s
 */
export declare class OmpAudioEffectsGraphDef implements OmpAudioGraphDef {
    nodes: OmpAudioEffectDef[];
    sourceNodeIds: string[];
    destinationNodeIds: string[];
    private constructor();
    static create(...effects: OmpAudioEffectDef[]): OmpAudioEffectsGraphDef;
}
/**
 * Audio effect definition
 */
export interface OmpAudioEffectDef extends OmpAudioNodeDef {
}
export declare class BaseOmpAudioEffectDef implements OmpAudioEffectDef {
    id: string;
    type: OmpAudioNodeType;
    audioNodeOptions?: any;
    attrs: Record<string, any>;
    connections: OmpAudioNodeConnectionDef[];
    audioParams: OmpAudioNodeParamType[];
    constructor(id: string, type: OmpAudioNodeType, audioNodeOptions?: any);
    protected addParam(param: OmpAudioNodeParamType): void;
    outputTo(...effectIds: string[]): BaseOmpAudioEffectDef;
    withAttrs(attrs: Record<string, any>): BaseOmpAudioEffectDef;
}
/**
 * Gain effect definition
 */
export declare class OmpGainEffectDef extends BaseOmpAudioEffectDef {
    protected readonly _gainParam: OmpAudioEffectGainParam;
    static create(id: string, gain?: number): OmpGainEffectDef;
    private constructor();
}
/**
 * Delay effect definition
 */
export declare class OmpDelayEffectDef extends BaseOmpAudioEffectDef {
    protected readonly _delayTimeParam: OmpAudioEffectDelayTimeParam;
    static create(id: string, delayTime?: number): OmpDelayEffectDef;
    private constructor();
}
export declare class OmpAudioEffectParam extends OmpAudioNodeParam {
}
export declare class OmpAudioEffectGainParam extends OmpAudioEffectParam {
    protected readonly _valueParam: OmpAudioNodeValueParam;
    constructor(gain?: number);
    setGain(gain: number): void;
}
export declare class OmpAudioEffectDelayTimeParam extends OmpAudioEffectParam {
    protected readonly _valueParam: OmpAudioNodeValueParam;
    constructor(delayTime?: number);
    setDelayTime(delayTime: number): void;
}
export interface OmpAudioEffect extends OmpAudioNode {
    setParam(param: OmpAudioEffectParam): void;
    toDef(): OmpAudioEffectDef;
}
export declare abstract class BaseOmpAudioEffect<T extends AudioNode> extends BaseOmpAudioNode<T> implements OmpAudioEffect {
    constructor(audioContext: AudioContext, def: OmpAudioEffectDef);
    setParam(param: OmpAudioEffectParam): void;
    toDef(): OmpAudioEffectDef;
    protected abstract extractAudioNodeParams(): OmpAudioNodeParamType[];
}
/**
 * Gain effect
 */
export declare class OmpGainEffect extends BaseOmpAudioEffect<GainNode> {
    protected createAudioNode(audioContext: AudioContext, def: OmpAudioNodeDef): GainNode;
    protected extractAudioNodeParams(): OmpAudioNodeParamType[];
}
/**
 * Delay effect
 */
export declare class OmpDelayEffect extends BaseOmpAudioEffect<DelayNode> {
    protected createAudioNode(audioContext: AudioContext, def: OmpAudioNodeDef): DelayNode;
    protected extractAudioNodeParams(): OmpAudioNodeParamType[];
}
/**
 * Filter values used for filtering {@link OmpAudioEffect}'s
 */
export interface OmpAudioEffectFilter {
    /**
     * {@link OmpAudioEffect.id}
     */
    id?: string;
    /**
     * {@link OmpAudioEffect.type}
     */
    type?: OmpAudioNodeType;
    /**
     * {@link OmpAudioEffect.attrs}
     */
    attrs?: Record<string, any>;
}
/**
 * Audio effects graph. Implementation corresponds to definition {@link OmpAudioEffectsGraph.toDef}
 */
export declare class OmpAudioEffectsGraph implements OmpAudioGraph {
    protected readonly _routingPath: OmpAudioRoutingPath;
    protected _effects: OmpAudioEffect[];
    protected _effectsById: Map<string, OmpAudioEffect>;
    protected _sourceEffects: OmpAudioEffect[];
    protected _destinationEffects: OmpAudioEffect[];
    constructor(audioContext: AudioContext, routingPath: OmpAudioRoutingPath, def: OmpAudioEffectsGraphDef);
    protected createEffect(audioContext: AudioContext, effectDef: OmpAudioEffectDef): OmpAudioEffect;
    /**
     * Finds all {@link OmpAudioEffect}'s that correspond to {@link filter}
     *
     * @param filter
     */
    findAudioEffects(filter: OmpAudioEffectFilter): OmpAudioEffect[];
    /**
     * Audio effects graph input {@link OmpAudioEffect}'s
     */
    get sourceEffects(): OmpAudioEffect[];
    /**
     * Audio effects graph output {@link OmpAudioEffect}'s
     */
    get destinationEffects(): OmpAudioEffect[];
    toDef(): OmpAudioEffectsGraphDef;
    destroy(): void;
}
export declare class OmpAudioEffectsUtil {
    /**
     * Calculates crossfade gain value for {@link value} and {@link curve}
     *
     * @param value in [0, 1] range
     * @param curve
     */
    static crossfadeGain(value: number, curve?: 'linear' | 'equal-power' | 'log' | 'sigmoid'): {
        left: number;
        right: number;
    };
}
