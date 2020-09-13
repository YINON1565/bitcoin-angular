import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContactFilter } from '../../interfaces/contact-filter';

@Component({
  selector: 'contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss'],
})
export class ContactSearchComponent implements OnInit {
  constructor() {}

  // STATE :

  @Input() filterBy: ContactFilter = { term: '' };
  @Output() onContactSearch = new EventEmitter<ContactFilter>();

  ngOnInit(): void {}
}
