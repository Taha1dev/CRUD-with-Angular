import { AnimationDurations } from "@angular/material/core";
import { CustomValidator } from "./CustomValidator";
import { OperationType } from "./OperationType";
import { TargetType } from "./TargetType";
import * as moment from 'moment'
import { DateRule } from "./DateRule";
export class LocalDateTimeRule extends DateRule {
  override getNow(): Date {
    console.log("ayham2");
    return this.getValue((moment(Date(), 'YYYY-MM-DD hh:mm:ss')).toDate());
  }
}


