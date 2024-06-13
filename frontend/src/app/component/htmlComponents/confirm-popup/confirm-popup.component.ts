import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-confirm-popup",
  templateUrl: "./confirm-popup.component.html",
  styleUrls: ["./confirm-popup.component.css"],
  providers: [ConfirmationService],
})
export class ConfirmPopupComponent implements OnInit, OnChanges {
  // Data need to come in object with target, message and icon in it.
  @Input() popupData: any;
  @Output() confirmationResult: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.confirm();
  }

  confirm() {
    this.confirmationService.confirm({
      target: this.popupData.target,
      message: this.popupData.message,
      icon: this.popupData.icon,
      accept: () => {
        this.confirmationResult.emit(true);
      },
      reject: () => {
        this.confirmationResult.emit(false);
      },
    });
  }
}
