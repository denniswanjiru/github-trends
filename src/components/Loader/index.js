import { Skeleton, Stack } from "@chakra-ui/react"

const Loader = () => {
    return (
        <Stack>
            <Skeleton height='97px' />
            <Skeleton height='97px' />
            <Skeleton height='97px' />
            <Skeleton height='97px' />
            <Skeleton height='97px' />
            <Skeleton height='97px' />
            <Skeleton height='97px' />
        </Stack>
    )
}

export default Loader;