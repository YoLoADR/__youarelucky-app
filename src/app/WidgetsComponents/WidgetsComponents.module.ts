import { NgModule , Directive} from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';;
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatListModule,
         MatDialogModule,
         MatDatepickerModule,
         MatSnackBarModule,
         MatNativeDateModule,
         MatTableModule,
         MatCheckboxModule,
         MatProgressBarModule,
         MatDividerModule,
         MatSelectModule,
         MatInputModule,
         MatFormFieldModule,
         MatProgressSpinnerModule
         } from '@angular/material';
import { QuillModule } from 'ngx-quill';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxEchartsModule } from 'ngx-echarts';
import { TextMaskModule } from 'angular2-text-mask';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TopsideMenuComponent } from './Menu/TopsideMenu/TopsideMenu.component';

import { AddNewCardComponent } from './PopUp/AddNewCard/AddNewCard.component';
import { SeeDialogComponent } from './PopUp/SeeDialog/SeeDialog.component';
import { DeleteListDialogComponent } from './PopUp/DeleteListDialog/DeleteListDialog.component';
import { AddListDialogComponent } from './PopUp/AddListDialog/AddListDialog.component';
import { EditDialogComponent } from './PopUp/EditDialog/EditDialog.component';
import { NewEmailPopupComponent } from './PopUp/NewEmailPopup/NewEmailPopup.component';
import { AddNewUserComponent } from './PopUp/AddNewUser/AddNewUser.component';

import { NewPostComponent } from './Form/NewPost/NewPost.component';

import { BrowserStaticComponent } from './List/BrowserStaticList/BrowserStaticList.component';
import { CategorySalesComponent } from './List/CategorySalesList/CategorySalesList.component';
import { InvoicesComponent } from './List/InvoicesList/InvoicesList.component';
import { RecentOrderComponent } from './List/RecentOrderList/RecentOrderList.component';
import { RecentSalesComponent } from './List/RecentSaleList/RecentSaleList.component';
import { SupportRequestComponent } from './List/SupportRequestList/SupportRequestList.component';
import { SupportTicketListComponent } from './List/SupportTicketList/SupportTicketList.component';
import { ToDoListComponent } from './List/ToDoList/ToDoList.component';
import { ProgressMapComponent } from './List/ProgresMapList/ProgressMapList.component';

import { PromoWidgetComponent } from './Cards/PromoWidget/PromoWidget.component';
import { DummyCardComponent } from './Cards/DummyCard/DummyCard.component';
import { IconCardComponent } from './Cards/IconCard/IconCard.component';
import { ImageCardComponent } from './Cards/ImageCard/ImageCard.component';
import { NotificationCardComponent } from './Cards/NotificationCard/NotificationCard.component';
import { SocialCardComponent } from './Cards/SocialCard/SocialCard.component';
import { UsersBarComponent } from './Cards/UsersBar/UsersBar.component';

import { DoughnutChartComponent } from './Charts/DoughnutChart/DoughnutChart.component';
import { GroupedVericalBarChartComponent } from './Charts/GroupedVericalBarChart/GroupedVericalBarChart.component';
import { HorizontalBarComponent } from './Charts/HorizontalBar/HorizontalBar.component';
import { SaleBarChartComponent } from './Charts/SaleBarChart/SaleBarChart.component';
import { VisitorLineChartComponent } from './Charts/VisitorLineChart/VisitorLineChart.component';

import { ReviewsComponent } from './Slider/Reviews/Reviews.component';
import { TopSellingComponent } from './Slider/TopSelling/TopSelling.component';

import { TitleComponent } from './TitleComponent/TitleComponent.component';
import { ShopGridComponent } from './Grid/ShopGrid/ShopGrid.component';
import { UserRequestComponent } from './Users/UserRequest/UserRequest.component';
import { UserEducationComponent } from './Users/UserEducation/UserEducation.component';
import { UserSkillsComponent } from './Users/UserSkills/UserSkills.component';
import { UserListComponent } from './Users/UserList/UserList.component';
import { SocialIconsComponent } from './Grid/SocialIcons/SocialIcons.component';
import { SessionSliderComponent } from './Slider/SessionSlider/SessionSlider.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LanguageDropDownComponent } from './Global/LanguageDropDown/LanguageDropDown.component';
import { NewMailsListComponent } from './List/NewMailsList/NewMailsList.component';
import { ServerStatusListComponent } from './List/ServerStatusList/ServerStatusList.component';
import { WeeklySummaryComponent } from './Charts/WeeklySummary/WeeklySummary.component';
import { DailySaleChartComponent } from './Charts/DailySaleChart/DailySaleChart.component';
import { ProductSaleChartComponent } from './Charts/ProductSaleChart/ProductSaleChart.component';
import { VisitSaleChartComponent } from './Charts/VisitSaleChart/VisitSaleChart.component';
import { CircleProgressComponent } from './Charts/CircleProgress/CircleProgress.component';
import { LineChartComponent } from './Charts/LineChart/LineChart.component';
import { LineChartWithAreaComponent } from './Charts/LineChartWithArea/LineChartWithArea.component';
import { EcommerceStatsCardComponent } from './Cards/EcommerceStatsCard/EcommerceStatsCard.component';
import { BlogLayoutComponent } from './Cards/BlogLayout/BlogLayout.component';
import { VectorMapComponent } from './Charts/VectorMap/VectorMap.component'

