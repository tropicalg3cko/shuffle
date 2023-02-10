import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import MediaCard from "./MediaCard";
import { getRandomInt, createDeck } from "../utils/Card";

const playingCards = createDeck();

export default function Card() {
  const [leftHand, setLeftHand] = useState([]);

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
          height: "100%",
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
