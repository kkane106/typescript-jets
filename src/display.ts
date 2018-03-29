import { Jet } from './jet';
import { Airplane } from './airplane';
import { Viewable } from './viewable';

export class Display {
  tableViewables(viewables: Viewable[], headers: string[], targetId: string): void {
    document.getElementById('content').innerHTML = '';
    const table = document.createElement('table');
    table.className = 'table table-striped';
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    headers.forEach((header) => {
      const cell = document.createElement('th');
      cell.textContent = header;
      headRow.appendChild(cell);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    viewables.forEach((viewable) => {
      tbody.appendChild(viewable.displayAsRow());
    });
    table.appendChild(tbody);
    document.getElementById(targetId).appendChild(table);
  }

  showViewableAsPage(viewable: Viewable, targetId: string): void {
    document.getElementById(targetId).innerHTML = '';
    document.getElementById(targetId).appendChild(viewable.displayAsPage());
  }

  setActiveNavItem(navId: string): void {
    let actives = document.getElementsByClassName('active');
    if (navId !== 'create-airplane') {
      document.getElementById('new-airplane').style.display = 'none';
    }
    if (actives[0]) {
      actives[0].className = '';
    }
    document.getElementById(navId).parentElement.className = 'active';
  }

  showNewAirplaneForm():void {
    document.getElementById('content').innerHTML = "";
    this.setActiveNavItem('create-airplane');
    document.getElementById('new-airplane').style.display = 'block';
  }
}
