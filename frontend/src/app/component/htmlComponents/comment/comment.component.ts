import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { InputInfo } from "../../componentModel/input-info";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"],
})
export class CommentComponent implements OnInit {
  changeFlag = false;
  counterInputs = 0;
  commentFormInfo: any = {};
  commentClear: boolean = false;

  @Input() inputInfo: InputInfo[] = [];
  @Input() submitLabel: string = "";
  @Output() formData = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  updateData(value, label) {
    this.inputInfo[label] = value;
    this.commentFormInfo[label] = value;
  }
  preSubmit() {
    this.counterInputs = 0;
    this.changeFlag = !this.changeFlag;
  }

  onSubmit() {
    this.commentClear = true;
    this.counterInputs++;
    if (this.counterInputs < this.inputInfo.length) {
      return;
    }

    let errorFlag = this.inputInfo.find((item) => item.errorFlag == true);
    if (errorFlag) {
      return;
    }
    this.formData.emit(this.commentFormInfo);
  }
}
