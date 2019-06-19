import { Component, OnInit } from '@angular/core';
import { HttpjsonplaceholderService } from '../httpjsonplaceholder.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.styl']
})
export class TodosComponent implements OnInit {

  todos: object[];

  constructor(private httpService:HttpjsonplaceholderService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.httpService.getTodos().subscribe(todos => this.todos = todos)
  }

}
