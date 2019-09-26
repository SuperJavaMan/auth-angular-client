import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterComponent} from '../auth/register/register.component';
import {NotesHomeComponent} from '../notes/notes-home/notes-home.component';
import {NotesInfoComponent} from '../notes/notes-info/notes-info.component';
import {NotesAddComponent} from '../notes/notes-add/notes-add.component';
import {NotesUpdateComponent} from '../notes/notes-update/notes-update.component';
import {NotesDeleteComponent} from '../notes/notes-delete/notes-delete.component';
import {UserComponent} from '../profiles/user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component: LoginComponent },
  { path: 'signIn', component: RegisterComponent },
  { path: 'notesHome', component: NotesHomeComponent },
  { path: 'note/:id', component: NotesInfoComponent },
  { path: 'addNote', component: NotesAddComponent },
  { path: 'editNote/:id', component: NotesUpdateComponent },
  { path: 'deleteNote/:id', component: NotesDeleteComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
