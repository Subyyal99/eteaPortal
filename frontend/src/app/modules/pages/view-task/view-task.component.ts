import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { EncryptionService } from "src/app/encryption.service";
import { Message_Service } from "src/app/message.service";
import { CommentInfo } from "src/app/models/comment-info";
import { TaskInfo } from "src/app/models/task-info";

@Component({
  selector: "app-view-task",
  templateUrl: "./view-task.component.html",
  styleUrls: ["./view-task.component.css"],
})
export class ViewTaskComponent implements OnInit {
  inputInfo: InputInfo[] = [];
  commentInfo: InputInfo[] = [];
  currentTaskStatus: string = "";
  taskInfo: TaskInfo = new TaskInfo();

  comments: any[] = [
    {
      taskId: 1,
      userId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored, And need to add more features as mentioned in file",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      comment:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      commentedBy: "Byron laferriere",
      commentTime: "May 5,2023 at 1:04 PM ",
    },
  ];

  workLogs: any[] = [
    {
      taskId: 1,
      change:
        "Need to revisit this once data is corrected.Error is showing due to the way that data is stored.",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM",
    },
    {
      taskId: 1,
      change: "Screenshot taken at 7:53am EST",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM",
    },
    {
      taskId: 1,
      change: "Screenshot taken at 9:53am EST",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      change: "Screenshot taken at 9:53am EST",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      change: "Screenshot taken at 9:53am EST",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM ",
    },
    {
      taskId: 1,
      change: "Screenshot taken at 9:53am EST",
      changeBy: "Byron laferriere",
      changeTime: "May 5,2023 at 1:04 PM ",
    },
  ];

  status = [
    { name: "Assigned" },
    { name: "To-Do" },
    { name: "In progress" },
    { name: "Completed" },
  ];
  dataLoadedFlag: boolean = false;
  constructor(
    private Jarvis: AuthService,
    private messageService: Message_Service,
    private router: ActivatedRoute,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.initializingTaskData();
  }
  initializingTaskData() {
    let decryptedId: number;
    this.router.queryParamMap.subscribe((params) => {
      const taskId = params.get("id");
      if (taskId) {
        decryptedId = this.encryptionService.decryptUsingAES256(taskId);
        this.getOneTask({ taskId: decryptedId });
        this.taskComments(decryptedId);
        this.tasksWorkLogs(decryptedId);
      }
    });
  }

