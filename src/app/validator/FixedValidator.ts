
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
export class FixedValidator extends CustomValidator {
    result: boolean | null = null;
    constructor() {
        super();
    }
    override getError(control: AbstractControl<any, any>, form: any, user: any): { [key: string]: any } | null {
        return this.result ? null : {
            res: this.message
        };
    }
}
