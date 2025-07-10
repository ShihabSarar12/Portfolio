/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiFacebook, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import About from "./About";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const navVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className=" w-full sticky left-0 top-0 z-50 transition-all duration-300 backdrop-blur-md  shadow-lg">
      <div className="container flex mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between h-16 md:h-20 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold lg:ml-16 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Shihab Sarar
          </span>
        </motion.div>

        <nav className="lg:flex hidden space-x-8 ">
          {navItems.map(({ name, path }) => (
            <Link
              className="text-white font-medium py-2 block  hover:text-violet-600"
              key={name}
              to={path}
              onClick={toggleMenu}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="md:flex hidden items-center space-x-4">
          {[FiGithub, FiFacebook, FiLinkedin].map((Icon, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600"
              href="#"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            Hire Me
          </motion.button>
        </div>

        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden backdrop-blur-sm bg-white/10 border-t border-white/10 shadow-md px-4 py-5 space-y-5 rounded-b-2xl"
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2 block"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            {[FiGithub, FiFacebook, FiLinkedin].map((Icon, i) => (
              <a key={i} href="">
                <Icon className="h-5 w-5 text-gray-300" />
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl rounded-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="How can we help you ?"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
