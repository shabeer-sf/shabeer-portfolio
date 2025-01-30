"use client";

import { createContact } from "@/actions/contact";
import useFetch from "@/hooks/use-fetch";
import { contactSchema } from "@/lib/validators";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const {
    data: contact,
    loading: isLoading,
    error,
    fn: createContactFN,
  } = useFetch(createContact);

  
  useEffect(() => {
    if (contact) {
      toast.success("Message sent successfully.");
      router.refresh();
    }
    
  }, [contact]);
  const onSubmit = async (data) => {
    await createContactFN(data);
  };
  return (
    <section id="contact" className="pt-20 text-center space-y-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="space-y-2 px-4">
          <h2 className="text-color text-3xl md:text-4xl">
            Let's work together
          </h2>
          <h2 className="text-color text-3xl md:text-4xl">Contact Me</h2>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 bg-[#1c1c1c] p-6 rounded-xl shadow-lg grid md:grid-cols-2 gap-2 text-left"
        >
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              {...register("name")}
              className="w-full p-3 bg-[#2c2c2c] text-white shadow border border-stone-700 focus:outline-none focus:border-primary"
            />
            {errors.name && (
                  <p className="text-sm text-red-500">
                    {errors.name?.message}
                  </p>
                )}
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full p-3 bg-[#2c2c2c] text-white shadow border border-stone-700 focus:outline-none focus:border-primary"
            />
            {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email?.message}
                  </p>
                )}
          </div>

          

          <div className="mb-4 md:col-span-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              {...register("message")}
              rows={4}
              className="w-full p-3 bg-[#2c2c2c] text-white shadow border border-stone-700 focus:outline-none focus:border-primary"
              
             />
             {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message?.message}
                  </p>
                )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            size="lg"

            className="w-full bg-primary text-white py-3 rounded-lg text-base font-semibold hover:bg-opacity-80 transition duration-300"
          >
           {isLoading ? "Sending..." : "Send Message"} 
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
