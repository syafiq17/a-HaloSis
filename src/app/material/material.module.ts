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
		 MatInputModule,
		 MatMenuModule
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
	 MatInputModule,
	 MatMenuModule
	 ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
