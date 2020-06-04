import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dry-kachori',
  templateUrl: './dry-kachori.component.html',
  styleUrls: ['./dry-kachori.component.scss']
})
export class DryKachoriComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Fat', weight: '6g' },
    { position: 2, name: 'Sodium', weight: '210 mg' },
    { position: 3, name: 'Carbohydrates', weight: '13 g' },
    { position: 4, name: 'Dietary Fiber', weight: '2 g' },
    { position: 5, name: 'Sugars', weight: '4 g' },
    { position: 6, name: 'Protein', weight: '2 g' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}