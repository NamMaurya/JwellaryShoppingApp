import { Component, OnInit } from '@angular/core';
import { JewellService } from '../services/jewells/jewell.service';
import { Jewells } from '../shared/models/jewells';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jewells:Jewells[]=[];

  constructor(private js:JewellService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.jewells=this.js.getAll().filter(jewell => jewell.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.jewells=this.js.getAllJewellsByTag(params['tag'])
      else
      this.jewells=this.js.getAll();

    })
  }
}
