import { Component } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  show: boolean = false;

  students: Student[] = [
    new Student('Ali', 26),
    new Student('Fatma', 25),
    new Student('Adam', 24),
  ];

  toggle() {
    this.show = !this.show;
  }
}
