import { Github, Mail, Phone, MessageCircle, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="/product-details" className="text-muted-foreground hover:text-primary">Details</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/our-story" className="text-muted-foreground hover:text-primary">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              {/* <li><a href="#" className="text-muted-foreground hover:text-primary">API Reference</a></li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <a href="mailto:hello@rubixkube.ai" className="hover:underline">
                  connect@rubixkube.io
                </a>
              </li>
              <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <p className="text-muted-foreground flex items-center gap-2">
                  Bengaluru, India
                  </p>
              </li>
              {/* <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 text-green-500 mt-1" />
                <a
                  href="https://wa.me/917483927043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RubixKube. All rights reserved.
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
