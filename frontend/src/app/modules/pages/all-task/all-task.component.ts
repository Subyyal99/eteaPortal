import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { EncryptionService } from "src/app/encryption.service";
import { Message_Service } from "src/app/message.service";

@Component({
  selector: "app-all-task",
  templateUrl: "./all-task.component.html",
  styleUrls: ["./all-task.component.css"],
})
export class AllTaskComponent implements OnInit {
  //  tableinfo :TaskInfo[]=[];
  inputInfo: InputInfo[] = [];
  filterobj: any = {};
  limit: number = 10;
  offset: number = 0;
  totalRecords: number = 100;
  projectdrop: any[] = [
    { name: "Project-1", code: "project" },
    { name: "Project-2", code: "project" },
    { name: "Project-3", code: "project" },
    { name: "Project-4", code: "project" },
  ];
  priority: any[] = [
    { name: "High", code: "priority" },
    { name: "medium", code: "priority" },
    { name: "Low", code: "priority" },
  ];
  myColumns = [
    { header: "Task Name", field: "title", type: "text" },
    { header: "Due Date", field: "dueDate", type: "date" },
    { header: "Priority", field: "priority", type: "text" },
    { header: "Assigned by", field: "assignedBy", type: "text" },
    { header: "Status", field: "status", type: "text" },
  ];
  tableinfo: any[];
  constructor(
    private Jarwis: AuthService,
    private messageService: Message_Service,
    private router: Router,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.generateData();
    this.filterobj["limit"] = this.limit;
    this.filterobj["offset"] = this.offset;
    // this.getTabelData();
    this.getAllTasks(this.filterobj);
  }
  getAllTasks(data) {
    data.includeAssignee = true;
    this.Jarwis.getAllTasks(data).subscribe(
      (data) => this.handleTabelData(data),
      (error) => this.handleError(error)
    );
  }
  handleTabelData(data) {
    this.tableinfo = [];
    for (let info of data.data) {
      let obj = {
        id: info.id,
        title: info.title,
        priority: info.priority,
        dueDate: new Date(JSON.parse(info.dueDate)),
        assignedBy: info.assignedBy.fullName,
        status: info.status,
        image: "/assets/images/shahid.png",
      };
      this.tableinfo.push(obj);
    }
    this.totalRecords = data.totalRecords;
  }
  // task data structure
  //  = [
  //   {
  //     id: 1,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 2,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "Low",
  //     assignTo: "Ishfaque ahmed",
  //     status: "To-Do",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 3,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "Medium",
  //     assignTo: "Ishfaque ahmed",
  //     status: "In-Progress",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 4,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Assigned",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 5,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 6,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 7,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 8,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 9,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 10,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  //   {
  //     id: 11,
  //     task: "Create UI/UX design",
  //     project: "UI/Ux project",
  //     dueDate: new Date(),
  //     projectPriority: "High",
  //     assignTo: "Ishfaque ahmed",
  //     status: "Completed",
  //     image: "../assets/images/shahid.png",
  //   },
  // ];

  generateData() {
    this.inputInfo = [];
    this.createInput(
      "calender",
      "calender",
      "calender",
      [],
      "Due Date",
      "",
      "",
      "",
      [],
      "dd-mm-yy",
      "range",
      ""
    );
    this.createInput(
      "dropdown",
      "priority",
      "priority",
      "",
      "Priority",
      "name",
      "true",
      this.priority,
      [],
      "",
      "",
      "",
      false
    );
  }
  createInput(
    type,
    inputType,
    modelName,
    value,
    placeHolder,
    optionLabel,
    showClear,
    option,
    validatorInfor,
    dateFormat?,
    selectionMode?,
    minDate?,
    searchFilterFlag?
  ) {
    let inputObj = new InputInfo();
    inputObj.type = type;
    inputObj.inputType = inputType;
    inputObj.modelName = modelName;
    inputObj.check_value = value;
    inputObj.placeHolder = placeHolder;
    inputObj.option = optionLabel;
    inputObj.showClear = showClear;
    inputObj.option = option;
    inputObj.dateFormat = dateFormat;
    inputObj.selectionMode = selectionMode;
    inputObj.minDate = minDate;
    inputObj.validatorsInfo = validatorInfor;
    inputObj.searchFilter = searchFilterFlag;
    this.inputInfo.push(inputObj);
  }
  onRowClick(event: any) {
    let encryptedId = this.encryptionService.encryptUsingAES256(
      event.id.toString()
    );
    this.router.navigate(["user/view-task"], {
      queryParams: { id: encryptedId },
    });
  }
  getSearchText(event: any) {
    this.filterobj["globalfilter"] = event;
    if (event.length === 3) {
      this.getAllTasks(this.filterobj);
    }
  }
  updateFilterData(event: any) {
    this.filterobj[event.type] = event.value;
    this.getAllTasks(this.filterobj);
  }
  paginatorValues(event: any) {
    this.filterobj["offset"] = event.page * 10;
    this.getAllTasks(this.filterobj);
  }

  handleError(error) {
    const msg = error.error ? error.error : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
}
