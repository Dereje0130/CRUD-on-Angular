import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { ApiService } from '../Shared/api.service';
import { patientsModel } from './patients-dashboard.model';


@Component({
  selector: 'app-patients-dash-board',
  templateUrl: './patients-dash-board.component.html',
  styleUrls: ['./patients-dash-board.component.css']
})
export class PatientsDashBoardComponent implements  OnInit{
  
  formValue!: FormGroup
  patientModelObj : patientsModel = new patientsModel();

   
  constructor(private formbuilder: FormBuilder, private Api : ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      medicalrecordNumber : [''],
      phoneNumber : [''],
      emailAddress : ['']
    })   
    }
    postPatientInformation(){
      this.patientModelObj.firstName = this.formValue.value.firstName;
      this.patientModelObj.lastName = this.formValue.value.lastName;
      this.patientModelObj.medicalrecordNumber = this.formValue.value.medicalrecordNumber;
      this.patientModelObj.phoneNumber = this.formValue.value.phoneNumber;
      this.patientModelObj.emailAddress = this.formValue.value.emailAddress;
      
    this.Api.postPatients(this.patientModelObj).subscribe(res=>{
      console.log(res);
      alert("Patient Added Successfully")
    },
    err=>{
      alert("Something went wrong")
    }) 

    }
  }
  
    
     

    
  

