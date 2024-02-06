import { Component } from '@angular/core';


import { HebrewCalendar, HDate, gematriya, Location, Event, Zmanim, HolidayEvent, RoshHashanaEvent, flags, Sedra, Locale } from '@hebcal/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-hebcal-dx';

  clients = [
    { id: 1, name: 'John', createdAt: new Date('2021-01-01') },
    { id: 2, name: 'Test1', createdAt: new Date('2021-01-01') },
  ];
  initHebcal() {

    let zman = new Zmanim(Location.lookup("Jerusalem"), new Date(), true);

  }
  ngOnInit() {
  }
}
