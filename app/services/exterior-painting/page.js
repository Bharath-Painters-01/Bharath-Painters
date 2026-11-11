import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle,
  Droplet,
  Home,
  Paintbrush,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Exterior Painting in Bangalore | Weatherproof & Stylish",
  description:
    "Protect and enhance your home’s look with our exterior painting in Bangalore. Durable, weather-resistant finishes, free consultation & lasting curb appeal.",
  keywords:
    "exterior painting, house painting, wall painting, outdoor painting, weatherproof painting, protective coating, home painting services, bharath painters",
  openGraph: {
    title:
      "Professional Exterior Painting Services - Transform Your Home's Exterior",
    description:
      "Enhance your home's beauty and durability with our professional exterior painting services. Weather-resistant, long-lasting finishes.",
  },
};

export default function ExteriorPainting() {
  const services = [
    {
      title: "Complete Exterior Painting",
      description:
        "Protect and beautify your home's exterior with high-quality paints designed to withstand harsh weather conditions.",
      features: [
        "Full house exterior painting",
        "Premium weatherproof paints",
        "Crack filling & surface preparation",
        "Moisture & mold resistance",
        "Long-lasting protection",
        "Color consultation",
      ],
    },
    {
      title: "Protective Coatings",
      description:
        "Advanced protective coatings to safeguard your property against water, dust, and UV rays.",
      features: [
        "Water-repellent coatings",
        "UV protection finishes",
        "Anti-dust solutions",
        "Thermal reflective paints",
        "Eco-friendly products",
        "Durability guarantee",
      ],
    },
    {
      title: "Maintenance & Repainting",
      description:
        "Keep your property looking new with periodic maintenance and repainting services.",
      features: [
        "Surface cleaning & touch-ups",
        "Fading & peeling repair",
        "Protective recoating",
        "Crack repair solutions",
        "Customized repainting plans",
        "Affordable maintenance packages",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Paintbrush size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Premium Finishes",
      description:
        "We use top-quality paints for smooth, durable, and beautiful finishes.",
    },
    {
      icon: <Shield size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Weather Protection",
      description:
        "Our exterior solutions protect your home from rain, heat, and dust.",
    },
    {
      icon: <Droplet size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Moisture Resistance",
      description:
        "Specialized coatings prevent dampness, seepage, and mold growth.",
    },
    {
      icon: <Home size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Enhanced Curb Appeal",
      description:
        "Transform your home's appearance with vibrant, lasting colors.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional Exterior Painting Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-2">
            Transform and protect your home&apos;s exterior with our expert painting
            services. Long-lasting finishes that withstand every season.
          </p>
          <div className="flex  gap-3 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52 "
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-blue-700 text-white hover:bg-blue-800 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52"
            >
              <div className="flex items-center justify-center gap-2">
                <ArrowLeft /> Back
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Our Exterior Painting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Choose Our Exterior Painting
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4">
                {benefit.icon}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 pb-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Home’s Exterior?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Contact us today for a free consultation and professional exterior
            painting services tailored to your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
