import { posts } from './../../app/posts.interface';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
	urlPost = 'http://jsonplaceholder.typicode.com/posts';

	constructor(public http: HttpClient) {}

	getPosts() {
		return this.http.get<posts[]>(this.urlPost);
	}
}
