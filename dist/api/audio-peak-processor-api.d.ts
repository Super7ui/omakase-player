import { Api } from './api';
import { OmpAudioPeakProcessorState } from '../video/model';
import { Observable } from 'rxjs';
import { AudioPeakProcessorMessageEvent } from '../types';
/**
 * Audio peak processor
 */
export interface AudioPeakProcessorApi extends Api {
    /**
     * Fires on audio peak processor message
     */
    onMessage$: Observable<AudioPeakProcessorMessageEvent>;
    /**
     * Source {@link AudioNode}
     */
    get sourceAudioNode(): AudioNode | undefined;
    /**
     * @returns audio peak processor state
     */
    getAudioPeakProcessorState(): OmpAudioPeakProcessorState;
}
