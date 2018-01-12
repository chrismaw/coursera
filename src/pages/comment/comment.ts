import { Component, Inject } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import {Dish} from "../../shared/dish";
import {DishProvider} from "../../providers/dish/dish";
import {Comment} from "../../shared/comment";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentForm: FormGroup;
  dish: Dish;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              @Inject(FormBuilder) fb: FormBuilder) {

      this.commentForm = fb.group({
          "rating": [5, Validators.required],
          "author": ['', Validators.required],
          "comment": ['', Validators.required],
          "date": new Date().toISOString()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }
  // addComment() {
  //     let comm = this.comment.value;
  //     this.comm.push
  //   }
  onSubmit(){
      console.log(this.commentForm.value);
      this.viewCtrl.dismiss(this.commentForm.value);
  }
}
