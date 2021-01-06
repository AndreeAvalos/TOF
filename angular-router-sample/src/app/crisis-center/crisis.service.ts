import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    this.messageService.add('CrisisService: fetched crises');
    return of(CRISES);
  }

  getCrisis(id: any): Observable<Crisis> {
    this.messageService.add(`CrisisService: search ${id} in CRISES`)
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}