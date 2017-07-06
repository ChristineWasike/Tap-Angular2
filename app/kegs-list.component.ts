import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'kegs-list',
  template: `  <h1>Introducing Kegs Brewers</h1>
    <div class="col-md-3" *ngFor= "let currentKeg of childKegList">
    <h3>{{currentKeg.type}}</h3>
    <h5>{{currentKeg.content}}</h5>
    <h5>{{currentKeg.price}}</h5>
    <button class="btn btn-success" (click) = "editButtonHasBeenClicked (currentKeg)">Edit</button>
    </div>

`
})

export class KegsListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