  // Get One Task
  getOneTask(data) {
    data.includeAssignee = true;
    data.includeAssignedTo = true;
    data.includeUploadedFiles = true;
    this.Jarvis.getTask(data).subscribe(
      (data) => this.handleOneTask(data),
      (error) => this.handleError(error)
    );
  }
  handleOneTask(data) {
    this.taskInfo = new TaskInfo();
    this.taskInfo.title = data.data.title;
    this.taskInfo.description =
      data.data.description != undefined &&
      data.data.description != "undefined" &&
      data.data.description != null
        ? data.data.description
        : "No description added";
    this.taskInfo.attachment = [];
    this.taskInfo.status = data.data.status;
    this.taskInfo.assignedBy = data.data.assignedBy.fullName;
    this.taskInfo.assignedDate = data.data.createdAt;
    this.taskInfo.dueDate = new Date(JSON.parse(data.data.dueDate));
    this.taskInfo.priority = data.data.priority;
    this.currentTaskStatus;
    let assignedTo = "";
    for (let info of data.data.assignedTasks) {
      assignedTo = assignedTo.concat(info.User.fullName, ", ");
    }
    for (let value of data.data.uploadedFiles) {
      let imageUrl =
        value.extension == "pdf"
          ? "assets/images/file_icons/pdf.png"
          : value.extension == "docx"
          ? "assets/images/file_icons/docx.png"
          : value.extension == "xlsx"
          ? "assets/images/file_icons/xlsx.png"
          : value.extension == "ppt"
          ? "assets/images/file_icons/ppt.png"
          : value.extension == "docs"
          ? "assets/images/file_icons/docs.png"
          : value.url;
      let obj = {
        fileName: value.fileName,
        imageUrl: imageUrl,
        uploadDate: value.createdAt,
      };
      this.taskInfo.attachment.push(obj);
    }
    this.taskInfo.assignedTo = assignedTo;
    this.dataLoadedFlag = true;
    this.generateFormData();
  }
  generateFormData() {
    this.inputInfo = [];
    // this.createInput(
    //   "",
    //   "attachments",
    //   "attachments",
    //   "UI/Ux project",
    //   "uploader",
    //   "",
    //   "",
    //   "",
    //   [],
    //   "",
    //   "",
    //   "",
    //   "",
    //   "basic",
    //   "",
    //   "multiple",
    //   "",
    //   "attachments[]",
    //   "image/*,application/pdf",
    //   "",
    //   "",
    //   "pi pi-plus"
    // );
    this.createInput(
      "",
      "dropdown",
      "dropdown",
      "",
      "dropdown",
      { name: this.taskInfo.status },
      this.status,
      "",
      [
        // {
        //   type: Validators.required,
        //   msg: "You must select",
        // },
      ],
      false,
      false
    );

    this.commentInfo = [];

    this.createCommentInput(
      "",
      "commentText",
      "text",
      "Add a comment...",
      "text2",
      "",
      "",
      "",
      [
        // {
        //   type: Validators.required,
        //   msg: "You must select",
        // },
      ]
    );

    this.createCommentInput(
      "",
      "commentFiles",
      "",
      "Add a comment...",
      "uploader",
      "",
      "",
      "",
      [
        // {
        //   type: Validators.required,
        //   msg: "You must select",
        // },
      ],
      "advanced",
      "",
      "multiple",
      "",
      "commentUpload[]",
      "image/*, .doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.csv,.rtf,.odt,.ods,.odp,.zip,.rar,.7z,.tar,.gz,.bz2,.docm,.xlsm,.pptm,.ppsx,.ppsm,.potx ",
      "",
      "pi pi-paperclip"
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
    inline?,
    dateFormat?,
    selectionMode?,
    required?,
    multipleUpload?,
    uploadLabel?,
    requestName?,
    uploadAccept?,
    customUpload?,
    maxFileSize?,
    icon?,
    showClear?,
    searchFilterFlag?
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
    inputObj.showClear = showClear;
    inputObj.searchFilter = searchFilterFlag;
    this.inputInfo.push(inputObj);
  }

  createCommentInput(
    label,
    modelName,
    inputType,
    placeHolder,
    type,
    value,
    data,
    option,
    validatorInfor,

    selectionMode?,
    required?,
    multipleUpload?,
    uploadLabel?,
    requestName?,
    uploadAccept?,
    customUpload?,
    maxFileSize?,
    icon?
  ) {
    let commentInputObj = new InputInfo();
    commentInputObj.label = label;
    commentInputObj.modelName = modelName;
    commentInputObj.inputType = inputType;
    commentInputObj.placeHolder = placeHolder;
    commentInputObj.type = type;
    commentInputObj.check_value = value;
    commentInputObj.data = data;
    commentInputObj.option = option;
    commentInputObj.validatorsInfo = validatorInfor;

    commentInputObj.selectionMode = selectionMode;
    commentInputObj.required = required;
    commentInputObj.multipleUpload = multipleUpload;
    commentInputObj.uploadLabel = uploadLabel;
    commentInputObj.requestName = requestName;
    commentInputObj.uploadAccept = uploadAccept;
    commentInputObj.customUpload = customUpload;
    commentInputObj.maxFileSize = maxFileSize;
    commentInputObj.icon = icon;

    this.commentInfo.push(commentInputObj);
  }

  onSubmit(event) {
    let obj = {
      image: {
        originalEvent: Event,
        files: FileList,
        currentFiles: Array(),
      },
      preview: {
        changingThisBreaksApplicationSecurity: "",
      },
    };
    obj = event.attachments;
  }

  onCommentSubmit(event) {
    this.comments = event;
    this.postComment(this.comments);
  }

  // =============== API Calls Starting ===============

  // Get One Task's Comments
  taskComments(id: number) {
    // this.Jarvis.getTaskComments(id).subscribe(
    //   (data) => this.handleTaskComments(data),
    //   (error) => this.handleError(error)
    // );
  }

  // Get One Task's Work Logs
  tasksWorkLogs(id: number) {
    // this.Jarvis.getTasksWorkLogs(id).subscribe(
    //   (data) => this.handleTasksWorkLogs(data),
    //   (error) => this.handleError(error)
    // );
  }

  // Post Comments
  postComment(data: any) {
    // this.Jarvis.postComment(data).subscribe(
    //   (data) => this.handlePostComment(data),
    //   (error) => this.handleError(error)
    // );
  }

  // =============== API Calls Ending ===============

  // =============== Data Handling Starting ===============

  handleTaskComments(data) {
    this.messageService.addMessages("success", "Success", data.message);
  }

  handleTasksWorkLogs(data) {
    this.messageService.addMessages("success", "Success", data.message);
  }

  handlePostComment(data) {
    this.messageService.addMessages("success", "Success", data.message);
  }

  // =============== Data Handling Ending ===============

  handleError(error) {
    const msg = error.error ? error.error : error.message;
    // this.messageService.addMessages("error", "Error", msg);
  }
}
