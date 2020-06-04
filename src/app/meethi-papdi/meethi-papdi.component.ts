import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-meethi-papdi',
  templateUrl: './meethi-papdi.component.html',
  styleUrls: ['./meethi-papdi.component.scss']
})
export class MeethiPapdiComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Energy', weight: '34 cal' },
    { position: 2, name: 'Protein', weight: '0.3 g' },
    { position: 3, name: 'Carbohydrates', weight: '0.9 g' },
    { position: 4, name: 'Fiber', weight: '0.1 g' },
    { position: 5, name: 'Fat', weight: '2.8 g' },
    { position: 6, name: 'Vitamin A', weight: '33.7 mcg' },
    { position: 7, name: 'Vitamin B3', weight: '0.1 mcg' },
    { position: 8, name: 'Vitamin C', weight: '0.2 mcg' },
    { position: 9, name: 'Folic Acid', weight: '1 mcg' },
    { position: 10, name: 'Calcium', weight: '2.7 mg' },
    { position: 11, name: 'Iron', weight: '0.1 mg' },
    { position: 12, name: 'Sodium', weight: '0.8 mg' },
    { position: 13, name: 'Potassium', weight: '8.6 mg' },    
    { position: 14, name: 'Zinc', weight: '0.1 mg' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}
