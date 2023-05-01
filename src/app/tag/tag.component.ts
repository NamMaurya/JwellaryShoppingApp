import { Component, OnInit } from '@angular/core';
import { JewellService } from '../services/jewells/jewell.service';
import { tag } from '../shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{

  constructor(private js: JewellService){}
  ngOnInit(): void {
    this.tags=this.js.getAllTag();
  }
  tags:tag[]=[];



}
