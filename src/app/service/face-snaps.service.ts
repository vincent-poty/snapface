import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id : 1,
            title: 'Fleurs',
            description: 'Belle vue d\'un jardin',
            imageUrl: 'https://www.deco.fr/sites/default/files/styles/article_970x500/public/2019-06/shutterstock_190731452.webp?itok=D6Yv9kkF',
            createDate: new Date(),
            snaps: 60
        },
        {
            id: 2,
            title: 'villa',
            description: 'maison de mes rêves.',
            imageUrl: 'https://realty-luxe.com/wp-content/uploads/2019/08/36195447_l-1920.jpg',
            createDate: new Date(),
            snaps: 180,
            location: 'Portugal'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(FaceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}
