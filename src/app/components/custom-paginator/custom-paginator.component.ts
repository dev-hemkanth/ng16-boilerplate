import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CDataTypeOperand, CDevices, CLocalStorageKeys, CPaginator } from 'src/app/constants';
import { IPaginator, IPaginatorRecordsPerPage, IPaginatorPages, IPaginatorServiceProperties } from 'src/app/interfaces/data.interface';
import { LocalStoreService } from 'src/app/services';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit, OnChanges {
  /* #region variable initialization/declaration */
  pages: IPaginatorPages[] = []; // Array to hold pagination information
  currentPage: number = CPaginator.defaultProperties.currentPage; // Current page selected
  maxPage: number = CPaginator.defaultProperties.maxPage; // Maximum page number
  paginatorConst: IPaginator = CPaginator;
  userDevice: string = CDevices.mobile;
  itemsPerPageCount: number = CPaginator.defaultProperties.reordsPerPage;
  totalItemsCount: number = CPaginator.defaultProperties.totalRecords;
  /* #endregion variable initialization/declaration */

  /* #region input/ouput/viewChild decorators */
  @Input() pageProperties!: IPaginatorRecordsPerPage;
  @Output() finalPagePropertyEmitter = new EventEmitter();
  /* #endregion input/ouput/viewChild decorators */

  constructor(
    private localStoreService: LocalStoreService,
    private paginationService: PaginationService
  ) {
    let device: string = this.localStoreService.getLocalStorage(CLocalStorageKeys.deviceInfo) || '';
    if (device) this.userDevice = device;
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageProperties'] != undefined && changes['pageProperties']?.currentValue?.totalRecordsCount) {
      this.totalItemsCount = changes['pageProperties']?.currentValue?.totalRecordsCount || CPaginator.defaultProperties.totalRecords;
      this.itemsPerPageCount = changes['pageProperties']?.currentValue?.reordsPerPageCount || CPaginator.defaultProperties.reordsPerPage;
      if (Math.ceil(this.totalItemsCount / this.itemsPerPageCount) < this.currentPage) this.currentPage = 1;
      this.generatePagination();
    }
  }

  generatePagination() {
    if (this.totalItemsCount <= this.itemsPerPageCount) {
      // If totalItemsCount is less than or equal to itemsPerPageCount, display only one page.
      this.pages = (this.totalItemsCount === 0) ? [] : [CPaginator.pages] // Assuming the first page is selected.
      this.maxPage = CPaginator.defaultProperties.maxPage; // Set max to 1 as there's only one page.
    } else {
      let paginatorServiceProperties: IPaginatorServiceProperties = {
        totalRecords: this.totalItemsCount,
        reordsPerPage: this.itemsPerPageCount,
        currentPage: this.currentPage
      }
      this.pages = this.paginationService.generatePagination(paginatorServiceProperties);
      let currentPageValue: number | string = this.pages[this.pages.length - 1].pageValue;
      this.maxPage = ((typeof currentPageValue) === CDataTypeOperand.number) ? +(currentPageValue) : 1;
    }
    let finalPageProperties: IPaginatorServiceProperties = { currentPage: this.currentPage, reordsPerPage: this.itemsPerPageCount, totalRecords: this.totalItemsCount };
    this.finalPagePropertyEmitter.emit(finalPageProperties);
  }

  // Function to handle page change
  onPageChange(pageValue: number | string = 1): void {
    this.currentPage = (typeof pageValue === CDataTypeOperand.number) ? +(pageValue) : 1;
    this.generatePagination(); // Re-generate pagination after page change
  }

  // Function to handle previous and next page navigation
  onPrevNextChange(arrowKeyType: string = CPaginator.arrowKeyType.next): void {
    this.currentPage = (arrowKeyType === CPaginator.arrowKeyType.next) ? this.currentPage + 1 : this.currentPage - 1;
    this.generatePagination(); // Re-generate pagination after previous/next page change
  }
}
