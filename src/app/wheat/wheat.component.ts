import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-wheat',
  templateUrl: './wheat.component.html',
  styleUrls: ['./wheat.component.scss']
})
export class WheatComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Color', weight: 'Brown' },
    { position: 2, name: 'Speciality', weight: 'Organic' },
    { position: 3, name: 'Moisture Content ', weight: '10-14% Max' },
    { position: 4, name: 'Style', weight: 'Dried' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}