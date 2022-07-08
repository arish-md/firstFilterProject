import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  myReactiveForm!: FormGroup;



  public apiData: any[] = [];
  public designation: string = "All";

  public searchText:string="";


  constructor(private Service1Service: Service1Service) {

  }

  ngOnInit(): void {
    this.Service1Service.getApiData().subscribe(data => {
      console.log(data),
      this.apiData = data
    },
    );

    this.myReactiveForm = new FormGroup({
      'Id': new FormControl(null),
      'Name': new FormControl(null),
      'Email': new FormControl(null),
      'Designation': new FormControl(null),

    })
  }
  onSubmit() {
    // console.log(this.myReactiveForm)
    this.apiData.push(this.myReactiveForm.value);
    this.myReactiveForm.reset();
  }

  manager() {
    this.designation = 'Manager';
  }
  assistant() {
    this.designation = 'Assistant Manager';
  }
  sales() {
    this.designation = 'Sales Manager';
  }
  consultant() {
    this.designation = 'Sales Consultant';
  }
  all() {
    this.designation = 'All';
  }

}
