'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="list-menu">
        <ul>
          <li>
            <Link href="/">shop</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>contact</li>
        </ul>
        <div className="mobile-menu">
          <Image src="/menu.png" alt="menu hamburger button" className="menu-mobile-button" fill />
        </div>
      </div>
      <Link href="/" className="nav-logo">
        <Image src="/porscheLogo.png" alt="porsche logo" fill />
      </Link>
      <div className="list-menu">
        <ul>
          <li>account</li>
          <li>search</li>
          <li>bag(0)</li>
        </ul>
        <div className="mobile-menu">
          <Image src="/cart.png" alt="cart button" className="menu-mobile-button" fill />
        </div>
      </div>
    </nav>
  );
}
