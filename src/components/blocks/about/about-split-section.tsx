"use client"

import { Card, CardContent } from "@/components/ui/card"

const AboutSplitSection = () => {
  const stats = [
    "50+ Projects Completed",
    "99% Client Satisfaction",
    "24/7 Support Available"
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground font-sans">
              About EzeStack
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Founded in 2020, EzeStack emerged from a passion for transforming complex challenges into elegant digital solutions. We believe that every business deserves technology that not only works flawlessly but propels them ahead of the competition.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Our team combines deep technical expertise with creative problem-solving to deliver solutions that drive real business results. From startups to enterprise clients, we've helped dozens of organizations leap into their digital future.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-secondary border-border">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm font-medium text-primary font-sans">
                      {stat}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Decorative Pattern */}
          <div className="relative h-80 lg:h-96">
            <div className="absolute inset-0 bg-secondary rounded-lg overflow-hidden">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Geometric pattern with emerald accent */}
                <circle cx="100" cy="100" r="60" fill="rgb(16, 185, 129)" fillOpacity="0.1" />
                <circle cx="300" cy="150" r="40" fill="rgb(16, 185, 129)" fillOpacity="0.2" />
                <circle cx="200" cy="280" r="50" fill="rgb(16, 185, 129)" fillOpacity="0.15" />
                
                <rect x="150" y="50" width="80" height="80" fill="rgb(16, 185, 129)" fillOpacity="0.08" transform="rotate(45 190 90)" />
                <rect x="250" y="200" width="60" height="60" fill="rgb(16, 185, 129)" fillOpacity="0.12" transform="rotate(30 280 230)" />
                <rect x="50" y="250" width="70" height="70" fill="rgb(16, 185, 129)" fillOpacity="0.1" transform="rotate(60 85 285)" />
                
                <polygon points="350,50 380,100 320,100" fill="rgb(16, 185, 129)" fillOpacity="0.15" />
                <polygon points="80,320 110,370 50,370" fill="rgb(16, 185, 129)" fillOpacity="0.18" />
                <polygon points="300,300 330,350 270,350" fill="rgb(16, 185, 129)" fillOpacity="0.12" />
                
                <path d="M180 180 Q220 160 260 180 Q240 220 200 200 Q160 200 180 180" fill="rgb(16, 185, 129)" fillOpacity="0.08" />
                <path d="M120 200 Q160 180 200 200 Q180 240 140 220 Q100 220 120 200" fill="rgb(16, 185, 129)" fillOpacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSplitSection