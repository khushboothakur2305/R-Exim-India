import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-honey',
  templateUrl: './honey.component.html',
  styleUrls: ['./honey.component.scss']
})
export class HoneyComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Energy', weight: '1,272 kJ (304 kcal)' },
    { position: 2, name: 'Carbohydrates', weight: '82.4 g' },
    { position: 3, name: 'Sugars', weight: '82.12 g' },
    { position: 4, name: 'Dietary fiber', weight: '0.2 g' },
    { position: 5, name: 'Fat', weight: '0 g' },
    { position: 6, name: 'Protein', weight: '0.3 g' },
    { position: 7, name: 'Riboflavin (B2)', weight: '3% 0.038 mg' },
    { position: 8, name: 'Niacin (B3)', weight: '1% 0.121 mg' },
    { position: 9, name: 'Pantothenic acid (B5)', weight: '1% 0.068 mg' },
    { position: 10, name: 'Vitamin B6', weight: '2% 0.024 mg' },
    { position: 11, name: 'Folate (B9)', weight: '1% 2 μg' },
    { position: 12, name: 'Vitamin C', weight: '1% 0.5 mg' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}