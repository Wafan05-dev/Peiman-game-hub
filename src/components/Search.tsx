import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<AiOutlineSearch size={20} />}
      />
      <Input type="search" placeholder="Search Games..." borderRadius={20} />
    </InputGroup>
  );
};

export default Search;
