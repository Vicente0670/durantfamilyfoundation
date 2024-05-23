import bio from "@/styles/Bio.module.css";

export default function Bio() {
  return (
    <>
      <script src="/scripts/bio.js" defer />
      <div className={bio.primary}>
        <div className={bio.container}>
          <div className={bio.profile}>
            <div className={bio.image} aria-label="kevin"></div>
            <div className={bio.text}>
              <h4>Kevin Durant</h4>
              <p>Kevin Durant is the primary founder for the Durant Family Charitable Foundation. He</p>
            </div>
          </div>
          <div className={bio.profile}>
            <div className={bio.image} aria-label="mother"></div>
            <div className={bio.text}>
              <h4>Mother Durant</h4>
              <p>Wanda Durant, affectionately known as "Mama Durant", is a dynamic leader, beacon of inspiration, an advocate, a force for change, and a champion of empowerment. Born and raised in the vibrant community of Prince George&apos;s County, Maryland, she instilled in her two sons, Anthony "Tony" Durant and Kevin Durant the values of resilience, compassion, and the power of giving back.</p>
            </div>
          </div>
          <div className={bio.profile}>
            <div className={bio.image} aria-label="brother"></div>
            <div className={bio.text}>
              <h4>Brother Durant</h4>
              <p>This is some text for the kevin durant guy and I dont know what hes doing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}