import React, { useState} from "react";
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import "./SearchForm.css";
function SearchForm({ setSearchTerm }) {

  /*useEffect(() => {
    searchValue.current.focus();
  }, []);*/

  const searchValue = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const searchcocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <Form>
        <InputGroup className="mb-3" onSubmit={handleSubmit}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><Icon.Search color="blue" width="2em" height="1.5em" variant="primary"> </Icon.Search> </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="search your favorite cocktail"
            aria-label="search your favorite cocktail"
            aria-describedby="basic-addon1"

            type="text"
            name="name"
            id="name"
            onChange={searchcocktail}
            ref={searchValue}

          />
        </InputGroup>
      </Form>
    </section>

  );
}

export default SearchForm;