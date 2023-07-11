import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNavbarComponent } from './components/category-navbar/category-navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, CategoryNavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CategoryNavbarComponent, FooterComponent],
})
export class SharedModule {}
