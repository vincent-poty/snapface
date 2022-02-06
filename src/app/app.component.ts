import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Fleurs',
        description: 'Belle vue d\'un jardin',
        imageUrl: 'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_190731452.webp?itok=D6Yv9kkF',
        createDate: new Date(),
        snaps: 60
      },
      {
        title: 'villa',
        description: 'maison de mes rêves.',
        imageUrl: 'https://realty-luxe.com/wp-content/uploads/2019/08/36195447_l-1920.jpg',
        createDate: new Date(),
        snaps: 180,
        location: 'Portugal'
      }
    ];
  }
} 
