
const testimonials = [
  {
    quote: "RubixKube has completely transformed how we manage our infrastructure. The AI-driven approach saves us countless hours.",
    author: "Sarah Chen",
    role: "DevOps Lead, TechCorp",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    quote: "The conversational interface is a game-changer. It's like having an expert DevOps engineer available 24/7.",
    author: "Michael Rodriguez",
    role: "CTO, StartupFlow",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    quote: "We've reduced our deployment times by 80% since implementing RubixKube. The ROI has been incredible.",
    author: "James Wilson",
    role: "Infrastructure Manager, EnterpriseScale",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trusted by Teams Worldwide
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          See what our customers have to say about their experience with RubixKube
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <blockquote className="text-lg mb-6 italic text-gray-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
