import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { SingleCategoryComponent } from './ui/pages/single-category/single-category.component';
import { SinglePostComponent } from './ui/pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './ui/pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './ui/pages/contact-us/content-us.component';
import { AboutComponent } from './ui/pages/about/about.component';
import { UiLayoutComponent } from './ui/layouts/ui-layout/ui-layout.component';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { CategoriesComponent } from './admin/pages/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'category', component: SingleCategoryComponent },
      { path: 'post', component: SinglePostComponent },

      { path: 'about', component: AboutComponent },
      { path: 'terms-conditions', component: TermsAndConditionComponent },
      { path: 'contact', component: ContactUsComponent },
    ],
  },
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
