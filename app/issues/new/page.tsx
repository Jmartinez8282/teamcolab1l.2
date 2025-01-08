"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import React from "react";

interface IssueForm {
  title: string;
  description: string;
}
                                                                                                                                                                                                              
const NewIssuePage = () => {
  const { register, control } = useForm<IssueForm>();

  return (
    <>
      <div className="max-w-xl space-y-3">
        <TextField.Root size="2" placeholder="title" {...register("title")}>
          <Controller
            name="description"
            control={control}
            render={(field) => <SimpleMDE placeholder="description" {...field}/>}
          />
        </TextField.Root>

        <Button>Submit New Issue</Button>
      </div>
    </>
  );
};

export default NewIssuePage;
