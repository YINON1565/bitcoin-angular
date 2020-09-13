import { Component, OnInit } from '@angular/core';

import {ContactService} from '../../Services/contact-service.service'
import {Contact} from '../../interfaces/contact'
import {ContactFilter} from '../../interfaces/contact-filter'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  // CREATED
  ngOnInit(): void {
    this.loadContact()
  }

  // STATE
  contacts: Contact[];
  filterBy : ContactFilter = {
    term: ""
  };

  // METHODS
  loadContact() : void{
    this.contactService.loadContacts(this.filterBy).subscribe((contacts)=> this.contacts = contacts)
  }
  onContactSearch(filterBy){
    this.filterBy = filterBy
    this.loadContact()
  }
}
