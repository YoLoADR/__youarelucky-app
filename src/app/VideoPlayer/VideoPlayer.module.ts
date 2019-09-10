import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule} from 'videogular2/controls';
import { VgOverlayPlayModule} from 'videogular2/overlay-play';
import { VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { VideoPlayerRoutes } from './VideoPlayer.routing';
import { VideoPlayerComponent } from './VideoPlayer/VideoPlayer.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      RouterModule.forChild(VideoPlayerRoutes),
      MatCardModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
      VgStreamingModule,
      WidgetsComponentsModule,
      TranslateModule
   ],

   declarations: [VideoPlayerComponent]
   })

export class VideoPlayerModule { }
