import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: ParentPlatform | null;
  onPlatformSelect: (platform: ParentPlatform) => void;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { platforms, errors } = usePlatforms();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} marginLeft="10px">
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              onClick={() => onPlatformSelect(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
