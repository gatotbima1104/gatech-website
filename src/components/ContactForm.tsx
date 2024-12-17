import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(!isLoading);

    const formElement = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_msdc4xo",
        "template_68tw5m8",
        formElement,
        "FtpzWg9abEKaxGzea"
      )
      .then(() => {
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setIsLoading(false); // Re-enable the button in case of error
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  const isFormFilled = !form.email || !form.name || !form.message

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-t from-black to-green-900 rounded-[20px] space-y-2 p-3 w-[90%] mx-auto">
      <h1 className="text-3xl mb-1 font-bold pt-10">Send Inquiry</h1>
      <p className="text-center border-b-[0.1px] mx-5 pb-5">Questions or ready to collaborate? Let's streamline your processes—send an inquiry.</p>
      <form className="w-full px-5 space-y-5 pt-5" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={form.name}
          name="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
        />
        <label className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@gmail.com"
          required
          
        />
        <label className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Tell me about your project"
          required
        />

        <button
          type="submit"
          className={`w-full p-3 rounded font-bold ${isLoading || isFormFilled ? "bg-gray-600 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"}`}
          disabled={isLoading || isFormFilled} // Disable button if loading or form is empty
        >
          {isLoading? "Messaging .. " : "Message"}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
