import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import { getCharacters } from "../store/actions/characterActions";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.items);
  const page = useSelector(state => state.characters.page);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch]);

  return (
    <Container margin="auto" padding="6">
      <div>
        {characters.map(character => (
          <div>
            <img src={character.image} alt={`image_${character.id}`} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Characters;
