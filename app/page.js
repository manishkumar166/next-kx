import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Everyday Canvas Tote",
    category: "Carry goods",
    price: "$38",
    image: "/products/canvas-tote.svg",
    alt: "Natural canvas tote with a simple embroidered botanical mark",
    label: "A daily favorite",
  },
  {
    name: "Sunday Stoneware Vase",
    category: "Objects for home",
    price: "$54",
    image: "/products/ceramic-vase.svg",
    alt: "Hand-shaped warm beige ceramic vase with leafy stems",
    label: "Made in small batches",
  },
];

export default function Home() {
  return (
    <main className="storefront">
      <div className="announcement">
        Thoughtful things, made to be kept <span aria-hidden="true">✳</span> Free
        shipping on orders over $75
      </div>

      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="KX Goods home">
          kx<span>goods</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="#collection">Collection</Link>
          <Link href="#story">Our approach</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link className="header-cta" href="#collection">
          Find your everyday <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Objects for a considered life</p>
          <h1 id="hero-title">
            A little more
            <br />
            <em>thoughtful.</em>
          </h1>
          <p className="hero-description">
            Useful, beautiful things for the everyday. Made with care, chosen to
            stay, and ready to make the ordinary feel a little special.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#collection">
              Explore the collection <span aria-hidden="true">↘</span>
            </Link>
            <Link className="text-link" href="#story">
              Get to know us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-mark" aria-hidden="true">✳</span>
            <span>Small-batch finds<br />for everyday rituals</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-image">
            <Image
              src="/products/ceramic-vase.svg"
              alt="Sculptural stoneware vase with leafy stems"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
          <div className="art-note">
            <span>THE SUNDAY VASE</span>
            <span>Quietly one of a kind</span>
          </div>
          <div className="round-stamp" aria-label="Made with care">
            <span>MADE WITH CARE</span>
            <span aria-hidden="true">✳</span>
            <span>KEPT FOR YEARS</span>
          </div>
        </div>
      </section>

      <div className="promise-row" aria-label="Our promises">
        <span>Good materials, always</span>
        <span className="promise-divider" aria-hidden="true">✳</span>
        <span>Made in small batches</span>
        <span className="promise-divider" aria-hidden="true">✳</span>
        <span>Designed for real life</span>
      </div>

      <section className="collection section-wrap" id="collection" aria-labelledby="collection-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> The little collection</p>
            <h2 id="collection-title">Keep close, use often.</h2>
          </div>
          <p className="section-intro">
            A considered edit of things that earn their place in your home and
            your everyday.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-image product-image-${index + 1}`}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, 50vw"
                />
                <span className="product-label">{product.label}</span>
                <span className="product-number">0{index + 1}</span>
              </div>
              <div className="product-info">
                <div>
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story section-wrap" id="story" aria-labelledby="story-title">
        <div className="story-mark" aria-hidden="true">kx</div>
        <div className="story-copy">
          <p className="eyebrow"><span /> A note from us</p>
          <h2 id="story-title">Less, but with a little more meaning.</h2>
          <p>
            We believe the best things aren’t saved for later. They’re the mug
            you reach for every morning, the bag that comes along for the
            detour, the small details that make a place feel like yours.
          </p>
          <Link className="text-link" href="/about">
            A little more about us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="wordmark" href="/" aria-label="KX Goods home">
          kx<span>goods</span>
        </Link>
        <p>Everyday, made a little more lovely.</p>
        <Link href="#collection">Back to the collection ↑</Link>
      </footer>
    </main>
  );
}
