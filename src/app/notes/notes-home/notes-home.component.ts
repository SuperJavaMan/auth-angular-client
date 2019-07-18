import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NoteService} from '../../services/note.service';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.css']
})
export class NotesHomeComponent implements OnInit {

  isNotesUpdated = false;
  private notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.isNotesUpdated = false;
    this.noteService.getAllNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
      this.isNotesUpdated = true;
    });
  }

}
