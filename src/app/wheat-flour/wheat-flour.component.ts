import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-wheat-flour',
  templateUrl: './wheat-flour.component.html',
  styleUrls: ['./wheat-flour.component.scss']
})
export class WheatFlourComponent implements  OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: '100% pure Sorted clean Basmati Rice' },
    { position: 2, name: 'Length', weight: '7.55 MM to 8.30 MM' },
    { position: 3, name: 'Moisture Content ', weight: '11-11.5 %' },
    { position: 4, name: 'Total Ash ', weight: '1.3-1.5 % Max' },
    { position: 5, name: 'Water Absorption', weight: '70% and above' },
    { position: 6, name: 'Gluten ', weight: '9-10%' },
    { position: 7, name: 'Crude Fiber', weight: '2.3-2.5%' },
    { position: 8, name: 'Alcoholic Acidity', weight: '0.08% max' },
    { position: 9, name: 'Acid Insoluble Ash', weight: '0.08-0.1% max' },
    { position: 10, name: 'Protein', weight: '11-12%' },
    { position: 11, name: 'Carbohydrates', weight: '73.0 gms' },
    { position: 12, name: 'Fats', weight: '1.70 gms' },
    { position: 13, name: 'Fibers', weight: '11.0 gms' },
    { position: 14, name: 'Minerals', weight: '1.80 gms' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}