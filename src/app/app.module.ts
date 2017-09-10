import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BatchesComponent } from './batches/batches.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BatchesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot([
			{
				path:"",
				component:HomepageComponent
			},
			{
				path:"students",
				component:StudentComponent
			},
			{
				path:"batches",
				component:BatchesComponent
			
			},
			{
				path:"homepage",
				component:HomepageComponent
			
			}
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
