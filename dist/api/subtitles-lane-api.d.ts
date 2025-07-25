import { Api } from './api';
import { SubtitlesVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { SubtitlesVttCue } from '../types';
export interface SubtitlesLaneApi extends Api, VttAwareApi<SubtitlesVttCue, SubtitlesVttFile> {
}
