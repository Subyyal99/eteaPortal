import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-panel-menu",
  templateUrl: "./panel-menu.component.html",
  styleUrls: ["./panel-menu.component.css"],
})
export class PanelMenuComponent implements OnInit {
  @Input() panelMenuData: MenuItem[];

  // Style Inputs
  @Input() panelWidth: string;

  @Input() mobileView: boolean;

  constructor() {}

  ngOnInit(): void {}
}
