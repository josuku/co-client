import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogisticListComponent } from './logistic-list/logistic-list.component';

@NgModule({
  declarations: [
    LogisticListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    LogisticListComponent
  ],
  providers: []
})
export class LogisticComponentsModule { }

