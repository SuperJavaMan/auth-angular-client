export class RegistrationInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;

  constructor(username: string, password: string, name: string,  email: string) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
    this.role = ['user'];
  }
}
