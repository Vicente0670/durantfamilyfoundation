import programs from "@/styles/Programs.module.css";
import Link from "next/link";

export default function Programs() {
  return (
    <>
      <script src="/scripts/programs.js" defer />

      <div className={programs.primary}>
        <div className={programs.container}>
          <h2>Programs</h2>
          <p>Here we present some of the available programs that the Durant Family Charitable Foundation offers. We take pride in running and managing these programs with care, and look forward to people uniting.</p>
        </div>
      </div>
      <div className={programs.secondary}>
        <div className={programs.container}>
          <div className={programs.title}>
            <h2>College Track at the Durant Center</h2>
          </div>
          <div className={programs.content}>
            <p>College Track is a free college completion program which has been a part of the Durant C</p>
            <div className={programs.image}></div>
          </div>
        </div>
      </div>
      <div className={programs.tertiary}>
        <div className={programs.container}>
          <div className={programs.title}>
            <h2>Durant Basketball Program</h2>
          </div>
          <div className={programs.content}>
            <p>Basketball information here</p>
            <div className={programs.image}></div>
          </div>
        </div>
      </div>
      <div className={programs.quaternary}>
        <div className={programs.container}>
          <div className={programs.title}>
            <h2>BUILD IT AND THEY WILL BALL</h2>
          </div>
          <div className={programs.content}>
            <p>Our program, namely BUILD IT AND THEY WILL BALL, is a program where we build basketball courts so that others can freely access and be able to learn basketball.</p>
            <div className={programs.image}></div>
          </div>
        </div>
      </div>
    </>
  );
}