import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item-models';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent {

  @Input() item: BudgetItem = new BudgetItem('', 0);

  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }
}
