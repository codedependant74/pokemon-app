const React = require("react");
// const pokemon = require("../models/pokemon");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
          {pokemon.map((pokemon, idx) => (
            <li>
              <a href={`/pokemon/${idx}`}>{pokemon.name}</a>
            </li>
          ))}
          <br />
          <a href={`/pokemon/new`}>Add New Pokemon</a>
        </ul>
      </div>
    );
  }
}

const myStyle = {
  color: "#808080",
  backgroundColor: "#E6E6FA",
  textTransform: "capitalize",
};
module.exports = Index;
