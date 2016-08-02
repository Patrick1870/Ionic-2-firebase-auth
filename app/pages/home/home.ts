import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthData} from '../../providers/auth-data/auth-data';
import {LoginPage} from '../login/login';
import {AuthData} from '../../providers/auth-data/auth-data';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  	this.nav = nav;
  }

	logOut(){
	  this.authData.logoutUser().then(() => {
	    this.nav.rootNav.setRoot(LoginPage);
	  });
	}



}
