import { Injectable } from '@angular/core';
import { IPaginatorPages, IPaginatorServiceProperties } from '../interfaces/data.interface';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  generatePagination(paginatorProperties: IPaginatorServiceProperties) {
    if (isNaN(paginatorProperties?.totalRecords) || isNaN(paginatorProperties?.reordsPerPage)) {
      throw new Error('Total and perPage params should be numbers');
    }

    const seperator: string = '...';
    let { totalRecords, reordsPerPage, currentPage = 1 } = paginatorProperties;
    const pages = Math.ceil(totalRecords / reordsPerPage);

    const maxNumberOfElements: number = 5;
    const firstPage: number = 1;
    const lastPage: number = pages;

    let startPage = Math.max(currentPage - Math.floor(maxNumberOfElements / 2), firstPage);
    
    if (startPage < 8 && lastPage < 8) startPage = firstPage + 1;
    let endPage = Math.min(startPage + maxNumberOfElements - 1, lastPage);
    const pagination = [];

    if (startPage > firstPage) {
      pagination.push(firstPage);
      if (startPage > firstPage + 1) pagination.push(seperator);
    }

    let consolidatedPage: number = endPage - startPage;
    if (consolidatedPage + 1 !== maxNumberOfElements && endPage > 7) {
      startPage = startPage - ((consolidatedPage === 2) ? consolidatedPage : consolidatedPage - 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    if (endPage < lastPage) {
      if (endPage < lastPage - 1) {
        pagination.push(seperator);
      }
      pagination.push(lastPage);
    }

    const filteredArrayWithIndices = pagination.map((element, index) => ({ element, index })) // Create objects with both element and index
      .filter((obj) => obj.element === seperator); // Filter based on the condition

    let finalPaginationResult: any[] = [...pagination];
    if (filteredArrayWithIndices.length === 1 && pagination.length > 7) {
      let seperatorIndex: number = filteredArrayWithIndices[0].index;
      if (seperatorIndex === 6) finalPaginationResult = pagination.filter((ele, index) => index !== seperatorIndex - 1);
      if (seperatorIndex === 1 && pagination.length > 7) finalPaginationResult = pagination.filter((ele, index) => index !== seperatorIndex + 1);
    } else if (filteredArrayWithIndices.length === 2) {
      let indexvalue: number = filteredArrayWithIndices[1].index;
      const indicesToSkip = [indexvalue - 1, indexvalue - maxNumberOfElements];
      finalPaginationResult = pagination.filter((element, index) => {
        // Check if the current index should be skipped
        return !indicesToSkip.includes(index);
      });
    }

    let paginatorPages: IPaginatorPages[] = finalPaginationResult.map((item) => ({ pageValue: item, isPageSelected: item === currentPage }));
    return paginatorPages;
  }
}
