import { Flex, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <Flex 
            backgroundColor="#161b22"
            height="162px" 
            alignItems="center" 
            flexDirection="column" 
            justifyContent="center"
        >
            <Heading as='h1' size='lg' color="#fff">
                Trending
            </Heading>
            <Text>See what the GitHub community is most excited about today.</Text>
        </Flex>
    )
}

export default HeroSection;