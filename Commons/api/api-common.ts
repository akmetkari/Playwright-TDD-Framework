import { request } from '@playwright/test';
import config from '../../config/config.json';

export class ApiCommon {

    private requestContext : any;
    private responseContext : any;

    //Adding requestConstext (Base URL, Headers, Auth Details)
    async init()
    {
        this.requestContext = await request.nextContext({
            'baseUR:': config.api.url,
            'content-type': 'application/json',
            'Accept': 'application/json',
        });
    }


}