import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { storeTodo, ITodo } from '@gux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'form';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tittle: new FormControl(null, Validators.required),
    });
    console.log(storeTodo);
  }

  onSubmit(): void {
    const { tittle } = this.form.value;

    const todo: ITodo = {
      id: storeTodo.id,
      text: tittle,
      completed: true,
    };

    storeTodo.addTodo(todo);

    // console.log(tittle);
    console.log(todo);

    this.form.reset();
  }
}
