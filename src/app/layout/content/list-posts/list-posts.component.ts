import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../core/services/api/api-services.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  public setPost = [];

  constructor(private _api : ApiServicesService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this._api._urlApiAnother = 'https://jsonplaceholder.typicode.com/posts';
    return this._api.readData(true).subscribe(result => {
      this.setPost = result
    }, error => console.log(error));
  }

}
