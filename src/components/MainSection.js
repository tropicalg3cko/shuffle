import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import MediaCard from "./MediaCard";

const suits = ["Club", "Diamond", "Spade", "Heart"];
const numbers = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const playingCards = [];

//create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    let card = { number: numbers[j], suit: suits[i] };
    playingCards.push(card);
  }
}

export default function Card() {
  const [leftHand, setLeftHand] = useState([]);

  //random number to split the deck to simulate human randomness
  const getRandomInt = () => {
    let min = 2;
    let max = 6;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const singleOverhandPass = () => {
    let randomInt;
    let i = 0;
    let rightHand = playingCards;
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
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "left",
          backgroundColor: "green",
        }}
      >
        {leftHand.map((card, index) => (
          <MediaCard data={card} key={index} />
        ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
      >
        <Button variant="contained" onClick={singleOverhandPass}>
          Overhand Shuffle
        </Button>
      </Box>
    </Box>
  );
}
