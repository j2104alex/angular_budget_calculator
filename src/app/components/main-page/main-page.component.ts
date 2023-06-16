import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  budgetItem: BudgetItem[]= new Array<BudgetItem>();
  addItem(newItem:BudgetItem){
    this.budgetItem.push(newItem);
  }
}
