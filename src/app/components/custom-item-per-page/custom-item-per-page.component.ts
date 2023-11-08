import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CPaginator } from 'src/app/constants';

@Component({
  selector: 'app-custom-item-per-page',
  templateUrl: './custom-item-per-page.component.html',
  styleUrls: ['./custom-item-per-page.component.scss']
})
export class CustomItemPerPageComponent implements OnInit {
  /* #region variable initialization/declaration */
  perPageCounts: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  selectedCount: number = CPaginator?.defaultProperties?.reordsPerPage;
  totalItemsCount: number = CPaginator?.defaultProperties?.totalRecords;
  /* #endregion variable initialization/declaration */

  /* #region input/ouput/viewChild decorators */
  @Input() totalRecords: number = CPaginator?.defaultProperties?.totalRecords; // Total number of items to paginate
  @Output() pagePropertiesEmitter = new EventEmitter();
  /* #endregion input/ouput/viewChild decorators */

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalRecords'] != undefined) {
      this.totalItemsCount = changes['totalRecords'].currentValue || CPaginator?.defaultProperties?.totalRecords;
      if (this.totalItemsCount !== 0) this.pagePropertiesEmitter.emit({ totalItemCount: this.totalItemsCount, itemPerPageCount: this.selectedCount });
    }
  }

  setSelectedValue(pageCount: number = CPaginator?.defaultProperties?.reordsPerPage) {
    this.selectedCount = pageCount;
    this.pagePropertiesEmitter.emit({ totalItemCount: this.totalItemsCount, itemPerPageCount: this.selectedCount });
  }
}
