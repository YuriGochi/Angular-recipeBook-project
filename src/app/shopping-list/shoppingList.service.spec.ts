/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListService } from './shoppingList.service';

describe('Service: ShoppingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListService]
    });
  });

  it('should ...', inject([ShoppingListService], (service: ShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
