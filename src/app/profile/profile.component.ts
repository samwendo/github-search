// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
   public profileSearch = 'samwendo';
   // public newUserName: string;
   repository: Repository;
   reporesults: any;
   userName: string;

 /* getUserProfile(name) {
    this.newUserName = '';
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) === ' ' || name.charAt(i) === '?' || name.charAt(i) === '/') {
      alert(`Not valid Username` );
      this.newUserName = 'samwendo';
      } else if (name.charAt(i) !== '' || name.charAt(i) !== '?' || name.charAt(i) !== '/' ) {
      this.newUserName = this.newUserName.concat(name.charAt(i));
      }
    }
    this.profileSearch = this.newUserName;
    this.ngOnInit();
  }*/ // This code also works but findProfile() is better

  constructor( public profileService: ProfileService ) {
   }
   findProfile() {
     this.profileService.updateProfile(this.userName);
     this.profileService.getProfile();
     this.user = this.profileService.user;
     this.profileService.getProfileRepo(this.userName);
     this.reporesults = this.profileService.otherRepo;
   }


  ngOnInit() {
   this.profileService.getProfile();
   this.user = this.profileService.user;
   this.profileService.getProfileRepo(this.userName);
   this.repository = this.profileService.repository;
   console.log(this.profileService.repository.name);
   // this.getRepositoryRequest.getProfileRepo(this.profileSearch);
} }

