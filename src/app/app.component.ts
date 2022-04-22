import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, OnInit, OnDestroy {
  public title = 'inicio';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit -> ');
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }
}
