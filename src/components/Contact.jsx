import { useState } from "react";

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleClick = () => {
    setShowContactInfo(true);
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 p-14 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>

        <p className="text-lg font-medium text-gray-500 max-w-xl">
          If you’re interested in collaborating or just want to say hi, feel free to contact me!
        </p>

        <button
          onClick={handleClick}
          className="rounded-lg border border-indigo-600 bg-black px-6 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </button>

        {showContactInfo && (
          <div className="mt-6 space-y-3 text-center text-base text-white">
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:dwiwahyuprivate@gmail.com" className="text-indigo-400 underline">
                dwiwahyuprivate@gmail.com
              </a>
            </p>
            <p>
              📱 <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+6285187238701" className="text-indigo-400 underline">
                0851-8723-8701
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
