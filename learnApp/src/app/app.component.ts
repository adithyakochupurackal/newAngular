import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'learnApp';
  x = 16;
  y = 14;
  z = 6;

  sum(n: number, m: number){
    return n + m;
  }

  fibo(a : number){

    let fseries : number[] = [];
    let temp1 = 0;
    let temp2 = 1;


    for(let i=1;i<=a;i++){

      fseries.push(temp1);
      let newtemp = temp1+temp2;
      temp1 = temp2;
      temp2 = newtemp;
    }

    return fseries;
  }
}
