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
  patientsData !: any;

   
  constructor(private formbuilder: FormBuilder, private Api : ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      medicalrecordNumber : [''],
      phoneNumber : [''],
      emailAddress : ['']
    }) 
    this.getAllPatients();  
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
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("Something went wrong")
    }) 

    }
    getAllPatients(){
      this.Api.getPatients()
      .subscribe(res=>{
        this.patientsData = res;

      })
    }
    deletePatients(row:any){
      this.Api.deletePatients(row.id)
      .subscribe(res=>{
        alert("Patient Deleted");
        this.getAllPatients();
      })
    }
    onEdit(row:any){
      this.patientModelObj.id;
       
      this.formValue.controls['firstName'].setValue(row.firstName);
      this.formValue.controls['lastName'].setValue(row.lastName);
      this.formValue.controls['medicalrecordNumber'].setValue(row.medicalrecordNumber);
      this.formValue.controls['phoneNumber'].setValue(row.phoneNumber);
      this.formValue.controls['emailAddress'].setValue(row.emailAddress);
    }
    updatePatientInformation(){
      this.patientModelObj.firstName = this.formValue.value.firstName;
      this.patientModelObj.lastName = this.formValue.value.lastName;
      this.patientModelObj.medicalrecordNumber = this.formValue.value.medicalrecordNumber;
      this.patientModelObj.phoneNumber = this.formValue.value.phoneNumber;
      this.patientModelObj.emailAddress = this.formValue.value.emailAddress;
        
      this.Api.putPatients(this.patientModelObj,this.patientModelObj.id)
      .subscribe(res=>{
        alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
      })
    }
    }
    
  
  
    
     

    
  

