import { AddressPipe } from './address.pipe';

describe('AddressPipe', () => {
  let pipe: AddressPipe;
  beforeEach(() => {
    pipe = new AddressPipe();

  })

  it('create an instance', () => {
    expect(pipe).toBeInstanceOf(AddressPipe);
  });


  it('should transform address correctly', () => {
    const expected = 'Empresa ABC - Rua dos Pinheiros, 789 - Jardins, São Paulo'
    const result = pipe.transform([
      "Empresa ABC",
      "Rua dos Pinheiros, 789",
      "Jardins",
      "São Paulo"
    ])
    expect(result).toEqual(expected);
  });
});
