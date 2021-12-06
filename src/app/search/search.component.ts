import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { HotelsService } from '../service/hotel.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private hotelservice:HotelsService) { }

  ngOnInit(): void {
  }

}
