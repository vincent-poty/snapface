import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonName: string;

  ngOnInit() {
    this.buttonName = 'Oh snap!';
  }

  onSnap() {
    if (this.buttonName === 'Oh snap!') {
      this.faceSnap.snaps++;
      this.buttonName = 'Oops unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonName = 'Oh snap!';
    }
  }
}

