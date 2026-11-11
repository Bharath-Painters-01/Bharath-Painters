import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Image as ImageIcon,
  Shield,
  Clock,
  Star,
  Scissors,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title:
    "Wallpaper Installation in Bangalore | Custom Designs & Expert Finish",
  description:
    "Transform your interiors with professional wallpaper installation in Bangalore. Offering a wide range of designs, custom sizing, and flawless finishes. Book a free consultation today.",
  keywords:
    "wallpaper installation, wallpaper removal, wallpaper services, decorative wallpaper, accent wall, modern wallpaper, classic wallpaper, home services, professional wallpaper, bharath painters",
  openGraph: {
    title: "Professional Wallpaper Services - Transform Your Spaces",
    description:
      "Transform your spaces with our expert wallpaper installation services. Wide selection of modern and classic designs.",
  },
};

export default function Wallpapers() {
  const wallpaperServices = [
    {
      title: "Wallpaper Installation",
      description:
        "Professional installation of all types of wallpapers for beautiful, long-lasting results.",
      features: [
        "Vinyl wallpaper installation",
        "Non-woven wallpaper application",
        "Fabric & textile wallcoverings",
        "Specialty & designer wallpapers",
        "Custom wallpaper sizing",
        "Accent wall installation",
      ],
    },
    {
      title: "Wallpaper Removal",
      description:
        "Safe and efficient removal of old wallpaper with proper wall preparation for new finishes.",
      features: [
        "Complete wallpaper removal",
        "Adhesive residue removal",
        "Wall repair & preparation",
        "Surface smoothing",
        "Priming for new finishes",
        "Eco-friendly removal methods",
      ],
    },
    {
      title: "Design & Consultation",
      description:
        "Expert guidance on wallpaper selection, pattern matching, and design integration.",
      features: [
        "Wallpaper selection assistance",
        "Pattern & color consultation",
        "Sample procurement",
        "Room design integration",
        "Custom wallpaper solutions",
        "Trend & style guidance",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Selection",
      description:
        "We help you select the perfect wallpaper design and provide expert advice on materials and patterns.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Thorough cleaning, repairing, and priming of walls to ensure proper wallpaper adhesion.",
    },
    {
      step: "3",
      title: "Professional Installation",
      description:
        "Expert application with precise pattern matching, seam alignment, and attention to detail.",
    },
    {
      step: "4",
      title: "Final Inspection",
      description:
        "Quality check and cleanup to ensure your complete satisfaction with the finished installation.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Professional Results",
      description:
        "Our expert installation ensures perfectly aligned patterns and invisible seams.",
    },
    {
      icon: <ImageIcon size={32} />,
      title: "Dramatic Transformation",
      description:
        "Wallpaper instantly transforms spaces with color, pattern, and texture.",
    },
    {
      icon: <Scissors size={32} />,
      title: "Custom Solutions",
      description:
        "We handle complex installations, custom sizing, and challenging spaces with ease.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description:
        "100% satisfaction guarantee on all our wallpaper installation projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-center">
            Professional Wallpaper Services
          </h1>
          <p className="text-md sm:text-lg text-blue-100 mb-4 text-center">
            Transform your spaces with our expert wallpaper installation
            services. We offer a wide selection of modern and classic designs
            with professional installation.
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

      {/* Services Grid */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Wallpaper Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {wallpaperServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-4 py-4">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-6 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Wallpaper Installation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Wallpaper Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-pink-600 mx-auto mb-4 flex justify-center items-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Ready to Transform Your Space?
          </h2>
          <p className="text-md sm:text-lg text-pink-100 max-w-3xl mx-auto mb-5">
            Contact us today for a free consultation and estimate on your
            wallpaper project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
