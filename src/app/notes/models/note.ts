export class Note {
  id: number;
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.id = null;
    this.title = title;
    this.body = body;
  }
}
