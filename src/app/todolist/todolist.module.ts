import { NgModule } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent,TodolistRouting } from './index';
import {DragulaModule} from 'ng2-dragula';
import { TodoComponent } from './todo.component';

@NgModule({
     imports: [
         CommonModule,
        FormsModule,
        DragulaModule
    ],
    declarations: [
        CompletedFilterPipe,
        TodoComponent,
        TodolistComponent
    ],
   
    exports: [TodolistComponent,
    TodoComponent,
        CompletedFilterPipe
    ]
})
export class TodolistModule {
}
