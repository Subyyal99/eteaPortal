import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectorRef,
  ViewChild,
} from "@angular/core";
import Quill from "quill";
import { InputInfo } from "../../componentModel/input-info";
import { UntypedFormControl } from "@angular/forms";
import { Editor } from "primeng/editor";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
})
export class EditorComponent implements OnInit {
  text: any;
  @Input() EditorType: string;
  @Input() toolbarOptions: any[] = [];
  @Output() EditorText = new EventEmitter();
  @Input() inputInfo: InputInfo;

  /**
   *This input function gets value change flag from our parent class of the type boolean
   */
  @Input() changeFlag: boolean;
  /**
   * This output function send the updated data back to our parent class
   */
  @Output() updateData = new EventEmitter<string>();
  /**
   * This output function works for the enter button as it call out the submit function of our parent class
   */
  @Output() preSubmit = new EventEmitter();
  /**
   * submit call of the text box
   */
  @Output() submit = new EventEmitter();

  formControl = new UntypedFormControl("", []);
  /**
   *
   * @param changeDetector detect any change
   */


  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.inputInfo, this.changeFlag);
    if (this.inputInfo.val) {
      this.formControl.setValue(this.inputInfo.val);
    }
    if (this.inputInfo.validatorsInfo) {
      this.formControl.setValidators(
        this.inputInfo.validatorsInfo.map((item) => item.type)
      );
    }

    this.formControl.updateValueAndValidity();
    this.formControl.valueChanges.subscribe((value) => {
      this.updateData.emit(value);
    });
    // this.toolbarOptions = [
    //   ["bold", "italic", "underline", "strike"], // Text formatting
    //   ["link", "image", "video"], // Embeds
    //   [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
    //   [{ font: [] }], // Font family
    //   [{ align: [] }], // Text alignment
    //   ["blockquote", "code-block"], // Blocks
    //   [{ list: "ordered" }, { list: "bullet" }], // Lists
    //   [{ script: "sub" }, { script: "super" }], // Subscript/superscript
    //   [{ indent: "-1" }, { indent: "+1" }], // Indentation
    //   [{ direction: "rtl" }], // Text direction
    //   [{ color: [] }, { background: [] }], // Text/Background color
    //   [{ size: ["small", false, "large", "huge"] }], // Font size
    //   ["clean"],
    // ];
    // setTimeout(() => {
    //   const editor = new Quill("#editor", {
    //     modules: {
    //       toolbar: this.inputInfo.toolbarOptions,
    //     },
    //     theme: "snow",
    //   });
    //   editor.on("text-change", () => {
    //     this.applyTextChange();
    //   });
    // }, 2000);
  }

  applyTextChange() {
    // console.log("here", this.text);
    this.EditorText.emit(this.text);
  }
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
    if (changes.changeFlag && !changes.changeFlag.firstChange) {
      this.formControl.markAsDirty();
      this.formControl.updateValueAndValidity();
      this.submit.emit();
    }
  }
  /**
   * after content is changes this function check it
   */
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
