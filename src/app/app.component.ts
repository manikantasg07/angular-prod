import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { FormControl } from '@angular/forms';
import {NgbHighlight} from "@ng-bootstrap/ng-bootstrap";
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgbHighlight,SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-details';
  search=new FormControl("",{nonNullable:true});
  students:Array<any>=[];
  studentsList:Array<any>= [
    {
      "name": "Manikanta Sarma Ganti",
      "city": "Greenbelt",
      "studentImage": "https://randomuser.me/api/portraits/men/1.jpg",
      "State": "Maryland",
      "Country": "USA",
      "Physics": 25,
      "Chemistry": 21,
      "Maths": 23,
      "Computer": 21
    },
    {
      "name": "Pavan",
      "city": "Visakhapatnam",
      "studentImage": "https://randomuser.me/api/portraits/men/2.jpg",
      "State": "Andhra Pradesh",
      "Country": "India",
      "Physics": 25,
      "Chemistry": 21,
      "Maths": 23,
      "Computer": 21
    },
    {
      "name": "Sophia Brown",
      "city": "Austin",
      "studentImage": "https://randomuser.me/api/portraits/women/1.jpg",
      "State": "Texas",
      "Country": "USA",
      "Physics": 28,
      "Chemistry": 24,
      "Maths": 30,
      "Computer": 26
    },
    {
      "name": "Arjun Rao",
      "city": "Hyderabad",
      "studentImage": "https://randomuser.me/api/portraits/men/3.jpg",
      "State": "Telangana",
      "Country": "India",
      "Physics": 27,
      "Chemistry": 22,
      "Maths": 24,
      "Computer": 25
    },
    {
      "name": "Emma Johnson",
      "city": "Los Angeles",
      "studentImage": "https://randomuser.me/api/portraits/women/2.jpg",
      "State": "California",
      "Country": "USA",
      "Physics": 30,
      "Chemistry": 29,
      "Maths": 28,
      "Computer": 30
    },
    {
      "name": "Ravi Teja",
      "city": "Bangalore",
      "studentImage": "https://randomuser.me/api/portraits/men/4.jpg",
      "State": "Karnataka",
      "Country": "India",
      "Physics": 26,
      "Chemistry": 23,
      "Maths": 25,
      "Computer": 24
    },
    {
      "name": "Olivia Smith",
      "city": "Seattle",
      "studentImage": "https://randomuser.me/api/portraits/women/3.jpg",
      "State": "Washington",
      "Country": "USA",
      "Physics": 29,
      "Chemistry": 28,
      "Maths": 30,
      "Computer": 29
    },
    {
      "name": "Kiran Kumar",
      "city": "Chennai",
      "studentImage": "https://randomuser.me/api/portraits/men/5.jpg",
      "State": "Tamil Nadu",
      "Country": "India",
      "Physics": 25,
      "Chemistry": 21,
      "Maths": 24,
      "Computer": 22
    },
    {
      "name": "Ava Davis",
      "city": "Denver",
      "studentImage": "https://randomuser.me/api/portraits/women/4.jpg",
      "State": "Colorado",
      "Country": "USA",
      "Physics": 28,
      "Chemistry": 26,
      "Maths": 27,
      "Computer": 29
    },
    {
      "name": "Nikhil Sharma",
      "city": "Delhi",
      "studentImage": "https://randomuser.me/api/portraits/men/6.jpg",
      "State": "Delhi",
      "Country": "India",
      "Physics": 26,
      "Chemistry": 25,
      "Maths": 28,
      "Computer": 27
    },
    {
      "name": "Mia Garcia",
      "city": "Phoenix",
      "studentImage": "https://randomuser.me/api/portraits/women/5.jpg",
      "State": "Arizona",
      "Country": "USA",
      "Physics": 27,
      "Chemistry": 26,
      "Maths": 25,
      "Computer": 28
    },
    {
      "name": "Harsha Vardhan",
      "city": "Mumbai",
      "studentImage": "https://randomuser.me/api/portraits/men/7.jpg",
      "State": "Maharashtra",
      "Country": "India",
      "Physics": 28,
      "Chemistry": 24,
      "Maths": 26,
      "Computer": 27
    },
    {
      "name": "Isabella Miller",
      "city": "Miami",
      "studentImage": "https://randomuser.me/api/portraits/women/6.jpg",
      "State": "Florida",
      "Country": "USA",
      "Physics": 29,
      "Chemistry": 28,
      "Maths": 30,
      "Computer": 29
    },
    {
      "name": "Siddharth Gupta",
      "city": "Kolkata",
      "studentImage": "https://randomuser.me/api/portraits/men/8.jpg",
      "State": "West Bengal",
      "Country": "India",
      "Physics": 26,
      "Chemistry": 25,
      "Maths": 24,
      "Computer": 26
    },
    {
      "name": "Emily Wilson",
      "city": "Boston",
      "studentImage": "https://randomuser.me/api/portraits/women/7.jpg",
      "State": "Massachusetts",
      "Country": "USA",
      "Physics": 28,
      "Chemistry": 29,
      "Maths": 27,
      "Computer": 30
    }
  ]

//  constructor(){
//   this.search.valueChanges.subscribe((serachTerm)=>{
//     if(serachTerm==""){
//       this.students=this.studentsList
//     }
//     else{
//       const term = serachTerm.toLowerCase();
//       this.students=this.studentsList.filter((student)=>{
//         return (
//           student.name.toLowerCase().includes(term) ||
//           student.city.toLowerCase().includes(term) ||
//           student.State.toLowerCase().includes(term) ||
//           student.Country.toLowerCase().includes(term)
//           // pipe.transform(country.area).includes(term) ||
//           // pipe.transform(country.population).includes(term)
//         );
//       })
//     }
//   })
//  }

 ngOnInit(){
  this.students=this.studentsList
  this.search.valueChanges.subscribe((serachTerm)=>{
    if(serachTerm==""){
      this.students=this.studentsList
    }
    else{
      const term = serachTerm.toLowerCase();
      this.students=this.studentsList.filter((student)=>{
        return (
          student.name.toLowerCase().includes(term) ||
          student.city.toLowerCase().includes(term) ||
          student.State.toLowerCase().includes(term) ||
          student.Country.toLowerCase().includes(term)||
          student.Chemistry.toString().includes(term)||
          student.Computer.toString().includes(term)||
          student.Chemistry.toString().includes(term)||
          student.Physics.toString().includes(term)||
          student.Maths.toString().includes(term)
        );
      })
    }
  })
 }
 
  
  
}
