import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { Message_Service } from "src/app/message.service";
import { UserInfo } from "src/app/models/user-info";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent implements OnInit {
  inputInfo: InputInfo[] = [];
  userFormInfo: UserInfo = new UserInfo();
  department: any[] = [
    { name: "department-1", code: "department" },
    { name: "department-2", code: "department" },
    { name: "department-3", code: "department" },
    { name: "department-4", code: "department" },
  ];
  constructor(
    private messageService: Message_Service,
    private Jarwis: AuthService
  ) {}

  ngOnInit(): void {
    this.getDepartments({ limit: 10, offset: 0 });
  }
  getDepartments(data) {
    this.Jarwis.getAllDepartments(data).subscribe(
      (data) => this.hanleDepartmentsData(data),
      (error) => this.handleError(error)
    );
  }
  hanleDepartmentsData(data) {
    this.department = [];
    for (let info of data.data) {
      this.department.push({ id: info.id, name: info.name });
    }
    this.generateFormData();
  }

  generateFormData() {
    this.inputInfo = [];
    this.createInput(
      "Full Name",
      "fullName",
      "text2",
      "Enter full name of user",
      "text2",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must enter full name",
        },
      ]
    );
    this.createInput(
      "Department",
      "departments",
      "text2",
      "Select Department",
      "dropdown",
      "",
      this.department,
      this.department,
      true,
      [
        {
          type: Validators.required,
          msg: "You must select department",
        },
      ]
    );
    this.createInput(
      "Designation",
      "designation",
      "text2",
      "Enter designation of user",
      "text2",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must enter designation",
        },
      ]
    );
    this.createInput(
      "Mobile number",
      "mobileNumber",
      "text",
      "Enter mobile number of user",
      "mask",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must enter mobile number",
        },
      ],
      "9999-9999999"
    );
    this.createInput(
      "Email",
      "email",
      "text2",
      "Enter email of user",
      "text2",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must enter email",
        },
        {
          type: Validators.email,
          msg: "You must enter valid email address",
        },
      ]
    );
    this.createInput(
      "Password",
      "password",
      "password",
      "Enter password of user",
      "text2",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must enter password",
        },
        {
          type: Validators.minLength(6),
          name: "minlength",
          msg: "You must enter Password with length more than 6",
        },
      ]
    );
    this.createInput(
      "Confirm Password",
      "confirmPassword",
      "password",
      "Re-enter password of user",
      "text2",
      "",
      "",
      "",
      true,
      [
        {
          type: Validators.required,
          msg: "You must confirm password",
        },
        {
          type: Validators.minLength(6),
          name: "minlength",
          msg: "You must enter Password with length more than 6",
        },
      ]
    );
  }
  createInput(
    label,
    modelName,
    inputType,
    placeHolder,
    type,
    value,
    data,
    option,
    required,
    validatorInfor,
    mask?
  ) {
    let inputObj = new InputInfo();
    inputObj.label = label;
    inputObj.modelName = modelName;
    inputObj.inputType = inputType;
    inputObj.placeHolder = placeHolder;
    inputObj.type = type;
    inputObj.check_value = value;
    inputObj.data = data;
    inputObj.required = required;
    inputObj.option = option;
    inputObj.validatorsInfo = validatorInfor;
    // type of masking used for mask input
    inputObj.mask = mask;
    this.inputInfo.push(inputObj);
  }
  onSubmit(event) {
    this.userFormInfo = event;
    this.userFormInfo.departmentId = event.departments.id;
    this.userFormInfo.type = "employee";
    this.messageService.addMessages("info", "Info", "Please Wait...");
    this.Jarwis.userFormData(this.userFormInfo).subscribe(
      (data) => this.handleTaskData(data),
      (error) => this.handleError(error)
    );
  }
  handleTaskData(data) {
    this.messageService.addMessages("success", "Success", data.message);
    this.userFormInfo = new UserInfo();
    this.generateFormData();
  }
  handleError(error) {
    const msg = error.error ? error.error : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }

  updateSearch(event) {
    if (event.searchFor != null && event.searchFor.length > 2) {
      // add database table name before calling search function
      this.searchData(event);
    }
  }
  searchData(searchData) {
    this.Jarwis.dynamicSearch(searchData).subscribe(
      (data) => this.handleDynamicSearchData(data, searchData.modelName),
      (error) => this.handleError(error)
    );
  }
  handleDynamicSearchData(data, modelName) {
    this.inputInfo.map((input) => {
      if (input.modelName == modelName) {
        // input.data = [];
        input.data = input.data.concat(data.data);
      }
    });
  }
}
