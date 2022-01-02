import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";

import { ColorPallette, StyledCard } from "../../styles";
import { StyledButton } from "../Header/styles";
import { Book, GitBranch, Star } from "react-feather";

const RepoCard = ({ repo }) => {
    const { 
        username, 
        repositoryName, 
        description, 
        language,
        starsSince, 
        totalStars,
        languageColor,
        url,
        builtBy, 
        forks 
    } = repo;

    return (
        <StyledCard padding="20px">
            <Flex fontSize={12} direction="column" width="70%">
                <Flex alignItems="center">
                    <Book size={16} />
                    <Link href={url} fontWeight={700} color="#58a6ff" fontSize={20} ml={2}>{username} / {repositoryName}</Link> 
                </Flex>

                {description && <Box my={3}>{description}</Box>}

                <Flex alignItems="center" width="60%" justifyContent="space-between">
                    {language && (
                        <Flex alignItems="center">
                            <ColorPallette background={languageColor} />
                            <Text ml={2}>{language}</Text>
                        </Flex>
                    )}

                    <Flex alignItems="center"> 
                        <Star size={15} /> 
                        <Text  marginLeft={2}>{totalStars}</Text>
                    </Flex>
                    
                    <Flex alignItems="center"> 
                        <GitBranch size={15} /> 
                        <Text  marginLeft={2}>{forks}</Text>
                    </Flex>

                    <Flex alignItems="center">
                        <p>Built by</p>
                        <Flex marginLeft={1}>
                            {builtBy?.map(dev => <Avatar key={dev.username} marginRight="2px" name={dev.username} src={dev.avatar} size="xs" />)}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="column" justifyContent="space-between" height="100px">
                <StyledButton>
                    <Star size={15} /> 
                    <Text marginLeft={2}>Star</Text>
                </StyledButton>
                <Flex>
                    <Star size={15} /> 
                    <Text marginLeft={2} justifySelf="flex-end" fontSize={12}>{starsSince} since today</Text>
                </Flex>
            </Flex>
        </StyledCard>
            
    )
}

export default RepoCard;