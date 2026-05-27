import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import logo from '../../assets/she-YlenJon1O7ieeEoa.avif'
export default function Header({ scrollToAbout }) {
  let [model,setModel]=useState(false)
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setMessage("Please fill the form before submitting.");
      return;
    }
    setMessage("Form submitted successfully!");
  };
  
  return (
    <div>
      <div className={`fixed w-[400px] p-4 bg-white duration-300 left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 ${model? 'top-[50%]' : 'top-[-1000px]'}`}>
        <h3 className="p-3 font-bold text-2xl relative">Join Us   <button onClick={()=>setModel(false)} className="absolute right-4 cursor-pointer"><IoMdCloseCircle /></button></h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required=""
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required=""
              />
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your interests and goals..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required=""
              defaultValue={""}
            />
          </div>
          {/* Submit */}
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full py-3 px-6 bg-red-600 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <p>{message}</p>
      </div>

      <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://shecanfoundation.org/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-7"
              alt="Foundation Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              She Can Foundation
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
              <button
                  className="block py-2 px-3 text-black hover:text-blue-400 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer"
                  aria-current="page"
                  onClick={handleRefresh}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToAbout}
                  className="text-black cursor-pointer hover:text-blue-400 block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </button>
              </li>
              <li>
                <button onClick={()=>setModel(true)} className="bg-amber-400 p-3 cursor-pointer hover:bg-amber-500">Join Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
