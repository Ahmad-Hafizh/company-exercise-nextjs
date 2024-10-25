'use client';
import About from './home-content/about';
import NewArrival from './home-content/new';
import About2 from './home-content/about2';
import Collection from './home-content/collection';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>
          new
          <br />
          collection
        </h1>
        <div className="shop-button">
          <a href="#">shop</a>
        </div>
      </div>
      <div className="container">
        <About />
        <NewArrival />
        <About2 />
        <Collection />
        <Footer />
      </div>
    </>
  );
}
