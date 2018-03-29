import { Viewable } from './viewable';

export abstract class Person implements Viewable {
  constructor(private firstname: string,
              private lastname: string,
              private age: number) {}

  public displayAsRow(): HTMLElement {
    const row = document.createElement('tr');
    ['firstname', 'lastname', 'age'].forEach((prop) => {
      const cell = document.createElement('td');
      cell.textContent = String(this[prop]);
      row.appendChild(cell);
    })
    return row;
  }

  public displayAsPage(): HTMLElement {
    const page = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = `${this.firstname} ${this.lastname}`;
    const age = document.createElement('small');
    age.textContent = String(this.age);
    title.appendChild(age);
    page.appendChild(title);
    return page;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public setFirstname(fname: string): void {
    this.firstname = fname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public setLastname(lname: string): void {
    this.lastname = lname;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(a: number): void {
    this.age = a;
  }
}
