import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITableMockRedords } from 'src/app/interfaces/data.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  public Action: any = {
    Edit: 'edit',
    Delete: 'delete',
    Print_Id: 'print_id'
  }

  @Input() currentPageMockRecords: ITableMockRedords[] = [];

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }


  constructor() { }

  IselectedAction(data: any, action: string) { }
}
