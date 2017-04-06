import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { FUNDRAISERS } from './mock-fundraisers';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FundraiserService {

  fundraisers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.fundraisers = angularFire.database.list('fundraisers');
  }

  getFundraisers() {
    return this.fundraisers;
  }

  addFundraiser(newFundraiser: Fundraiser) {
    this.fundraisers.push(newFundraiser);
  }

  getFundraiserById(fundraiserId: string){
    return this.angularFire.database.object('fundraisers/' + fundraiserId);
  }

}
