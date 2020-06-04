import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-sugandha-rice',
  templateUrl: './sugandha-rice.component.html',
  styleUrls: ['./sugandha-rice.component.scss']
})
export class SugandhaRiceComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: 'Long-Grain Rice' },
    { position: 2, name: 'Length', weight: '6.90-7.00 mm' },
    { position: 3, name: 'Moisture Content ', weight: '12.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '2.00% Max' },
    { position: 5, name: 'Admixture', weight: '1.0% Max' },
    { position: 6, name: 'Color ', weight: 'White' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}