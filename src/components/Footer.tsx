import mivinaLogo from "@/assets/mivina-logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img
            src={mivinaLogo}
            alt="MIVINA"
            className="h-6 filter brightness-0 invert opacity-50"
          />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MIVINA. All rights reserved.
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
