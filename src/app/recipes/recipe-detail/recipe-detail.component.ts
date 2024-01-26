import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() dropdownToggle = false;
  constructor() {
  }

  ngOnInit() {
  }
}
