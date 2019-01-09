import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('showRecipes') showRecipes = new EventEmitter();
  @Output('showShoppingList') showShoppingList = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

}
