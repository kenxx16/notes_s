import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-tile.component.html',
  styleUrl: './dashboard-tile.component.scss'
})
export class DashboardTileComponent {
  

  elementLog(el:any): void {
    console.log(el.target.parentNode)
  }


}
