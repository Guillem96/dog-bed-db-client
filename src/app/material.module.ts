import { NgModule } from '@angular/core';
import { 
	MatToolbarModule, 
	MatIconModule, 
	MatButtonModule, 
	MatFormFieldModule,
	MatInputModule, 
	MatSnackBarModule,
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
		MatCardModule
	],
  exports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatSnackBarModule,
		MatCardModule
	],
})
export class MaterialModule { }