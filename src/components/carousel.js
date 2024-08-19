import { useState } from "react";
import ProgressMobileStepper from "./ProgressMobileStepper";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setImages([]);

    const random = [];

    for (let i = 0; i < userInput; i++) {
      const drawNumber = Math.ceil(Math.random() * 1000);
      const r = random.find((n) => n === drawNumber);

      if (i === 0 && drawNumber === 0) {
        i--;
      } else {
        if (!r) {
          random.push(drawNumber);
        } else {
          i--;
        }
      }
    }

    for (let i = 0; i < userInput; i++) {
      setImages((image) => [
        ...image,
        `https://picsum.photos/id/${random[i]}/600/400`,
      ]);
    }
  }

  function handleError() {
    console.log("error");
  }

  return (
    <>
      {images.length > 0 && (
        <img src={`${images[activeStep]}`} alt="random" onError={handleError} />
      )}
      <ProgressMobileStepper
        activeStep={activeStep}
        onStep={setActiveStep}
        userInput={userInput}
      />
      <h2>Random number</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Show</button>
      </form>
    </>
  );
}
