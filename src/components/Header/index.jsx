import { Flex, Text } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import { StyledButton, StyledHeader } from "./styles";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <StyledHeader>
      <Flex>
        <Link to="/">
          <StyledButton
            onClick={() => setActiveTab("REPO")}
            background={activeTab === "REPO" ? "#206feb" : null}
          >
            Repositories
          </StyledButton>
        </Link>
        <Link to="/developers">
          <StyledButton
            onClick={() => setActiveTab("DEV")}
            background={activeTab === "DEV" ? "#206feb" : null}
          >
            Developers
          </StyledButton>
        </Link>
      </Flex>

      <Flex width="50%" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Text marginRight={2}>Spoken Language: Any</Text>
          <ChevronDown size={15} />
        </Flex>

        <Flex alignItems="center">
          <Text marginRight={2}>Language: Any</Text>
          <ChevronDown size={15} />
        </Flex>

        <Flex alignItems="center">
          <Text marginRight={2}>Date range: Any</Text>
          <ChevronDown size={15} />
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
