import { Link } from "react-router-dom";
import { routes } from "@/constants/routeConfig.ts";
import Logo from "@/components/Logo.tsx";
import socialData from "@/constants/content/socialLinks.json";

const Footer = () => {
  const navItems = routes.filter((item) => item.label !== "Home");
  const socialLinks = socialData.socialLinks;

  return (
    <footer className="bg-[#292727] text-white p-6 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {/* Logo */}
          <Logo size={48} />

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2 text-center sm:text-left">
            {navItems.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="!text-white font-outfit text-lg font-medium hover:!text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 sm:gap-8 items-center">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              to={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg hover:opacity-80 transition-opacity size-10"
              aria-label={social.label}
            >
              <img
                src={social.iconUrl}
                alt={social.label}
                className="object-cover size-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
