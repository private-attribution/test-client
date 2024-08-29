"use client";

import { useState } from "react";

export default function Home() {
  const sadFace = "\u{1f62d}";
  const apple = "\u{1f34f}";
  const android = "\u{1f916}";
  const fancyF = "\u{2a0f}";
  const checkMark = "\u{2713}";
  const forAll = "\u{2200}";
  const emptySet = "\u{2205}";
  const xorArrow = "\u{27f4}";
  const duck = "\u{1f986}";
  const stars = "\u{2728}";
  const upsideDownSmily = "\u{1f643}";
  const texts = [
    "?",
    sadFace,
    "!",
    fancyF,
    duck,
    checkMark,
    apple,
    forAll,
    android,
    emptySet,
    stars,
    xorArrow,
    upsideDownSmily,
  ];
  const [text, setText] = useState<string>(texts[0]);

  const handleClick = () => {
    const conversionValue = 1;
    try {
      // For Android
      IPAExperiment.createAndSubmitConversionReport(conversionValue);
      cycleText(android);
    } catch (error) {
      try {
        // For iOS
        window.createAndSubmitConversionReport(conversionValue);
        cycleText(apple);
      } catch (error) {}
      cycleText(sadFace);
    }
  };

  const cycleText = (finalChar: string) => {
    const maxTime = 4000;
    let cycleTime = 10;
    let i = 0;
    while (cycleTime < maxTime) {
      i++;
      let index = i % texts.length;
      cycleTime = cycleTime * 1.1;
      setTimeout(() => {
        setText(texts[index]);
      }, cycleTime);
    }
    cycleTime = cycleTime * 1.1;
    setTimeout(() => {
      setText(finalChar);
    }, cycleTime);
  };

  return (
    <main className="flex min-h-screen justify-center place-items-center">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-center">
          <div className="flex place-items-center justify-center h-40 w-40 bg-amber-500 border-4 border-slate-950 shadow-[inset_-8px_-8px_0px_1px_rgba(150,81,23,1),inset_8px_8px_0px_1px_rgba(250,184,155,1)] text-7xl font-mono font-bold">
            <p>{text}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Click Me
        </button>
      </div>
    </main>
  );
}
