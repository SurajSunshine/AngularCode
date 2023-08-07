import {Component,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NCSapp9';
  userlist:any;
  constructor(private viewContainer: ViewContainerRef) {}

  async loadAdmin() {
    this.viewContainer.clear();
    const { AdminlistComponent } = await import('./adminlist/adminlist.component'
      );
    this.viewContainer.createComponent(AdminlistComponent);

    // **If want to print at top use below method & comment out above :

    // if(!this.userlist){
    //   this.userlist=import ('./adminlist/adminlist.component').then(({AdminlistComponent})=>AdminlistComponent);
    // }
  }

  async loadUser() {
    this.viewContainer.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(UserlistComponent);

    // **If want to print at top use below method & comment out above :

    // if(!this.userlist){
    //   this.userlist=import ('./userlist/userlist.component').then(({UserlistComponent})=>UserlistComponent);
    // }
  }

  
}
