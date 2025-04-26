"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "../hooks/useLoginForm";
import { Spinner } from "@/components/spinner";

export function LoginForm() {
  const { form, onSubmit, isSubmitting } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="input password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button with blue-500 */}
        <Button
          type="submit"
          className="focus:ring-opacity-50 w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none active:bg-blue-700"
        >
          {isSubmitting ? <Spinner /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
