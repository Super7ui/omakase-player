import { Api } from './api';
import { BarChartVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { BarChartVttCue } from '../types';
export interface BarChartLaneApi extends Api, VttAwareApi<BarChartVttCue, BarChartVttFile> {
}
