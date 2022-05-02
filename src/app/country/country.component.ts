import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';



export interface AppComponent {
  name: string;
  capital: string;
  subregion: string;
  region: string;
  borders: string
  flag: string;
  timezones: string

}


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,  AfterViewInit {
   data:any;
  displayedColumns: string[] = ['name','capital','subregion','region','borders','flag'];
  dataSource :any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    
    }
  constructor(private user: UserService, private rout: Router) { 
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.dataSource= new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 
 
 

  
  submit = new Set<AppComponent>();
  submitss(row:any){
    console.log(row);
   this.rout.navigate(['/details',row.name])
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
    console.log(this.dataSource)
    console.log(this.dataSource)
    if (this.dataSource.paginator) {
      console.log(this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
    }
    
    
  
  }
  ngOnInit(): void {
   
  }
  }



