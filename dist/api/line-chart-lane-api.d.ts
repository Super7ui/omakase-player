import { Api } from './api';
import { LineChartVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { LineChartVttCue } from '../types';
export interface LineChartLaneApi extends Api, VttAwareApi<LineChartVttCue, LineChartVttFile> {
}
