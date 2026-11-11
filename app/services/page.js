import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Paintbrush,
  Sparkles,
  Wrench,
  Zap,
  Sofa,
  Home,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Painting, Waterproofing & Cleaning in Bengaluru",
  description:
    "Explore Bharath Painters’ wide range of services: painting, waterproofing, grouting, cleaning, wallpaper installation, and wood finishing. Quality guaranteed.",
  keywords:
    "home services, deep cleaning, exterior painting, interior painting, grouting, texture finishes, wallpapers, waterproofing, home improvement, bharath painters",
  openGraph: {
    title: "Professional Home Services - Quality Home Improvement Solutions",
    description:
      "Expert home services including deep cleaning, painting, grouting, textures, wallpapers and waterproofing. Licensed professionals with quality guarantee.",
  },
};

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="text-blue-600" size={48} />,
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with our professional painting services. We use premium quality paints and deliver flawless finishes for every room.",
      features: [
        "Living Room & Bedroom Painting",
        "Kitchen & Bathroom Painting",
        "Color Consultation & Design",
        "Wall Preparation & Repair",
        "Cabinet & Trim Painting",
        "Ceiling Painting",
      ],
      href: "/services/interior-painting",
      image: "images/services/interior_painting/5.jpeg",
      startingPrice: "₹5.5",
    },
    {
      icon: <Paintbrush className="text-green-600" size={48} />,
      title: "Exterior Painting",
      description:
        "Enhance your home's curb appeal with our weather-resistant exterior painting services. Durable finishes that protect and beautify your property.",
      features: [
        "House Exterior Painting",
        "Deck & Fence Staining",
        "Weather Protection Coatings",
        "Power Washing Preparation",
        "Siding & Trim Painting",
        "Garage Door Painting",
      ],
      href: "/services/exterior-painting",
      image: "images/services/exterior_painting/4.jpeg",
      startingPrice: "₹9",
    },
    {
      icon: <Wrench className="text-blue-600" size={48} />,
      title: "Water Proofing",
      description:
        "Effective waterproofing solutions to protect your property from water damage. We provide long-lasting protection for walls, roofs, and basements.",
      features: [
        "Roof Waterproofing",
        "Basement Waterproofing",
        "Bathroom Waterproofing",
        "Exterior Wall Sealing",
        "Foundation Waterproofing",
        "Terrace & Balcony Treatment",
      ],
      href: "/services/water-proofing",
      image: "images/services/water_proofing/3.jpeg",
      startingPrice: "₹28",
    },
    {
      icon: <Wrench className="text-yellow-600" size={48} />,
      title: "Grouting",
      description:
        "Professional tile grouting services to restore and enhance the appearance of your tiled surfaces. We ensure proper sealing and long-lasting results.",
      features: [
        "Tile Grout Repair",
        "Grout Cleaning & Sealing",
        "Color Grout Restoration",
        "Bathroom Tile Grouting",
        "Kitchen Tile Grouting",
        "Floor Tile Grouting",
      ],
      href: "/services/grouting",
      image: "images/services/grouting/2.jpeg",
      startingPrice: "₹45",
    },
    {
      icon: <Paintbrush className="text-purple-600" size={48} />,
      title: "Texture",
      description:
        "Custom wall texturing services to add dimension and character to your spaces. We offer a variety of texture styles to match your design preferences.",
      features: [
        "Knockdown Texture",
        "Orange Peel Texture",
        "Popcorn Ceiling Texture",
        "Venetian Plaster",
        "Stucco Texturing",
        "Custom Texture Designs",
      ],
      href: "/services/texture",
      image: "images/services/texture/2.jpeg",
      startingPrice: "₹60",
    },
    {
      icon: <Home className="text-teal-600" size={48} />,
      title: "Wallpapers",
      description:
        "Premium wallpaper installation and removal services. We offer a wide selection of wallpaper styles and expert installation for perfect results.",
      features: [
        "Wallpaper Installation",
        "Wallpaper Removal",
        "Custom Wallpaper Solutions",
        "Accent Wall Design",
        "Wallpaper Repair",
        "Wallpaper Consultation",
      ],
      href: "/services/wallpapers",
      image: "images/services/wallpaper/3.jpg",
      startingPrice: "₹3500",
    },
    {
      icon: <Sparkles className="text-purple-600" size={48} />,
      title: "Deep Cleaning",
      description:
        "Comprehensive deep cleaning services for homes and offices. We clean every corner with attention to detail and eco-friendly products.",
      features: [
        "Deep House Cleaning",
        "Post-Construction Cleanup",
        "Move-in/Move-out Cleaning",
        "Regular Maintenance Cleaning",
        "Carpet & Upholstery Cleaning",
        "Window Cleaning",
      ],
      href: "/services/deep-cleaning",
      image: "images/services/deep_cleaning/3.jpeg",
      startingPrice: "₹5",
    },
    {
      icon: <Sofa className="text-red-600" size={48} />,
      title: "Wood Finishes",
      description:
        "Expert wood finishing and restoration services. Our skilled craftsmen bring new life to wooden surfaces with premium stains and finishes.",
      features: [
        "Wood Staining & Sealing",
        "Furniture Refinishing",
        "Cabinet Refinishing",
        "Deck & Fence Finishing",
        "Custom Wood Treatments",
        "Antique Wood Restoration",
      ],
      href: "/services/wood-finishes",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹35",
    },
  ];

  /* Old Services - Commented Out for Reference
  const oldServices = [
    {
      icon: <Paintbrush className="text-blue-600" size={48} />,
      title: "House Painting",
      description: "Transform your home with our professional interior and exterior painting services. We use premium quality paints and deliver flawless finishes.",
      features: [
        "Interior & Exterior Painting",
        "Color Consultation & Design",
        "Wall Preparation & Repair",
        "Texture & Specialty Finishes",
        "Cabinet & Trim Painting",
        "Wallpaper Removal"
      ],
      href: "/services/house-painting",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹299"
    },
    {
      icon: <Wrench className="text-green-600" size={48} />,
      title: "Plumbing Services",
      description: "Expert plumbing repairs, installations, and maintenance. Our licensed plumbers handle everything from leaks to complete system installations.",
      features: [
        "Leak Detection & Repair",
        "Pipe Installation & Repair",
        "Fixture Installation",
        "Drain Cleaning & Unclogging",
        "Water Heater Services",
        "Emergency Plumbing"
      ],
      href: "/services/plumbing",
      image: "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹89"
    },
    {
      icon: <Zap className="text-yellow-600" size={48} />,
      title: "Electrical Work",
      description: "Licensed electrical services including wiring, repairs, installations, and safety inspections. All work meets local codes and safety standards.",
      features: [
        "Wiring & Rewiring",
        "Outlet & Switch Installation",
        "Lighting Solutions",
        "Circuit Breaker Services",
        "Safety Inspections",
        "Emergency Electrical"
      ],
      href: "/services/electrical-work",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹99"
    },
    {
      icon: <Sofa className="text-orange-600" size={48} />,
      title: "Furniture Work",
      description: "Expert furniture repair, restoration, and custom assembly services. Our skilled craftsmen bring new life to your furniture pieces.",
      features: [
        "Furniture Repair & Restoration",
        "Custom Assembly Services",
        "Upholstery & Reupholstery",
        "Wood Refinishing",
        "Cabinet Installation",
        "Custom Carpentry"
      ],
      href: "/services/furniture-work",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹79"
    },
    {
      icon: <Home className="text-teal-600" size={48} />,
      title: "False Ceiling",
      description: "Modern false ceiling installation with various designs and lighting integration. Transform your space with our expert craftsmanship.",
      features: [
        "Gypsum Board Ceiling",
        "POP Ceiling Design",
        "Wooden Ceiling Installation",
        "LED Lighting Integration",
        "Acoustic Ceiling Solutions",
        "Custom Designs"
      ],
      href: "/services/false-ceiling",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹199"
    }
  ];
  */

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Our Professional Services
          </h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            From interior painting to wood finishes, we provide comprehensive
            home services with unmatched quality, reliability, and customer
            satisfaction. All our work is guaranteed and performed by licensed
            professionals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 sm:h-48 lg:h-52">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="bg-white p-1 rounded-md w-10 h-10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div className="text-white mt-1">
                      <p className="text-xs">Starting at</p>
                      <p className="text-lg font-bold">
                        {service.startingPrice}{" "}
                        <span className="text-xs ">/sq.ft</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="mb-4 h-52 sm:h-48  overflow-y-auto">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What We Offer:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle
                            className="text-green-500 flex-shrink-0 mr-2"
                            size={16}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 -mt-2 sm:-mt-6">
                    <Link
                      href={service.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-center -mt-2 sm:-mt-0"
                    >
                      Get Quotation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-3 sm:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Why Choose Our Services?
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering exceptional results on every
              project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-8">
            <div className="text-center px-6 py-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                All our professionals are fully licensed, bonded, and insured
                for your complete peace of mind.
              </p>
            </div>

            <div className="text-center px-6 py-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We stand behind our work with a 100% satisfaction guarantee and
                comprehensive warranties.
              </p>
            </div>

            <div className="text-center px-6 py-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Fair, upfront pricing with detailed estimates and no hidden fees
                or surprise costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 sm:py-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">
            Ready to Get Started?
          </h2>
          <p className="text-md sm:text-lg text-blue-100 mb-4 max-w-3xl mx-auto">
            Contact us today for a free estimate and consultation. We&apos;re here to
            help transform your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Quotation
            </Link>
            <a
              href="tel:+91 8884563601"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call 8884563601
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
