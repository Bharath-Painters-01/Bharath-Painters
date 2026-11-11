"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sharath Kumara GR",
      rating: 5,
      text: "We were so impressed with bharath painters. From the initial quote, communication was clear and the scheduling was smooth. The crew especially Mr. roshan arrived right on time, protected our floors perfectly, and worked efficiently. The attention to detail on our detailed crown molding was exceptional, and the final finish on our living room walls is flawless and smooth—no brush strokes at all! They were polite, cleaned up meticulously each day, and even gave great advice on choosing the perfect accent color. We couldn't be happier with the result and will definitely use them again for our interior project.",
    },
    {
      name: "Reddy",
      rating: 5,
      text: "The team from Bharat painters was professional and tidy. They spent the first day just on preparing,Did they show up on time and finish within the promised timeframe which really showed in the final result. The lines along the ceiling and walls  are perfect.They finished half a day early and left the house spotless. I’d highly recommend them for any interior work.contractor roshan is have good experience in the painting.",
    },
    {
      name: "Shibu Shibani",
      rating: 5,
      text: "Thank you, Bharat Painters, for the excellent painting work. The staff maintained a very cordial and professional attitude throughout. Truly appreciate your service.",
    },
    {
      name: "Bibhun Rout",
      rating: 5,
      text: "Happy to be the first customer and they delivered the service very nicely.I sincerely thanks to roshan for timely execution and Guruprasad for the supervision",
    },
    {
      name: "Mahesh Ranjeri",
      rating: 5,
      text: "Bharath Painters painted my house nicely. The colors look very good and finishing is perfect. I recommend them to others.",
    },
    {
      name: "Basavaraj K Basu",
      rating: 5,
      text: "Excellent service from Bharath Painters. From quotation to final completion everything was smooth and transparent. Very satisfied with the work.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-4 sm:py-6 lg:py-6 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-2">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
            have to say about our services.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto sm:-mt-6 lg:-mt-6">
          {/* Main Testimonial */}
          <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-5 lg:p-6 relative">
            <Quote
              className="absolute top-2 sm:top-1 left-3 sm:left-1 text-blue-600 opacity-20"
              size={36}
            />

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-1 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start mb-2 sm:mb-4 ml-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    )
                  )}
                </div>

                {/* Font size smaller on mobile */}
                <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                <div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-3 sm:mt-5">
            <button
              onClick={prevTestimonial}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronLeft size={20} className="sm:size-24" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-2 sm:mt-8 text-center lg:mt-5">
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-2 sm:mb-5">
            Trusted by homeowners across the city
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-16 opacity-70 text-xs sm:text-sm lg:text-lg">
            <div className="text-white font-bold">★ Google Reviews</div>
            {/* <div className="text-white font-bold">★ Better Business Bureau</div>
            <div className="text-white font-bold">★ HomeAdvisor</div>
            <div className="text-white font-bold">★ Angie's List</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
