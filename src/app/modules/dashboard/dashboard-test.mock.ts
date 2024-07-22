import { ByNeighborhoodModel, DeliveryStatus, DriverModel } from "../../shared/state/application.model"

export const driversMock: Array<DriverModel> = [
    {
        driver: 'Carlos Pereira',
        deliveries: [
            {
                id: '1',
                document: '01021',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '5',
                document: '01025',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '9',
                document: '01029',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '13',
                document: '01033',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '17',
                document: '01037',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '21',
                document: '01041',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '25',
                document: '01045',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '29',
                document: '01049',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '33',
                document: '01053',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '37',
                document: '01057',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.DONE
            }
        ]
    },
    {
        driver: 'Carla Souza',
        deliveries: [
            {
                id: '2',
                document: '01022',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '6',
                document: '01026',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '10',
                document: '01030',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '14',
                document: '01034',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '18',
                document: '01038',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '22',
                document: '01042',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '26',
                document: '01046',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '30',
                document: '01050',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '34',
                document: '01054',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '38',
                document: '01058',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.FAILURE
            }
        ]
    },
    {
        driver: 'Maria Oliveira',
        deliveries: [
            {
                id: '3',
                document: '01023',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '7',
                document: '01027',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '11',
                document: '01031',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '15',
                document: '01035',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '19',
                document: '01039',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '23',
                document: '01043',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '27',
                document: '01047',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '31',
                document: '01051',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '35',
                document: '01055',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '39',
                document: '01059',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            }
        ]
    },
    {
        driver: 'João Silva',
        deliveries: [
            {
                id: '4',
                document: '01024',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '8',
                document: '01028',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '12',
                document: '01032',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '16',
                document: '01036',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '20',
                document: '01040',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '24',
                document: '01044',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '28',
                document: '01048',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '32',
                document: '01052',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '36',
                document: '01056',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '40',
                document: '01060',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            }
        ]
    }
]
export const neighborhoodsMock: Array<ByNeighborhoodModel> = [
    {
        neighborhood: 'Liberdade',
        deliveries: [
            {
                id: '1',
                document: '01021',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '8',
                document: '01028',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '15',
                document: '01035',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '22',
                document: '01042',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '29',
                document: '01049',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '36',
                document: '01056',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 1234',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Ana Clara'
                },
                status: DeliveryStatus.PENDING
            }
        ]
    },
    {
        neighborhood: 'Jardins',
        deliveries: [
            {
                id: '2',
                document: '01022',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '9',
                document: '01029',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '16',
                document: '01036',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '23',
                document: '01043',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '30',
                document: '01050',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '37',
                document: '01057',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Brasil, 1010',
                    neighborhood: 'Jardins',
                    city: 'São Paulo',
                    name: 'Pedro Lima'
                },
                status: DeliveryStatus.DONE
            }
        ]
    },
    {
        neighborhood: 'Jardim Paulista',
        deliveries: [
            {
                id: '3',
                document: '01023',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '10',
                document: '01030',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '17',
                document: '01037',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '24',
                document: '01044',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '31',
                document: '01051',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '38',
                document: '01058',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Pamplona, 567',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'João Mendes'
                },
                status: DeliveryStatus.FAILURE
            }
        ]
    },
    {
        neighborhood: 'Centro',
        deliveries: [
            {
                id: '4',
                document: '01024',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '11',
                document: '01031',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '18',
                document: '01038',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '25',
                document: '01045',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '32',
                document: '01052',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '39',
                document: '01059',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Liberdade',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua da Consolação, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Paula Silva'
                },
                status: DeliveryStatus.PENDING
            }
        ]
    },
    {
        neighborhood: 'Moema',
        deliveries: [
            {
                id: '5',
                document: '01025',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '12',
                document: '01032',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '19',
                document: '01039',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '26',
                document: '01046',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '33',
                document: '01053',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '40',
                document: '01060',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Paulista, 101',
                    neighborhood: 'Moema',
                    city: 'São Paulo',
                    name: 'Carlos Lima'
                },
                status: DeliveryStatus.DONE
            }
        ]
    },
    {
        neighborhood: 'Consolação',
        deliveries: [
            {
                id: '6',
                document: '01026',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '13',
                document: '01033',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '20',
                document: '01040',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '27',
                document: '01047',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '34',
                document: '01054',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Jardim Paulista',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Rua Vergueiro, 567',
                    neighborhood: 'Consolação',
                    city: 'São Paulo',
                    name: 'Ana Souza'
                },
                status: DeliveryStatus.DONE
            }
        ]
    },
    {
        neighborhood: 'Bela Vista',
        deliveries: [
            {
                id: '7',
                document: '01027',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '14',
                document: '01034',
                origin: {
                    address: 'Rua Augusta, 345',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa DEF'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.FAILURE
            },
            {
                id: '21',
                document: '01041',
                origin: {
                    address: 'Rua dos Pinheiros, 789',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa ABC'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.PENDING
            },
            {
                id: '28',
                document: '01048',
                origin: {
                    address: 'Rua das Flores, 123',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa XYZ'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.DONE
            },
            {
                id: '35',
                document: '01055',
                origin: {
                    address: 'Avenida Ibirapuera, 890',
                    neighborhood: 'Centro',
                    city: 'São Paulo',
                    name: 'Empresa GHI'
                },
                destination: {
                    address: 'Avenida Paulista, 456',
                    neighborhood: 'Bela Vista',
                    city: 'São Paulo',
                    name: 'Maria Souza'
                },
                status: DeliveryStatus.FAILURE
            }
        ]
    }
]



export const FailureExpectedMock = [
    {
        "name": "Carlos Pereira",
        "quantity": "1"
    },
    {
        "name": "Carla Souza",
        "quantity": "3"
    },
    {
        "name": "Maria Oliveira",
        "quantity": "2"
    },
    {
        "name": "João Silva",
        "quantity": "1"
    }
]


export const DriverExpectedMock = [
    {
        "name": "Carlos Pereira",
        "done": 5,
        "total": 10
    },
    {
        "name": "Carla Souza",
        "done": 3,
        "total": 10
    },
    {
        "name": "Maria Oliveira",
        "done": 3,
        "total": 10
    },
    {
        "name": "João Silva",
        "done": 5,
        "total": 10
    }
]


export const ByNeighborhoodExpectedMock = [
    {
        "name": "Liberdade",
        "total": 6,
        "done": 2
    },
    {
        "name": "Jardins",
        "total": 6,
        "done": 2
    },
    {
        "name": "Jardim Paulista",
        "total": 6,
        "done": 2
    },
    {
        "name": "Centro",
        "total": 6,
        "done": 2
    },
    {
        "name": "Moema",
        "total": 6,
        "done": 3
    },
    {
        "name": "Consolação",
        "total": 5,
        "done": 3
    },
    {
        "name": "Bela Vista",
        "total": 5,
        "done": 2
    }
]