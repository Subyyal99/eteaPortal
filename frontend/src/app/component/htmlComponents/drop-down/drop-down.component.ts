/**
 * This is our drop-down component, to be used through out our program
 */
import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { InputInfo } from "../../componentModel/input-info";
/**
 * This is our component file of drop down component
 */
@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"],
})
export class DropDownComponent
  implements OnInit, OnChanges, AfterContentChecked
{
  /**
   *This input function gets value change flag from our parent class of the type boolean
   */
  @Input() changeFlag: boolean;
  /**
   *this is the height of the dropdownlist
   */
  @Input() scrollHeight: string;
  /**
   *This input function gets data from our parent class of the type input info
   */
  @Input() inputInfo: InputInfo;
  /**
   *this variable recieves data from parent to show in drop down
   */
  @Input() data: any;
  /**
   * forcontrol for our radio buttons for model binding
   */
  formControl = new UntypedFormControl("", []);
  /**
   * emiiter when data is updated
   */
  @Output() updateData = new EventEmitter<string>();
  @Output() searchFor = new EventEmitter<object>();

  /**
   * This in an output from child class to parent class after the button is clicked
   */
  @Output() action = new EventEmitter();
  /**
   * This output function works for the enter button as it call out the submit function of our parent class
   */
  @Output() preSubmit = new EventEmitter();
  /**
   * submit call of the text box
   */
  @Output() submit = new EventEmitter();
  /**
   *
   * @param changeDetector detect any change
   */
  constructor(private changeDetector: ChangeDetectorRef) {}
  /**
   * ngOnInIt is an angular lifecycle function that run when we load our component or application
   */
  ngOnInit(): void {
    this.formControl.setValue(this.inputInfo.val);
    this.formControl.setValidators(
      this.inputInfo.validatorsInfo.map((item) => item.type)
    );
    this.formControl.updateValueAndValidity();
    this.formControl.valueChanges.subscribe((value) => {
      this.updateData.emit(value);
    });
  }
  /**
   * This function is used to check for error, if there is any error then it send out the error msg, if not then simply changes eroor flag to false.
   * @returns
   */
  getError() {
    var err = [];
    if (this.formControl.errors) {
      err = Object.keys(this.formControl.errors);
    }
    if (err.length > 0 && this.inputInfo.validatorsInfo.length > 0) {
      this.inputInfo.errorFlag = true;
      let val = this.inputInfo.validatorsInfo.find(
        (item) => item.type.name == err[0]
      );
      if (val) {
        return val.msg;
      } else {
        let val = this.inputInfo.validatorsInfo.find(
          (item) => item.name == err[0]
        );
        if (val) {
          return val.msg;
        }
      }
    } else {
      this.inputInfo.errorFlag = false;
    }
    return "";
  }
  /**
   * This function works for when we press enter to log in instead of using the login button and it call the submit function of the parent class.
   */
  onEnter() {
    this.preSubmit.emit();
  }
  /**
   * This function checks whether there is any change in the initial value, saves it and validates it.
   * @param changes This is a boolean type flag to check for changes in value.
   */
  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      if (changes.changeFlag && !changes.changeFlag.firstChange) {
        this.formControl.markAsDirty();
        this.formControl.updateValueAndValidity();
        this.submit.emit();
        // if (!this.change) {
        //   this.submit.emit();
        //   this.change = true;
        // }
      }
    });
  }
  /**
   * after content is changes this function check it
   */
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  /**
   *emits action after click
   */
  click() {
    this.action.emit();
  }
  search(event) {
    let searchData = {
      searchFor: event.filter,
      modelName: this.inputInfo.modelName,
    };
    this.searchFor.emit(searchData);
  }
}
