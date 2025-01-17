'use client'
import { Spinner } from '@/app/components';
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const DeleteIssueButton = ({issueId}:{issueId:number}) => {

    const router = useRouter();
    const [error, setError] = useState(false);

    const [isDeleting, setIsDeleting] = useState(false)


    const DeleteIssue = () => {
      try {
           setIsDeleting(true)
        axios.delete('/api/issues/' + issueId);
        router.push('/issues/list')
        router.refresh();

        
      } catch (error) {
        setIsDeleting(true)
        setError(true);
      }
    }
  return (
   <>
  <AlertDialog.Root>
	<AlertDialog.Trigger>
		<Button color="red" disabled={isDeleting}>Delete {isDeleting && <Spinner/>}</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Delete Issue</AlertDialog.Title>
		<AlertDialog.Description size="2">
	This will delete FOR EVER!!!!
		</AlertDialog.Description>

		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red" onClick={DeleteIssue}>
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>

<AlertDialog.Root open={error}>
        <AlertDialog.Content>
            <AlertDialog.Title>
              Error
            </AlertDialog.Title>
            <AlertDialog.Description>
              This issue could not be deleted
            </AlertDialog.Description>
            <Button className='mt-2' color='gray' variant='soft' onClick={()=> setError(false)}>OK</Button>
        </AlertDialog.Content>
</AlertDialog.Root>

   </>
  )
}

export default DeleteIssueButton