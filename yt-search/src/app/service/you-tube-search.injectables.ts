import {YOUTUBE_API_KEY, YOUTUBE_API_URL, YoutubesearchService} from './youtubesearch.service';


export const youTubeSearchInjectables: Array<any> = [
    {provide: YoutubesearchService, useClass: YoutubesearchService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ];
