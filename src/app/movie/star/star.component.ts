import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {

  @Input() rating: number;
  starPercent: string;

  ngOnChanges(): void {
      // Convert x out of 5 starts
      // to y out of 86px width
      this.starPercent = (this.rating * 86 / 5) + 'px';
      console.log("StarComponent -> ngOnChanges ->  this.starPercent",  this.starPercent)
  }

}
