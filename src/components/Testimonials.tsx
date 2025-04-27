const testimonials = [
  {
    quote: "RubixKube feels like a cloud-native co-pilot. It's made operations a conversation, not a battle.",
    author: "CTO",
    role: "AI Startup",
    image: "/lovable-uploads/pexels-googledeepmind-18069230.jpg",
  },
  {
    quote: "We deploy, debug, and optimize 10x faster now. RubixKube is truely a game-changer.",
    author: "Lead SRE",
    role: "Fintech Scaleup",
    image: "/lovable-uploads/pexels-googledeepmind-18069490.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Success Stories
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          See how teams are transforming their infrastructure operations with RubixKube
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
