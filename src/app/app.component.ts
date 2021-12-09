import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AboutModalComponent} from "./about-modal/about-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {TermsModalComponent} from "./terms-modal/terms-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened!: boolean;
  title = 'jukebox-web';

  constructor(public dialog: MatDialog) {}

  // navigate(route: String) {
  //   console.log('navigate away');
  //   this.router.navigate([route]);
  // }

  openTermsModal() {
    const dialogRef = this.dialog.open(TermsModalComponent, {
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
