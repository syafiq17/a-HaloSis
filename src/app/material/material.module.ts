import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
		 MatButtonToggleModule,
		 MatIconModule, 
		 MatToolbarModule,
		 MatGridListModule,
		 MatProgressSpinnerModule,
		 MatCardModule,
		 MatTabsModule,
		 MatFormFieldModule,
		 MatSelectModule,
		 MatOptionModule,
		 MatInputModule
		} from '@angular/material';

const MaterialComponents =[
	 MatButtonModule,
	 MatButtonToggleModule,
	 MatIconModule, 
	 MatToolbarModule,
	 MatGridListModule,
	 MatProgressSpinnerModule,
	 MatCardModule,
	 MatTabsModule,
	 MatFormFieldModule,
	 MatSelectModule,
	 MatOptionModule,
	 MatInputModule
	 ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
