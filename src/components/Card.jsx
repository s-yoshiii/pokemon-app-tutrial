import React from "react";
import style from "./Card.module.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="card-name">{pokemon.name}</h3>
      <div className="card-types">
        {pokemon.types.map((type) => (
          <span className="card-type-name">{type.type.name}</span>
        ))}
      </div>
      <div className="card-info">
        <div className="card-data">
          <p className="title">重さ：{pokemon.weight}</p>
          <p className="title">高さ：{pokemon.height}</p>
          <p className="title">
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
