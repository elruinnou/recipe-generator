import React, { Component } from 'react'
import moment from 'moment'
import {
  Calendar,
  Ingredients,
  Recipe
} from '../components'
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  LinearProgress,
} from "@material-ui/core";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      selectedDate: new Date(),
      ingredients: null,
      selectedIngredients: null,
      recipes: null,
      isFetchingRecipe: false,
    };
  }

  componentDidMount() {
    this.fetchIngredients()
  }

  fetchIngredients = () => {
    const {selectedDate} = this.state
    const dateToString = moment(selectedDate).format('DD-MM-YYYY')
    this.setState({
      ingredients: [
        {
          title: "Ham",
          "use-by": "2020-11-25",
        },
        {
          title: "Cheese",
          "use-by": "2020-01-08",
        },
        {
          title: "Bread",
          "use-by": "2020-11-01",
        },
        {
          title: "Butter",
          "use-by": "2020-11-25",
        },
        {
          title: "Bacon",
          "use-by": "2020-11-02",
        },
        {
          title: "Eggs",
          "use-by": "2020-11-25",
        },
        {
          title: "Mushrooms",
          "use-by": "2020-11-11",
        },
        {
          title: "Sausage",
          "use-by": "2020-11-25",
        },
        {
          title: "Hotdog Bun",
          "use-by": "2019-11-25",
        },
        {
          title: "Ketchup",
          "use-by": "2019-11-11",
        },
        {
          title: "Mustard",
          "use-by": "2019-11-10",
        },
        {
          title: "Lettuce",
          "use-by": "2019-11-10",
        },
        {
          title: "Tomato",
          "use-by": "2019-11-05",
        },
        {
          title: "Cucumber",
          "use-by": "2019-11-05",
        },
        {
          title: "Beetroot",
          "use-by": "2019-11-06",
        },
        {
          title: "Salad Dressing",
          "use-by": "2019-11-06",
        },
      ],
      isFetching: false,
    })
    console.log('fetch ingredients with this date ',dateToString)
  }

  fetchRecipes = () => {
    const { selectedIngredients } = this.state
    this.setState({
      isFetchingRecipe: false,
      recipes: [
        {
          title: "Ham and Cheese Toastie",
          ingredients: ["Ham", "Cheese", "Bread", "Butter"],
        },
        {
          title: "Salad",
          ingredients: [
            "Lettuce",
            "Tomato",
            "Cucumber",
            "Beetroot",
            "Salad Dressing",
          ],
        },
        {
          title: "Hotdog",
          ingredients: ["Hotdog Bun", "Sausage", "Ketchup", "Mustard"],
        },
      ],
    });
  }

  handleDateChange = (date) => {
    this.setState({ 
      selectedDate: date,
      isFetching: true,
    }, () => {
      this.fetchIngredients()
    })
  }

  handleSubmitIngredients = (ingredients) => {
    this.setState({
      isFetchingRecipe: true,
      recipes: null,
      selectedIngredients: ingredients,
    }, () => {
      this.fetchRecipes()
    })
  }

  render() {
    const {
      ingredients,
      selectedDate,
      isFetching,
      isFetchingRecipe,
      recipes,
    } = this.state;
    
    return (
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Load Recipe App</Typography>
          </Toolbar>
        </AppBar>
        {isFetching && <LinearProgress color="secondary" />}
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Calendar onChange={this.handleDateChange} value={selectedDate} />
          </Grid>
          <Grid item xs={12} sm={7}>
            {!isFetching && ingredients && (
              <Ingredients
                title={`Today's menu`}
                items={ingredients}
                enableDate={selectedDate}
                onSubmit={this.handleSubmitIngredients}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {isFetchingRecipe ? (
              <LinearProgress color="secondary" />
              ) : (
                <Recipe items={recipes} />
              )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
