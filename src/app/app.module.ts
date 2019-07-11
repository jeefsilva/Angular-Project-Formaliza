import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule, MatListModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BackgroundComponent } from './background/background.component';
import { ProductsComponent } from './products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProcessComponent } from './process/process.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { CompromiseComponent } from './compromise/compromise.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    BackgroundComponent,
    ProductsComponent,
    ProcessComponent,
    ProfessionalsComponent,
    CompromiseComponent,
    ContactComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
