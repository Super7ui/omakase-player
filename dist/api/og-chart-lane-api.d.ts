import { Api } from './api';
import { OgChartVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { OgChartVttCue } from '../types';
export interface OgChartLaneApi extends Api, VttAwareApi<OgChartVttCue, OgChartVttFile> {
}
