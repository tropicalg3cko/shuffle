import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { getImage } from "../utils/MediaCard";

export default function MediaCard(props) {
  return (
    <Card
      variant="outlined"
      sx={{ height: "150px", width: "100px", margin: "0.4em" }}
    >
      <CardContent sx={{ padding: "0px" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{
              height: `35px`,
              width: `30px`,
            }}
            src={getImage(props.data.suit)}
            alt={props.data.suit}
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
