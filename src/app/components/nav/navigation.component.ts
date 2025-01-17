import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';
import { NavigationItem } from '@app/models/nav.model';
1;

@Component({
  selector: 'app-nav-list',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  nav: NavigationItem[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.getNavEntries().subscribe(
      (response) => {
        if (Array.isArray(response) && response.length > 0) {
          const firstItem = response[0];

          if (Array.isArray(firstItem.children)) {
            this.nav = firstItem.children;
          } else {
            console.error('Children not found in the first item');
          }
        } else {
          console.error('Response is either not an array or empty');
        }
      },
      (error) => {
        console.error('Error fetching nav data:', error);
      }
    );
  }
}
