import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteService} from '../../services/note.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Note} from '../models/note';

@Component({
  selector: 'app-notes-update',
  templateUrl: './notes-update.component.html',
  styleUrls: ['./notes-update.component.css']
})
export class NotesUpdateComponent implements OnInit {

  id: number;
  note: Note;
  private form: FormGroup;

  constructor(private noteService: NoteService,
              private location: Location,
              private router: Router,
              private activeRoute: ActivatedRoute) {

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
    this.id = this.activeRoute.snapshot.params['id'];
    this.noteService.getNoteById(this.id).subscribe(note => {
                                                                  this.note = note;
                                                                  console.log(this.note);
                                                                  this.form.setValue({
                                                                    title: this.note.title,
                                                                    body: this.note.body
                                                                  });
    });
    console.log(this.note);
  }
  edit(data) {
    this.note = new Note(data.titleHeader, data.body);
    this.noteService.editNote(this.id, this.note).subscribe();
    this.goToNewNote();
  }
  goToNewNote() {
    this.router.navigate(['/note', this.id]);
  }
  goBack() {
    this.location.back();
  }
}
