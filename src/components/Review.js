import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const products = [];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review(props) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Your Suit
      </Typography>
      <p> {props.suit}</p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Accused Person Details
          </Typography>
          <Typography gutterBottom>{props.name}</Typography>
          <Typography gutterBottom>{props.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Documents Details
          </Typography>
          <Grid container>
            {props.documents.map(val => (
              <Chip
                label={val.filename}
                component="a"
                key={val.filename}
                target="_blank"
                href={"http://localhost:3344/" + val.path}
                clickable
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
