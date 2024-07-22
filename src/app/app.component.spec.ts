import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { provideStore } from '@ngxs/store';
import { ApplicationState } from './shared/state/application.state';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    } as ActivatedRoute;

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideStore([ApplicationState]),
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideRouter([
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          },
          {
            path: 'dashboard',
            loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
          },
          {
            path: 'entregas',
            loadComponent: () => import('./modules/delivery-list/delivery-list.component').then((c) => c.DeliveryListComponent),
          }
        ]),]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render layout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const layout = fixture.elementRef.nativeElement.querySelector('lcs-layout')
    expect(layout).toBeTruthy();
  });


  it('should render dashboard', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('dashboard');
    const fixture = harness.fixture;
    fixture.detectChanges();
    const layout = fixture.elementRef.nativeElement.querySelector('router-outlet')
    expect(layout).toBeTruthy();
  });

  it('should render delivery list', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('entregas');
    const fixture = harness.fixture;
    fixture.detectChanges();
    const layout = fixture.elementRef.nativeElement.querySelector('lcs-delivery-list')
    expect(layout).toBeTruthy();
  });
});
