import { Observable } from 'rxjs';
import { AuthenticationData } from '../authentication/model';
import { OmpAudioRoutingConnection } from '../video';
export declare class AudioUtil {
    static resolveDefaultAudioRouting(inputsNumber: number, outputsNumber: number): OmpAudioRoutingConnection[];
    /**
     * Used for solo or unmute action if initial connections are disconnected
     * @param inputNumber
     * @param inputsNumber
     * @param outputsNumber
     */
    static resolveDefaultInputAudioRouting(inputNumber: number, inputsNumber: number, outputsNumber: number): OmpAudioRoutingConnection[];
    static fetchAndMergeAudioFiles(urls: string[], authentication?: AuthenticationData): Observable<ArrayBuffer>;
    static fetchAudioFile(url: string, authentication?: AuthenticationData): Observable<ArrayBuffer>;
    private static mergeBuffers;
}
