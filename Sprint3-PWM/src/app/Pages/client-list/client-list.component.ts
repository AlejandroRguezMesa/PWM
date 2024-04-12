import { Component } from '@angular/core';
import {HeaderComponent} from "../../Components/header/header.component";
import {FilterComponent} from "../../Components/filter/filter.component";
import {FilterclientComponent} from "../../Components/filterclient/filterclient.component";
import {ClientcardComponent} from "../../Components/clientcard/clientcard.component";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    HeaderComponent,
    FilterComponent,
    FilterclientComponent,
    ClientcardComponent
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  openNav(): void {
    let filterShowed: boolean = true;
    if (filterShowed) {
      document.getElementById("mySidepanel")!.style.width = "80%";
      document.getElementById("filter-hamburger")!.innerHTML = "&#x2716";
      filterShowed = false;
    } else {
      document.getElementById("mySidepanel")!.style.width = "0";
      document.getElementById("filter-hamburger")!.innerHTML = "&#9776 Filtros";
      filterShowed = true;
    }
  }

  }

