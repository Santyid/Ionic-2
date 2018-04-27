import { PostsProvider } from './../../providers/posts/posts';
import { posts } from './../../app/posts.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	posts: posts[];

	constructor(public navCtrl: NavController, private posts1: PostsProvider) {
		posts1.getPosts().subscribe((content) => {
			this.posts = content;
		});
	}

	goToSecondPage(post: posts): void {
		this.navCtrl.push('SecondPage', { currentItem: post });
	}
}
