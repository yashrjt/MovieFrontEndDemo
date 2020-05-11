import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // if(('code' in this.route.snapshot.queryParams) && ('scope' in this.route.snapshot.queryParams))
    // {
    //   this.auth.googleAuth().subscribe((res)=>{
    //   console.log("HomeComponent -> ngOnInit -> res", res)

    //   },
    //   (err)=>{
    //   console.log("HomeComponent -> ngOnInit -> err", err)
        
    //   })
    // }
  }

}
