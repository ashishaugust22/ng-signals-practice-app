import {
  Component,
  WritableSignal,
  Signal,
  signal,
  computed,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  computedCodeString: string = `doubleCount: Signal<number> = computed(() => this.count() * 2);`
  effectCodeString: string = `    constructor() {
        effect(() => {
          this.simpleArray.push(
            'Effect is triggered because count changed to' +  '$ {this.count()}'
        );
      });
    }`
  simpleArray: string[] = [];
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      this.simpleArray.push(
        `Effect is triggered because count changed to ${this.count()}`
      );
    });
  }
  onIncreaseCount() {
    this.count.update((currentValue) => currentValue + 1);
  }
}
