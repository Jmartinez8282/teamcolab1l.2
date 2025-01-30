import { Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { Suspense } from "react";


const IssuesActions = () => {
  return (
    <>
      <Flex mb={'5'} justify={'between'}>
        <Suspense>
        <IssueStatusFilter/>

        </Suspense>
        <Button>
          {" "}
          <Link href={"/issues/new"}>New Issue</Link>{" "}
        </Button>
      </Flex>
    </>
  );
};

export default IssuesActions;
