import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const counterElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("custom-counter", counterElement);
    console.log("AppModule ngDoBootstrap");
  }
}