import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListComponent } from '../delivery-list.component';
import { Store, provideStore } from '@ngxs/store';
import { ApplicationState } from '../../../shared/state/application.state';
import { HttpClientModule } from '@angular/common/http';
import { ArrayPendingMock, arrayFailureMock, arrayFilterbyNameMock, arraySuccessMock, testMockData } from './delivery-test.mock';

describe('DeliversListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryListComponent, HttpClientModule],
      providers: [
        provideStore([ApplicationState]),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show itemTitle correctly', async () => {
    const itemMock = {
      "id": "28",
      "name": "João Silva",
      "document": "01048",
      "originCostumer": "Empresa XYZ",
      "originAddress": "Rua das Flores, 123",
      "originCity": "São Paulo",
      "originNeighborhood": "Centro",
      "destinationCostumer": "Maria Souza",
      "destinationAddress": "Avenida Paulista, 456",
      "destinationCity": "São Paulo",
      "destinationNeighborhood": "Bela Vista",
      "status": "ENTREGUE"
    }
    expect(component.itemTitle(itemMock)).toEqual('#28 - Avenida Paulista, 456');
  });

  it('should show filter by name correctly', async () => {
    component.deliveryItems = testMockData;
    component.filterAction('joão')
    fixture.detectChanges();
    expect(component.filteredDeliveryItems).toEqual(arrayFilterbyNameMock);
  });


  it('should show filter by status PENDING', async () => {
    component.deliveryItems = testMockData;
    component.status = ['PENDENTE']
    component.handleFilters();
    fixture.detectChanges();
    expect(component.filteredDeliveryItems).toEqual(ArrayPendingMock);
  });

  it('should show filter by status SUCCESS', async () => {
    component.deliveryItems = testMockData;
    component.status = ['ENTREGUE']
    component.handleFilters();
    fixture.detectChanges();
    expect(component.filteredDeliveryItems).toEqual(arraySuccessMock);
  });

  it('should show filter by status FAILURE', async () => {
    component.deliveryItems = testMockData;
    component.status = ['INSUCESSO']
    component.handleFilters();
    fixture.detectChanges();
    expect(component.filteredDeliveryItems).toEqual(arrayFailureMock);
  });
});
