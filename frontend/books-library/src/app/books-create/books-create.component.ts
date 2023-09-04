import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss'],
})
export class BooksCreateComponent implements OnInit {
  createbookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createbookForm = this.formBuilder.group({
      title: '',
      author: '',
      publishYear: '',
    });
  }

  onSubmit() {
    console.log(this.createbookForm.value);
  }
}
