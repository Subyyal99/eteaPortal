import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { IconsProviderModule } from "./icons-provider.module";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { LoginComponent } from "./modules/shared/sharedPages/login/login.component";
import { ButtonComponent } from "./component/htmlComponents/button/button.component";
import { TextBoxComponent } from "./component/htmlComponents/text-box/text-box.component";
import { CapitalizationPipe } from "src/Pipes/camelCaseToCapitalization.pipe";
import { SignUpComponent } from "./modules/shared/sharedPages/sign-up/sign-up.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LinkButtonComponent } from "./component/htmlComponents/link-button/link-button.component";
import { ResetPasswordComponent } from "./modules/shared/sharedPages/reset-password/reset-password.component";
import { SidePanelComponent } from "./component/htmlComponents/side-panel/side-panel.component";
import { ForgotPasswordComponent } from "./modules/shared/sharedPages/forgot-password/forgot-password.component";
import { MessageService } from "primeng/api";
import { SidenavModule } from "angular-ng-sidenav";
import { DropDownComponent } from "./component/htmlComponents/drop-down/drop-down.component";
import { TextAreaComponent } from "./component/htmlComponents/text-area/text-area.component";
import { MultiSelectComponent } from "./component/htmlComponents/multi-select/multi-select.component";
import { SplitButtonComponent } from "./component/htmlComponents/split-button/split-button.component";
import { SelectButtonComponent } from "./component/htmlComponents/select-button/select-button.component";
import { CheckBoxComponent } from "./component/htmlComponents/check-box/check-box.component";
import { TextIconButtonComponent } from "./component/htmlComponents/text-icon-button/text-icon-button.component";
import { InputTableComponent } from "./component/htmlComponents/input-table/input-table.component";
import { InputChipsSpecialComponent } from "./component/htmlComponents/input-chips-special/input-chips-special.component";
import { TableComponent } from "./component/htmlComponents/table/table.component";
import { RadioButtonComponent } from "./component/htmlComponents/radio-button/radio-button.component";
import { LineChartComponent } from "./component/htmlComponents/line-chart/line-chart.component";
import { DatePipe } from "@angular/common";
import { CalenderComponent } from "./component/htmlComponents/calender/calender.component";
import { DialogComponent } from "./component/htmlComponents/dialog/dialog.component";
import { DynamicFormComponent } from "./component/htmlComponents/dynamic-form/dynamic-form.component";
import { MaskInputComponent } from "./component/htmlComponents/mask-input/mask-input.component";
import { InputSwitchComponent } from "./component/htmlComponents/input-switch/input-switch.component";
import { CreatTaskComponent } from "./modules/pages/creat-task/creat-task.component";
import { AllTaskComponent } from "./modules/pages/all-task/all-task.component";
import { UserNavigationsComponent } from "./modules/pages/user-navigations/user-navigations.component";
import { PanelMenuComponent } from "./component/htmlComponents/panel-menu/panel-menu.component";
import { PaginatorComponent } from "./component/htmlComponents/paginator/paginator.component";

import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";
import { CardComponent } from "./component/htmlComponents/card/card.component";
import { ChartsComponent } from "./component/htmlComponents/charts/charts.component";
import { UserFormComponent } from "./modules/pages/user-form/user-form.component";
import { AddDepartmentComponent } from "./modules/pages/add-department/add-department.component";
import { PerformanceComponent } from "./modules/pages/performance/performance.component";
import { KnobComponent } from "./component/htmlComponents/knob/knob.component";
import { AllDepartmentsComponent } from "./modules/pages/all-departments/all-departments.component";
import { AvatarComponent } from "./component/htmlComponents/avatar/avatar.component";
import { ConfirmPopupComponent } from "./component/htmlComponents/confirm-popup/confirm-popup.component";
import { ViewTaskComponent } from "./modules/pages/view-task/view-task.component";
import { FileUploadComponent } from "./component/htmlComponents/file-upload/file-upload.component";
import { EditorComponent } from './component/htmlComponents/editor/editor.component';
import { CommentComponent } from "./component/htmlComponents/comment/comment.component";

registerLocaleData(en);
/**
 * This function sends the request to get token.
 * @returns
 */
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
/**
 *
 */
// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    TextBoxComponent,
    CapitalizationPipe,
    SignUpComponent,
    LinkButtonComponent,
    ResetPasswordComponent,
    SidePanelComponent,
    ForgotPasswordComponent,
    DropDownComponent,
    TextAreaComponent,
    MultiSelectComponent,
    SplitButtonComponent,
    SelectButtonComponent,
    CheckBoxComponent,
    TextIconButtonComponent,
    InputTableComponent,
    InputChipsSpecialComponent,
    TableComponent,
    RadioButtonComponent,
    LineChartComponent,
    CalenderComponent,
    DialogComponent,
    DynamicFormComponent,
    MaskInputComponent,
    InputSwitchComponent,
    CreatTaskComponent,
    AllTaskComponent,
    UserNavigationsComponent,
    PanelMenuComponent,
    PaginatorComponent,
    DashboardComponent,
    CardComponent,
    ChartsComponent,
    UserFormComponent,
    AddDepartmentComponent,
    PerformanceComponent,
    KnobComponent,
    AllDepartmentsComponent,
    AvatarComponent,
    ConfirmPopupComponent,
    ViewTaskComponent,
    FileUploadComponent,
    EditorComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    SidenavModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ["localhost:8080"],
        blacklistedRoutes: ["localhost:8080/api/auth/signin"],
      },
    }),
    HttpClientModule,
    AppRoutingModule,
    IconsProviderModule,

    // NgbModule,
    NgxMaskModule.forRoot(),
    NgbModule,
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
