import NewCard from '../components/newCard';

export default function NewArrival() {
  const dataArrivals = [
    {
      id: 1,
      imgUrl: '/card-1.jpg',
      title: '911 GT3 RS',
      price: 300000,
    },
    {
      id: 2,
      imgUrl: '/card-2.jpg',
      title: 'Cayman GT 4 RS',
      price: 250000,
    },
    {
      id: 3,
      imgUrl: '/card-3.jpg',
      title: '918',
      price: 1500000,
    },
    {
      id: 4,
      imgUrl: '/card-4.jpg',
      title: 'Targa',
      price: 300000,
    },
  ];

  const printData = () => {
    const newArrayOfElement = dataArrivals.map((e) => {
      return <NewCard id={e.id} imgUrl={e.imgUrl} title={e.title} price={e.price} key={e.id} />;
    });
    return newArrayOfElement;
  };
  return (
    <div className="new">
      <h2 className="subtitle">new arrivals</h2>
      <div className="carousel">{printData()}</div>
    </div>
  );
}
