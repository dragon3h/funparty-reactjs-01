import React from 'react';

const mascots = [
  {
    id: 1,
    name: 'Elf on the shelf',
    image: 'to be done',
    category: ['ChristmasMascots', 'RegularMascots'],
    label: ['Christmas', 'Human'],
    size: '1.6m - 1.9m',
    recommendedAge: 'adult',
    rentPrice: 80,
    purchasePrice: 300,
    sellingPrice: 420,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 2,
    name: 'Giant Panda',
    image: 'to be done',
    category: ['GiantMascots'],
    label: ['Animals'],
    size: '3m',
    recommendedAge: 'professional animator',
    rentPrice: 250,
    purchasePrice: 1300,
    sellingPrice: 2600,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 3,
    name: 'Woody',
    image: 'to be done',
    category: ['HalloweenMascots', 'HighRangeMascots'],
    label: ['Halloween', 'ToyStory'],
    size: '1.6m - 2m',
    recommendedAge: 'adult',
    rentPrice: 100,
    purchasePrice: 400,
    sellingPrice: 740,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 4,
    name: 'Santa',
    image: 'to be done',
    category: ['ChristmasMascots', 'HighRangeMascots'],
    label: ['Animals', 'Halloween'],
    size: '1.6m - 1.75m',
    recommendedAge: 'adult',
    rentPrice: 100,
    purchasePrice: 300,
    sellingPrice: 620,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  },
  {
    id: 5,
    name: 'Grenouille',
    image: 'to be done',
    category: ['DiscountMascots', 'HalloweenMascots'],
    label: ['Animals', 'Halloween'],
    size: '1.6m - 1.9m',
    recommendedAge: 'adult',
    rentPrice: 35,
    purchasePrice: 250,
    sellingPrice: 380,
    createdDate: '01-01-2018',
    changedDate: '19-03-2020',
  }
]

const Mascots = () => {
  const renderedMascots = mascots.map((mascot) => {
    return (
        <React.Fragment>
          <h3>{mascot.name}</h3>
        </React.Fragment>
    );
  });
  return (
      <div className="container">
        <h1>Mascots</h1>
        {renderedMascots}
      </div>
  );
};

export default Mascots;