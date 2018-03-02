import { Component } from '@angular/core';

//import pages
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

import { MapPage } from '../map/map';
import { MembersPage } from '../members/members'; 
import { UserPage } from '../user/user';
import { LifeStoryPage } from '../life-story/life-story';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab0Root = LoginPage;
  tab1Root = UserPage;
  tab2Root = LifeStoryPage;
  tab3Root = GalleryPage;
  tab4Root = MembersPage;
  tab5Root = MapPage;

  
  constructor() {

  }
}