@NgModule({
   imports: [
      CommonModule,
      DropzoneModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatMenuModule,
      MatCardModule,
      MatDialogModule,
      MatDatepickerModule,
      MatSnackBarModule,
      FormsModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatTableModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatDividerModule ,
      NgxEchartsModule,
      MatSelectModule,
      FlexLayoutModule,
      TextMaskModule ,
      QuillModule,
      PerfectScrollbarModule,
      SlickCarouselModule,
      BarRatingModule,
      TranslateModule,
      MatProgressSpinnerModule,
      ChartsModule,
      NgCircleProgressModule.forRoot({
         radius: 100,
         outerStrokeWidth: 16,
         innerStrokeWidth: 8,
         outerStrokeColor: "#78C000",
         innerStrokeColor: "#C7E596",
         animationDuration: 300
      })
   ],
   
   declarations: [
      PromoWidgetComponent,
      NewPostComponent,
      TopsideMenuComponent,
      RecentSalesComponent,
      SupportRequestComponent,
      ToDoListComponent,
      DeleteListDialogComponent,
      AddListDialogComponent,
      InvoicesComponent,
      DummyCardComponent,
      ImageCardComponent,
      SocialCardComponent,
      CategorySalesComponent,
      RecentOrderComponent,
      TopSellingComponent,
      SaleBarChartComponent,
      ReviewsComponent,
      UsersBarComponent,
      ProgressMapComponent,
      NotificationCardComponent,
      SupportTicketListComponent,
      VisitorLineChartComponent,
      IconCardComponent,
      BrowserStaticComponent,
      SeeDialogComponent,
      HorizontalBarComponent,
      GroupedVericalBarChartComponent,
      DoughnutChartComponent,
      EditDialogComponent,
      AddNewCardComponent,
      TitleComponent,
      ShopGridComponent,
      UserRequestComponent,
      UserEducationComponent,
      UserSkillsComponent,
      UserListComponent,
      SocialIconsComponent,
      NewEmailPopupComponent,
      SessionSliderComponent,
      LanguageDropDownComponent,
      NewMailsListComponent,
      ServerStatusListComponent,
      WeeklySummaryComponent,
      DailySaleChartComponent,
      ProductSaleChartComponent,
      VisitSaleChartComponent,
      CircleProgressComponent,
      LineChartComponent,
      LineChartWithAreaComponent,
      EcommerceStatsCardComponent,
      BlogLayoutComponent,
      AddNewUserComponent,
      VectorMapComponent
   ],
   exports: [
      PromoWidgetComponent,
      NewPostComponent,
      TopsideMenuComponent,
      RecentSalesComponent,
      SupportRequestComponent,
      ToDoListComponent,
      InvoicesComponent,
      DummyCardComponent,
      ImageCardComponent,
      SocialCardComponent,
      CategorySalesComponent,
      RecentOrderComponent,
      TopSellingComponent,
      SaleBarChartComponent,
      ReviewsComponent,
      UsersBarComponent,
      ProgressMapComponent,
      NotificationCardComponent,
      SupportTicketListComponent,
      VisitorLineChartComponent,
      IconCardComponent,
      BrowserStaticComponent,
      HorizontalBarComponent,
      GroupedVericalBarChartComponent,
      DoughnutChartComponent,
      EditDialogComponent,
      TitleComponent,
      ShopGridComponent,
      UserRequestComponent,
      UserEducationComponent,
      UserSkillsComponent,
      UserListComponent,
      SocialIconsComponent,
      SessionSliderComponent,
      LanguageDropDownComponent,
      NewMailsListComponent,
      ServerStatusListComponent,
      WeeklySummaryComponent,
      DailySaleChartComponent,
      ProductSaleChartComponent,
      VisitSaleChartComponent,
      CircleProgressComponent,
      LineChartComponent,
      LineChartWithAreaComponent,
      EcommerceStatsCardComponent,
      BlogLayoutComponent,
      VectorMapComponent
   ],

   entryComponents: [
      DeleteListDialogComponent,
      AddListDialogComponent,
      SeeDialogComponent,
      EditDialogComponent,
      AddNewCardComponent,
      NewEmailPopupComponent,
      AddNewUserComponent
   ],

   providers:[
      MatNativeDateModule
   ],
    

})
export class WidgetsComponentsModule { }
