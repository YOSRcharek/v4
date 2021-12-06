import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  route:string;
  ngOnInit(): void {
    this.route=this.activatedRoute.snapshot.params['backoffice'];
  }

}
