"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

// 🔹 CountUp Hook (runs when "start" becomes true)
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // only start when "start" is true

    let startValue = 0;
    const increment = target / (duration / 16); // ~60fps
    const step = () => {
      startValue += increment;
      if (startValue < target) {
        setCount(Math.floor(startValue));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: <Users size={28} />,
      number: 2000,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: <Award size={28} />,
      number: 8,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <CheckCircle size={28} />,
      number: 2000,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Clock size={28} />,
      number: 24,
      label: "Customer Support",
      suffix: "/7",
    },
  ];

  // 🔹 Intersection Observer to detect when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // 30% of section visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-1 sm:py-4 lg:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-center md:text-left lg:text-left">
              About Bharath Painters
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-1.5 lg:mb-2 ">
              With over 8 years of expertise in transforming homes across
              Bangalore, Bharath Painters has earned a reputation for
              exceptional quality, timely service, and customer-first approach.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-1.5 lg:mb-2 ">
              Our team of licensed and insured professionals ensures that every
              project-whether it&apos;s a quick touch-up, a stylish texture finish,
              or a complete home makeover-is handled with care, precision, and
              affordability.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 lg:mb-4 ">
              We believe in using eco-friendly, durable materials and the latest
              painting techniques, ensuring that your walls not only look
              stunning today but stay beautiful for years to come.
            </p>

            <div className="space-y-3 lg:space-y-4 font-bold">
              {[
                "Licensed & Insured Professionals",
                "Free Estimates & Expert Consultations",
                "100% Satisfaction Guarantee",
                "Eco-Friendly & Long-Lasting Materials",
                "Emergency & Same-Day Services Available",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about.jpg"
              alt="Professional team at work"
              width={800}
              height={600}
              className="rounded-lg shadow-lg lg:shadow-xl max-h-fit object-cover sm:ml-24"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:left-8 bg-blue-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-md lg:shadow-lg">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                10+ Years
              </p>
              <p className="text-xs sm:text-sm">of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Section with Animation */}
        <div ref={statsRef} className="mt-8 lg:mt-12 mb-2 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                stat={stat}
                startCount={startCount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ stat, startCount }) {
  const count = useCountUp(stat.number, 2000, startCount);

  return (
    <div className="text-center">
      <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs sm:text-sm lg:text-base text-gray-600">
        {stat.label}
      </div>
    </div>
  );
}
