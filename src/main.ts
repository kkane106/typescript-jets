import { Airplane } from './airplane';
import { Jet } from './jet';
import { AirplaneService } from './airplaneService';
import { PersonService } from './personService';
import { Display } from './display';

class Runner {
  constructor(private display: Display,
              private airplaneService: AirplaneService,
              private personService: PersonService){}

  private listFleet(): void {
    this.display.tableViewables(this.airplaneService.getAirplanes(), ['Model', 'Speed', 'Range', 'Type'], 'content');
    this.display.setActiveNavItem('list-fleet');
  }

  private listPilots(): void {
    this.display.tableViewables(this.personService.getPeople(), ['First Name', 'Last Name', 'Age'], 'content');
    this.display.setActiveNavItem('list-pilots');
  }

  private showFastestPlane(): void {
    this.display.showViewableAsPage(this.airplaneService.getAirplanes().reduce((acc, plane) => {
      if (acc.getSpeed() < plane.getSpeed()) {
        return plane;
      }
      return acc;
    }), 'content');
    this.display.setActiveNavItem('fastest-plane');
  }

  private showFurthestFlying(): void {
    this.display.showViewableAsPage(this.airplaneService.getAirplanes().reduce((acc, plane) => {
      if (acc.getRange() < plane.getRange()) {
        return plane;
      }
      return acc;
    }), 'content');
    this.display.setActiveNavItem('furthest-plane');
  }

  private setupListeners() {
    // NOTE: You have to use fat arrows for these callbacks to assign 'this' correctly
    document.getElementById('list-fleet').addEventListener('click', (e) => {
      e.preventDefault();
      this.listFleet();
    });

    document.getElementById('list-pilots').addEventListener('click', (e) => {
      e.preventDefault();
      this.listPilots();
    });

    document.getElementById('fastest-plane').addEventListener('click', (e) => {
      e.preventDefault();
      this.showFastestPlane();
    });

    document.getElementById('furthest-plane').addEventListener('click', (e) => {
      e.preventDefault();
      this.showFurthestFlying();
    });

    document.getElementById('create-airplane').addEventListener('click', (e) => {
      e.preventDefault();
      this.display.showNewAirplaneForm();
    })

    document.getElementById('airplane-submit').addEventListener('click', (e) => {
      e.preventDefault();
      const inputs = document.getElementById('new-airplane').children;
      const newPlane: any = {};
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('type') === 'submit') continue;
          newPlane[inputs[i].getAttribute('name')] = inputs[i].value;
      }
      this.airplaneService.createAirplane(
        new Jet(newPlane.model, newPlane.speed, newPlane.range, newPlane.type)
      );
      this.listFleet();
    })
  }

  run(){
    this.setupListeners();
  }
}

new Runner(new Display(), new AirplaneService(), new PersonService()).run();
