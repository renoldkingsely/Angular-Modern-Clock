import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modernclock';
  clock=""
  clockHandle: any;

  ngOnInit(){
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleTimeString();
    },1000);
  }
}

