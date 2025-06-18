const testimonials = [
  {
    quote:
      "Every few years something quietly resets expectations in operations. RubixKube is one of those moments. What struck me wasn’t flashy analytics but the calm assurance RubixKube brings to live environments. It treats anomalies like solvable puzzles, handing my team a clear next move instead of another graph.",
    author: "Ganesh Kumar",
    role: "Sheshi AI",
  },
  {
    quote:
      "It’s rare that something makes seasoned SREs pause mid-stand-up. RubixKube did.\nI’m impressed by how confidently it stays out of the way until it can add real value.\nIf this is the direction operations is heading, the game just changed, and not by inches.",
    author: "Richie Sebastian",
    role: "DevOps Lead",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Success Stories
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          See how teams are transforming their infrastructure operations with RubixKube
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <blockquote className="text-lg italic text-gray-700 leading-relaxed mb-6 min-h-[220px] whitespace-pre-line">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t pt-4 mt-auto">
                  <div className="font-semibold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
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
