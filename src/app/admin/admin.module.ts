import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    CategoriesComponent,
    AllPostsComponent,
    NewPostComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule,ReactiveFormsModule,AngularEditorModule],
})
export class AdminModule {}
