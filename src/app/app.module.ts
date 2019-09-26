import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './profiles/admin/admin.component';
import { NotesHomeComponent } from './notes/notes-home/notes-home.component';
import { NotesAddComponent } from './notes/notes-add/notes-add.component';
import { NotesUpdateComponent } from './notes/notes-update/notes-update.component';
import { NotesInfoComponent } from './notes/notes-info/notes-info.component';
import { NotesDeleteComponent } from './notes/notes-delete/notes-delete.component';
import { UserComponent } from './profiles/user/user.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { HeaderComponent } from './home-elements/header/header.component';
import { FooterComponent } from './home-elements/footer/footer.component';
import { AsideComponent } from './home-elements/aside/aside.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    NotesHomeComponent,
    NotesAddComponent,
    NotesUpdateComponent,
    NotesInfoComponent,
    NotesDeleteComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
