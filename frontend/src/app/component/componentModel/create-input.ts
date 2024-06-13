import { CustomValidatorsInfo } from "./customValidator-info";
import { OptionInfo } from "./option-info";
import { ValidatorsInfo } from "./validators-info";
/**
 * This is an export class of create input
 */
export class CreateInput {
  label: string;
  modelName: string;
  inputType: string;
  placeHolder: any;
  type: string;
  value?: string[];
  val: string;
  options?: OptionInfo[] = [];
  data?: any[];
  details?: string;
  validatorsInfo?: ValidatorsInfo[] = [];
  arrayTypeFlag?: any;
  token?: any;
  customValidator?: CustomValidatorsInfo;
}
