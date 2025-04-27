
const testimonials = [
  {
    quote: "RubixKube feels like a cloud-native co-pilot — it's made operations a conversation, not a battle.",
    author: "CTO",
    role: "AI Startup",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    quote: "We deploy, debug, and optimize 10x faster without getting lost in dashboards or YAML.",
    author: "Lead SRE",
    role: "Fintech Scaleup",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Customers Are Saying
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
