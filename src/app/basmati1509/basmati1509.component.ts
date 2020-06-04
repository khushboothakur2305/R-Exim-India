import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-basmati1509',
  templateUrl: './basmati1509.component.html',
  styleUrls: ['./basmati1509.component.scss']
})
export class Basmati1509Component implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Grain', weight: 'Long, thin and slender' },
    { position: 2, name: 'Length', weight: '7.55 MM to 8.30 MM' },
    { position: 3, name: 'Moisture Content ', weight: '13.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '2.00% Max' },
    { position: 5, name: 'Damage/Discolor ', weight: '0.50%' },
    { position: 6, name: 'Foreign Matter ', weight: '0.25% Max' },
    { position: 7, name: 'Chalky Grain ', weight: '3% Max' },
    { position: 8, name: 'Taste ', weight: 'Naturally Sweet' },
    { position: 9, name: 'Paddy Grains:', weight: 'Nil' },
    { position: 10, name: 'Red Streak:', weight: 'Nil' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}