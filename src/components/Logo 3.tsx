import { Link } from "react-router-dom";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 48, className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="flex-shrink-0">
        <img
          src="/hci-logo.png"
          alt="HCI Lab Logo"
          className="rounded"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      </div>
    </Link>
  );
};

export default Logo;
