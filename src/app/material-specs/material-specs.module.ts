import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { hammerjs } from 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    MdCardModule,
    MdButtonModule]
})
export class MaterialSpecsModule { }
