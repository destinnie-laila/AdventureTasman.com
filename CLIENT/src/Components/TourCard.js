import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import torrent from "../Images/TorrentBay.jpeg";

// multiple CSS classes below that can be called on by any const

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

// multiple css classes

export default function TourCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // Main component that renders the root css, Implemented another className that applies reponsive render for tablet(ipad)
    <Card className={classes.root} className="card">
      <CardHeader
        // avartar calls the avatar css
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            D
          </Avatar>
        }
        // the actions on this elipses do nothing
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // Setting the title and sub heading withing the card header
        title="Torrent Bay"
        subheader="September 14, 2016"
      />

      {/* // === End of card header  ==== */}

      {/* // Image that renders  */}
      <CardMedia className={classes.media} image={torrent} title="Torrent" />
      {/* // End on image   */}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Directly across from Anchorage is Torrent Bay with the largest
          concentration of privately owned beach houses, or baches to locals, in
          the Park.
        </Typography>
      </CardContent>

      {/* // Fourites and share Actions */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>

      {/* // ENd of actions  */}
    </Card>
    // ======= End of card component
  );
}
