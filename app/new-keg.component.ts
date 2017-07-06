import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div class="col-md-12">
    <h1>New Keg</h1>
    <div>
    <label>Enter Keg Name:</label>
    <input #newKeg>
    </div>
    <div class="form-group">
      <label>Enter Alcohol Content:</label>
      <input type="number" #newContent>
      <label><input type="checkbox" name="remember"> Remember me</label>

      </div>
      <div class="form-group">
      <label> Enter Pint Price:</label>
      <input type="number" #newPrice>
      <button class="btn btn-info" (click) = "addClicked(newKeg.value, newContent.value, newPrice.value);
        newKeg.value='';
        newContent.value='';
        newPrice.value='';

      ">Add</button>
      </div>
      </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(type: string, content: number, price: number) {
    var newKegToAdd: Keg = new Keg(type, content, price);
    this.newKegSender.emit(newKegToAdd);
  }

}
