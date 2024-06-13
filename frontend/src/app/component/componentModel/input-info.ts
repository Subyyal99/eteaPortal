import { CustomValidatorsInfo } from "./customValidator-info";
import { OptionInfo } from "./option-info";
import { ValidatorsInfo } from "./validators-info";
/**
 * This is an export class of input info
 */
export class InputInfo {
  /**
   * it is a variable of type string
   */
  label: string;
  placeHolder: string;
  accessFrom: string;
  uploadLabel: string;
  submitLabel: string;
  /**
   * it is a variable of type string
   */
  modelName: string;
  /**
   * it is a variable of type string
   */
  type: string;
  /**
   * it is a flag of type boolean
   */
  errorFlag = false;
  // for enabling or disabling the search input from dropdown and multi select
  searchFilter = true;
  /**
   * it is a variable of type string
   */
  inputType: string;
  /**
   * it is an empty array of model validators info
   */
  customValidator: CustomValidatorsInfo;
  code: string;
  icon: string;
  scrollHeight: string;
  icon1: string;
  icon2: string;
  header: string;
  image: string;
  field: string;
  messageBody: string;
  //valueUsed in Checkbox only
  check_value: string[];
  //all other component uses val
  val: string;
  details: string;
  link: string;
  toolbarOptions: any[] = [];
  option: OptionInfo[] = [];
  validatorsInfo: ValidatorsInfo[] = [];
  color: string;
  number: number;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  id: string;
  contactListType: string;
  data: any[];
  disabled: boolean;
  flag: boolean;
  mask: any;

  //calendar properties
  minDate: any;
  maxDate: any;
  inLine: boolean;
  dateFormat: any;
  selectionMode: any;

  // This is for putting asterisk infront of labels
  required: boolean;
  // To  sohw / clear icon/button within the dropdown control
  showClear: any;

  // For uploader
  requestName: string;
  customUpload: boolean;
  maxFileSize: number;
  multipleUpload: string;
  uploadAccept: string;
  uploadData: any;
  showError: boolean;
  lazy: boolean;
}
