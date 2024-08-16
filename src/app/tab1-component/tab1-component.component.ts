import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab1-component.component.html',
  styleUrl: './tab1-component.component.css'
})
export class Tab1ComponentComponent implements OnInit {
  rank: number[] | undefined;
  ngOnInit(): void {
   this.rank = [0,1,2,3,4,5,6,7,8,9];
  }


}
