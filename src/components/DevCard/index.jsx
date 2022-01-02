import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Book, Heart, ThumbsUp } from "react-feather";
import { StyledCard } from "../../styles";
import { StyledButton } from "../Header/styles";

const DevCard = ({ dev }) => {
    const { rank, avatar, name, username, url, popularRepository } = dev;
    const { description, url: repoUrl, repositoryName } = popularRepository;

    return (
        <StyledCard>
            <Flex alignItems="flex-start"  width="32%" justifyContent="space=between">
                <Box>{rank}</Box>
                <Box marginRight={5} marginLeft={5}>
                    <Avatar size="md" name={name} src={avatar} />
                </Box>
                <Flex direction="column">
                    <Link href={url} color="#58a6ff" fontSize={20} fontWeight={700}>{name}</Link>
                    <Text>{username}</Text>
                </Flex>
            </Flex>

            <Flex direction="column" width="32%">
                <Flex alignItems="center">
                    <ThumbsUp color="orange" size={15} />
                    <Text ml={2} fontSize={14}>POPULAR REPO</Text>
                </Flex>

                <Flex alignItems="center">
                    <Book size={15} />
                    <Link href={repoUrl} fontWeight={700} color="#58a6ff" fontSize={16} ml={2}>{repositoryName}</Link> 
                </Flex>

                {description && <Text>{description}</Text>}
            </Flex>

            <Flex alignItems="flex-start" width="20%" justifyContent="flex-end">
                <StyledButton background="#161b22" marginRight="10px">
                    <Heart color="pink" size={15} /> 
                    <Text marginLeft={2}>Sponsor</Text>
                </StyledButton>
                <StyledButton background="#161b22">Follow</StyledButton>
            </Flex>
        </StyledCard>
    )
}

export default DevCard;