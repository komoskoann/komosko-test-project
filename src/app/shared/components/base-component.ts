import { ComponentRef, Directive, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
	private _onDestroySubject: Subject<void> = new Subject();

	public isDestroyed = false;
	public componentDestroyed$: Observable<void> = this._onDestroySubject.asObservable();
	public dynamicComponents: ComponentRef<unknown>[] = [];

	public ngOnDestroy(): void {
		this._destroy();
	}

	private _destroy(): void {
		this.dynamicComponents.forEach((componentRef: ComponentRef<unknown>) => componentRef.destroy());

		this.dynamicComponents.length = 0;
		this.isDestroyed = true;

		this._onDestroySubject.next();
		this._onDestroySubject.complete();
	}
}
