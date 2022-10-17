import { Component, OnInit, setTestabilityGetter, Output, EventEmitter } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit();
  }

  
}
