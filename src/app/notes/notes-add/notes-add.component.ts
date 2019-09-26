import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/note.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Note} from '../models/note';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {
  newId: number;
  note: Note;
  private form: FormGroup;
  constructor(private noteService: NoteService,
              private location: Location,
              private router: Router) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(200)]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10000)])
    });
  }

  ngOnInit() {
    this.newId = null;
  }
  post(data) {
    this.note = new Note(data.title, data.body);
    this.noteService.addNote(this.note).subscribe(note => { this.newId = note.id;
                                                                  this.goToNewNote(); });
  }
  goToNewNote() {
    this.router.navigate(['/note', this.newId]);
  }
  goBack() {
    window.history.back();
    // this.location.back();
  }
}
