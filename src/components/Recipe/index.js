import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Recipe = (props) => {
  const classes = useStyles();
  const {items} = props

  return (
    <Grid container spacing={3}>
      {!items && <Grid item>No recipe found</Grid>}
      {items &&
        items.map((item, index) => {
          return (
            <Grid item xs={12} sm={4}>
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Ingredients:
                  </Typography>
                  {item.ingredients.map((ingredient, index) => {
                    return (
                      <Typography variant="body2" component="p" key={index}>
                        {ingredient}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}

Recipe.propTypes = {

}

export default Recipe
