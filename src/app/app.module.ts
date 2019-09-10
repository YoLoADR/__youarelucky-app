import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatButtonModule,
			MatCardModule, 
			MatMenuModule, 
			MatToolbarModule, 
			MatInputModule, 
			MatDatepickerModule,
			MatNativeDateModule,
			MatProgressSpinnerModule,
			MatTableModule, 
			MatExpansionModule,
			MatSelectModule,
			MatTooltipModule,
			MatChipsModule,
			MatTabsModule, 
			MatProgressBarModule,
			MatCheckboxModule,
			MatSliderModule,
			MatRadioModule,
			MatDialogModule,
			MatGridListModule,
			MatSidenavModule,
			MatIconModule,
			MatListModule,
			MatSnackBarModule,
			MatBadgeModule
		 } from '@angular/material';
import { BidiModule } from '@angular/cdk/bidi';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MenuToggleModule } from './Core/menu-toggle.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutes } from "./app-routing";

import { VerticalLayoutComponent }   from './Layouts/VerticalLayout/VerticalLayout.component';

import { MenuItems } from './Core/MenuItems/MenuItems';
import { CoreService } from './Services/GlobalService/Core.service';
import { MenuListItemComponent } from './Shared/MenuListItem/MenuListItem.component';
import { HeaderComponent } from './Shared/Header/Header.component';
import { SidebarComponent } from './Shared/Sidebar/Sidebar.component';
import { AppLogoComponent } from './Shared/AppLogo/AppLogo.component';
import { WidgetsComponentsModule } from './WidgetsComponents/WidgetsComponents.module';

import { AuthService } from './Services/Auth.service';
import { AuthGuard } from './Core/Guards/auth.guard';

export const firebaseConfig = {
	apiKey				: "AIzaSyAUFEc78X3b4wwIae46ctFSSee7eE-0VIs",
	authDomain			: "anglo-85c6c.firebaseapp.com",
	databaseURL			: "https://anglo-85c6c.firebaseio.com",
	projectId			: "anglo-85c6c",
	storageBucket		: "anglo-85c6c.appspot.com",
	messagingSenderId : "37552039309"
}

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
	imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				ReactiveFormsModule,
				RouterModule.forRoot(AppRoutes),
				HttpClientModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: createTranslateLoader,
						deps: [HttpClient]
					}
				}),
				PerfectScrollbarModule,
				FlexLayoutModule,
				AngularFontAwesomeModule,
				MatNativeDateModule,
				MatProgressSpinnerModule,
				MatExpansionModule,
				MatSnackBarModule,
				MatTooltipModule,
				MatChipsModule,
				MatTabsModule,
				MatBadgeModule,
				MatProgressBarModule,
				MatCheckboxModule,
				MatRadioModule,
				MatDialogModule,
				MatGridListModule,
				MatCardModule,
				MatSliderModule,
				MatInputModule,
				MatTableModule,
				MatSelectModule,
				MatButtonModule,
				MatMenuModule,
				MatToolbarModule, 
				MatSidenavModule, 
				MatIconModule,
				MatListModule,
            MenuToggleModule,
				WidgetsComponentsModule,
	    		AngularFireModule.initializeApp(firebaseConfig),
    			AngularFireAuthModule,
    			BidiModule,
    			LoadingBarRouterModule,
    			ToastrModule.forRoot({
				    timeOut: 2000,
				    preventDuplicates: true
				  }
    			),
    			DeviceDetectorModule.forRoot()
	],
	declarations: [
						AppComponent, 
						VerticalLayoutComponent,
						MenuListItemComponent,
						HeaderComponent,
						SidebarComponent,
						AppLogoComponent
	],
	bootstrap: [AppComponent],
	providers:[
				MenuItems,
				CoreService,
				AuthService,
		      {
		         provide: PERFECT_SCROLLBAR_CONFIG,
		         useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		      },
		      AuthGuard
	]
})

export class EKAAppModule { }
