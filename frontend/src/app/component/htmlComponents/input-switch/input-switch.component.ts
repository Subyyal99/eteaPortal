import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { InputInfo } from "../../componentModel/input-info";

@Component({
  selector: "app-input-switch",
  templateUrl: "./input-switch.component.html",
  styleUrls: ["./input-switch.component.css"],
})
export class InputSwitchComponent implements OnInit {
  @Input() inputInfo: InputInfo;

  @Input() changeFlag: boolean;
  /**
   * This output function send the updated data back to our parent class
   */
  @Output() updateData = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter();

  formControl = new FormControl(false, []);

  constructor() {}

  ngOnInit(): void {
    this.formControl.setValue(this.inputInfo.val == "Yes");
    this.formControl.updateValueAndValidity();
    // if (this.inputInfo.validatorsInfo.length > 0) {
    //   this.formControl.setValidators(
    //     this.inputInfo.validatorsInfo.map((item) => item.type)
    //   );
    //   this.formControl.updateValueAndValidity();
    // }

    this.formControl.valueChanges.subscribe((value) => {
      this.updateData.emit(value);
      this.inputInfo.val = value == true ? "Yes" : "No";
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.changeFlag && !changes.changeFlag.firstChange) {
      if (this.formControl.value != (this.inputInfo.val == "Yes")) {
        this.formControl.setValue(this.inputInfo.val == "Yes");
        this.formControl.updateValueAndValidity();
      } else {
        this.formControl.markAsDirty();
        this.formControl.updateValueAndValidity();
        this.submit.emit();
      }
    }
  }
}
