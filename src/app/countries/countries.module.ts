import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [SelectorPageComponent],
})
export class CountriesModule {}
