
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import * as mime from 'mime';
export class FileValidator extends CustomValidator {
  minSize: number | null = null;
  maxSize: number | null = null;
  mimeTypes: string[] = [];

  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return (control.value
      && (this.minSize == null || control.value > this.minSize) && (this.minSize == null || control.value > this.minSize) && this.checkTtype(control.value)) ? null : {
      res: this.message
    };
  }
  checkTtype(value: any): boolean {
    if (this.mimeTypes == null || this.mimeTypes.length == 0) return true;

    try {
      // const mime=value.fileData.rawFile.type;
      const mime = value.type;
      console.log(mime);
      return this.mimeTypes.includes(mime);
    }
    catch (error) {
      console.error;
      return false;
    }
    // Tika tika = new Tika();
    // try {
    //     const mime:string = tika.detect(new ByteArrayInputStream(value));
    //     return this.mimeTypes.contains(mime);
    // } catch (IOException e) {
    //     log.warn("Error detecting mime type", e);
    //     return false;
    //
  }
}
