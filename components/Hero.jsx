"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, FileText, Paintbrush, ArrowRight } from "lucide-react";
import ServiceForm from "./ServiceForm";
import Services from "./Services";

export default function Hero() {
  const slides = [
    {
      id: 1,
      src: "images/carousel/1.jpg",
      alt: "Interior Painting",
    },
    {
      id: 2,
      src: "images/carousel/2.jpg",
      alt: "exterior painting",
    },
    {
      id: 3,
      src: "images/carousel/3.jpg",
      alt: "grouting",
    },
    {
      id: 4,
      src: "images/carousel/4.jpg",
      alt: "waterproofing Service",
    },
    {
      id: 4,
      src: "images/carousel/5.jpg",
      alt: "deep cleaning Service",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();

  // Auto slide
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [slides.length]);

  // form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formData = new FormData(formRef.current);
      const data = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        phone: formData.get("phone"),
        services: Array.from(formData.getAll("services")).join(", "),
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesOptions = [
    "Interior Painting",
    "Exterior Painting",
    "Deep Cleaning",
    "Grouting",
    "Texture",
    "Wallpaper",
    "waterproofing",
    "Wood Finishing",
    "Other",
  ];

  return (
    <section className="relative w-full bg-gray-100 pt-20 sm:pt-0">
      {/* Carousel */}
      <div className="relative h-[28vh] sm:h-[70vh] lg:h-screen overflow-hidden rounded-lg mx-1.5 sm:mx-0 sm:rounded-none">
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Carousel Text */}
        <div
          className={`absolute inset-0 flex flex-col justify-center lg:justify-end items-center lg:items-start px-4 sm:px-8 pb-6 lg:pb-16 text-white space-y-3 sm:space-y-4 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          {/* <h1 className="text-xl sm:text-2xl font-bold lg:hidden pt-28">
            Professional Home Services
          </h1> */}

          {/* Desktop text */}
          <div className="hidden lg:block max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
              Professional Home Services You Can Trust
            </h1>
            <p className="text-sm lg:text-base text-blue-100 mt-2">
              From interior and exterior painting to water proofing, grouting,
              texture, wood finishes, wallpapers work to deep cleaning, we
              provide comprehensive home services with quality guaranteed.
            </p>
            <div className="flex gap-3 mt-4">
              <Link
                href="/services"
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Our Services</span>
                <ArrowRight
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105"
              >
                Get a Free Quotation
              </Link>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <Services />

      {/* Steps + Form */}
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 ">
        {/* Steps */}
        <div>
          <div className="grid grid-cols-3 gap-4 lg:hidden">
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-xl">
              <Clock className="text-blue-600" size={28} />
              <span className="text-xs font-semibold mt-1">Site Visit</span>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-xl">
              <FileText className="text-green-600" size={28} />
              <span className="text-xs font-semibold mt-1">Quotation</span>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-xl">
              <Paintbrush className="text-red-600" size={28} />
              <span className="text-xs font-semibold mt-1">Work Start</span>
            </div>
          </div>

          {/* Desktop steps */}
          <div className="hidden lg:grid lg:grid-cols-1 gap-6 sm:mt-24">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-xl">
              <Clock className="text-blue-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Site Visit in 24 Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Our team will visit your site within a day for assessment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-xl">
              <FileText className="text-green-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Quotation in 24 Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Get a transparent and fair quotation within 24 hours.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-xl">
              <Paintbrush className="text-red-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Work Starts Instantly
                </h4>
                <p className="text-gray-600 text-sm">
                  Once approved, our experts begin work without delay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="-mt-1">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-2 pl-2">
            Request a Service
          </h2>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
}
