import { Component ,  OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectTab: any;
  @ViewChild('tabs') tabs: IonTabs;
  constructor() {}
  setCurrentTab(event) {
    console.log(event);    
    this.selectTab = this.tabs.getSelected();
    console.log("selected tab",this.selectTab);
  }


  getIcon(){
    switch (true) {
      case this.selectTab=='tab1':return 'home';
      case this.selectTab=='tab2':return 'search';
      case this.selectTab=='tab3':return 'film';
       case this.selectTab=='tab4':return 'heart';
      case this.selectTab=='tab5':return 'person';
        
       
    }
  }
}
