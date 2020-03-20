import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWishComponent } from './my-wish/my-wish.component';



@NgModule({
  declarations: [MyWishComponent],
  imports: [
    CommonModule
  ],
  exports:[MyWishComponent]
})
export class WishlistModule { }
