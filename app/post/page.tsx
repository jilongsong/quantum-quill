"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import Markdown from "@/components/markdown/index";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createPost } from '@/api/posts'

const formSchema = z.object({
  title: z.string().min(1, {
    message: "article title must be required.",
  }),
  type: z.string({
    required_error: "Please select a article type.",
  }),
  content: z.string().min(1, {
    message: "article content must be required.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "javascript",
      content: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await createPost(values);
      result && form.reset();
  };

  return (
    <div className="min-h-full mt-4">
      <div className="mx-auto max-w-10xl px-6 sm:px-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="w-full grid grid-cols-6 gap-4 items-center">
              <div className="col-span-4 ...">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article Title</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-1 ...">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper" {...field}>
                            <SelectItem value="html">Html</SelectItem>
                            <SelectItem value="css">Css</SelectItem>
                            <SelectItem value="javascript">Javascript</SelectItem>
                            <SelectItem value="vue">Vue</SelectItem>
                            <SelectItem value="react">React</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6">
                <Button type="submit">Submit</Button>
              </div>
            </div>
            <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article Content</FormLabel>
                      <FormControl>
                      <div style={{ height: "calc(100vh - 300px)" }} className=" grid grid-cols-2 gap-4">
                      <Textarea className="h-full overflow-y-auto" placeholder="Type your message here." {...field} />
                      <div className="h-full overflow-y-auto">
                      <Markdown content={field.value} />
                      </div>
                      </div>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </form>
        </Form>
      </div>
    </div>
  );
}
