import Image from 'next/image';

export default function About2() {
  return (
    <div className="about2">
      <div className="about2-img">
        <Image src="/about2.jpg" alt="about 2 image" className="about2-image" fill />
        <div className="about2-button">
          <a href="#">our story</a>
        </div>
      </div>
      <div className="about2-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat in dolores aliquid. Voluptate, ea!</p>
        <div className="about2-button">
          <a href="#">our story</a>
        </div>
      </div>
    </div>
  );
}
