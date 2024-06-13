import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { InputInfo } from "../../componentModel/input-info";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  uploadedFiles = [];
  url: SafeUrl;
  hasFilesFlag: boolean = false;
  accessFrom: string;
  @Input() inputInfo: InputInfo;
  @Input() changeFlag: boolean;
  @Output() dataReady = new EventEmitter<any>();
  @Output() submit = new EventEmitter();
  @Input() clear: boolean = false;

  @ViewChild("fileUpload") fileUpload!: ElementRef;

  constructor(protected sanitizer: DomSanitizer, private renderer: Renderer2) {}

  ngOnInit(): void {}

  handleOnSelect(event) {
    this.uploadedFiles = [];

    if (!this.inputInfo.multipleUpload) {
      if (event.currentFiles[0].type.includes("image")) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
          event.currentFiles[0].objectURL.changingThisBreaksApplicationSecurity
        );
      }
      let data = {
        preview: this.url,
        image: event,
      };
      this.hasFilesFlag = true;
      this.uploadedFiles.push(data);
      this.dataReady.emit(data);
    } else if (
      this.inputInfo.multipleUpload === "multiple" ||
      this.inputInfo.multipleUpload === "true"
    ) {
      event.currentFiles.forEach((file) => {
        if (!file.objectURL) {
          this.getImageBlob(file);
        }
        this.uploadedFiles.push(file);
      });
      this.dataReady.emit(this.uploadedFiles);
      this.hasFilesFlag = true;
    }
  }

  getImageBlob(file) {
    let fileType = this.getFileType(file);
    const imageUrl = `assets/images/file_icons/${fileType}.png`;
    // this.addImageIfNameMatches(file.name, imageUrl);

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const safeUrl: SafeUrl =
          this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        file.objectURL = safeUrl;
        // adding image to show
        this.addImageIfNameMatches(file.name, imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }

  addImageIfNameMatches(fileName: string, imageUrl: string) {
    const fileUploadElement = this.fileUpload.nativeElement;
    const fileUploadRows =
      fileUploadElement.querySelectorAll(".p-fileupload-row");

    fileUploadRows.forEach((row: Element) => {
      const fileuploadFilenameElement = row.querySelector(
        ".p-fileupload-filename"
      );

      if (
        fileuploadFilenameElement &&
        fileuploadFilenameElement.textContent?.trim() === fileName
      ) {
        const emptyDiv =
          fileuploadFilenameElement?.previousElementSibling as HTMLElement;

        const imgElement = this.renderer.createElement("img");
        this.renderer.setAttribute(imgElement, "src", imageUrl);
        this.renderer.appendChild(emptyDiv, imgElement);
      }
    });
  }

  getFileType(file) {
    const dotIndex = file.name.lastIndexOf(".");
    if (dotIndex !== -1) {
      return file.name.substring(dotIndex + 1).toLowerCase();
    }
    return "";
  }

  handleOnClear(event) {}

  handleOnRemove(event) {
    this.uploadedFiles = this.uploadedFiles.filter(
      (obj) => event.file.name !== obj.name
    );
    this.dataReady.emit(this.uploadedFiles);
    if (this.uploadedFiles.length <= 0) {
      this.hasFilesFlag = false;
    } else {
      this.hasFilesFlag = true;
    }
  }

  clearUploadedFile(file, index) {}

  getError() {
    if (this.inputInfo.validatorsInfo.length > 0) {
      this.inputInfo.errorFlag = true;
      if (this.uploadedFiles.length > 0) {
        this.inputInfo.errorFlag = false;
      } else {
        return this.inputInfo.validatorsInfo[0].msg;
      }
    } else {
      this.inputInfo.errorFlag = false;
    }
    return "";
  }
  ngOnChanges(changes: SimpleChanges) {
    this.inputInfo.flag = false;
    setTimeout(() => {
      if (changes.changeFlag && !changes.changeFlag.firstChange) {
        this.inputInfo.showError = true;
        this.getError();
        this.submit.emit();
      }
    });
  }
}
