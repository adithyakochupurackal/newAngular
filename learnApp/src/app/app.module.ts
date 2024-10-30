import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DbComponent } from './db/db.component';
import { HttpComponent } from './http/http.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { CreateComponent } from './create/create.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { JwtComponentComponent } from './jwt-component/jwt-component.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DbComponent,
    HttpComponent,
    ReactiveComponent,
    CreateComponent,
    FormBuilderComponent,
    JwtComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
