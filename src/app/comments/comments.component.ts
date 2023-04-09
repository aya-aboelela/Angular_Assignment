import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentService } from 'src/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  CommentsList: any = [];
  errorMessage: any;
  postId: any;
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get("id");

      this.commentService.GetCommentsByPostId(this.postId).subscribe({
        next: data => this.CommentsList = data,
        error: error => this.errorMessage = error
      });
    });
  }
}
