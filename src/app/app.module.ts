import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatGridListModule} from '@angular/material/grid-list';
import { InputsComponent } from './inputs/inputs.component';
import { TimerComponent } from './timer/timer.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SubnetComponent } from './subnet/subnet.component';
import { SubnetsComponent } from './subnets/subnets.component';
import { BinaryComponent } from './binary/binary.component';
import { OutputComponent } from './output/output.component';
import { ByteComponent } from './byte/byte.component';
import { BitComponent } from './bit/bit.component';
import { OutputsComponent } from './outputs/outputs.component';
import { MainComponent } from './main/main.component';
import { PreComponent } from './pre/pre.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    TimerComponent,
    SubnetComponent,
    SubnetsComponent,
    BinaryComponent,
    OutputComponent,
    ByteComponent,
    BitComponent,
    OutputsComponent,
    MainComponent,
    PreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
