import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-cornflake-mixture',
  templateUrl: './cornflake-mixture.component.html',
  styleUrls: ['./cornflake-mixture.component.scss']
})
export class CornflakeMixtureComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Carbs', weight: '53 g' },
    { position: 2, name: 'Fat', weight: '36 g' },
    { position: 3, name: 'Colestrol', weight: '10 g' },
    { position: 4, name: 'Protein', weight: '7 g' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}