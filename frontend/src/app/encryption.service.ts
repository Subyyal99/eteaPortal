import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class EncryptionService {
  private key = CryptoJS.enc.Utf8.parse("MyM@gicalKey");
  private iv = CryptoJS.enc.Utf8.parse("MyM@gicalKey");

  encryptUsingAES256(text): any {
    var encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(text),
      this.key,
      {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  }
  decryptUsingAES256(decString) {
    var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  constructor() {}
}
