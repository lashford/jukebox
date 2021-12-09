import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AboutModalComponent} from "../about-modal/about-modal.component";
import {ContactModalComponent} from "../contact-modal/contact-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openContactModal() {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAboutModal() {
    const dialogRef = this.dialog.open(AboutModalComponent,{
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
