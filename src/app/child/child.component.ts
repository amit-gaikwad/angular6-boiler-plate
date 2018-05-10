import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childRoll: string;
  students = [];
  constructor(private studentService: StudentService) {
    studentService.get().subscribe((data) => {
      this.students = data;
    }, (err) => {
      console.log('Handle Error');
    });
  }

}
