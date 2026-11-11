import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Client Testimonials – Bharath Painters in Bengaluru",
  description:
    "See what our customers in Bengaluru are saying — honest reviews, before & afters, real experiences with Bharath Painters’ services.",
  keywords:
    "home services testimonials, client reviews, customer feedback, service ratings, home improvement reviews, deep cleaning, exterior painting, interior painting, grouting, textures, wallpapers, waterproofing, bharath painters",
  openGraph: {
    title: "Client Testimonials - Professional Home Services",
    description:
      "Discover what our satisfied clients have to say about our quality workmanship and professional service.",
  },
};

export default function Testimonials() {
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

  return (
    <main>
      <Navigation />

      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Client Testimonials
          </h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about our services.
          </p>
        </div>
      </section>
      <section className="py-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={15}
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote
                    className="absolute -top-2 -left-2 text-blue-100"
                    size={24}
                  />
                  <p className="text-gray-700 italic relative z-10 pl-4 text-xs md:text-sm lg:text-md">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 -mb-2">
          <p className="text-md sm:text-lg text-gray-700 mb-2">
            Ready to experience our quality service for yourself?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get a Free Quotation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
