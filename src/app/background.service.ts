import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private readonly map: Map<number, string> = new Map<number, string>();
  private readonly color$: Subject<number> = new Subject<number>();

  set(id: number, color: string): void {
    this.map.set(id, color);
    this.color$.next(id);
  }

  get(id: number): Observable<string> {
    return this.color$
      .pipe(
        filter(x => x === id),
        map(() => this.map.get(id)),
        distinctUntilChanged()
      );
  }
}
