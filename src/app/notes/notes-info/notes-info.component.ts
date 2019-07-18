import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NoteService} from '../../services/note.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes-info',
  templateUrl: './notes-info.component.html',
  styleUrls: ['./notes-info.component.css']
})
export class NotesInfoComponent implements OnInit {
  private id: number;
  private note: Note;
  constructor(private noteService: NoteService,
              private activeRoute: ActivatedRoute,
              private location: Location) {
    this.id = activeRoute.snapshot.params['id'];
    console.log(this.id);
    this.noteService.getNoteById(this.id).subscribe(note => this.note = note);
  }

  ngOnInit() {
  }
  goBack() {
    window.history.back();
    // this.location.back();
  }
}
