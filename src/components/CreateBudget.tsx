'use client';

import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from "@/components/ui/select";
import { monthList, yearList } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  year: z.string().min(1, "Year is required"),
  month: z.string().min(1, "Month is required"),
  budget: z.string().min(1, "Budget is required"),
});

export default function CreateBudget() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: "",
      month: "",
      budget: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values);
  }

  console.log("Component Rendered");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-1">
            <CirclePlus /> Create Budget
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Budget</DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile  here. Click save when you're done. */}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="year"
                render={({ field: { onChange, value } }) => (
                  <Controller
                    name="year"
                    control={form.control}
                    render={({ field }) => (
                      <>
                       <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Select
                              value={value?.toString()}
                              onValueChange={(value) => onChange(value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                {yearList.map((year) => (
                                  <SelectItem key={year} value={String(year)}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="month"
                render={({ field: { onChange, value } }) => (
                  <Controller
                    name="month"
                    control={form.control}
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel>Month</FormLabel>
                          <FormControl>
                              <Select
                                value={value?.toString()}
                                onValueChange={(value) => onChange(value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select month" />
                                </SelectTrigger>
                                <SelectContent>
                                  {monthList.map((mon) => (
                                    <SelectItem key={mon} value={String(mon)}>
                                      {mon}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
    