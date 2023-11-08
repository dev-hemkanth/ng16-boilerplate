import {
  IDataTypeOperand, IPaginator, IPaginatorArrowKeyType, IPaginatorDefaultProperties, IPaginatorPages
} from "../interfaces/data.interface"

export const CLocalStorageKeys = {
  deviceInfo: '_D_I_',
}
export const CDevices = {
  mobile: 'mobile',
  web: 'web'
}
export const CDataTypeOperand: IDataTypeOperand = {
  number: "number",
  string: "string",
  boolean: "boolean",
  object: "object",
  function: "function"
}
const CPaginatorPages: IPaginatorPages = {
  pageValue: 1,
  isPageSelected: true,
}
const CPaginatorArrowKeyType: IPaginatorArrowKeyType = {
  next: 'next',
  prev: 'prev'
}
const CPaginatorDefaultProperties: IPaginatorDefaultProperties = {
  totalRecords: 0,
  reordsPerPage: 10,
  currentPage: 1,
  maxPage: 1
}
export const CPaginator: IPaginator = {
  pages: CPaginatorPages,
  arrowKeyType: CPaginatorArrowKeyType,
  defaultProperties: CPaginatorDefaultProperties
}