import { Injectable } from '@angular/core';
import { Soil } from './soil';

@Injectable({
  providedIn: 'root'
})
export class SoildataService {

  soilDataArray: Soil[]=[];
  constructor() { }

  staticSoilData():Soil[]{
    this.soilDataArray=[];
    this.soilDataArray.push(new Soil(1,"Pulses","Red Soil",45,20,5,7));
    this.soilDataArray.push(new Soil(2,"Paddy","Brown Soil",56,15,20,3));
    this.soilDataArray.push(new Soil(3,"SugarCane","Sandy Soil",10,5,15,17));
    this.soilDataArray.push(new Soil(4,"Banana","Red Soil",30,21,15,8));
    this.soilDataArray.push(new Soil(5,"Arecanut","Brown Soil",35,20,15,17));
    return this.soilDataArray;
  }
}
