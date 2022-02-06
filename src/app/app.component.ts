import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Fleurs',
      'Belle vue d\'un jardin',
      'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_190731452.webp?itok=D6Yv9kkF',
      new Date(),
      6
    );
    this.myOtherSnap = new FaceSnap(
      'Villa',
      'maison de mes rêves.',
      'https://realty-luxe.com/wp-content/uploads/2019/08/36195447_l-1920.jpg',
      new Date(),
      10
    );
  }
}
