"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { contactSchema } from "../lib/schema";
import { z } from "zod";
import { sendEmail } from "../lib/actions";
import { IoSend } from "react-icons/io5";
type Inputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [showEmailSuccess, setEmailSuccess] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const response = await sendEmail(data);
    if (response.error) {
      setShowEmailAlert(true);
      console.log(response.error);
      setTimeout(() => {
        setShowEmailAlert(false);
      }, 3000);
      return;
    }

    setEmailSuccess(true);
    setTimeout(() => {
      setEmailSuccess(false);
    }, 3000);
  };

  return (
    <>
      {showEmailSuccess && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      {showEmailAlert && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-error">
            <span>
              There was a problem sending the message. Please try again!
            </span>
          </div>
        </div>
      )}
      <h1 className="ml-2 mb-2 text-3xl font-bold">Get in touch:</h1>

      <form className="grid " onSubmit={handleSubmit(processForm)}>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-[1vw] h-auto mb-4 md:mb-0">
          <div className="grid grid-rows">
            <label
              className={`bg-stone-100 border-slate-400 dark:bg-gray-800 input w-full focus-within:outline-gray-600 dark:focus-within:outline-gray-400 h-12 ${
                errors.name
                  ? "focus-within:outline-red-500 dark:focus-within:outline-red-500 border-red-500 dark:border-red-500"
                  : "focus-within:outline-gray-600 dark:focus-within:outline-gray-400"
              }`}
            >
              <div className="flex items-center h-full">
                <AiOutlineUser className="mr-2" />
                <input
                  className="placeholder-gray-400 grow text-left w-full p-2 h-full bg-transparent"
                  placeholder="Name"
                  {...register("name", { required: "Please input a name." })}
                />
              </div>
            </label>
            <p
              className={`text-red-700 ml-2 mt-2 transition-all duration-200 ${
                errors.name
                  ? "opacity-100 min-h-[20px]"
                  : "opacity-0 min-h-[20px]"
              }`}
            >
              {errors.name?.message}
            </p>
          </div>

          <div className="grid grid-rows">
            <label
              className={`bg-stone-100 border-slate-400 dark:bg-gray-800 input w-full focus-within:outline-gray-600 dark:focus-within:outline-gray-400 h-12 ${
                errors.email
                  ? "focus-within:outline-red-500 dark:focus-within:outline-red-500 border-red-500 dark:border-red-500"
                  : "focus-within:outline-gray-600 dark:focus-within:outline-gray-400"
              }`}
            >
              <div className="flex items-center h-full">
                <AiOutlineMail className="mr-2" />
                <input
                  className="placeholder-gray-400 grow text-left w-full p-2 h-full bg-transparent"
                  placeholder="Email"
                  {...register("email", { required: "Please input an email." })}
                ></input>
              </div>
            </label>
            {errors.email && (
              <p
                className={`text-red-700 ml-2 mt-2 transition-all duration-200 ${
                  errors.email
                    ? "opacity-100 min-h-[20px]"
                    : "opacity-0 min-h-[20px]"
                }`}
              >
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className="p-2">
          <textarea
            className={`bg-stone-100 border-slate-400 dark:bg-gray-800 input w-full h-24 p-3 resize-none ${
              errors.message
                ? "border-red-500 dark:border-red-500 focus-within:outline-red-500 dark:focus-within:outline-red-500"
                : "focus-within:outline-gray-600 dark:focus-within:outline-gray-400"
            }`}
            placeholder="Message"
            {...register("message")}
          ></textarea>

          {errors.message && (
            <p className="text-red-700 ml-2 mt-1">{errors.message.message}</p>
          )}
          <div className="flex justify-end ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lg md:btn-md w-full md:w-full mt-6 mb-4
    bg-slate-900 border-slate-400 hover:bg-slate-700 text-slate-200
    dark:border-inherit dark:border-slate-400 hover:border-slate-400 hover:text-slate-200
    dark:text-slate-900 dark:bg-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200 border-none dark:border-none 
    disabled:bg-gray-400 disabled:text-slate-200 disabled:cursor-not-allowed"
            >
              <IoSend />
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
          <p className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
            By submitting this form you agree with the{" "}
            <a
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              privacy
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
