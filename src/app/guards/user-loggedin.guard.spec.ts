import { TestBed } from '@angular/core/testing';

import { UserLoggedinGuard } from './user-loggedin.guard';
import { RouterModule } from '@angular/router';

describe('UserLoggedinGuard', () => {
  let guard: UserLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterModule.forRoot([])]
    });
    guard = TestBed.inject(UserLoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
