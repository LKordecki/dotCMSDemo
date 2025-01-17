import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { BannerListComponent } from '../banner/banner-list.component';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, BannerListComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];
  visibleContentIndex: number | null = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  getImageUrl(imageId: string): string {
    return `https://demo.dotcms.com/dA/${imageId}`;
  }

  hasMark(part: any, markType: string): boolean {
    return part.marks?.some((mark: any) => mark.type === markType);
  }

  contentVisible = false;

  toggleContent(index: number): void {
    const contentElement = document.querySelector('#item' + index);
    if (contentElement) {
      const parentElement = contentElement.parentElement;

      if (contentElement.classList.contains('fade-in')) {
        contentElement.classList.remove('fade-in');

        if (parentElement) {
          parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        contentElement.classList.add('fade-in');
      }
    }
  }
}
