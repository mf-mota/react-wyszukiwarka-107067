import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ getUserWordFunc }) => {
  const [word, setWord] = useState("");

  const userTypedText = (event) => {
    setWord(event.target.value);
  };

  const userClickedButton = () => {
    getUserWordFunc(word);
  };

  console.log(`SearchBar => ${word}`);

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl
        placeholder="Prosze wpisać model, silnik lub Moc samochodu"
        onChange={userTypedText}
        value={word}
      />
      <InputGroup.Append>
        <Button variant="outline-primary" onClick={userClickedButton}>
          Szukaj
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
