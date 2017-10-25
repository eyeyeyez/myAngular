import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  private my_name: string;
  private my_nname: string;
  private age: number;
  private dob: string;
  private email: string;
  private blood: string;
  private edu: string;
  private major: string;
  
  constructor() { }

  ngOnInit() {
    this.my_name ="Sasithorn Nutkronburee";
    this.my_nname= "Eye";
    this.age = 21;
    this.dob = "30 July 1996"
    this.email = "sasithorn.eye@g.swu.ac.th"
    this.blood = "O";
    this.edu = "Srinakharinwirot University,Faculty of Science"
    this.major = "Computer Science"
    
  }

}
