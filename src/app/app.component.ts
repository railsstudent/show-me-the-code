import {
  Component,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges {
  @Input()
  framework: string;

  @Input()
  count: number;

  @Output()
  primeFound = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef) {}

  increment() {
    this.count++;
    console.log("increment count", this.count);
    this.cd.detectChanges();
    if (this.isPrime()) {
      this.primeFound.emit(`${this.count} is a prime number}.`);
    } else {
      this.primeFound.emit(`${this.count} is not a prime number}.`);
    }
  }

  decrement() {
    if (this.count <= 1) {
      return;
    }
    this.count--;
    console.log("decrement count", this.count);
    this.cd.detectChanges();
    if (this.isPrime()) {
      this.primeFound.emit(`${this.count} is a prime number}.`);
    } else {
      this.primeFound.emit(`${this.count} is not a prime number}.`);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);
    let hasChanged = false;
    if (changes.count.currentValue !== changes.count.previousValue) {
      this.count = changes.count.currentValue;
      hasChanged = true;
    }
    if (changes.framework.currentValue !== changes.framework.previousValue) {
      this.framework = changes.framework.currentValue;
      hasChanged = true;
    }
    if (hasChanged === true) {
      this.cd.detectChanges();
    }
  }

  private isPrime() {
    if (this.count <= 1) {
      return false;
    } else if (this.count <= 3) {
      return true;
    } else if (this.count % 2 === 0 || this.count % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= this.count) {
      if (this.count % i === 0 || this.count % (i + 2) === 0) {
        return false;
      }
      i = i + 6;
    }
    return true;
  }
}
