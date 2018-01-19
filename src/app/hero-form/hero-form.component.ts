import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' ; 
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as _ from 'underscore';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  apiRoot: string = 'http://httpbin.org/get';
 //  objectKeys = Object.keys;
   val: any[];
  model: Hero[] = [];
  a: any = [] ;
//  val: [{
//     id: number,
//     name: string;
//     username: string;
//     email: string;
//  }];

  powers= [  'flying' , 'fighting' , 'swimming' , 'cloneing' ];
  // model = new Hero(41, 'spiderman' , this.powers[0] ,'blacksuite' );
 // model = new Hero();
  onSubmit(model) {
     console.log('the form value is' , model);
   // this.a = Array.of(model);
   let copy = Object.assign({}, model);
     this.a.push(copy);
     }
  //  getRequest() {
  //    let url = `${this.apiRoot}`;
  //   // this.http.get(url).subscribe(res => {this.val =  res['headers']; } );
  //   this.http.get(url).subscribe( res => console.log(res.text()) );
  //    // console.log(this.val);
  //  }
  // click() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //   // .map((response: Response) => response.json())
  //    .subscribe( data => { this.val = data.json(); });
  //    console.log('json data', this.val);
  // }
  delete(index) {
    this.val.splice(index , 1 );
    console.log('the value is deleted', index );
  }
constructor( private http: Http) { }

  ngOnInit() {

  }
}
