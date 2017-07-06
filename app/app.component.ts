import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'kegs',
  template: `
<div class="container">
<kegs-list
  [childKegList]= "masterKegList"
  (clickSender)="showDetails($event)">
</kegs-list>
<edit-keg [childSelectedKeg]="selectedKeg"
(doneClickedSender)="finishedEditing()"
 ></edit-keg>
 <new-keg
 (newKegSender)= "addKeg($event)"

 ></new-keg>

  </div>
  `

})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Jameson", 14, 7),
    new Keg("Smirnoff", 30, 4),
    new Keg("Baileys", 20, 6),
    new Keg("Guinness", 38, 3),
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }
}
