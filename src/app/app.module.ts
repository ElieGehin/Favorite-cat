import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatListComponent } from "./cat-list/cat-list.component";
import { CatDetailsComponent } from "./cat-details/cat-details.component";

@NgModule({
  declarations: [AppComponent, CatListComponent, CatDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
