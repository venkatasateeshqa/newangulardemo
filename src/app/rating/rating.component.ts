import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() comments: string = '';
  
  @Output() ratingChange = new EventEmitter<number>();
  @Output() commentsChange = new EventEmitter<string>();

  onRatingChange() {
    this.ratingChange.emit(this.rating);
  }

  onCommentsChange() {
    this.commentsChange.emit(this.comments);
  }
}
