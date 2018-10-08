import { NgModule } from '@angular/core';
import { 
	MatToolbarModule, 
	MatIconModule, 
	MatButtonModule, 
	MatFormFieldModule,
	MatInputModule ,
} from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule
	],
  exports: [
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule
	],
})
export class MaterialModule { }