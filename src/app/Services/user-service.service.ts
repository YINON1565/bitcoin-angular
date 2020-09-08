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
  // user: User = {
  //   name: 'yinon',
  //   coins: 100,
  //   moves: [],
  // };
  // getUser(): Observable<User> {
  //   return of(this.user);
  // }
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
    console.log(user, 'user');
    user.coins -= amount;
    const move : Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    console.log(move, ': Move');
    user.moves.unshift(move);
    StorageService.store(this.KEY_USER, user);
    return of(user);
  }

  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return this.http.get<Hero[]>(this.heroesUrl).pipe(
  //     tap((_) => this.log('fetched heroes')),
  //     catchError(this.handleError<Hero[]>('getHeroes', []))
  //   );
  //   // return of(HEROES);
  // }
}
