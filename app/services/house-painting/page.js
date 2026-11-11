import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Paintbrush, Shield, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Professional House Painting Services | Interior & Exterior Painting",
  description:
    "Expert house painting services including interior and exterior painting, color consultation, wall preparation, and specialty finishes. Licensed painters with quality guarantee.",
  keywords:
    "house painting services, interior painting, exterior painting, residential painters, professional painting contractors, color consultation, wall painting, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional House Painting Services - Transform Your Home",
    description:
      "Transform your home with our expert painting services. Interior, exterior, and specialty finishes with quality guarantee.",
  },
};

export default function HousePainting() {
  const paintingServices = [
    {
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with professional interior painting services.",
      features: [
        "Living rooms & bedrooms",
        "Kitchens & bathrooms",
        "Hallways & stairwells",
        "Ceiling painting",
        "Trim & baseboard painting",
        "Color matching & consultation",
      ],
    },
    {
      title: "Exterior Painting",
      description:
        "Boost your home's curb appeal with weather-resistant exterior painting.",
      features: [
        "Siding & trim painting",
        "Deck & fence staining",
        "Garage door painting",
        "Window & shutter painting",
        "Power washing prep",
        "Weather protection coatings",
      ],
    },
    {
      title: "Specialty Services",
      description:
        "Expert techniques for unique painting projects and finishes.",
      features: [
        "Texture & faux finishes",
        "Cabinet refinishing",
        "Wallpaper removal",
        "Drywall repair",
        "Lead-safe painting",
        "Commercial painting",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description:
        "We assess your project, discuss color options, and provide a detailed estimate.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Thorough cleaning, sanding, priming, and repair work for the best results.",
    },
    {
      step: "3",
      title: "Professional Painting",
      description:
        "Expert application using premium paints and proven techniques.",
    },
    {
      step: "4",
      title: "Final Inspection",
      description:
        "Quality check and cleanup to ensure your complete satisfaction.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Quality Materials",
      description:
        "We use only premium paints and materials for lasting results.",
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Completion",
      description: "Projects completed on schedule with minimal disruption.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Clean Work Area",
      description: "Professional job site management and thorough cleanup.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all painting projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional House Painting Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your home with our expert interior and exterior
                painting services. From color consultation to final touches, we
                deliver exceptional results that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+91 8884563601"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Call +91 8884563601
                </a>
              </div>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Professional house painting"
                width={800}
                height={600}
                unoptimized
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Painting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single room touch-ups to complete home makeovers, we provide
              comprehensive painting services for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paintingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="text-blue-600 mb-4">
                  <Paintbrush size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mr-3"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Painting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure exceptional results on every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Painting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering exceptional painting results with
              professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our recent painting projects and see the
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              "https://images.pexels.com/photos/6312274/pexels-photo-6312274.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
            ].map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Painting project ${index + 1}`}
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    Interior/Exterior Painting Project
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get started with a free consultation and estimate. Our
                experienced painters are ready to bring your vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Free detailed estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Licensed & insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Premium paint & materials</span>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Starting Prices
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Interior Room (12x12)</span>
                  <span className="font-semibold">From $299</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Exterior House (1500 sq ft)</span>
                  <span className="font-semibold">From $2,499</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Cabinet Refinishing</span>
                  <span className="font-semibold">From $899</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 block text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+91 8884563601"
                  className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 block text-center"
                >
                  Call Now: +91 8884563601
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
