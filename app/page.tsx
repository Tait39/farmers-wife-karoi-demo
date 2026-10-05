const categories = [
  { title: "Farm Shop", copy: "A thoughtfully stocked stop for homemade favourites, farm produce, preserves, gifts and useful road-trip essentials.", image: "/images/farm-shop/README.txt" },
  { title: "Café & Takeaway", copy: "Good coffee, homemade treats and comforting food for a relaxed pause on the road.", image: "/images/cafe/README.txt" },
  { title: "Campsite", copy: "A countryside campsite at Vhuka Farm. Enquire directly for current camping details and availability.", image: "/images/campsite/README.txt" },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#">THE FARMER’S <span>WIFE</span></a>
        <nav><a href="#shop">Farm Shop</a><a href="#cafe">Café</a><a href="#campsite">Campsite</a><a href="#story">Our Story</a><a href="#visit">Visit</a></nav>
        <a className="navCta" href="tel:+263778999723">Call Us</a>
      </header>

      <section className="hero">
        <div className="heroImage" aria-label="Hero photography placeholder">
          <div className="photoNote">Hero photo · images/hero/</div>
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Vhuka Farm · Karoi · Zimbabwe</p>
          <h1>A better kind of <em>roadside stop.</em></h1>
          <p className="lead">Farm-shop character, good food and countryside calm on the Harare–Chirundu road.</p>
          <div className="actions"><a className="button dark" href="#visit">Plan Your Visit</a><a className="textLink" href="#story">Discover the story →</a></div>
        </div>
      </section>

      <section className="intro" id="story">
        <p className="eyebrow">Worth the stop</p>
        <h2>A little piece of the country, made for lingering.</h2>
        <p>At The Farmer’s Wife, the road slows down. Come for a coffee or takeaway, browse the farm shop, enjoy the setting and make your stop part of the journey.</p>
      </section>

      <section className="featureGrid" id="shop">
        {categories.map((item, i) => (
          <article className={i === 0 ? "feature featured" : "feature"} key={item.title}>
            <div className="featureImage"><span>{item.title} photography · images/{i === 0 ? "farm-shop" : i === 1 ? "cafe" : "campsite"}/</span></div>
            <div className="featureBody"><p className="eyebrow">0{i + 1}</p><h3>{item.title}</h3><p>{item.copy}</p><a href="#visit">Explore →</a></div>
          </article>
        ))}
      </section>

      <section className="band" id="cafe">
        <div><p className="eyebrow">The country table</p><h2>Simple things, done beautifully.</h2></div>
        <p>Homemade treats, coffee, takeaway meals and the easy atmosphere of a working countryside destination. Exact menus and current offerings can be updated once confirmed by the business.</p>
      </section>

      <section className="gallery">
        <div className="galleryIntro"><p className="eyebrow">A sense of place</p><h2>Karoi, beyond the roadside.</h2><p>Built around authentic photography, the gallery will tell the story through the people, food, farm and landscape.</p></div>
        <div className="galleryGrid">
          <div className="galleryImage large"><span>images/gallery/</span></div>
          <div className="galleryImage"><span>images/gallery/</span></div>
          <div className="galleryImage"><span>images/gallery/</span></div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div><p className="eyebrow">Come by</p><h2>The Farmer’s Wife</h2><p>Vhuka Farm, 219km peg, Karoi, Zimbabwe — approximately 19km north of Karoi on the Harare–Chirundu road.</p></div>
        <div className="visitDetails"><div><span>PHONE</span><a href="tel:+263778999723">+263 778 999 723</a></div><div><span>PUBLICLY LISTED HOURS</span><p>Mon & Thu–Sun · 07:00–15:30<br/>Closed Tue & Wed</p></div><div><span>CAMPSITE</span><p>Enquire directly for current availability and details.</p></div></div>
      </section>

      <footer><div className="brand">THE FARMER’S <span>WIFE</span></div><p>Farm Shop · Café · Campsite · Karoi</p><a href="tel:+263778999723">+263 778 999 723</a></footer>
    </main>
  );
}