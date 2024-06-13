import { Component, Input, OnInit } from "@angular/core";
import { Message_Service } from "src/app/message.service";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent implements OnInit {
  displayedAvatars: any[];
  remainingAvatarCount: number;

  @Input() type: string;
  // avatarSize for sizing large or xlarge and empty for small
  @Input() avatarSize: string;
  @Input() avatars: any[];
  @Input() avatarsToShow: number;

  constructor(private messageService: Message_Service) {}

  ngOnInit(): void {
    this.displayedAvatars = [];
    if (this.avatarsToShow <= this.avatars.length) {
      for (let i = 0; i < this.avatarsToShow; i++) {
        this.displayedAvatars.push(this.avatars[i].imageUrl);
      }
    } else {
      this.messageService.addMessages(
        "error",
        "Error",
        "avatarsToShow cant be less than total avatars"
      );
    }
    this.remainingAvatarCount = this.avatars.length - this.avatarsToShow;
  }
}
