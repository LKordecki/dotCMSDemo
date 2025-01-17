import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerService } from '../../services/banner.service';
import { BannerList } from '@app/models/banner.model';

@Component({
  selector: 'app-banner-list',
  imports: [CommonModule],
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss'],
})
export class BannerListComponent implements OnInit {
  bannerList: BannerList[] = [];

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    console.log('in init');
    this.bannerService.getBanners().subscribe(
      (data) => {
        this.bannerList = data;
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
