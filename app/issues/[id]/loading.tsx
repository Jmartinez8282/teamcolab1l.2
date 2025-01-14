import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from '@/app/components';


const LoadingIssueDetailPage = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Skeleton baseColor="#202020" highlightColor="#444"  />
        <Flex gap={"3"} my={"2"}>
          <Skeleton baseColor="#202020" highlightColor="#444"  width={"5rem"} />

          <Skeleton baseColor="#202020" highlightColor="#444"  width={"5rem"} />
        </Flex>
        <Card className="prose" mt={"4"}>
          <Skeleton baseColor="#202020" highlightColor="#444"  count={3} />
        </Card>
      </Box>
    </>
  );
};

export default LoadingIssueDetailPage;
