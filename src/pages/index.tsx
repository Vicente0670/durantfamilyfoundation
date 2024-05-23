import home from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <script src="/scripts/index.js" async />

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
          <p>info 1</p>
          <p>infomration 2</p>
          <p>hajahahahah 3</p>
          <p>nononononon 4</p>
        </div>
      </div>

      <div className={home.main} id="main">
        <div className={home.container}>
          <div className={home.infoContainer}>
            <h1>Durant Family Charitable Foundation</h1>
            <p>A credible, non-profit organization founded to help others since 2013.</p>
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
            <h3>Learn about us!</h3>
            <p>Some of the things that we've said aren't true. But that didn't stop us in 1945. Hah, what do you think I am, fool? I am an expert at nothing! But I'm not a jack of all trades anymore, let's be honest. Additionally, I knew you were thinking that, but that's just me.</p>
            <a href="/bio" title="Learn about the people behind the Durant Family Charitable Foundation.">Learn More</a>
          </div>
        </div>
      </div>
      <div className={home.tertiary} id="tertiary">
        <div className={home.container}>
          <div className={home.title}>
            <h3>Our Mission</h3>
            <p>To enter in the most distracting and honest way possible, even though this isn't even the right one and I've been lying to you all this whole entire time just to make up space for the actual statement.</p>
          </div>
          <div className={home.carousel}>
            
          </div>
        </div>
      </div>
    </>
  );
}