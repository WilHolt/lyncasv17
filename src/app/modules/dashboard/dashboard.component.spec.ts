import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { provideStore } from '@ngxs/store';
import { ApplicationState } from '../../shared/state/application.state';
import { HttpClientModule } from '@angular/common/http';
import { ByNeighborhoodExpectedMock, DriverExpectedMock, FailureExpectedMock, driversMock, neighborhoodsMock } from './dashboard-test.mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, HttpClientModule],
      providers: [
        provideStore([ApplicationState]),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Populate Delivery Progress ByNeighborhood', () => {
    component.populateDeliveryProgressByNeighborhoodItems(neighborhoodsMock);
    expect(component.deliverProgressByBairroItems).toEqual(ByNeighborhoodExpectedMock);
  });

  it('should populate Delivery Progress By Driver ', () => {
    component.populateDeliveryProgressByDriverItems(driversMock);
    expect(component.deliveryProgressByDriverItems).toEqual(DriverExpectedMock);
  });

  it('should Populate Delivery Failure By Driver', () => {
    component.populateDeliveryFailureQuantityByDriverColumns(driversMock);
    expect(component.deliverFailureQuantityByDriverItems).toEqual(FailureExpectedMock);
  });


});
