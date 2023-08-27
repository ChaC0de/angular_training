import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  form: FormGroup;

  constructor(private mainService: MainService) {
    this.form = new FormGroup({
      firstName:  new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      studentCode:  new FormControl('', [Validators.required]),
      majorID: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),


    })
  }

  
  ngOnInit(): void {
    
  }

  onSubmit(element: any): void {
    console.log(element.value)
    this.mainService.save(this.form.value).subscribe((res) =>{
      console.log(res)
    })
  }

}
