import { Box, Center, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

import RepoCard from "../../components/RepoCard";

const Repos = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(process.env.REACT_APP_REPOS_URI).then(res =>res.json())
    )

    if (isLoading) return <Loader />
 
    if (error) return (
        <Center>
            <Text>Somthing went wrong!</Text>
            <Text>{error.message}</Text>
        </Center>
    )

    return (
        <Box>
            {data?.map(repo => (<RepoCard key={repo.rank} repo={repo} />))}
        </Box>
    )
}

export default Repos;