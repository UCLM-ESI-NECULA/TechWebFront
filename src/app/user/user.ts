export class User {
  private _name: string;
  private _email: string;
  private _pwd1: string;
  private _pwd2: string;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get pwd1(): string {
    return this._pwd1;
  }

  set pwd1(value: string) {
    this._pwd1 = value;
  }

  get pwd2(): string {
    return this._pwd2;
  }

  set pwd2(value: string) {
    this._pwd2 = value;
  }

  constructor() {
    this._name = "";
    this._email = "";
    this._pwd1 = "";
    this._pwd2 = "";
  }

  registerData(name: string, email: string, pwd1: string, pwd2: string) {
    this._name = name;
    this._email = email;
    this._pwd1 = pwd1;
    this._pwd2 = pwd2;
  }

  toJSON() {
    return {
      name: this._name,
      email: this._email,
      pwd1: this._pwd1,
      pwd2: this._pwd2
    }
  }
}
