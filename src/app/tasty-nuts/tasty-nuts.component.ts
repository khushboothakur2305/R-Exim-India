import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tasty-nuts',
  templateUrl: './tasty-nuts.component.html',
  styleUrls: ['./tasty-nuts.component.scss']
})
export class TastyNutsComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Energy ', weight: '586 Kcal' },
    { position: 2, name: 'Carbohydrate', weight: '32.25 g' },
    { position: 3, name: 'Total Fat ', weight: '42.2 g' },
    { position: 4, name: 'Saturated Fatty Acids ', weight: '10.2 g' },
    { position: 5, name: 'Monounsaturated Fatty Acids', weight: ' 17.43 g' },
    { position: 6, name: 'Polyunsaturated Fatty Acids  ', weight: ' 7.93 g' },
    { position: 7, name: 'Protein ', weight: '19.3 g' },
    { position: 8, name: 'Fiber', weight: '0.42 g' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}