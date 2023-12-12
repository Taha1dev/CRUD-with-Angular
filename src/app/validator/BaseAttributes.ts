import { CustomValidator } from "./CustomValidator";


export abstract class BaseAttributes {
  availability: CustomValidator[] | undefined;
  personal: CustomValidator[] | undefined;
  hidden: CustomValidator[] | undefined;
  readonly: CustomValidator[] | undefined;
  abstract isValid(form: any, user: any): { [key: string]: any } | null;
  isAvailable(form: any, user: any): boolean {
    return this.availability == null || this.availability.length == 0 ||
      this.availability.filter(x => x?.isApplicable(form, user)).map(x => x?.getError(null, form, user) == null
      ).reduce((p, a) => p && a, true);
  }
  isPersonal(form: any, user: any): boolean {
    return this.personal == null || this.personal.length == 0 ||
      this.personal.filter(x => x?.isApplicable(form, user)).map(x => x?.getError(null, form, user) == null
      ).reduce((p, a) => p && a);
  }
  isHidden(form: any, user: any): boolean {
    return this.hidden == null || this.hidden.length == 0 ||
      this.hidden.filter(x => x?.isApplicable(form, user)).map(x => x?.getError(null, form, user) == null
      ).reduce((p, a) => p && a);
  }
  isReadOnly(form: any, user: any): boolean {
    return this.readonly == null || this.readonly.length == 0 ||
      this.readonly.filter(x => x?.isApplicable(form, user)).map(x => x?.getError(null, form, user) == null
      ).reduce((p, a) => p && a);
  }
}

