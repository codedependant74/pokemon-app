const React = require("react");

class Edit extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1>Add a New Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" defaultValue={pokemon.name} />
          <br />
          Image: <input type="text" name="img" defaultValue={pokemon.img} />
          <br />
          <input type="submit" value="Create New Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
