import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../modules/contact/contact.module';
import { UtilService } from './UtilService';
import { StorageService } from './storage-service';
import { Contacts } from './contacts';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}
  CONTACTS_KEY: string = 'contacts';

  public loadContacts(filterBy = null): Observable<Contact[]> {
    let contacts = this._getContacts();
    if (filterBy && filterBy.term) {
      contacts = this._filter(contacts, filterBy.term);
    }
    return of(this._sort(contacts));
  }
  private _getContacts(): Contact[] {
    let contacts = StorageService.load(this.CONTACTS_KEY);
    if (!contacts) {
      contacts = Contacts;
      StorageService.store(this.CONTACTS_KEY, contacts);
    }
    return contacts;
  }
  public getContactById(id: string): Observable<Contact> {
    let contacts = this._getContacts();
    const contact = contacts.find((contact) => contact._id === id);
    return of(contact);
  }

  public getEmptyContact(): Contact {
    return {
      name: '',
      email: '',
      phone: '',
    };
  }

  public deleteContact(contactId: string) {
    const contacts = this._getContacts().filter(
      (contact) => contact._id !== contactId
    );
    StorageService.store(this.CONTACTS_KEY, contacts);
    return of(this._sort(contacts));
  }

  public saveContact(contact: Contact) {
    return contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
  }

  private _updateContact(currContact: Contact) {
    const contacts = this._getContacts().map((contact) =>
      contact._id === currContact._id ? currContact : contact
    );
    StorageService.store(this.CONTACTS_KEY, contacts);
    return of(currContact);
  }

  private _addContact(contact: Contact) {
    contact._id = UtilService.makeId(10);
    const contacts = this._getContacts();
    contacts.push(contact);
    StorageService.store(this.CONTACTS_KEY, contacts);
    return of(contact);
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase();
    return contacts.filter((contact) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      );
    });
  }
}
