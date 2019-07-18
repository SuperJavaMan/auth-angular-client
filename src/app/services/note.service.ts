import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../notes/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesUrl = 'http://localhost:8080/api/notes/';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  getNoteById(id: number): Observable<Note> {
    const noteUrl = this.notesUrl + id;
    return this.http.get<Note>(noteUrl);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note);
  }

  editNote(id: number, note: Note): Observable<Note> {
    const notesUrl = this.notesUrl + id;
    return this.http.post<Note>(notesUrl, note);
  }

  deleteNote(id: number) {
    const notesUrl = this.notesUrl + id;
    this.http.delete(notesUrl).subscribe();
  }
}
