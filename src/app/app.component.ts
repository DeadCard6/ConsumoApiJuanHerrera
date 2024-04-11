import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { category } from './model/category';
import { ApiService } from './Service/ApiService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ConsumoApiJH';
  category? : category ;

  vector : number [] = [];

  constructor(private apiservice: ApiService) {} 
  
  public GetApi (){
    this.apiservice.getData().subscribe((data:category[])=>{console.log(data)});

  }
  
  ngOnInit(): void {
    this.GetApi();
  }
}
