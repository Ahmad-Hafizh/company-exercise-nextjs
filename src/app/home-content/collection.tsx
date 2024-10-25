import CollectionCard from '../components/collectionCard';

export default function Collection() {
  return (
    <div className="collection">
      <h2 className="subtitle">all collection</h2>
      <div className="carousel-collection">
        <CollectionCard id="porsche" />
        <CollectionCard id="brabus" />
        <CollectionCard id="singer" />
        {/* <div className="card" id="porsche">
          <p>porsche</p>
        </div>
        <div className="card" id="brabus">
          <p>brabus</p>
        </div>
        <div className="card" id="singer">
          <p>singer</p>
        </div> */}
      </div>
    </div>
  );
}
