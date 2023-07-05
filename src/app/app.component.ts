import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor (private formBuilder : FormBuilder){}
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){ 
    this.userForm=this.formBuilder.group({
      nom : ['',Validators.required],
      email : ['',Validators.required,Validators.email],
      hobbies : this.formBuilder.array([])
    });
  }
  get nom(){return this.userForm.get('nom');}
  get email(){return this.userForm.get('email');}

  getHobbies(): FormArray{
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control(null,Validators.required);
    this.getHobbies().push(newHobbyControl)
  }
  
  onSubmitForm(){
    console.log(this.userForm.value);
  }
}
