import { OmpAudioNodeParamType, OmpAudioNodeType } from '../video';
/**
 * Audio node definition for Web Audio API {@link AudioNode} wrapper
 */
export interface OmpAudioNodeDef {
    id: string;
    type: OmpAudioNodeType;
    /**
     * Arbitrary attributes which can be used to describe audio node.
     */
    attrs?: Record<string, any>;
    /**
     * Connections to other {@link OmpAudioNodeDef}'s
     */
    connections?: OmpAudioNodeConnectionDef[];
    /**
     * Used only during {@link AudioNode} creation. This options will be passed in {@link AudioNode} constructor
     */
    audioNodeOptions?: any;
    /**
     * Audio node params
     */
    audioParams?: OmpAudioNodeParamType[];
}
/**
 * Connection definition to {@link OmpAudioNodeDef}
 */
export interface OmpAudioNodeConnectionDef {
    /**
     * {@link OmpAudioNodeDef.id}
     */
    nodeId: string;
    /**
     * {@link OmpAudioNodeDef.audioParams[].name}
     */
    paramName?: string;
    /**
     * Input
     */
    output?: number;
    /**
     * Output
     */
    input?: number;
}
/**
 * Audio graph definition. Contains {@link OmpAudioNodeDef}'s
 */
export interface OmpAudioGraphDef {
    nodes: OmpAudioNodeDef[];
    /**
     * Audio graph input {@link OmpAudioNodeDef}'s
     */
    sourceNodeIds: string[];
    /**
     * Audio graph output {@link OmpAudioNodeDef}'s
     */
    destinationNodeIds: string[];
}
