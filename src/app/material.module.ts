import { NgModule } from '@angular/core';
import { 
	MatToolbarModule, 
	MatIconModule, 
	MatButtonModule, 
	MatFormFieldModule,
	MatInputModule, 
  MatSnackBarModule,
  MatListModule,
  MatDividerModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule
	],
  exports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule
	],
})
export class MaterialModule { }