import Head from "next/head";
import home from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Durant Family Foundation</title>
      </Head>
      <script src="/scripts/index.js" />

      <div className="loader">
        <div className="loaderImage">
          <img src="/media/DFF-Shield.webp" />
        </div>
      </div>

      <div className={home.interactiveEmblem}>
        <div className={home.base} id="e-base"></div>
        <div className={home.flower} id="e-flower"><div></div></div>
        <div className={home.county} id="e-county"><div></div></div>
        <div className={home.person} id="e-person"><div></div></div>
        <div className={home.grad} id="e-grad"><div></div></div>
      </div>

      <div className={home.main} id="main">
        <div className={home.container}>
          <div className={home.infoContainer}>
            <h1>Durant Family Foundation</h1>
          </div>
          <div className={home.iconContainer} id="icon"></div>
        </div>
      </div>  
      <div className={home.secondary} id="secondary">
        <div className={home.videoContainer}>
          <video>
            <source src="/media/bg1.jpg" />
          </video>
        </div>
        <div className={home.infoContainer}>
          <p></p>
        </div>
      </div>
      <div className={home.tertiary} id="tertiary">
        <div className={home.container}>

        </div>
      </div>
    </>
  );
}