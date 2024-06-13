/**
 * This is our side panel component, to be used through out our program
 */
import { style } from "@angular/animations";
import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AuthService } from "src/app/auth/auth.service";
import { SidePanelInfo } from "../../componentModel/sidePnael-info";
/**
 * specifies which other files are associated with this component and metadata
 */
@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.css"],
})
export class SidePanelComponent implements OnInit {
  @Input() panelLogoImage: string;
  @Input() sidePanelData: MenuItem[];
  @Input() isLoggedIn: boolean;

  @Input() bgColor: string;
  @Input() color: string;
  @Input() fontSize: string;
  @Input() fontWeight: string;
  @Input() position: string;
  @Input() top: string;
  @Input() overflow: string;
  @Input() desktopWidth: string;
  @Input() mobileWidth: string;
  @Input() height: string;
  @Input() textColor: string;
  @Input() mobileBreakpoint: number;

  /**
   * This is the constructor of our component
   * @param router is a router type variable created to use router functions to navigate within our project
   * @param Jarwis is an angular service type variable used to call APIs required for our application
   */
  constructor(public router: Router, private Jarwis: AuthService) {}

  screenSize: number;
  /**
   *side panel data in this object
   */
  sidePanelInfo: any[];

  isMobileView: boolean;

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    const width = event.target.innerWidth;
    this.isMobileView = width <= this.mobileBreakpoint;
  }

  /**
   * This is our life cycle hook that runs when our component loads and it creates an array
   */
  ngOnInit(): void {
    // Set initial value of isMobileView based on window width
    const width = window.innerWidth;
    this.isMobileView = width <= this.mobileBreakpoint;
  }
  ngAfterViewInit() {
    // this.screenSize = window.innerWidth;
    // if (this.screenSize <= 1025) {
    //   this.showFlag = false;
    // }
    // if (this.screenSize >= 1028) {
    //   this.showFlag = true;
    // }
  }

  /**
   * this is our function to navigate in our app according to the user
   * @param name string name of the component to be routed to
   */
  // navigate(name) {
  //   this.router.navigateByUrl("/side-panel/" + name);
  // }

  // sideBar() {
  //   if (this.showFlag == true) {
  //     this.showFlag = false;
  //   } else if (this.showFlag == false) {
  //     this.showFlag = true;
  //   }
  // }
  // @ViewChild("drawer") drawer: MatSidenav;
}
