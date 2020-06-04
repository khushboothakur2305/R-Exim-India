import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-puffed-poha',
  templateUrl: './puffed-poha.component.html',
  styleUrls: ['./puffed-poha.component.scss']
})
export class PUFFEDPOHAComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Carbs', weight: '24 g' },
    { position: 2, name: 'Fat', weight: '18 g' },
    { position: 3, name: 'Dietary Fiber', weight: '3 g' },
    { position: 4, name: 'Protein', weight: '3 g' },
    { position: 5, name: 'Sodium', weight: '1000 mg' },
    { position: 6, name: 'Calcium', weight: '1%' },
    { position: 7, name: 'Iron', weight: '8%' },
    { position: 8, name: 'Sugar', weight: '11 g' },
    { position: 9, name: 'Potassium', weight: '56 mg' },
    { position: 10, name: 'Vitamin c', weight: '5 %' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}