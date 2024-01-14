import { Component } from '@angular/core';

@Component({
  selector: 'app-wiki-web',
  templateUrl: './wiki-web.component.html',
  styleUrls: ['./wiki-web.component.css']
})
export class WikiWebComponent {
  activeContent: string | null = "front";

  showContent(contentId: string): void {
    this.activeContent = contentId;
  }

  scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can use 'auto' instead of 'smooth' for an instant scroll
    });
  }
}
