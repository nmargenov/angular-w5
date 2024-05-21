import { Component } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsComponent {
  constructor(private dogsService: DogsServiceService){}

  dog:any;

  ngOnInit(){
    this.getNewImage();
  }

  getNewImage(){
    this.dogsService.getDog().subscribe(
      (response)=>{
        this.dog = response;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
