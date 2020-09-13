import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ContactService } from '../../Services/contact-service.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.loadContact();
  }

  // STATE :

  contact: Contact;

  // METHODS :
  loadContact(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      
      this.contactService
        .getContactById(contactId)
        .subscribe((contact) => (this.contact = contact));
    } else {
      this.contact = this.contactService.getEmptyContact()
    }
  }
  goBack(): void {
    // this.router.navigate(['/contact'])
    this.location.back();
  }
  onSaveContact() : void{
    this.contactService.saveContact(this.contact).subscribe((contactSaved)=> this.router.navigate([`/contact/${contactSaved._id}`]))
  }
  onRemoveContact(contactId : string): void {
    this.contactService.deleteContact(contactId).subscribe(_=> this.router.navigate(['/contact']))
  }
}
