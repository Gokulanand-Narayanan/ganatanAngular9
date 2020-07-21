import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() {
	for(var  i =0;i<7000;i++){
		console.log('buttons')
		console.log('Comp')
	}
  }

  ngOnInit(): void {
  }

}
