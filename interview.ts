import { Component } from '@angular/core';
import { ApiService } from '@api/service';
@Component({
  selector: 'app-user-posts',
  template: `
    <h1>User name is: {{name}}</h1>
    <!-- list user posts here -->
  `,
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  name: any;
  posts = []
  constructor(
    apiService: ApiService
  ) { }
  ngOnInit() {
    this.apiService.getUser() // returns {name, id}
    this.apiService.getPostsByUserId(PASS_USER_ID_HERE) // returns posts array [{id, title, description}]
  }
}
