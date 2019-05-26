import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {

  DogForm: FormGroup;
  submitted = false;

  dog: Dog;
  dogs: Dog[] = [];

  sampleBarcode = '';
  sampleOrigin = '';

  origins: string[] = ['droppings', 'blood', 'saliva'];
  genders: string[] = ['male', 'female'];

  // Debugging
  colors = ['white', 'black', 'grey'];
  breeds = ['Pastor Aleman', 'Husky', 'Caniche', 'Chiguagua', 'Chucho'];

  selectedValue: string;

  constructor(private formBuilder: FormBuilder) { }
  


  ngOnInit() {
    this.dog = new Dog();

    this.DogForm = this.formBuilder.group({
      chip: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      name: ['', Validators.required],
      gender: ['', null],
      breed: ['', null],
      color: ['', null],
      birthdate: ['', null],
      deathdate: ['', null],
      owner_dni: ['', Validators.required],
      owner_fullname: ['', Validators.required],
      owner_email: ['', [Validators.required, Validators.email]],
      residence: ['', null],
      barcode: ['', Validators.required],
      sampleorigin: ['', null],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.DogForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.dog);

    // stop here if form is invalid
    if (this.DogForm.invalid) {
      return;
    }

    // Debugging
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.DogForm.value));
  }
}
