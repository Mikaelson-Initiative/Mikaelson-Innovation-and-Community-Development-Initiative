"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lightbulb, Mail, Send, User, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email"),
  interest: z.string().optional(),
  referral: z.string().optional(),
  newsletter: z.boolean().default(false),
});

export const WaitlistForm = ({ waitlistCount = 1247 }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      referral: "",
      newsletter: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="w-full py-12 flex justify-center">
      <Card className="w-full max-w-xl shadow-md rounded-2xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
            <p className="text-gray-600">
              Join {waitlistCount} others already on the list
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-primary" /> Your Name
                      *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-primary" /> Email
                      Address *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Interest */}
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-brand-primary" /> What
                      interests you most?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="!h-12">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="habits">Habit Tracking</SelectItem>
                        <SelectItem value="community">
                          Community Features
                        </SelectItem>
                        <SelectItem value="challenges">
                          Challenges & Competitions
                        </SelectItem>
                        <SelectItem value="analytics">
                          Personal Analytics
                        </SelectItem>
                        <SelectItem value="all">Everything!</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Referral */}
              <FormField
                control={form.control}
                name="referral"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-primary" /> How did
                      you hear about us?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Friend, social media, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Newsletter Checkbox */}
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="gap-3 bg-[#f9fafb] py-4 rounded-lg flex-center flex">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I want to receive updates and exclusive content via email
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant={"brand"}
                className="w-full flex !py-7 items-center gap-2"
              >
                <Send className="w-4 h-4" /> Join the Waitlist
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
