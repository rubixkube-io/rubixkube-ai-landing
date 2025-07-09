import { Github, Mail, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/product-details" className="text-muted-foreground hover:text-primary">
                  Details
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="text-muted-foreground hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
  <a
    href="https://dev.to/rubixkube"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary"
  >
    Blog
  </a>
</li>

               <li>
  <a
    href="https://www.linkedin.com/company/rubixkube/jobs/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary"
  >
    Careers 
  </a>
</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <div>
  <div className="flex flex-col space-y-1">
    <Link to="/documentation" className="text-muted-foreground hover:text-primary">
      Documentation
    </Link>
    <Link to="/help-center" className="text-muted-foreground hover:text-primary">
      Help Center
    </Link>
  </div>
</div>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy and Data Usage
                </Link>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <a href="mailto:connect@rubixkube.io" className="hover:underline">
                  connect@rubixkube.io
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <p className="text-muted-foreground flex items-center gap-2">Bengaluru, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RubixKube™. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/rubixkube-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/rubixkube/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
