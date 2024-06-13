import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit {
  @Input() value: number;
  @Input() Percent : string;
  @Input() color: string;
  @Input() readonly:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
