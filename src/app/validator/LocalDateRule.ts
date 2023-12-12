import * as moment from 'moment'
import { DateRule } from "./DateRule";
export class LocalDateRule extends DateRule {
  override getNow(): Date {
    console.log("ayham")
    console.log((moment(Date(), 'YYYY-MM-DD')).hour(0).minute(0).second(0).toDate())
    return this.getValue((moment(Date(), 'YYYY-MM-DD')).hour(0).minute(0).second(0).toDate());
  }

}


