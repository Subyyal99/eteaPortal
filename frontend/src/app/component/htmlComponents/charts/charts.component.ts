import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { ChartModule } from "primeng/chart";
@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent implements OnInit {
  /**
   * chart data received from parent
   */
  @Input() chartData: any;
  /**
   * chart options received from parent
   */
  @Input() chartOptions: any;
  /**
   * graph label received from parent
   */
  @Input() graphLabel: string;

  //chart type: line dougnut etc
  @Input() type: string;

  //chart width and height
  @Input() width: string;
  @Input() height: string;

  /**
   * subscription
   */
  subscription: Subscription;
  /**
   *
   * @param messageService this service is used to display message to pur clients
   */
  constructor(private messageService: MessageService) {}
  /**
   * This is our life cycle hook implemented by the button component class
   */
  ngOnInit(): void {}
}
