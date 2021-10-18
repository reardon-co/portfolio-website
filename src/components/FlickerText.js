import React from "react";
import { useState, useEffect } from "react";

/**
 * Represents an instance of transitional text
 *
 * Animation Phases:
 * 1. Full phrase
 * 2. Flicker characters replacing the full phrase
 * 3. Empty String
 * 4. Full flicker characters for the upcoming phrase
 * 5. Full phrase
 *
 * @param {String} start - the starting phrase for the flickering text
 * @param {String[]} phrases - The list of available phrases to sort through
 * @param {char[]} characters - The list of characters to be used to cause the 'flicker'
 * @param {int} seconds The amount of seconds between each word transition
 * @returns A react component that renders the text
 */

export default function FlickerText({ start, phrases, characters, seconds }) {

  // Initialization of props
  if (typeof phrases == "undefined") {
    phrases = [
      "Software Engineer",
      "Thoughtful Communicator",
      "Solutions Innovator",
      "Northeastern Student",
      "Web Developer",
    ];
  }
  if (typeof characters == "undefined") {
    characters = ["$", "<", "~", "%", "&", "#", "*", "^", "@"];
  }
  if (typeof start == "undefined") {
    start = "Software Developer";
  }
  if (typeof seconds == "undefined") {
    seconds = 3;
  }

  const timerDelay = 15;

  // Initializing of states
  const [text, setText] = useState(start);


  // Defining some helper functions:

  // Creates a delay of the given ms
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  // Gets a random index when given a list
  const getRandomIndex = (list) => Math.floor(Math.random() * list.length);

  /**
   * Sets the state of the text from full english text to random characters of the same length
   *
   * @param {String} phrase - the phrase that text is originally set to
   * @returns the scarmbled phrase
   */
  const fullPhraseToFlicker = async (phrase) => {
    let phraseArr = phrase.split("");
    let indexesLeft = Array.from(Array(phraseArr.length).keys());

    while (indexesLeft.length > 0) {
      let selectedIndex = indexesLeft[getRandomIndex(indexesLeft)];
      let randomScrambleChar = characters[getRandomIndex(characters)];

      phraseArr.splice(selectedIndex, 1, randomScrambleChar);

      indexesLeft.splice(indexesLeft.indexOf(selectedIndex), 1);

      setText(phraseArr.join(""));
      await timer(timerDelay);
    }

    return phraseArr.join("");
  };

  /**
   * Sets the state of the text from being full of random chracters to just being spaces
   *
   * @param {String} phrase - The string of random characters that text is initially equal to
   * @returns the empty phrase
   */
  const fullScrambleToEmpty = async (phrase) => {
    let scrambleCharArray = phrase.split("");
    let indexesLeft = Array.from(Array(scrambleCharArray.length).keys());

    while (indexesLeft.length > 0) {
      let selectedIndex = indexesLeft[getRandomIndex(indexesLeft)];

      scrambleCharArray.splice(selectedIndex, 1, "\xa0");

      indexesLeft.splice(indexesLeft.indexOf(selectedIndex), 1);

      setText(scrambleCharArray.join(""));
      await timer(timerDelay);
    }

    return scrambleCharArray.join("");
  };

  /**
   * Sets an empty text state to one of random characters, returning a new phrase of the same length
   *
   * @returns an array with index 0 being the scrambled phrase and index 1 being the full english phrase
   */
  const emptyToFullScramble = async () => {
    let newPhrase = phrases[getRandomIndex(phrases)];
    let newPhraseArr = Array(newPhrase.length).fill("\xa0");
    let indexesLeft = Array.from(Array(newPhraseArr.length).keys());

    while (indexesLeft.length > 0) {
      let selectedIndex = indexesLeft[getRandomIndex(indexesLeft)];
      let randomScrambleChar = characters[getRandomIndex(characters)];

      newPhraseArr.splice(selectedIndex, 1, randomScrambleChar);

      indexesLeft.splice(indexesLeft.indexOf(selectedIndex), 1);

      setText(newPhraseArr.join(""));
      await timer(timerDelay);
    }

    return [newPhraseArr.join(""), newPhrase];
  };

  /**
   * Sets the scrambled string to the given full, english phrase
   *
   * @param {String} phrase  the phrase that text will eventaully equal by the end of the function
   * @param {String} scrambledPhrase the phrase that text currently equals
   * @returns the newly generated phrase
   */
  const fullScrambleToFullText = async (scrambledPhrase, phrase) => {
    let scrambledPhraseArr = scrambledPhrase.split("");
    let indexesLeft = Array.from(Array(scrambledPhraseArr.length).keys());

    while (indexesLeft.length > 0) {
      let selectedIndex = indexesLeft[getRandomIndex(indexesLeft)];

      scrambledPhraseArr.splice(selectedIndex, 1, phrase.charAt(selectedIndex));

      indexesLeft.splice(indexesLeft.indexOf(selectedIndex), 1);

      setText(scrambledPhraseArr.join(""));
      await timer(timerDelay);
    }
    return setText(scrambledPhraseArr.join(""));
  };

  /**
   * Loops through the flickering animation every n amount of seconds, where n is the given amount of seconds.
   * @param {int} seconds the amount of seconds between each loop
   */
  const loopAnimation = async () => {
    let textPhrase = "";
    if (typeof text == "undefined") {
      textPhrase = start;
    } else {
      textPhrase = text;
    }
    textPhrase = await fullPhraseToFlicker(textPhrase);
    textPhrase = await fullScrambleToEmpty(textPhrase);
    let tempValue = await emptyToFullScramble();
    textPhrase = await fullScrambleToFullText(tempValue[0], tempValue[1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loopAnimation();
    }, seconds * 1000);
    return () => clearInterval(interval);
  });
  return <div>{text}</div>;
}
