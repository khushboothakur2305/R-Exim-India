import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-pusa-basmati',
  templateUrl: './pusa-basmati.component.html',
  styleUrls: ['./pusa-basmati.component.scss']
})
export class PusaBasmatiComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: '100% pure , clean and sorted' },
    { position: 2, name: 'Length', weight: '8.00 MM to 8.30 MM' },
    { position: 3, name: 'Moisture Content ', weight: '13.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '2.00% Max' },
    { position: 5, name: 'Damage/Discolor ', weight: '1.00%' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}