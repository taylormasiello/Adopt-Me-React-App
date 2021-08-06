import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
      // this - component working on; props - whats being passed down from the parents; match - the "matched path", how you "get" the path, reactRouter; params - parameters getting from user, reactRouter; id - whatever you call the dymaic alias in the route name, see App.js;
    );
    const json = await res.json();

    //setState takes the object you give it, and merges it back with the state you have, this.state
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
    // longer way to write same as above, better to use above if already using typescript:
    //     this.setState({
    //         loading: false,
    //         name: json.pets[0].name,
    //         breed: json.pets[0].breed,
    //         animal: json.pets[0].animal
    //     })
  }
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
