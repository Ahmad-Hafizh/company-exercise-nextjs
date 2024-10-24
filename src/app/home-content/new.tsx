import NewCard from '../components/newCard';

export default function NewArrival() {
  return (
    <div className="new">
      <h2 className="subtitle">new arrivals</h2>
      <div className="carousel">
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
    </div>
  );
}
