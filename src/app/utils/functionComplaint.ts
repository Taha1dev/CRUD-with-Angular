import { CustomValidator } from "../validator/CustomValidator";
import { Form } from "../Form";
import { FixedValidator } from "../validator/FixedValidator";
import { Field } from "../Field";
import { Step } from "../Step";
import { RequiredValidator } from "../validator/RequiredValidator";
import { InValidator } from "../validator/InValidator";
import { ApplyRule } from "../validator/ApplyRule";
import { TargetType } from "../validator/TargetType";
import { RegexValidator } from "../validator/RegexValidator";
import { EqualsValidator } from "../validator/EqualsValidator";
import { NumberValidator } from "../validator/NumberValidator";
import { OrValidator } from "../validator/OrValidator";
import { AndValidator } from "../validator/AndValidator";
import { FieldChoices } from "../FieldChoices";
import { DateRule } from "../validator/DateRule";
import { DateValidator } from "../validator/DateValidator";
import { LocalDateRule } from "../validator/LocalDateRule";
import { LocalDateTimeRule } from "../validator/LocalDateTimeRule";
import { DateTimeValidator } from "../validator/DateTimeValidator";

export const objectify = (payload: any) => {
  return JSON.parse(JSON.stringify(payload));
};
export function createValidator(this: any, json: any): CustomValidator {
  const applyRules = json?.applyRules?.map((applyRule: any) => {
    const applyRuleValidator = createValidator(applyRule.validator as any);
    return Object.assign(new ApplyRule(), { ...applyRule, type: applyRule.type as TargetType, validator: applyRuleValidator });
  });
  json.applyRules = applyRules;
  switch (json["@type"]) {
    case "required":
      return Object.assign(new RequiredValidator(), json) as CustomValidator;
    case "fixed":
      return Object.assign(new FixedValidator(), json) as CustomValidator;
    case "in":
      return Object.assign(new InValidator(), json) as CustomValidator;
    case "regex":
      return Object.assign(new RegexValidator(), json) as CustomValidator;
    case "equals":
      return Object.assign(new EqualsValidator(), json) as CustomValidator;
    case "number":
      return Object.assign(new NumberValidator(), json) as CustomValidator;
    case "or":
      return Object.assign(new OrValidator(), json) as CustomValidator;
    case "and":
      return Object.assign(new AndValidator(), json) as CustomValidator;
    case "date":
      const lessThan = json.lessThan && createDateRule(json.lessThan);
      const lessThanEqual = json.lessThanEqual && createDateRule(json.lessThanEqual);
      const largerThan = json.largerThan && createDateRule(json.largerThan);
      const largerThanEqual = json.largerThanEqual && createDateRule(json.largerThanEqual);
      const equal = json.equal && createDateRule(json.equal);

      return Object.assign(new DateValidator(), { ...json, lessThan: lessThan, lessThanEqual: lessThanEqual, largerThan: largerThan, largerThanEqual: largerThanEqual, equal: equal }) as CustomValidator;
    case "dateTime":
      const lessThanTime = json.lessThan && createDateRule(json.lessThan);
      const lessThanEqualTime = json.lessThanEqual && createDateRule(json.lessThanEqual);
      const largerThanTime = json.largerThan && createDateRule(json.largerThan);
      const largerThanEqualTime = json.largerThanEqual && createDateRule(json.largerThanEqual);
      const equalTime = json.equal && createDateRule(json.equal);

      return Object.assign(new DateTimeValidator(), { ...json, lessThan: lessThanTime, lessThanEqual: lessThanEqualTime, largerThan: largerThanTime, largerThanEqual: largerThanEqualTime, equal: equalTime }) as CustomValidator;
    default:
      throw new Error(`Unknown validator type: ${json["@type"]}`);
  }
}
export function createDateRule(json: any): DateRule {
  console.log(json);
  console.log("json");
  switch (json["@type"]) {
    case "dateRule":
      return Object.assign(new LocalDateRule(), json) as DateRule;
    case "dateTimeRule":
      return Object.assign(new LocalDateTimeRule(), json) as DateRule;
    default:
      throw new Error(`Unknown validator type: ${json["@type"]}`);
  }
}
export function deserializeForm(jsonData: any): Form[] {
  return jsonData.map((item: any) => {
    const steps = item.steps.map((step: any) => {
      const fields = step.fields.map((field: any) => {
        const validators = field.validator.map((validatorJson: any) => {
          return createValidator(validatorJson);
        });
        const availabilityValidators = field.availability?.map((availabilityJson: any) => {
          console.log("dfdf")
          return createValidator(availabilityJson);
        });
        const choices = field?.choices?.map((choice: any) => {
          const choicesAvailabilityValidators = choice.availability?.map((choicesAvailabilityJson: any) => {
            console.log(createValidator(choicesAvailabilityJson));
            console.log("mirna")
            return createValidator(choicesAvailabilityJson);
          });
          return Object.assign(new FieldChoices(), { ...choice, availability: choicesAvailabilityValidators })
        })
        return Object.assign(new Field(), { ...field, choices: choices, validator: validators, availability: availabilityValidators });
      });
      return Object.assign(new Step(), { ...step, fields });
    });
    return Object.assign(new Form(), { ...item, steps });
  });
}
