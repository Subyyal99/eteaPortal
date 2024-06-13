import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { Message_Service } from "src/app/message.service";
import { TaskInfo } from "src/app/models/task-info";
// import Quill from "quill";

@Component({
  selector: "app-creat-task",
  templateUrl: "./creat-task.component.html",
  styleUrls: ["./creat-task.component.css"],
})
export class CreatTaskComponent implements OnInit {
  inputInfo: InputInfo[] = [];
  currentDate: Date = new Date();
  startDate: Date = new Date();
  createTaskInfo: TaskInfo = new TaskInfo();
  projectdrop: any[];
  editorToolbarOptions: any[] = [
    ["bold", "italic", "underline", "strike"], // Text formatting
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
    [{ font: [] }], // Font family
    [{ align: [] }], // Text alignment
    ["blockquote", "code-block"], // Blocks
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ script: "sub" }, { script: "super" }], // Subscript/superscript
    [{ indent: "-1" }, { indent: "+1" }], // Indentation
    [{ direction: "rtl" }], // Text direction
    [{ color: [] }, { background: [] }], // Text/Background color
    [{ size: ["small", false, "large", "huge"] }], // Font size
    ["clean"],
  ];
  assignto: any[];
  priority: any[] = [
    { name: "High", code: "priority" },
    { name: "medium", code: "priority" },
    { name: "Low", code: "priority" },
  ];
  department: any[];
  constructor(
    private messageService: Message_Service,
    private Jarwis: AuthService
  ) {}

  ngOnInit(): void {
    this.getEmployees({ limit: 10, offset: 0, type: "employee" });
  }
  getEmployees(data) {
    this.Jarwis.getAllUsers(data).subscribe(
      (data) => this.handleEmployeeData(data),
      (error) => this.handleError(error)
    );
  }
  handleEmployeeData(data) {
    this.assignto = [];
    for (let info of data.data) {
      this.assignto.push({ id: info.id, name: info.fullName });
    }

    this.getDepartments({ limit: 10, offset: 0 });
  }
  getDepartments(data) {
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
    this.generateFormData();
    // const editor = new Quill("#editor", {
    //   modules: {
    //     toolbar: this.toolbarOptions,
    //   },
    //   theme: "snow",
    // });
    // editor.on('text-change', () => {
    //   this.applyTextChange();
    // });
  }
  // applyTextChange() {
  //   // Perform the desired action here
  // }
  generateFormData() {
    this.inputInfo = [];
    this.createInput(
      "Title",
      "title",
      "text2",
      "Enter Title of Task",
      "text2",
      "",
      "",
      "",
      [
        {
          type: Validators.required,
          msg: "You must select Employee",
        },
      ],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      true
    );
    this.createInput(
      "Priority",
      "priority",
      "text2",
      "Select Priority of the Task",
      "dropdown",
      "",
      this.priority,
      this.priority,
      [
        {
          type: Validators.required,
          msg: "You must select the Priority",
        },
      ],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      true,
      false
    );
    this.createInput(
      "Start Date",
      "startDate",
      "text2",
      "Select start time of the Task",
      "calendar",
      "",
      "",
      "",
      [
        {
          type: Validators.required,
          msg: "You must select a date",
        },
      ],
      this.startDate,
      "",
      "",
      "dd-mm-yy",
      "single",
      "",
      "",
      true
    );
    this.createInput(
      "Due Date",
      "dueDate",
      "text2",
      "Select due date of the Task",
      "calendar",
      "",
      "",
      "",
      [
        {
          type: Validators.required,
          msg: "You must select a date",
        },
      ],
      this.currentDate,
      "",
      "",
      "dd-mm-yy",
      "single",
      "",
      "",
      true
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
      [
        {
          type: Validators.required,
          msg: "You must select the Department",
        },
      ],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      true,
      true
    );
    this.createInput(
      "Assign to",
      "assignTo",
      "text2",
      "Select Employee",
      "multi",
      "",
      this.assignto,
      this.assignto,
      [
        {
          type: Validators.required,
          msg: "You must Enter the Title",
        },
      ],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      true,
      true
    );
    this.createInput(
      "Attachment",
      "attachment",
      "uploader",
      "",
      "uploader",
      "",
      "",
      "",
      [],
      "",
      "",
      "",
      "",
      "basic",
      "true",
      "pi pi-cloud-upload"
    );
    // this.createInput(
    //   "Description",
    //   "projectDescription",
    //   "text2",
    //   "",
    //   "textArea",
    //   "",
    //   "",
    //   "",
    //   []
    // );
    this.createInput(
      "Description",
      "projectDescription",
      "advance",
      "Provide detailed description of the Task",
      "editor",
      "",
      "",
      "",
      [],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      this.editorToolbarOptions
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
    validatorInfor,
    minDate?,
    maxDate?,
    inLine?,
    dateFormat?,
    selectionMode?,
    multipleUpload?,
    icon?,
    required?,
    searchFilterFlag?,
    toolbarOptions?
  ) {
    let inputObj = new InputInfo();
    inputObj.label = label;
    inputObj.modelName = modelName;
    inputObj.inputType = inputType;
    inputObj.placeHolder = placeHolder;
    inputObj.type = type;
    inputObj.check_value = value;
    inputObj.data = data;
    // inputObj.val = val;
    inputObj.option = option;
    // inputObj.mask = mask;

    inputObj.minDate = minDate;
    inputObj.maxDate = maxDate;
    inputObj.inLine = inLine;
    inputObj.dateFormat = dateFormat;
    inputObj.selectionMode = selectionMode;

    inputObj.validatorsInfo = validatorInfor;
    inputObj.multipleUpload = multipleUpload;
    inputObj.icon = icon;
    inputObj.required = required;
    inputObj.searchFilter = searchFilterFlag;
    inputObj.toolbarOptions = toolbarOptions;
    this.inputInfo.push(inputObj);
  }
  onSubmit(event) {
    // console.log(event)
    this.createTaskInfo = event;
    let createFormData = new FormData();
    createFormData.append("title", this.createTaskInfo.title);
    createFormData.append("priority", this.createTaskInfo.priority["name"]);
    createFormData.append(
      "startDate",
      JSON.stringify(this.createTaskInfo.startDate)
    );
    createFormData.append(
      "dueDate",
      JSON.stringify(this.createTaskInfo.dueDate)
    );
    createFormData.append(
      "departmentId",
      this.createTaskInfo.departments["id"]
    );
    createFormData.append(
      "assignedTo",
      JSON.stringify(this.createTaskInfo.assignTo)
    );
    createFormData.append(
      "description",
      this.createTaskInfo.projectDescription
        ? this.createTaskInfo.projectDescription
        : ""
    );
    if (event.attachment && event.attachment.length > 0) {
      for (let data of event.attachment) {
        createFormData.append("attachment", data);
      }
    }

    this.messageService.addMessages("info", "Info", "Please Wait...");
    this.Jarwis.createtask(createFormData).subscribe(
      (data) => this.handleTaskData(data),
      (error) => this.handleError(error)
    );
  }
  handleTaskData(data) {
    this.messageService.addMessages("success", "Success", data.message);
    this.generateFormData();
  }
  handleError(error) {
    const msg =
      error.error && error.error.message ? error.error.message : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
  updateSearch(event) {
    // search for employees not working properly
    if (event.searchFor != null && event.searchFor.length > 2) {
      // add database table name before calling search function
      event.previousModelName = event.modelName;
      event.modelName =
        event.modelName == "assignTo" ? "employees" : event.modelName;
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
    setTimeout(() => {
      this.inputInfo.map((input) => {
        if (input.modelName == modelName) {
          // input.data = [];
          input.data = input.data.concat(data.data);
        }
      });
    }, 20);
  }
}
