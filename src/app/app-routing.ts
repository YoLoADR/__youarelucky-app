import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';

import { VerticalLayoutComponent }   from './Layouts/VerticalLayout/VerticalLayout.component';

export const AppRoutes: Routes = [{
      path: '',
      redirectTo: 'programs',
      pathMatch: 'full',
   },
   {
      path: 'session',
      loadChildren: './Session/Session.module#SessionModule'
   },
   {
      path: '',
      component: VerticalLayoutComponent,
      canActivate: [AuthGuard],
      runGuardsAndResolvers: 'always',
      children: [
         {
            path: 'dashboard',
            loadChildren: './Dashboard/Dashboard.module#DashboardModule'
         },
         {
            path: 'widgets',
            loadChildren: './Widgets/Widgets.module#WidgetsModule'
         },
         {
            path: 'ecommerce',
            loadChildren: './Ecommerce/Ecommerce.module#EcommerceModule'
         },
         {
            path: 'charts',
            loadChildren: './Charts/Charts.module#ChartsModule'
         },
          {
            path: 'pages',
            loadChildren: './Pages/Pages.module#PagesModule'
         },
         {
            path: 'ui-elements',
            loadChildren: './UiElements/UiElements.module#UiElementsModule'
         },
         {
            path: 'inbox',
            loadChildren: './Inbox/Inbox.module#InboxModule'
         },
         {
            path: 'chat',
            loadChildren: './Chat/Chat.module#ChatModule'
         },
         {
            path: 'forms',
            loadChildren: './Form/Form.module#FormModule'
         },
         {
            path: 'maps',
            loadChildren: './Maps/Maps.module#MapsModule'
         },
         {
            path: 'users',
            loadChildren: './Users/Users.module#UsersModule'
         },
         {
            path: 'calendar',
            loadChildren: './Calendar/Calendar.module#Calendar_Module'
         },
         {
            path: 'editor',
            loadChildren: './Editor/Editor.module#EditorModule'
         },
         {
            path: 'drag-drop',
            loadChildren: './DragDrop/DragDrop.module#DragDropModule'
         },
         {
            path: 'tables',
            loadChildren: './Tables/Tables.module#TablesModule'
         },
         {
            path: 'icons',
            loadChildren: './Icons/Icons.module#IconsModule'
         },
         {
            path: 'image-cropper',
            loadChildren: './ImageCropper/ImageCropper.module#ImageCropperModules'
         },
         {
            path: 'dropzone',
            loadChildren: './Dropzone/Dropzone.module#DropzoneModules'
         },
         {
            path: 'video-player',
            loadChildren: './VideoPlayer/VideoPlayer.module#VideoPlayerModule'
         },
         {
            path: 'programs',
            loadChildren: './Programs/Programs.module#ProgramsModule'
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'session'
   }
];

