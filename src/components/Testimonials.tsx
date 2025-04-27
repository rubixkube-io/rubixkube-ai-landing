
const testimonials = [
  {
    quote: "RubixKube has completely transformed how we manage our infrastructure. The AI-driven approach saves us countless hours.",
    author: "Sarah Chen",
    role: "DevOps Lead, TechCorp",
  },
  {
    quote: "The conversational interface is a game-changer. It's like having an expert DevOps engineer available 24/7.",
    author: "Michael Rodriguez",
    role: "CTO, StartupFlow",
  },
  {
    quote: "We've reduced our deployment times by 80% since implementing RubixKube. The ROI has been incredible.",
    author: "James Wilson",
    role: "Infrastructure Manager, EnterpriseScale",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Teams Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

