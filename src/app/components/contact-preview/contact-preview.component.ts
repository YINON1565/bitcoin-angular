import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}

  ngOnInit(): void {}
}
