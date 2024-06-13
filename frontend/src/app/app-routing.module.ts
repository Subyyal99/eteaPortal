import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidePanelComponent } from "./component/htmlComponents/side-panel/side-panel.component";
import { LoginComponent } from "./modules/shared/sharedPages/login/login.component";
import { SignUpComponent } from "./modules/shared/sharedPages/sign-up/sign-up.component";
import { CreatTaskComponent } from "./modules/pages/creat-task/creat-task.component";
import { AllTaskComponent } from "./modules/pages/all-task/all-task.component";
import { UserNavigationsComponent } from "./modules/pages/user-navigations/user-navigations.component";
import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";
import { UserFormComponent } from "./modules/pages/user-form/user-form.component";
import { AddDepartmentComponent } from "./modules/pages/add-department/add-department.component";
import { PerformanceComponent } from "./modules/pages/performance/performance.component";
import { AllDepartmentsComponent } from "./modules/pages/all-departments/all-departments.component";
import { ViewTaskComponent } from "./modules/pages/view-task/view-task.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "user" },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },

  {
    path: "user",
    component: UserNavigationsComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", component: DashboardComponent },
      { path: "add-department", component: AddDepartmentComponent },
      { path: "performance", component: PerformanceComponent },
      { path: "all-departments", component: AllDepartmentsComponent },
      { path: "create-task", component: CreatTaskComponent },
      { path: "create-employee", component: UserFormComponent },
      { path: "all-task", component: AllTaskComponent },
      { path: "view-task", component: ViewTaskComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
