import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { Move } from '../interfaces/move';
import { StorageService } from './storage-service';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  KEY_USER = 'user';
  getUser(): Observable<User> {
    let user = StorageService.load(this.KEY_USER);
    return of(user);
  }

  signUp(name: string): Observable<User> {
    let user: User = {
      name,
      coins: 100,
      moves: [],
    };
    StorageService.store(this.KEY_USER, user);
    return of(user);
  }
  addMove(contact: Contact, amount: number): Observable<User> {
    let user: User;
    this.getUser().subscribe((u) => (user = u));
    user.coins -= amount;
    const move : Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    user.moves.unshift(move);
    StorageService.store(this.KEY_USER, user);
    return of(user);
  }
}
