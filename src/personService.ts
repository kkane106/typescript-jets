import { Person } from './person';
import { Pilot } from './pilot';

export class PersonService {
  private people: Person[] = [
    new Pilot('Steve', 'Thompson', 36),
    new Pilot('Andrew', 'Conlin', 26),
    new Pilot('Kris', 'Kane', 31),
  ];

  public getPeople(): Person[] {
    return this.people;
  }
}
