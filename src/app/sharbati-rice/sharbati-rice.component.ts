import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-sharbati-rice',
  templateUrl: './sharbati-rice.component.html',
  styleUrls: ['./sharbati-rice.component.scss']
})
export class SharbatiRiceComponent implements OnInit , AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Quality', weight: '100% pure Sorted clean ' },
    { position: 2, name: 'Length', weight: '7 mm+' },
    { position: 3, name: 'Moisture Content ', weight: '14.00% Max' },
    { position: 4, name: 'Broken Grains ', weight: '2.00% Max' },
    { position: 5, name: 'Damage/Discolor ', weight: '1.00%' },
    { position: 6, name: 'Foreign Matter ', weight: '0.2% Max' },
    { position: 7, name: 'Polishing Grade ', weight: 'Double/Silky Polished ' },
    { position: 8, name: 'Color ', weight: 'White/Creamy' },
    { position: 9, name: 'Taste', weight: 'Naturally Sweet' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }

  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
}