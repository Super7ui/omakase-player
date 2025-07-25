import { Api } from './api';
import { AudioVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { AudioVttCue } from '../types';
export interface AudioTrackLaneApi extends Api, VttAwareApi<AudioVttCue, AudioVttFile> {
}
