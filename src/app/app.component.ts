import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { DashboardTileComponent } from './common/dashboard-tile/dashboard-tile.component';
import { ProfileService } from './data/services/profile.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardTileComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notes_s';
  profileService: ProfileService = inject(ProfileService);
  profiles: any = []

  constructor() {
    this.profileService.getTestAccounts()
    .subscribe(val => {
      this.profiles = val;
    })
  }
}
