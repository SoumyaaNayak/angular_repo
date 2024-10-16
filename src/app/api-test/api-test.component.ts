import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit{
  data:any;
  constructor(private apiservice:ApiServiceService){}

  ngOnInit(): void {
    this.apiservice.getData().subscribe((response)=>{
      this.data=response;

    })

    
    
  }

}
