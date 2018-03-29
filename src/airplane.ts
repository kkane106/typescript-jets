import { Viewable } from './viewable';

export abstract class Airplane implements Viewable {
  constructor(private model: string,
              private speed: number,
              private range: number,
              private type: string){}

  displayAsRow(): HTMLElement {
    const row = document.createElement('tr');
    ['model', 'speed', 'range', 'type'].forEach((property) => {
      const cell = document.createElement('td');
      if (property === 'speed') {
        cell.textContent = String(Math.floor(this.getSpeed() * 100)/100);
      } else if (property === 'range') {
        cell.textContent = String(this.getRange()) + ' mi';
      } else {
        cell.textContent = this[property];
      }
      row.appendChild(cell);
    })
    return row;
  }

  displayAsPage(): HTMLElement {
    const page = document.createElement('div');
    page.innerHTML = `
      <h1>${this.getModel()}</h1>
      <div>SPEED: ${String(Math.floor(this.getSpeed() * 100)/100)}</div>
      <div>RANGE: ${this.getRange()}</div>
      <div>TYPE: ${this.getType()}</div>
    `;
    return page;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getSpeed():number {
    const speed = this.speed / 767;
    return speed;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }

  getRange():number {
    return this.range;
  }

  setRange(range: number): void {
    this.range = range;
  }

  getType(): string {
    return this.type;
  }

  setType(): string {
    return this.type;
  }
}
