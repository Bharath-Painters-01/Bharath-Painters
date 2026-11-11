import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Sofa, Shield, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Professional Furniture Services | Bharath Painters",
  description: "Expert furniture repair, restoration, assembly, and upholstery services by skilled craftsmen.",
  keywords: "furniture repair, furniture restoration, custom assembly, upholstery work, furniture services, custom furniture, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional Furniture Services - Bharath Painters",
    description: "Quality furniture repair, restoration, and assembly services. Expert craftsmanship with attention to detail.",
  },
};

export default function FurnitureWork() {
  const furnitureServices = [
    {
      title: "Furniture Repair",
      description: "Expert repair services to restore your damaged furniture.",
      features: [
        "Broken furniture repair",
        "Joint reinforcement",
        "Frame repair",
        "Hardware replacement",
        "Surface repair",
        "Structural fixes"
      ]
    },
    {
      title: "Furniture Restoration",
      description: "Bring new life to your old or antique furniture pieces.",
      features: [
        "Wood refinishing",
        "Color matching",
        "Staining & painting",
        "Antique restoration",
        "Surface polishing",
        "Detail restoration"
      ]
    },
    {
      title: "Custom Services",
      description: "Specialized furniture services tailored to your needs.",
      features: [
        "Custom assembly",
        "Upholstery work",
        "Custom modifications",
        "Furniture disassembly",
        "Moving preparation",
        "Design consultation"
      ]
    }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-orange-700 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-orange-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-orange-600 rounded-lg mb-5">
                <Sofa size={32} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional Furniture Services
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Expert furniture repair, restoration, and custom services. 
                Our skilled craftsmen deliver quality workmanship with attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
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
                  <span className="ml-2 text-white font-medium">5.0 (120+ Reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Furniture Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Skilled craftsmen with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Quality materials and finishes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Attention to detail in every project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Satisfaction guaranteed on all services</span>
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
              Our Furniture Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive furniture solutions to repair, restore, and enhance your furniture pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {furnitureServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={18} />
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
              Our Furniture Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality results for all furniture projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evaluation</h3>
              <p className="text-gray-600">We carefully assess your furniture to determine the best approach for repair or restoration.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We develop a detailed plan including materials, techniques, and timeline for your project.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Craftsmanship</h3>
              <p className="text-gray-600">Our skilled craftsmen execute the plan with precision and attention to detail.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finishing</h3>
              <p className="text-gray-600">We apply final touches and quality checks to ensure your furniture meets our high standards.</p>
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
              Find answers to common questions about our furniture services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you repair antique furniture?</h3>
              <p className="text-gray-600">Yes, our craftsmen are experienced in antique furniture restoration. We use appropriate techniques and materials to preserve the character and value of your antique pieces.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does furniture restoration typically take?</h3>
              <p className="text-gray-600">The timeline varies depending on the complexity of the project. Simple repairs may take a few days, while extensive restorations can take several weeks. We&apos;ll provide a specific timeline during the initial consultation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer in-home furniture services?</h3>
              <p className="text-gray-600">Yes, for certain services we can work on-site at your home. For more complex projects, we may need to transport the furniture to our workshop for proper restoration.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What types of furniture do you work with?</h3>
              <p className="text-gray-600">We work with all types of furniture including wooden, upholstered, metal, and composite pieces. Our craftsmen are skilled in various materials and construction techniques.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Get a Furniture Service Quotation</span>
              <Shield size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}