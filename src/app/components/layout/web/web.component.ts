import { Component } from '@angular/core';
import { CPaginator } from 'src/app/constants';
import { TABLE_MOCK_DATA } from 'src/app/constants/mock-data.constants';
import { IPaginatorRecordsPerPage, IPaginatorServiceProperties, ITableMockRedords } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  /* #region variable initialization/declaration */
  tableMockData: ITableMockRedords[] = TABLE_MOCK_DATA;
  tableFinalData: ITableMockRedords[] = [];
  totalItemsCount: number = 0;
  paginatorPageProperties!: IPaginatorRecordsPerPage;

  navMenu: any[] = [
    {
      icon: 'bi bi-columns-gap', label: 'Dashboard',
    }, {
      icon: 'bi bi-building', label: 'Organizations'
    }, {
      icon: 'bi bi-houses', label: 'Renters'
    }, {
      icon: 'bi bi-people', label: 'Guests'
    }
  ];
  /* #endregion variable initialization/declaration */

  async ngOnInit() {
    await this.getTableRecords();
    this.totalItemsCount = this.tableMockData.length;
  }

  async getTableRecords(currentPage: number = CPaginator.defaultProperties.currentPage, recordsPerPage: number = CPaginator.defaultProperties.reordsPerPage) {
    let startIndex: number = (currentPage - 1) * recordsPerPage;
    let endIndex: number = (currentPage) * recordsPerPage;
    this.tableFinalData = this.tableMockData.slice(startIndex, endIndex);
  }

  setPaginatorPageProperties(event: any) {
    this.paginatorPageProperties = { totalRecordsCount: event?.totalItemCount, reordsPerPageCount: event?.itemPerPageCount }
  }

  async setFinalPageProperties(event: IPaginatorServiceProperties) {
    await this.getTableRecords(event?.currentPage, event?.reordsPerPage);
  }
}
