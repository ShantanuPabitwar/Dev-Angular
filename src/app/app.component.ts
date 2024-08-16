import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { Tab3ComponentComponent } from './tab3-component/tab3-component.component';
import { Tab2ComponentComponent } from './tab2-component/tab2-component.component';
import { Tab1ComponentComponent } from './tab1-component/tab1-component.component';
import { Location } from '@angular/common';
import { ROUTE_NAME } from './app.constants';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, Tab3ComponentComponent, Tab2ComponentComponent, Tab1ComponentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  selectedIndex  = 0;

  private urlPath$ = new BehaviorSubject<string>('/tab1');

  constructor(private location: Location) {}

  ngOnInit(): void {
   this.onTabChange(this.selectedIndex);

   window.addEventListener('popstate', () => this.setTabBasedOnTheUrl());
  }

  onTabChange(index: number): void {
    this.selectedIndex = index;
    this.location.go(ROUTE_NAME[index]);

    this.urlPath$.next(ROUTE_NAME[index]);
  }

  private setTabBasedOnTheUrl(): void {
    const urlPath = window.location.pathname;
    this.selectedIndex = ROUTE_NAME.indexOf(urlPath);
  }
}
