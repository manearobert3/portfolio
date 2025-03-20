import React from "react";
import ContactForm from "../components/contact-form";
export default function Contact() {
  return (
    <section>
      <div className=" max-w-3xl mx-auto p-5 ">
        <ContactForm />
      </div>
    </section>
    // <section className="py-7">
    //   <div className="container max-w-3xl mx-auto flex flex-col h-full">
    //     <ContactForm />
    //   </div>
    // </section>
  );
}
