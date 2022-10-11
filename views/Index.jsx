const React = require("react");
const pokemon = require("../models/pokemon");
class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
          {pokemon.map((pokemon, _id) => (
            <li>
              {pokemon.name}
              {pokemon.img}
            </li>
          ))}
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
