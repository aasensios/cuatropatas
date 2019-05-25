import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../services/must-match.validator';
import { Dog } from '../shared/dog.model';
import { Color } from '../shared/color.model';
import { Food } from '../shared/Food.mode';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {
  registerDogForm: FormGroup;
  submitted = false;
  dog: Dog;
  dogs: Dog[] = [];

  origins: string[] = ['droppings', 'blood', 'saliva'];
  genders: string[] = ['male', 'female'];

  colors = ['white', 'black', 'grey']
  breeds = ['Pastor Aleman','Husky','Caniche','Chiguagua','Chucho']
  
  selectedValue: string; 
  foods: Food[] = [
     {value: 'steak', display: 'Steak'},
     {value: 'pizza', display: 'Pizza'},
     {value: 'tacos', display: 'Tacos'}
  ];




  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dog = new Dog(0, "", "", "", 0, 0, "", "","", "", "", "","","");
    

    
    this.registerDogForm = this.formBuilder.group({
      chip: ['', [Validators.required, Validators.minLength(15),Validators.maxLength(15)]],
      name: ['', Validators.required],
      gender: ['',null],
      breed: ['',null],
      color: ['',null],
      birthdate: ['',null],
      deathdate: ['',null],
      owner_dni: ['', Validators.required],
      owner_fullname: ['', Validators.required],
      owner_email: ['', [Validators.required, Validators.email]],
      residence: ['', null],
      barcode: ['', Validators.required],
      sampleorigin: ['',null],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerDogForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.dog);

    // stop here if form is invalid
    if (this.registerDogForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerDogForm.value))
  }
}