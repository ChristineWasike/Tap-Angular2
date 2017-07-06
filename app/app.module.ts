import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegsListComponent } from './kegs-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component'

@NgModule({
  imports: [BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegsListComponent,
    EditKegComponent,
    NewKegComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
