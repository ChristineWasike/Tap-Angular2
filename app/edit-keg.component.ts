import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf = "childSelectedKeg">
  <h1>Edit Keg</h1>
  <div>
  <label > Enter brew type:</label>
  <input [(ngModel)]= "childSelectedKeg.type">
  </div>

  <div>
  <label >Enter alcohol content:</label>
  <input [(ngModel)]= "childSelectedKeg.content">
  </div>

  <div>
  <label > Enter Price:</label>
  <input [(ngModel)]= "childSelectedKeg.price">
  <button class="btn btn-success" (click) ="doneClicked()">Done</button>
  </div>

  </div>
  `

})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
