import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'Angular';
  left = 0;
  @ViewChild('parentTag', { static: false })
  parentTag!: ElementRef; 

  @ViewChild('target', { static: false })
  target!: ElementRef;
  // renderer: any;
  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  move(){
    console.log(this.parentTag.nativeElement.clientWidth); 
    console.log(this.target.nativeElement.scrollWidth);
    let left = this.target.nativeElement.scrollWidth - 
    this.parentTag.nativeElement.clientWidth; 
    this.renderer.setStyle(this.target.nativeElement, 'margin-left', '-'+left+'px');
  }

  // stop(){
  //   this.renderer.setStyle(this.target.nativeElement, 'margin-left', '0px');
  // }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
