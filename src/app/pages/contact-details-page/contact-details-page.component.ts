import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactService } from '../../Services/contact-service.service';
import {User} from '../../interfaces/user'
import { Contact } from '../../interfaces/contact';
import { UserService } from 'src/app/Services/user-service.service';
import { Move } from 'src/app/interfaces/move';
@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadContact();
    this.loadUser()
  }

  // STATE :
  user : User;
  contact: Contact;
  // moves: Move[];

  // METHODS :
  loadUser() : void{
    this.userService.getUser().subscribe(user=> this.user = user)
  }
  loadContact(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactService
      .getContactById(contactId)
      .subscribe((contact) => (this.contact = contact));
  }
  goBack(): void {
    // this.location.back();
    this.router.navigate(['/contact'])
  }
  transferCoins(amount: number){
    this.userService.addMove(this.contact, amount).subscribe(user=> this.user = user)
  }

  
  public get moves() : Move[] {
    return this.user.moves.filter(move=> move.toId === this.contact._id)
    // return this.user.moves.filter(move=> move.toId === this.contact._id).filter((m,i)=> i < 3)
  }
  
}
