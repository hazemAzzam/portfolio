import { Mail, Heart } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-2">Hazem Azzam</h3>
            <p className="text-muted-foreground text-sm">
              Frontend Developer passionate about creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/hazemAzzam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <LuGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hazemAzzam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LuLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hazemmohamed9194@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              by Hazem Azzam
            </p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript, and Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
