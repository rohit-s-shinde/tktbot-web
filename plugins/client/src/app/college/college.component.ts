import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  ques = [
    {
      que_no : 1,
      que : 'Where is location?',
      ans : 'Warananagar',
      ent : 'location'
    },
    {
      que_no : 2,
      que : 'What is Time?',
      ans : '9 AM',
      ent : 'time'
    },
    {
      que_no : 3,
      que : 'Where is CSE?',
      ans : 'Warananagar',
      ent : 'location'
    }
 ];
  constructor() {
  }

  ngOnInit() {
  }
}
