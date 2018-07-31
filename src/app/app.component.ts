import {
  Component,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Input()
  framework: string;

  @Input()
  currentValue: number;

  constructor(private cd: ChangeDetectorRef) {}

  increment() {
    this.currentValue++;
    console.log("increment currentValue", this.currentValue);
    this.cd.detectChanges();
  }

  decrement() {
    this.currentValue--;
    console.log("decrement currentValue", this.currentValue);
    this.cd.detectChanges();
  }
}
