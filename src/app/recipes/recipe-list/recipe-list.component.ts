import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'A test Recipe', description: 'This is simply a test',
      imagePath: 'https://images.unsplash.com/photo-1495521821757-' +
                 'a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG' +
                 '90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
