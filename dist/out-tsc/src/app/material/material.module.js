import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
// import { MatButtonModule, 
// 		 MatButtonToggleModule,
// 		 MatIconModule, 
// 		 MatToolbarModule,
// 		 MatGridListModule,
// 		 MatProgressSpinnerModule,
// 		 MatCardModule,
// 		 MatTabsModule,
// 		 MatFormFieldModule,
// 		 MatSelectModule,
// 		 MatOptionModule,
// 		 MatInputModule} from '@angular/material';
// const MaterialComponents =[
// 	 MatButtonModule,
// 	 MatButtonToggleModule,
// 	 MatIconModule,
// 	 MatToolbarModule,
// 	 MatGridListModule,
// 	 MatProgressSpinnerModule,
// 	 MatCardModule,
// 	 MatTabsModule,
// 	 MatFormFieldModule,
// 	 MatSelectModule,
// 	 MatOptionModule,
// 	 MatInputModule
// ];
var MaterialComponents = [
    MatButtonModule,
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map