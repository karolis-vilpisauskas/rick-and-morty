import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../store/actions/characterActions";

import Container from "../components/Container";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.items);

  useEffect(() => {
    dispatch(getCharacters(1));
  }, [dispatch]);

  return (
    <Container>
      <div>
        {characters.map(character => (
          <p>{character.name}</p>
        ))}
      </div>
    </Container>
  );
};

export default Characters;
