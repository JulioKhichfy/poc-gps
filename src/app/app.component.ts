import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
  BackgroundGeolocationEvents,
  BackgroundGeolocationCurrentPositionConfig,
  BackgroundGeolocationAuthorizationStatus,
} from '@ionic-native/background-geolocation/ngx';

declare var window;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  
  arr:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundGeolocation: BackgroundGeolocation) {}

  ngOnInit(){
    console.log("*** CONSTRUCTOR - calling the function initializeApp");
    //this.splashScreen.show();
    this.arr = [];
    this.initializeApp();
    this.subscribeEventPause();
    this.subscribeEventResume();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.configureAPP();
      console.log("*** END initializeApp");
    });
  }

  configureAPP(){
    let isAndroid: boolean = this.platform.is('android');
    console.log("*** Sou android ? " + isAndroid);
    if(isAndroid) {
      this.statusBar.styleBlackOpaque();
    }
    this.splashScreen.hide();
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      //interval: 5000,
      //activitiesInterval: 5000,
      notificationTitle: 'CCPD Rastreamento',
      notificationText: 'Habilitado'
    }

    this.backgroundGeolocation.configure(config).then(()=>{
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location:BackgroundGeolocationResponse) =>{
        var locationStr = localStorage.getItem("location");
        if(locationStr == null){
          this.arr.push(location)
        } else {
          var locationarr = JSON.parse(locationStr);
          this.arr = locationarr;
        }
        localStorage.setItem("location", JSON.stringify(this.arr));
      })
    })
    window.app = this;
  }

  private subscribeEventPause() {
    this.platform.pause.subscribe(() => {
      console.log("*** PAUSE");
    })
  }

  private subscribeEventResume() {
    this.platform.resume.subscribe(() => {
      console.log("*** RESUME");
    });
  }

  ngOnDestroy(){

  }

  

  

 
}
