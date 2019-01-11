import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';

@NgModule({
  declarations: [SearchFormComponent, ImageComponent, FieldErrorsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFormComponent,
    ImageComponent,
    FieldErrorsComponent
  ]
})
export class SharedModule { }
