import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any=[];
  errorMessage:any;
  // postId:any;
  // selectedId:any;
  constructor(private postService:PostsService,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    
    this.postService.GetAllPosts().subscribe({
      next:data=>this.posts = data,
      error:error=>this.errorMessage = error
    })

    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   this.selectedId=params.get("id");
    // })
  }
  GetAllPostComments(postId:any){
    this.router.navigate(["/posts",postId]);
  }




  
  // onSelect(post:any)
  // {
  //   //navigate to post details component and pass the id to it
  //   this.router.navigate(["/post",post.id]);
  // }

}
