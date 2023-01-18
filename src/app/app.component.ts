import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public img: string;
  public myName: string;
  public showTable: boolean;
  public students: any[];
  constructor() {
    this.myName = '';
    this.title = 'This is my title';
    this.img = "../assets/pexels-photo-1590549.jpg";
    this.showTable = false;
    this.students = [{
      name: 'dev',
      age: 22,
      course: 'ng',
      id: 1223
    }, {
      name: 'vivek',
      age: 21,
      course: 'ng',
      id: 1224
    }, {
      name: 'rohit',
      age: 23,
      course: 'ng',
      id: 1225
    }];
  }

  toggleTable() {
    // console.log('test', this.myName);
    this.showTable = !this.showTable;
  }
}
