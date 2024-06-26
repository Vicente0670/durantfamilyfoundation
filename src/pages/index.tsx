import home from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <script src="/scripts/index.js" defer />

      <div className={home.interactiveEmblem} id="interactiveEmblem">
        <div className={home.exit} id="exit"><p>X</p></div>
        <div className={home.base} id="e-base"></div>
        <div className={home.flower} id="e-flower"><div></div></div>
        <div className={home.county} id="e-county"><div></div></div>
        <div className={home.person} id="e-person"><div></div></div>
        <div className={home.grad} id="e-grad"><div></div></div>
        <div className={home.info} id="info">
          <div className={home.miniExit}><p>X</p></div>
          <p>The Purple Rose on our emblem is a highlight of Kevin Durant&apos;s grandmother. Kevin Durant&apos;s grandmother&apos;s name is Barbara Durant Davis.</p>
          <p>This is where Kevin Durant himself grew up. This means a lot to them because that's where they first played basketball.</p>
          <p></p>
          <p>This diploma on our emblem represends our desire and passion for education and academic success. We want to educate others and see others succeed academically. We want others to knowledgeable and understand the important steps in life, and that&apos;s part of our mission and future goals.</p>
        </div>
      </div>

      <div className={home.main} id="main">
        <div className={home.container}>
          <div className={home.infoContainer}>
            <h1>Durant Family Charitable Foundation</h1><br/>
            <p>A non-profit organization founded to help students achieve academic and personal greatness since 2013.</p>
            <p>Interact with the emblem to know about our origins!</p>
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
            <Link className={home.button} href="/programs">Discover our Programs</Link>
          </div>
        </div>
      </div>
      <div className={home.tertiary} id="tertiary">
        <div className={home.container}>
          <div className={home.title}>
            <h2>Learn about us!</h2>
            <p>From our original founders, to the determined volunteers, everyone has a role to play. Our team has built this foundation for over a decade, and our organization has a story to tell.</p>
            <Link className={home.button} href="/bio" title="Learn about the people behind the Durant Family Charitable Foundation.">Learn More</Link>
          </div>
          <div className={home.carousel}>
            <div className={home.container2} id="carouselContainer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={home.quaternary}>
        <h4>It&apos;s more than just a charity. It&apos;s our future.</h4>
        <Link href="https://www.teamdurant.com/" className={home.button}>Donate</Link>
      </div>
    </>
  );
}