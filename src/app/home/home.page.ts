import { Component, OnDestroy, OnInit } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy{
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  
  anime:string = "_" ;
  intervalID:any ;
  constructor( private geolocation: Geolocation) {}
  
  ngOnInit(): void {
    let options:GeolocationOptions = {
      timeout: 3000, 
      enableHighAccuracy: true, 
      maximumAge: 3600
    };

    this.intervalID = setInterval( () => {
      this.getCurrentCoordinates(options)
    },5000);

  }

  // use geolocation to get user's device coordinates
  getCurrentCoordinates(options) {
    this.geolocation.getCurrentPosition(options).then((resp) => {
      
      console.log(resp)
      
      if(this.anime === "__") this.anime = "|";
      else this.anime ="__";

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

     }).catch((error) => {
       console.log('Error getting location', error);
       alert('Error getting location'+ JSON.stringify(error));
     });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}