import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Layers, Shield, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Professional False Ceiling Services | Bharath Painters",
  description: "Expert false ceiling installation, design, and repair services for residential and commercial spaces.",
  keywords: "false ceiling, POP ceiling, gypsum ceiling, ceiling design, ceiling installation, ceiling repair, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional False Ceiling Services - Bharath Painters",
    description: "Transform your space with our expert false ceiling installation, design, and repair services.",
  },
};

export default function FalseCeiling() {
  const ceilingServices = [
    {
      title: "Gypsum Ceilings",
      description: "Versatile and elegant gypsum false ceiling solutions.",
      features: [
        "Moisture-resistant options",
        "Customizable designs",
        "Seamless finish",
        "Sound insulation",
        "Fire-resistant materials",
        "Quick installation"
      ]
    },
    {
      title: "POP Ceilings",
      description: "Classic Plaster of Paris ceiling designs with artistic details.",
      features: [
        "Intricate designs",
        "Decorative moldings",
        "Custom patterns",
        "Textured finishes",
        "Cornice work",
        "Ceiling roses"
      ]
    },
    {
      title: "Grid Ceilings",
      description: "Modern modular ceiling systems for commercial and residential spaces.",
      features: [
        "Easy maintenance",
        "Integrated lighting options",
        "Acoustic panels",
        "Access to utilities",
        "Quick installation",
        "Various tile options"
      ]
    }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-blue-700 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-blue-600 rounded-lg mb-5">
                <Layers size={32} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional False Ceiling Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your space with our expert false ceiling installation, design, and repair services.
                We create stunning ceilings that enhance your interior aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Get a Free Quotation
                </Link>
                <Link
                  href="#services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <span className="ml-2 text-white font-medium">5.0 (90+ Reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Why Choose Our False Ceiling Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Expert installation by skilled professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Premium materials for lasting results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Custom designs to match your interior</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>On-time completion with minimal disruption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our False Ceiling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of false ceiling solutions to enhance the aesthetics and functionality of your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ceilingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our False Ceiling Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality results for all ceiling projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your requirements, preferences, and provide design options.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Planning</h3>
              <p className="text-gray-600">We create detailed designs and plans for your ceiling installation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Our skilled team executes the installation with precision and care.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finishing & Review</h3>
              <p className="text-gray-600">We complete final touches and ensure your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our false ceiling services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it take to install a false ceiling?</h3>
              <p className="text-gray-600">The installation time depends on the size and complexity of the project. A standard room typically takes 2-3 days, while larger or more intricate designs may take longer. We&apos;ll provide a specific timeline during consultation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What materials do you use for false ceilings?</h3>
              <p className="text-gray-600">We use high-quality materials including gypsum boards, POP (Plaster of Paris), grid systems, and various decorative elements. The choice of material depends on your requirements, budget, and the design you prefer.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you incorporate lighting into false ceilings?</h3>
              <p className="text-gray-600">Yes, we can integrate various lighting options including recessed lights, LED strips, cove lighting, and chandeliers. Our designs can enhance your space with both direct and indirect lighting solutions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do false ceilings require maintenance?</h3>
              <p className="text-gray-600">False ceilings require minimal maintenance. Regular dusting and occasional cleaning are usually sufficient. In case of water damage or other issues, we offer repair services to restore your ceiling to its original condition.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Get a Ceiling Installation Quotation</span>
              <Shield size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}