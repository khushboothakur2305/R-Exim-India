import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-chakli',
  templateUrl: './chakli.component.html',
  styleUrls: ['./chakli.component.scss']
})
export class ChakliComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Carbs', weight: '17 g' },
    { position: 2, name: 'Fat', weight: '8 g' },
    { position: 3, name: 'Dietary Fiber', weight: '1 g' },
    { position: 4, name: 'Protein', weight: '2 g' },
    { position: 5, name: 'Sodium', weight: '277 mg' },
    { position: 6, name: 'Calcium', weight: '1%' },
    { position: 7, name: 'Iron', weight: '9%' },
    { position: 8, name: 'Vitamin C', weight: '4%' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}