import { AudioPeakProcessorMessageEvent, Destroyable } from '../types';
import { BehaviorSubject, Subject } from 'rxjs';
import { AudioMeterStandard, OmpAudioPeakProcessorState } from './model';
import { AudioPeakProcessorApi } from '../api/audio-peak-processor-api';
export declare class OmpAudioPeakProcessor implements AudioPeakProcessorApi, Destroyable {
    readonly onAudioWorkletLoaded$: BehaviorSubject<AudioWorkletNode | undefined>;
    readonly onMessage$: Subject<AudioPeakProcessorMessageEvent>;
    protected _audioMeterStandard: AudioMeterStandard;
    protected _sourceAudioNode?: AudioNode;
    protected _audioWorkletNode?: AudioWorkletNode;
    protected _destroyed$: Subject<void>;
    constructor(audioContext: AudioContext, audioMeterStandard?: AudioMeterStandard);
    protected init(audioContext: AudioContext): void;
    disconnectSource(): void;
    connectSource(audioNode: AudioNode): void;
    get isSourceConnected(): boolean;
    get sourceAudioNode(): AudioNode | undefined;
    getAudioPeakProcessorState(): OmpAudioPeakProcessorState;
    protected handleAudioPeakProcessorMessage: (event: MessageEvent) => void;
    destroy(): void;
}
