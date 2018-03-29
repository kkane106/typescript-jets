import { Airplane } from './airplane';
import { Jet } from './jet';

export class AirplaneService {
  private airplanes: Airplane[] = [
    new Jet('f14', 1000, 1500, 'fighter'),
    new Jet('c130', 400, 5000, 'transport'),
    new Jet('md88', 600, 3000, 'commercial'),
  ];

  public getAirplanes(): Airplane[] {
    return this.airplanes;
  }

  public createAirplane(airplane: Airplane): Airplane {
    this.airplanes.push(airplane);
    return airplane;
  }
}
