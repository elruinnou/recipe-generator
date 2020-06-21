import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#f4f4f4",
    position: "relative",
    overflow: "auto",
    marginTop: theme.spacing(2),
    maxHeight: 180,
    borderRadius: 15,
  },
}));

const Ingredients = (props) => {
  const { title, items, enableDate, onSubmit } = props;
  const formattedDate = moment(enableDate).format("D, MMM YYYY")

  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  const handleSubmit = () => {
    onSubmit(checked.slice(1))
  }
  
  return (
    <Container>
      <Box mt={1.75}>
        {title !== "" ? (
          <Typography align="center">
            {title} / {formattedDate}
          </Typography>
        ) : (
          ""
        )}
      </Box>
      <List className={classes.root}>
        {items.map((item, index) => {
          const labelId = `checkbox-list-label-${item}`;

          return (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(item)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItem>
          );
        })}
      </List>
      <Box mt={1}>
        <Button fullWidth variant="contained" color="secondary" onClick={handleSubmit}>
          Create Recipe
        </Button>
      </Box>
    </Container>
  );
}

Ingredients.propTypes = {
  title: PropTypes.string
}

Ingredients.defaultProps = {
  title: ''
}

export default Ingredients
