import { Center, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import DevCard from "../../components/DevCard";
import Loader from "../../components/Loader";

const Developers = () => {
    const { isLoading, error, data } = useQuery('devData', () =>
        fetch('https://corsanywhere.herokuapp.com/https://gh-trending-api.herokuapp.com/developers').then(res =>res.json())
    )

    if (isLoading) return <Loader />
 
    if (error) return (
        <Center>
            <Text>Somthing went wrong!</Text>
            <Text>{error.message}</Text>
        </Center>
    )

    return (
        <div>
            {data?.map(dev => (<DevCard key={dev.rank} dev={dev} />))}
        </div>
    )
}

export default Developers;