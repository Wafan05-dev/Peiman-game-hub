import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  onSearch: (searchElement: string) => void;
}

const Search = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<AiOutlineSearch size={20} />}
      />
      <Input
        type="search"
        placeholder="Search Games..."
        borderRadius={20}
        onChange={(event) => onSearch(event.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default Search;
