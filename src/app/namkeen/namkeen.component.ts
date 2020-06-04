import { Data } from './../interface/interface/data';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-namkeen',
  templateUrl: './namkeen.component.html',
  styleUrls: ['./namkeen.component.scss']
})
export class NamkeenComponent implements OnInit ,AfterViewInit {
  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Data[] = [
    { position: 1, name: 'Carbs', weight: '9gm' },
    { position: 2, name: 'Fat', weight: '12 gm' },
    { position: 3, name: 'Protein', weight: '2 g' },
    { position: 4, name: 'Sodium', weight: '150 mg' },
    { position: 5, name: 'Colestrol', weight: '10 mg' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  ngOnInit(): void {

  }
  
  ngAfterViewInit() {  this.dataSource.paginator = this.paginator;}
} 