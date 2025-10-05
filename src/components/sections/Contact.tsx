"use client";

import React from "react";
import { motion } from "framer-motion";
import { Form, FormField } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../ui/section";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ControlledInput } from "../ui/controlled/controlled-input";
import { Button } from "../ui/button";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import { ControlledTextarea } from "../ui/controlled/controlled-textarea";
import { FaWhatsapp } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  subject: z.string().min(1).optional(),
  message: z.string(),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <Section
      id="contact"
      className="flex flex-col items-center justify-center w-full"
      containerClassName="space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about frontend development.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 p-5 border rounded-md"
        >
          <h3 className="text-lg text-left">Send Message</h3>
          <Form {...form}>
            <form
              className="flex flex-col justify-between gap-6 h-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid  md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <ControlledInput
                      label="Name"
                      placeholder="Your Name"
                      {...field}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <ControlledInput
                      label="Email"
                      placeholder="Your Email"
                      {...field}
                    />
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <ControlledInput
                    label="Subject"
                    className="col-span-2"
                    placeholder="What's on your mind?"
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <ControlledTextarea
                    label="Message"
                    className="col-span-2"
                    placeholder="Tell me about your project"
                    {...field}
                  />
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col gap-3 justify-between"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-left">Contact Information</h3>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
                <LuMail className="size-6 text-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-sm text-muted-foreground">Email</h4>
                <a href="mailto:hazemmohamed9194@gmail.com">
                  hazemmohamed9194@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
                <FaWhatsapp className="size-6 text-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-sm text-muted-foreground">WhatsApp</h4>
                <a
                  href="https://wa.me/+201142221039"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +201142221039
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
                <LuMapPin className="size-6 text-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-sm text-muted-foreground">Address</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl text-left">Connect With Me</h3>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
                  <LuGithub className="size-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm text-muted-foreground">Github</h4>
                  <a
                    href="https://github.com/hazemAzzam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hazemAzzam
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
                  <LuLinkedin className="size-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm text-muted-foreground">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/hazemAzzam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hazemAzzam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
