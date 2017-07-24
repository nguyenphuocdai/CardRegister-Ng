import { Injectable } from '@angular/core';
import { Feature } from '../_model/feature';
import { FEATURE } from '../_model/feature-card';
@Injectable()
export class FeatureService {


    getFeatures(): Promise<Feature[]> {
        return Promise.resolve(FEATURE);
    }
}