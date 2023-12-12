import { AnimationDurations } from "@angular/material/core";
import { CustomValidator } from "./CustomValidator";
import { OperationType } from "./OperationType";
import { TargetType } from "./TargetType";
import * as moment from 'moment'
import { duration, getDefaultDuration } from "../models/durations.model";
export abstract class DateRule {

  value: Date | null = null;
  now: Boolean = false;
  // duration: duration = getDefaultDuration();
  duration: any;
  operation: OperationType | null = null;
  public getValue(value?: Date): any {
    console.log("2222222222222222222222222");
    if (!value)
      return this.now ? this.getValue(this.getNow()) : this.getValue()
    else if (value) {
      if (this.duration == null || this.operation == null) {
        return value;
      }
      return ((this.operation == OperationType.plus) ?
        moment(value).add(moment.duration(this.duration)).toDate()
        // (value.setSeconds(value.getSeconds() + this.duration.seconds), value.setMilliseconds(value.getMilliseconds() + this.duration.nanos))
        :
        moment(value).subtract(moment.duration(this.duration)).toDate())
      // (value.setSeconds(value.getSeconds() - this.duration.seconds), value.setMilliseconds(value.getMilliseconds() - this.duration.nanos)))
    }
  }
  abstract getNow(): Date;
}

