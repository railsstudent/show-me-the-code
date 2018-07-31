import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input()
  framework: string;

  @Input()
  currentValue: number;

  increment() {
    this.currentValue++;
  }

  decrement() {
    this.currentValue--;
  }
}
