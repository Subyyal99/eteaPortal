import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  public confirmPopupData;

  // This is an input from the parent class containig our card's type
  @Input() type: string;
  // card components
  @Input() cardHeader: string;
  @Input() cardSubHeader: string;
  @Input() cardPara: string;
  @Input() cardImage: string;
  @Input() cardFooter: string;
  @Input() cardFooterFlag: boolean;
  @Input() buttons: boolean;
  @Input() cardEmail: string;
  @Input() cardNumber: string;
  @Input() cardLocation: string;
  @Input() avatarImages: any;
  @Input() cardId: number;
  // avatars to show
  @Input() avatarsToShow: number;

  //  This in an output from child class to parent class after the button is clicked

  @Output() cardButton = new EventEmitter();
  // styles input
  @Input() cardBackground: boolean;

  constructor() {}

  ngOnInit(): void {}

  buttonClicked(value, id) {
    this.cardButton.emit({ value, id });
  }

  onClick(event) {
    this.confirmPopupData = {
      target: event.target,
      message: "Are you sure that you want to delete?",
      icon: "pi pi-trash",
    };
  }

  onConfirmationResult(value, id, confirm) {
    this.cardButton.emit({ value, id, confirm });
  }
}
