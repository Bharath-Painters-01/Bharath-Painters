import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Gallery of Past Projects | Bharath Painters in Bangalore",
  description:
    "Browse our gallery of completed painting, waterproofing, texture, wallpaper, and wood finishing projects across Bengaluru. Quality you can see.",
  keywords:
    "home services gallery, painting projects, home improvement gallery, before and after, project showcase, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters, deepcleaning, exterior painting, grouting, interior painting, texture, wallpaper, and waterproofing.",
  openGraph: {
    title: "Gallery of Our Professional Home Services Projects",
    description:
      "View our portfolio of completed home improvement projects showcasing our quality workmanship.",
  },
};

export default function Gallery() {
  const galleryItems = [
    {
      category: "Interior Painting",
      images: [
        "images/services/interior_painting/1.jpeg",
        "images/services/interior_painting/2.jpeg",
        "images/services/interior_painting/3.jpeg",
        "images/services/interior_painting/4.jpeg",
        "images/services/interior_painting/5.jpeg",
      ],
    },
    {
      category: "Exterior Painting",
      images: [
        "images/services/exterior_painting/1.jpeg",
        "images/services/exterior_painting/2.jpeg",
        "images/services/exterior_painting/3.jpeg",
        "images/services/exterior_painting/4.jpeg",
      ],
    },
    {
      category: "Waterproofing",
      images: [
        "images/services/water_proofing/1.jpeg",
        "images/services/water_proofing/2.jpeg",
        "images/services/water_proofing/3.jpeg",
        "images/services/water_proofing/4.jpeg",
        "images/services/water_proofing/5.jpeg",
      ],
    },
    {
      category: "Deep Cleaning",
      images: [
       "images/services/deep_cleaning/1.jpeg",
       "images/services/deep_cleaning/2.jpeg",
       "images/services/deep_cleaning/3.jpeg",
       "images/services/deep_cleaning/4.jpeg",
       "images/services/deep_cleaning/5.jpeg",
       "images/services/deep_cleaning/6.jpeg",
       "images/services/deep_cleaning/7.jpeg",
       "images/services/deep_cleaning/8.jpeg",
       "images/services/deep_cleaning/9.jpeg",
       "images/services/deep_cleaning/10.jpeg",
      ],
    },
    {
      category: "Wood Finishes",
      images: [
        "images/services/wood_finishes/1.jpeg",
      ],
    },
    {
      category: "Wallpapers",
      images: [
       "images/services/wallpaper/1.jpg",
       "images/services/wallpaper/2.jpg",
       "images/services/wallpaper/3.jpg",
       "images/services/wallpaper/4.jpg",
       "images/services/wallpaper/5.jpg",
      ],
    },
    {
      category: "Grouting",
      images: [
        "images/services/grouting/1.jpeg",
        "images/services/grouting/2.jpeg",
        "images/services/grouting/3.jpeg",
        "images/services/grouting/4.jpeg",
        "images/services/grouting/5.jpeg",
      ],
    },
    {
      category: "Texture",
      images: [
        "images/services/texture/1.jpeg",
        "images/services/texture/2.jpeg",
        "images/services/texture/3.jpeg",
        "images/services/texture/4.jpeg",
        "images/services/texture/5.jpeg",
        "images/services/texture/6.jpeg",
        "images/services/texture/7.jpeg",
        "images/services/texture/8.jpeg",
        "images/services/texture/9.jpeg",
      ],
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section (same style as About) */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Our Work Gallery
          </h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            Explore our completed projects across deepcleaning, exterior painting, grouting, interior painting, texture, wallpaper, and waterproofing. From intricate details to stunning finishes, and more. Every picture reflects our dedication to quality and
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
          {galleryItems.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="pt-2 px-3 border-b">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {category.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={`/${image}`}
                      alt={`${category.category} project ${imgIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us (reuse from About for consistency) */}
      <section className="py-6 bg-gradient-to-br from-purple-500 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Why Showcase Our Work?
            </h2>
            <p className="text-md sm:text-xl text-blue-100 max-w-3xl mx-auto">
              We believe our projects speak louder than words. Here&apos;s why
              customers trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Proven track record with hundreds of projects",
              "Diverse expertise across multiple home services",
              "Attention to detail in every step",
              "Trusted by families and businesses alike",
              "Modern tools and eco-friendly practices",
              "Commitment to exceeding expectations",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-sm sm:text-lg "
              >
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 px-1 sm:py-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-md sm:text-lg text-gray-700 mb-6">
            Loved our work? Let&apos;s bring the same level of quality to your home.
            Contact us today for a free consultation and quotation.
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
