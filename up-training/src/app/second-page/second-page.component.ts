import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit{
  
  form: FormGroup;
  constructor(private mainService: MainService) {
    this.form = new FormGroup({
      studentId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      studentCode: new FormControl('', [Validators.required]),
      majorId: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
  }


  students: any[] = [];
  
  ngOnInit(): void {
    this.onSearch();
  }

  onDelete(studentId: number){
    this.mainService.delete(studentId).subscribe((res) => {
      console.log('Delete Success');
      this.onSearch();
    }, error => {
      this.onSearch();
    })
  }

  onSearch() {
    this.mainService.search().subscribe((res) => {
      this.students = res;
      console.log(this.students);
    })
  }

  setForm(student: any){
    this.form.patchValue(student);
  }

  OnUpdate() {
    this.mainService.save(this.form.value).subscribe((res) =>{
      console.log(res)
      this.onSearch();
    }, error => {
      this.onSearch();

    })
  }
}