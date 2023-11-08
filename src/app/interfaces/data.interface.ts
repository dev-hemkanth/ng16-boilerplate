export interface IDataTypeOperand {
  number: string;
  string: string;
  boolean: string;
  object: string;
  function: string;
}
export interface IPaginator {
  pages: IPaginatorPages,
  arrowKeyType: IPaginatorArrowKeyType,
  defaultProperties: IPaginatorDefaultProperties
}
export interface IPaginatorPages {
  pageValue: number | string;
  isPageSelected: boolean;
}
export interface IPaginatorArrowKeyType {
  next: string;
  prev: string;
}
export interface IPaginatorServiceProperties {
  totalRecords: number;
  reordsPerPage: number;
  currentPage: number;
}
export interface IPaginatorDefaultProperties {
  totalRecords: number;
  reordsPerPage: number;
  currentPage: number;
  maxPage: number;
}
export interface IPaginatorRecordsPerPage {
  totalRecordsCount: number;
  reordsPerPageCount: number;
}
export interface ITableMockRedords {
  name: string;
  location: string;
  number: string;
  address: string;
  date: string;
  code: string;
}