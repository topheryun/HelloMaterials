import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MessageNewComponent } from './message-new/message-new.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
  ],
  exports: [
    MessageNewComponent,
    MessageListComponent,
  ]
})
export class MessagesModule { }
