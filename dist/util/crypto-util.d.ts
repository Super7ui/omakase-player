import { Observable } from 'rxjs';
export declare class CryptoUtil {
    static uuid(): string;
    static digest(text: string): Observable<string>;
}
