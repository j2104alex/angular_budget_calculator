import { Component, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-models';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent {
  @Input() budgetItems: BudgetItem[];

  constructor(budgetItems: BudgetItem[]) {
    this.budgetItems = budgetItems;
  }

  ngOnInit(): void { }
}
