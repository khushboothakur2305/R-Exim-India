import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-khakra',
  templateUrl: './khakra.component.html',
  styleUrls: ['./khakra.component.scss']
})
export class KhakraComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Carbs', weight: '18 g' },
    { position: 2, name: 'Fat', weight: '2 g' },
    { position: 3, name: 'Dietary Fiber', weight: '3 g' },
    { position: 4, name: 'Protein', weight: '5 g' },
    { position: 5, name: 'Sodium', weight: '300 mg' },
    { position: 6, name: 'Calcium', weight: '1%' },
    { position: 7, name: 'Iron', weight: '2%' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}