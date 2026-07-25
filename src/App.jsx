import './App.css'

function App() {
  return (
    <div className="sheet">
      {/* ── Edition Bar ── */}
      <hr className="rule" />
      <div className="edition-bar">
        <span>Independent Design Practice</span>
        <span className="edition-bar__fleuron">&#10045;</span>
        <span>London &middot; Sydney</span>
      </div>
      <hr className="rule" />

      {/* ── Masthead ── */}
      <div className="masthead">
        <h1 className="masthead__name">Atlas</h1>
      </div>
      <hr className="rule--double" />

      {/* ── Navigation ── */}
      <nav className="nav">
        <a href="#work" className="nav__link">The Work</a>
        <a href="#services" className="nav__link">Services</a>
        <a href="#letters" className="nav__link">Letters</a>
        <a href="#studio" className="nav__link">The Studio</a>
        <a href="#commission" className="nav__link">Commission</a>
      </nav>
      <hr className="rule" />

      {/* ── Dateline ── */}
      <div className="dateline">
        <span className="dateline__left">Est. MMXIX</span>
        <span className="dateline__center">
          A design studio that sets brands in ink &amp; pixels
        </span>
        <span className="dateline__right">Issue No. 47 &mdash; July 2026</span>
      </div>
      <hr className="rule" />

      {/* ── Hero Section ── */}
      <section className="hero-section">
        <p className="kicker">
          Brand Identity &middot; Digital Product &middot; Art Direction
        </p>
        <h2 className="headline">
          Design Worth<br />the Front Page
        </h2>
      </section>

      {/* ── Drop-cap Lede ── */}
      <div className="lede">
        <p className="drop-cap">
          Every brand has a story worth telling on the front page. We are a
          design studio obsessed with the craft of visual storytelling, building
          identities and digital products that demand attention and earn trust.
          Our work lives at the intersection of editorial precision and
          contemporary strategy, where every pixel is placed with the care of a
          typesetter setting lead.
        </p>
        <p>
          From the first mark of a wordmark to the last frame of a campaign, we
          approach each project as an edition, not an assembly line. We believe
          in the weight of paper, the authority of a well-set headline, and the
          quiet confidence of a system that holds across every surface. This is
          design for brands that want to be remembered, not merely seen.
        </p>
      </div>

      {/* ── Framed Figure ── */}
      <hr className="rule" />
      <figure className="figure">
        <img
          src="https://picsum.photos/id/1060/1280/470"
          alt="Studio interior"
          className="figure__image"
        />
        <figcaption className="figure__caption">
          <span>Fig. 01 &mdash; The studio floor, photographed on press day</span>
          <span>Silver gelatin, MMXXVI</span>
        </figcaption>
      </figure>
      <hr className="rule" />

      {/* ── Services: The Three Desks ── */}
      <section id="services" className="services">
        <div className="section-header">
          <h2 className="section-header__title">The Three Desks</h2>
          <span className="section-header__note">
            What the studio sets, column by column
          </span>
        </div>
        <hr className="rule" />
        <div className="services__columns">
          <div className="services__column">
            <h3 className="services__column-title">Brand Identity</h3>
            <p className="services__column-text">
              We design identities that carry the authority of a masthead and the
              warmth of a handwritten note. From wordmarks to full systems, every
              element is typeset with intention, tested across surfaces, and
              delivered as a living editorial.
            </p>
            <img
              src="https://picsum.photos/id/1056/400/170"
              alt="Typewriter"
              className="services__column-img"
            />
            <a href="#work" className="services__link">
              Read the Case Files &rarr;
            </a>
          </div>

          <div className="services__divider" />

          <div className="services__column">
            <h3 className="services__column-title">Digital Product</h3>
            <p className="services__column-text">
              Interfaces that read like a well-edited page: clear hierarchy,
              confident typography, and interaction choreography that rewards
              attention. We build digital products that feel authored, not
              templated, from wireframe to launch.
            </p>
            <img
              src="https://picsum.photos/id/1067/400/170"
              alt="Workstation"
              className="services__column-img"
            />
            <a href="#work" className="services__link">
              Read the Case Files &rarr;
            </a>
          </div>

          <div className="services__divider" />

          <div className="services__column">
            <h3 className="services__column-title">Art Direction</h3>
            <p className="services__column-text">
              The eye behind the lens and the hand behind the layout. Our art
              direction practice shapes campaigns, editorials, and visual worlds
              that feel both inevitable and surprising, composed with the
              discipline of print.
            </p>
            <img
              src="https://picsum.photos/id/1076/400/170"
              alt="Camera"
              className="services__column-img"
            />
            <a href="#work" className="services__link">
              Read the Case Files &rarr;
            </a>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Portfolio Plates ── */}
      <section id="work" className="portfolio">
        <div className="section-header">
          <h2 className="section-header__title">From the Portfolio Pages</h2>
          <span className="section-header__note">
            Selected Editions, MMXIX &ndash; Present
          </span>
        </div>
        <hr className="rule" />
        <div className="portfolio__grid">
          <div className="plate">
            <img
              src="https://picsum.photos/id/1018/800/500"
              alt="The Foundry Hotels"
              className="plate__image plate__image--large"
            />
            <div className="plate__caption">
              <span>The Foundry Hotels &mdash; Identity</span>
              <span className="plate__year">Edition of MMXXV</span>
            </div>
          </div>
          <div className="portfolio__stack">
            <div className="plate">
              <img
                src="https://picsum.photos/id/1040/600/260"
                alt="Bureau Type"
                className="plate__image plate__image--small"
              />
              <div className="plate__caption">
                <span>Bureau Type &mdash; Digital Product</span>
                <span className="plate__year">Edition of MMXXIV</span>
              </div>
            </div>
            <div className="plate">
              <img
                src="https://picsum.photos/id/1025/600/260"
                alt="Pendleton Archive"
                className="plate__image plate__image--small"
              />
              <div className="plate__caption">
                <span>Pendleton Archive &mdash; Art Direction</span>
                <span className="plate__year">Edition of MMXXVI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Letters to the Editor ── */}
      <section id="letters" className="letters">
        <p className="letters__eyebrow">Letters to the Editor</p>
        <blockquote className="letters__quote">
          &ldquo;Atlas delivered an identity that felt like it had always existed
          and had only just been discovered. Their editorial eye transformed how
          we present ourselves to the world.&rdquo;
        </blockquote>
        <p className="letters__attribution">
          &mdash; Eleanor Voss, Creative Director, The Foundry Group &middot;
          Received March MMXXV
        </p>
      </section>

      <hr className="rule" />

      {/* ── Client Register ── */}
      <section className="clients">
        <p className="clients__eyebrow">The Client Register</p>
        <p className="clients__list">
          The Foundry Group
          <span className="clients__separator">&#10045;</span>
          Bureau Type
          <span className="clients__separator">&#10045;</span>
          Pendleton Archives
          <span className="clients__separator">&#10045;</span>
          Whitmore &amp; Co.
          <span className="clients__separator">&#10045;</span>
          Salt Magazine
          <span className="clients__separator">&#10045;</span>
          Northline Press
          <span className="clients__separator">&#10045;</span>
          The Atelier Collective
          <span className="clients__separator">&#10045;</span>
          Meridian Hotels
        </p>
      </section>

      <hr className="rule" />
      <hr className="rule--double" />

      {/* ── Commission CTA ── */}
      <section id="commission" className="commission">
        <p className="commission__kicker">Now Accepting Autumn Commissions</p>
        <h2 className="commission__headline">
          Put Your Brand<br />Above the Fold
        </h2>
        <p className="commission__note">
          We accept a limited number of engagements each season. Submit a brief
          and we will reply within five working days.
        </p>
        <button className="commission__btn">Submit the Brief</button>
      </section>

      <hr className="rule--double" />
      <hr className="rule" />

      {/* ── Colophon ── */}
      <footer className="colophon">
        <span>
          &copy; MMXXVI Atlas Design Studio &middot; Published from the studio
          floor
        </span>
        <span>Page One of One</span>
      </footer>
    </div>
  )
}

export default App
