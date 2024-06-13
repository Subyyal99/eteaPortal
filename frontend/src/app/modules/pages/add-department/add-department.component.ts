import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { Message_Service } from "src/app/message.service";
import { DepartmentInfo } from "src/app/models/department-info";
import { UserInfo } from "src/app/models/user-info";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.css"],
})
export class AddDepartmentComponent implements OnInit {
  addDepartmentInputInfo: InputInfo[] = [];
  assignEmployeinputInfo: InputInfo[] = [];

  addDepartmentInfo: DepartmentInfo[];
  assignDepartmentInfo: DepartmentInfo[];
  addDepartmentFlag: boolean;
  constructor(
    private messageService: Message_Service,
    private Jarwis: AuthService
  ) {}
  employees: UserInfo[];
  department: DepartmentInfo[];
  ngOnInit(): void {
    this.getDepartment({ limit: 10, offset: 0 });
    this.generateFormData("addDepartment");
  }
  getDepartment(data) {
    this.Jarwis.getAllDepartments(data).subscribe(
      (data) => this.handleDepartmentData(data),
      (error) => this.handleError(error)
    );
  }
  handleDepartmentData(data) {
    this.department = [];
    for (let info of data.data) {
      this.department.push({ id: info.id, name: info.name });
    }
    this.getEmployees({ limit: 10, offset: 0, type: "employee" });
  }
  getEmployees(data) {
    this.Jarwis.getAllUsers(data).subscribe(
      (data) => this.handleEmployeData(data),
      (error) => this.handleError(error)
    );
  }
  handleEmployeData(data) {
    this.employees = [];
    for (let info of data.data) {
      this.employees.push({ id: info.id, name: info.fullName });
    }
    this.generateFormData("assignDepartment");
  }
  generateFormData(type) {
    if (type == "addDepartment") {
      this.addDepartmentInputInfo = [];
      this.createInput(
        "Add Department",
        "name",
        "text2",
        "Type name",
        "text2",
        "",
        "",
        "",
        [
          {
            type: Validators.required,
            msg: "You must Add Department",
          },
        ],
        true,
        true
      );
    }
    if (type == "assignDepartment") {
      this.assignEmployeinputInfo = [];
      this.createInput(
        "Department",
        "department",
        "text2",
        "Select Department",
        "dropdown",
        "",
        this.department,
        this.department,
        [
          {
            type: Validators.required,
            msg: "You must select the Department",
          },
        ],
        true,
        false
      );
      this.createInput(
        "Employees",
        "employees",
        "text2",
        "Select Employee(s)",
        "multi",
        "",
        this.employees,
        this.employees,
        [
          {
            type: Validators.required,
            msg: "You must select the Employees",
          },
        ],
        true,
        false
      );
    }
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
    validatorInfor,
    required?,
    addDepartmentFlag?
  ) {
    let inputObj = new InputInfo();
    inputObj.label = label;
    inputObj.modelName = modelName;
    inputObj.inputType = inputType;
    inputObj.placeHolder = placeHolder;
    inputObj.type = type;
    inputObj.check_value = value;
    inputObj.data = data;
    inputObj.option = option;
    inputObj.validatorsInfo = validatorInfor;
    inputObj.required = required;

    if (addDepartmentFlag == true) {
      this.addDepartmentInputInfo.push(inputObj);
    } else if (addDepartmentFlag == false) {
      this.assignEmployeinputInfo.push(inputObj);
    }
  }

  addDepartment(event) {
    this.addDepartmentInfo = event;
    this.messageService.addMessages("info", "Info", "Please Wait...");
    this.Jarwis.addDepartment(this.addDepartmentInfo).subscribe(
      (data) => this.handleTaskData(data),
      (error) => this.handleError(error)
    );
  }
  handleTaskData(data) {
    this.messageService.addMessages("success", "Success", data.message);
    this.generateFormData("addDepartment");
    this.getDepartment({ limit: 10, offset: 0 });
  }

  assignedEmployee(event) {
    this.assignDepartmentInfo = event;
    this.assignEmployee();
  }
  assignEmployee() {
    this.messageService.addMessages("info", "Info", "Please Wait...");
    this.Jarwis.assignEmployee(this.assignDepartmentInfo).subscribe(
      (data) => this.handleAssignData(data),
      (error) => this.handleError(error)
    );
  }
  handleAssignData(data) {
    this.messageService.addMessages("success", "Success", data.message);
    this.generateFormData("assignDepartment");
  }

  handleError(error) {
    const msg =
      error.error && error.error.message ? error.error.message : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
  updateSearch(event) {
    if (event.searchFor != null && event.searchFor.length > 2) {
      // add database table name before calling search function although it already contains the modelname
      event.previousModelName = event.modelName;
      event.modelName =
        event.modelName == "department" ? "departments" : event.modelName;
      this.searchData(event);
    }
  }
  searchData(searchData) {
    this.Jarwis.dynamicSearch(searchData).subscribe(
      (data) => this.handleDynamicSearchData(data, searchData),
      (error) => this.handleError(error)
    );
  }
  handleDynamicSearchData(data, searchData) {
    let modelName =
      searchData.modelName == searchData.previousModelName
        ? searchData.modelName
        : searchData.previousModelName;

    if (modelName == "assignTo") {
      data.data.map((info) => {
        info.name = info.fullName;
      });
    }
    this.assignEmployeinputInfo.map((input) => {
      if (input.modelName == modelName) {
        input.data = input.data.concat(data.data);
      }
    });
  }
}
