import { CustomValidator } from "./CustomValidator";
import { TargetType } from "./TargetType";

export class ApplyRule {

  key: string = '';
  type: TargetType | null = null;
  validator: CustomValidator | null = null;

}

