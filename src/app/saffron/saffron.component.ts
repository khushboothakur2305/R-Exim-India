import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-saffron',
  templateUrl: './saffron.component.html',
  styleUrls: ['./saffron.component.scss']
})
export class SaffronComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: '100% pure Sorted clean Basmati Rice' },
    { position: 2, name: 'Length', weight: '7.55 MM to 8.30 MM' },
    { position: 3, name: 'Moisture Content ', weight: '13.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '2.00% Max' },
    { position: 5, name: 'Damage/Discolor ', weight: '1.00%' },
    { position: 6, name: 'Foreign Matter ', weight: '0.1% Max' },
    { position: 7, name: 'Polishing Grade ', weight: 'Double/Silky Polished ' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}