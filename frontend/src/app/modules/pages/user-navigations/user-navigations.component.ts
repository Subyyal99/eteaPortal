import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-user-navigations",
  templateUrl: "./user-navigations.component.html",
  styleUrls: ["./user-navigations.component.css"],
})
export class UserNavigationsComponent implements OnInit {
  isLoggedIn = true;

  menuItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: "Dashboard",
        icon: "fas fa-chart-pie",
        routerLink: ["./dashboard"],
      },
      {
        label: "View Tasks",
        icon: "fas fa-tasks",
        routerLink: ["./view-task"],
      },
      {
        label: "Create tasks",
        icon: "fas fa-edit",
        routerLink: ["./create-task"],
      },
      {
        label: "All Tasks",
        icon: "fas fa-table",
        routerLink: ["./all-task"],
      },
      {
        label: "Performance",
        icon: "pi pi-chart-line",
        routerLink: ["./performance"],
      },
      {
        label: "All Departments",
        icon: "far fa-building",
        routerLink: ["./all-departments"],
      },
      {
        label: "Create Employee",
        icon: "fas fa-edit",
        routerLink: ["./create-employee"],
      },
      {
        label: "Add Department",
        icon: "pi pi-check",
        routerLink: ["./add-department"],
      },
      {
        label: "Logout",
        icon: "fas fa-sign-out-alt fa-flip-horizontal",
        styleClass: "user-logout",
      },
    ];
  }
}
