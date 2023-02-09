import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];

export default function Card() {
  //random number to split the deck

  const [deck, setDeck] = useState([]);
  const [leftHand, setLeftHand] = useState([]);

  useEffect(() => {
    setDeck(cards);
  }, []);

  const getRandomInt = () => {
    let min = 2;
    let max = 6;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const singleOverhandPass = () => {
    let randomInt;
    let i = 0;
    let rightHand = deck;
    if (rightHand.length > 0) {
      randomInt = getRandomInt();
      let splice = rightHand.splice(i, i + randomInt);
      setLeftHand(splice.concat(leftHand));
    } else {
      return null;
    }
  };

  return (
    <Box>
      <Box>{leftHand}</Box>
      <Box>
        <Button variant="contained" onClick={singleOverhandPass}>
          Overhand Shuffle
        </Button>
      </Box>
    </Box>
  );
}
