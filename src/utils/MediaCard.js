export function getImage(suit) {
  switch (suit) {
    case "Club":
      return "/img/club.png";
    case "Diamond":
      return "/img/diamond.png";
    case "Heart":
      return "/img/heart.png";
    case "Spade":
      return "/img/spade.png";
    default:
      return false;
  }
}
