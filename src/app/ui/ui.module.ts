import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/content-us.component';
import { AboutComponent } from './pages/about/about.component';
import { UiLayoutComponent } from './layouts/ui-layout/ui-layout.component';
import { SharedModule } from '../shared/shared.module';
import { UiRoutingModule } from './ui-routing.module';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutComponent,
    PostCardComponent,
    UiLayoutComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule
  ],

})
export class UiModule { }
