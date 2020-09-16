import { Injectable } from '@angular/core';
import jsSHA from 'jssha';

@Injectable({
  providedIn: 'root'
})
export class EncryptionServiceService {
  constructor() {
  }

  // tslint:disable-next-line:typedef
  public getHashFrom(from: string) {
    const hash = new jsSHA('SHA-1', 'TEXT');
    hash.update(from);
    return hash.getHash('B64');
  }
}
