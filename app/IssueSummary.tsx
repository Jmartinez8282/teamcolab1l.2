import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'


// interface Props {
//     open: number;
//     inProgress: number;
//     closed: number;
// }



const IssueSummary = ({open,inProgress,closed}:{open:number;inProgress:number;closed:number}) => {

const containers: {
    label:string;
    value:number;
    status:Status
}[] = [
    {label:"Open Issues", value:open, status:'OPEN'},
    {label:"In-progress Issues", value:inProgress, status:'IN_PROGRESS'},
    {label:"Closed Issues", value:closed, status:'CLOSED'},
]

  return (
    <>
            <Flex gap={'4'} justify={'center'}>
                {containers.map((container) => (
                <Card key={container.label}>
                    <Flex direction={'column'} gap={'1'}>
                        <Link className='text-sm font-medium' href={`/issues/list?status=${container.status}`} >
                        {container.label}
                        </Link>
                            <Text align={'center'} size={'5'} className='font-bold'>{container.value}</Text>
                    </Flex>
                </Card>
                ))}
            </Flex>
    </>
  )
}

export default IssueSummary