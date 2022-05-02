import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private act:ActivatedRoute,private user: UserService) { }

  name:any;
  ngOnInit(): void {
    this.act.params.subscribe(name=>{
      console.log(name['name'])
      this.user.getdata1(name['name']).subscribe(name=>{
        console.log(name)
        this.name=name
      })
      })
    }

 
}
