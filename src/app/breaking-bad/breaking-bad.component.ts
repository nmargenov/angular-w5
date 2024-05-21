import { Component } from '@angular/core';
import { BreakingBadService } from '../breaking-bad.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-breaking-bad',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './breaking-bad.component.html',
  styleUrl: './breaking-bad.component.css'
})
export class BreakingBadComponent {
  constructor(private breakingBadService:BreakingBadService){}
  quote!:String;
  author!:String;

  onSubmit() {
    const quote = {author:this.author,quote:this.quote};
    this.quotes.unshift(quote);
  }

  quotes:Array<any>=[];

  ngOnInit(){
    this.get10quotes();
  }

  get10quotes(){
    this.breakingBadService.get10Quotes().subscribe(
      (response)=>{
        this.quotes=response;
        console.log(this.quotes);
      },(error)=>{
        console.log(error);
      }
    )
  }
}
