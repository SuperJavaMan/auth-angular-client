import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NoteService} from '../../services/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-notes-delete',
  templateUrl: './notes-delete.component.html',
  styleUrls: ['./notes-delete.component.css']
})
export class NotesDeleteComponent implements OnInit {

  private id: number;
  private note: Note;

  constructor(private noteService: NoteService,
              private activeRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
    this.id = activeRoute.snapshot.params['id'];
    console.log(this.id);
    this.noteService.getNoteById(this.id).subscribe(note => this.note = note);
  }

  ngOnInit() {
  }

  deleteNote() {
    this.noteService.deleteNote(this.id);
    this.router.navigate(['/notesHome']);
  }

  goBack() {
    this.location.back();
  }

}
