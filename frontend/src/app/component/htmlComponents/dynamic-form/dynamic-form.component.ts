import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { InputInfo } from "../../componentModel/input-info";
import { CustomValidatorsInfo } from "../../componentModel/customValidator-info";
import { Message_Service } from "src/app/message.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormComponent implements OnInit {
  changeFlag = false;
  counterInputs = 0;
  @Input() inputInfo: InputInfo[] = [];
  @Output() formData = new EventEmitter<any>();
  @Output() searchFor = new EventEmitter<object>();
  dynamicFormInfo: any = {};
  dynamicClear: boolean = false;
  constructor(private messageService: Message_Service) {}
  ngOnInit() {}

  updateData(value, label) {
    // console.log(value, label)
    this.dynamicFormInfo[label] = value;
    if (label == "confirmPassword" && value != null && value != "") {
      if (
        this.dynamicFormInfo["password"] !=
        this.dynamicFormInfo["confirmPassword"]
      ) {
        let obj = new CustomValidatorsInfo();
        obj.msg = "Password does not match";
        obj.activeName = "notSame";
        this.inputInfo.find(
          (input) => input.modelName == label
        ).customValidator = obj;
      } else {
        this.inputInfo.find(
          (input) => input.modelName == label
        ).customValidator.msg = "";
        this.inputInfo.find(
          (input) => input.modelName == label
        ).customValidator.activeName = "";
      }
    }
    if (label == "startDate" && value != null && value != "") {
      this.changeMinDate(value, "dueDate");
    }
  }
  // to change min date of due date
  changeMinDate(value, modelName) {
    this.inputInfo.map((input) => {
      if (input.modelName == modelName) {
        input.minDate = value;
      }
    });
  }
  preSubmit() {
    this.counterInputs = 0;
    this.changeFlag = !this.changeFlag;
  }

  onSubmit() {
    this.dynamicClear = true;
    this.counterInputs++;
    if (this.counterInputs < this.inputInfo.length) {
      return;
    }
    let errorFlag = this.inputInfo.find((item) => item.errorFlag == true);
    if (errorFlag) {
      return;
    }
    if (
      this.dynamicFormInfo.hasOwnProperty("startDate") &&
      this.dynamicFormInfo.hasOwnProperty("dueDate")
    ) {
      const startDate = new Date(this.dynamicFormInfo.startDate);
      const dueDate = new Date(this.dynamicFormInfo.dueDate);
      if (dueDate < startDate) {
        this.messageService.addMessages(
          "error",
          "Error",
          `Please select valid dates Due Date cannot be before Starting Date`
        );
        return;
      }
    }
    this.formData.emit(this.dynamicFormInfo);
  }
  search(event) {
    this.searchFor.emit(event);
  }
}
