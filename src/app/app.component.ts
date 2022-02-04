import { Component, OnInit } from '@angular/core';
import { FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
       'Fleurs',
        'Belle vue d\'un jardin',
        new Date(),
        6,
        'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_190731452.webp?itok=D6Yv9kkF',
    );
  }
}
