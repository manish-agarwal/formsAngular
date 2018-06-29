import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ques1="What is your pet name?";
  ques2="What is the make of your first vehicle?";
  ques3="What is your Mother's maiden name?";
  ques4="Who is your best childhood friend?";

  username:string;
  email:string;
  secretQuestion:string;
  answer:string;
  gender:string;

  constructor(private dataService:DataService) { 
    
  }

  ngOnInit() {

  }

  getdata(x:number) {
    this.username=this.dataService.storage[x].username;
    this.email=this.dataService.storage[x].email;
    this.secretQuestion=this.dataService.storage[x].secretQuestion;
    this.answer=this.dataService.storage[x].answer;
    this.gender=this.dataService.storage[x].gender;
  }

}
