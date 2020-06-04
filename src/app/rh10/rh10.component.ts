import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-rh10',
  templateUrl: './rh10.component.html',
  styleUrls: ['./rh10.component.scss']
})
export class Rh10Component implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: '100% pure Sorted clean Basmati Rice' },
    { position: 2, name: 'Length', weight: '7.2-7.5MM' },
    { position: 3, name: 'Moisture Content ', weight: '14.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '3.00% Max' },
    { position: 5, name: 'Damage/Discolor ', weight: '2.00%' },
    { position: 6, name: 'Foreign Matter ', weight: 'Nil' },
    { position: 7, name: 'Polishing Grade ', weight: 'Double/Silky Polished ' },
    { position: 8, name: 'Admixture', weight: '5%' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}