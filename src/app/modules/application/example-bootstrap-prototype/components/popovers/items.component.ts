import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-popovers',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class PopoversComponent implements AfterViewInit, OnInit {

  constructor() { 
  //throw new Error('InternalError')
  }

  ngOnInit(): void {
    this.loadScript('./assets/params/js/popovers.js');
  }

  ngAfterViewInit() {
  }

  loadScript(name: string): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = name;
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
  }

}
