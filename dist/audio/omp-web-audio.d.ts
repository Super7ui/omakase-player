import { Destroyable } from '../types';
import { OmpAudioGraphDef, OmpAudioNodeConnectionDef, OmpAudioNodeDef } from './model';
import { OmpAudioNodeParamPropType, OmpAudioNodeParamType, OmpAudioNodeType } from '../video';
/**
 * Connection definition to {@link OmpAudioNode}
 */
export declare class OmpAudioNodeConnection {
    protected readonly _node: OmpAudioNode;
    protected readonly _paramName?: string;
    protected readonly _output?: number;
    protected readonly _input?: number;
    constructor(node: OmpAudioNode, paramName?: string, output?: number, input?: number);
    get isAudioParamConnection(): boolean;
    get node(): OmpAudioNode;
    get paramName(): string | undefined;
    get output(): number | undefined;
    get input(): number | undefined;
    toDef(): OmpAudioNodeConnectionDef;
}
/**
 * Web Audio API {@link AudioNode} wrapper
 */
export interface OmpAudioNode extends Destroyable {
    get id(): string;
    get type(): OmpAudioNodeType;
    get attrs(): Map<string, any>;
    get connections(): OmpAudioNodeConnection[];
    get audioNode(): AudioNode;
    connectNode(destinationNode: OmpAudioNode, output?: number, input?: number): OmpAudioNode;
    connectParam(destinationNode: OmpAudioNode, audioParamName: string, output?: number): void;
    toDef(): OmpAudioNodeDef;
}
export declare abstract class BaseOmpAudioNode<T extends AudioNode> implements OmpAudioNode {
    protected _id: string;
    protected _type: OmpAudioNodeType;
    protected _attrs: Map<string, any>;
    protected _audioNode: T;
    protected _audioNodeOptions?: any;
    protected _connections: OmpAudioNodeConnection[];
    protected constructor(audioContext: AudioContext, def: OmpAudioNodeDef);
    protected abstract createAudioNode(audioContext: AudioContext, def: OmpAudioNodeDef): T;
    abstract toDef(): OmpAudioNodeDef;
    setAudioParam(ompAudioParam: OmpAudioNodeParamType): void;
    connectNode(destinationNode: OmpAudioNode, output?: number, input?: number): OmpAudioNode;
    connectParam(destinationNode: OmpAudioNode, audioParamName: string, output?: number): void;
    disconnect(input?: number): void;
    disconnectNode(destinationNode: OmpAudioNode, output?: number, input?: number): void;
    disconnectParam(destinationNode: OmpAudioNode, audioParamName: string, output?: number): void;
    get audioNode(): T;
    get id(): string;
    get type(): OmpAudioNodeType;
    get attrs(): Map<string, any>;
    get connections(): OmpAudioNodeConnection[];
    destroy(): void;
}
/**
 * Wrapper for {@link AudioParam} attributes
 */
export declare class OmpAudioNodeValueParam implements OmpAudioNodeParamPropType {
    name: string;
    value: any;
    constructor(value: any);
    setValue(value: any): void;
}
/**
 * Wrapper for {@link AudioParam}
 */
export declare class OmpAudioNodeParam implements OmpAudioNodeParamType {
    name: string;
    props: OmpAudioNodeParamPropType[];
    constructor(name: string);
    protected addProp(prop: OmpAudioNodeParamPropType): void;
}
/**
 * Audio graph
 */
export interface OmpAudioGraph extends Destroyable {
    /**
     * Definition that represents {@link OmpAudioGraph} or it's current state
     */
    toDef(): OmpAudioGraphDef;
}
export declare class OmpAudioNodeUtil {
    static extractAudioParamProps(audioParam: AudioParam): OmpAudioNodeParamPropType[];
}
