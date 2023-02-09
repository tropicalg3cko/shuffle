import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography, Box } from "@mui/material";

export default function MediaCard(props) {
  const getImage = () => {
    let suit = props.data.suit;
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
  };

  return (
    <Card sx={{ height: "150px", width: "100px" }}>
      <CardContent sx={{ padding: "0px" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{
              height: `35px`,
              width: `30px`,
            }}
            src={getImage()}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}
        >
          <Typography variant="subtitle" fontSize="20px">
            {props.data.number}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
