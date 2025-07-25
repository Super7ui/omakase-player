import { Observable } from 'rxjs';
import { Config, Yoga } from 'yoga-layout';
export declare class YogaProvider {
    private static _instance;
    Yoga: Yoga;
    Config: Config;
    private constructor();
    static instance(): YogaProvider;
    init(): Observable<void>;
}
