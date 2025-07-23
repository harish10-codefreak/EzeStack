"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Quote as QuoteIcon } from "lucide-react";

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="py-20 bg-background">
      <h2
        id="reviews-title"
        className={cn(
          "text-3xl font-medium tracking-tight text-foreground sm:text-center font-[var(--font-heading)]"
        )}
      >
        What Our Clients Say
      </h2>
      <p
        className={cn(
          "mt-2 text-lg text-muted-foreground sm:text-center font-[var(--font-body)]"
        )}
      >
        Real results from real partnerships
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto items-start px-4 md:px-8 mt-10">
        {grid.map((testimonialsCol, index) => (
          <div
            key={`testimonials-col-${index}`}
            className="grid gap-4 items-start"
          >
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription>{testimonial.name}</QuoteDescription>
                    <QuoteDescription className="text-[10px]">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-transparent relative bg-card dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      <QuoteIcon className="absolute top-2 left-2 text-accent w-5 h-5" />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-base font-normal text-foreground py-2 relative font-[var(--font-body)]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-muted-foreground max-w-sm font-[var(--font-body)]",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jennifer Park",
    quote:
      "Quantum Leaps transformed our outdated website into a modern, high-performing platform that increased our conversions by 300%.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "CEO, TechFlow",
  },
  {
    name: "Robert Chen",
    quote: "Their AI integration saved us 20 hours of manual work per week. The ROI was immediate and impressive.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Operations Manager, DataSync",
  },
  {
    name: "Amanda Rodriguez",
    quote:
      "The team's attention to detail and technical expertise is unmatched. They delivered exactly what we envisioned and more.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Founder, CreativeHub",
  },
  {
    name: "Michael Thompson",
    quote: "Professional, responsive, and incredibly talented. Our new web app has transformed how we serve our customers.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "CTO, InnovateLabs",
  },
  {
    name: "Cathy Lee",
    quote: "I can't imagine going back to how things were before this AI. ",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Product Manager",
  },
  {
    name: "David Wright",
    quote:
      "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Research Scientist",
  },
  {
    name: "Eva Green",
    quote:
      "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Operations Director",
  },
  {
    name: "Frank Moore",
    quote:
      "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Project Manager",
  },
  {
    name: "Grace Hall",
    quote:
      "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Marketing Specialist",
  },
  {
    name: "Henry Ford",
    quote:
      "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Operations Analyst",
  },
  {
    name: "Ivy Wilson",
    quote:
      "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Business Consultant",
  },
  {
    name: "Jack Brown",
    quote:
      "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Performance Manager",
  },
  {
    name: "Kathy Adams",
    quote:
      "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Innovation Lead",
  },
  {
    name: "Leo Carter",
    quote:
      "Transformative technology with real impact. It has streamlined our operations and brought unprecedented efficiency to our processes.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Technology Strategist",
  },
];