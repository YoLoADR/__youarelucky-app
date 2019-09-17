import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
   MatMenuModule,
   MatIconModule,
   MatCardModule,
   MatDialogModule,
   MatDatepickerModule,
   MatSnackBarModule,
   MatNativeDateModule,
   MatTableModule,
   MatCheckboxModule,
   MatProgressBarModule,
   MatDividerModule,
   MatInputModule,
   MatSelectModule,
   MatFormFieldModule,
   MatListModule,
   MatProgressSpinnerModule
   } from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProgramsRoutes } from './Programs.routing';
import { ProgramsComponent } from './Programs/Programs.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      RouterModule.forChild(ProgramsRoutes),
      MatCardModule,
      WidgetsComponentsModule,
      TranslateModule,
      FlexLayoutModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatDialogModule,
      MatDatepickerModule,
      MatSnackBarModule,
      MatNativeDateModule,
      MatTableModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatInputModule,
      MatSelectModule,
      MatFormFieldModule,
      NgxEchartsModule,
      MatListModule,
      TranslateModule,
      MatProgressSpinnerModule
   ],

   declarations: [ProgramsComponent]
   })

export class ProgramsModule { }
