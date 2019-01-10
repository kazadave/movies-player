import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, ElementRef } from '@angular/core';
import * as debug from 'debug';

const console = {
  log: debug('vavatech:image:log')
};

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

  @Input() src: string = null;

  constructor(
    private $el: ElementRef
  ) { }

  ngOnInit() {
    this.updateSource();
  }

  updateSource() {
    const $image = this.$el.nativeElement.querySelector('img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.setAttribute('src', this.src);
        observer.disconnect();
        }
      });
    });
    observer.observe($image);
  }
}
