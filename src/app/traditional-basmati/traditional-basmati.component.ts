import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-traditional-basmati',
  templateUrl: './traditional-basmati.component.html',
  styleUrls: ['./traditional-basmati.component.scss']
})
export class TraditionalBasmatiComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 2, name: 'Length', weight: '7.53 mm Max' },
    { position: 3, name: 'Moisture Content ', weight: '14% Maximum' },
    { position: 4, name: 'Broken Grains ', weight: '4%' },
    { position: 5, name: 'Damage/Discolor ', weight: 'Nil' },
    { position: 6, name: 'Foreign Matter ', weight: 'Nil' },
    { position: 7, name: 'Taste ', weight: 'Sweet' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}