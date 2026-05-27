import logo from '../../assets/she-YlenJon1O7ieeEoa.avif'
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='flex-1'>
      <footer className="bg-neutral-primary-soft">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 grid grid-cols-2 gap-8">
              <a href="https://shecanfoundation.org/" className="flex items-center">
                <img
                  src={logo}
                  className="h-7 me-3"
                  alt="Foundation Logo"
                />
                <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap ">
                  She Can Foundation
                </span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-170">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Contact Us
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                  email: president@shecanfoundation.org
                  </li>
                  <li>
                      Contact: 8283841830
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-default sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.instagram.com/shecanfoundation.ngo/" target="_blank" className="text-body hover:text-heading">
              <LuInstagram />
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="https://www.linkedin.com/company/shecanfoundation/" target="_blank" className="text-body hover:text-heading ms-5">
                <FaLinkedin />
                <span className="sr-only">LinkedIn community</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
