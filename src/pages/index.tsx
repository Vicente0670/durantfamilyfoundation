import home from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <script src="/scripts/index.js" defer />

      <div className="loader">
        <div className="loaderImage">
          <img src="/media/DFF-Shield.webp" />
        </div>
      </div>

      <div className={home.interactiveEmblem} id="interactiveEmblem">
        <div className={home.exit} id="exit"><p>X</p></div>
        <div className={home.base} id="e-base"></div>
        <div className={home.flower} id="e-flower"><div></div></div>
        <div className={home.county} id="e-county"><div></div></div>
        <div className={home.person} id="e-person"><div></div></div>
        <div className={home.grad} id="e-grad"><div></div></div>
        <div className={home.info} id="info">
          <div className={home.miniExit}><p>X</p></div>
          <p>Symbolic of his love and passion for education and people who are educated.</p>
          <p>infomration 2</p>
          <p>hajahahahah 3</p>
          <p>This emblem represends our desire and passion to </p>
        </div>
      </div>

      <div className={home.main} id="main">
        <div className={home.container}>
          <div className={home.infoContainer}>
            <h1>Durant Family Charitable Foundation</h1><br/>
            <p>A credible, non-profit organization founded to help others since 2013.</p>
            <p>Interact with the emblem to get started!</p>
          </div>
          <div className={home.iconContainer} id="icon"></div>
        </div>
      </div>  
      <div className={home.secondary} id="secondary">
        <div className={home.container}>
          <div className={home.videoContainer}>
            <video>
              <source src="/media/bg1.jpg" />
            </video>
          </div>
          <div className={home.infoContainer}>
            <h3>Our Mission</h3>
            <p>The mission of the Durant Family Charitable Foundation is to enrich the lives of youth, their families and community through education, athletic, and social programs.</p>
            <h3></h3>
          </div>
        </div>
      </div>
      <div className={home.tertiary} id="tertiary">
        <div className={home.container}>
          <div className={home.title}>
            <h2>!</h2>
            <p>aaaaaaaaaaaaaa</p>
            <a href="/bio" title="Learn about the people behind the Durant Family Charitable Foundation."></a>
          </div>
          <div className={home.carousel}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}