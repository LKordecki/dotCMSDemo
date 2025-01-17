import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogListComponent } from './components/blog/blog-list.component';
import { BannerListComponent } from './components/banner/banner-list.component';
import { NavigationComponent } from './components/nav/navigation.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogListComponent, BannerListComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DotCMS Demo by Laura Cabrerizo';
}
