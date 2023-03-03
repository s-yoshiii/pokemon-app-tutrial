import React from "react";
import styles from "./Card.module.css";

const Card = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <div className={styles.types}>
        {pokemon.types.map((type) => (
          <span ley={type.type.name} className={styles.typeName}>
            {type.type.name}
          </span>
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.datas}>
          <p className={styles.data}>重さ：{pokemon.weight}</p>
          <p className={styles.data}>高さ：{pokemon.height}</p>
          <p className={styles.data}>
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
