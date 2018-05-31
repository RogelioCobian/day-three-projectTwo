import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
  customer: Person;

  sayHi: string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {

  }
}
