// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ContactModule { }

export class Contact {
  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public phone: string = ''
  ) {}

  setId?() {
    // Implement your own set Id
    // this._id = makeId()
  }
}
