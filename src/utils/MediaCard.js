import club from "../img/club.png";
import spade from "../img/spade.png";
import diamond from "../img/diamond.png";
import heart from "../img/heart.png";

export function getImage(suit) {
  switch (suit) {
    case "Club":
      return club;
    case "Diamond":
      return diamond;
    case "Heart":
      return heart;
    case "Spade":
      return spade;
    default:
      return false;
  }
}
