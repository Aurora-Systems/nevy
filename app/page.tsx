"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Calendar,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  Users,
  Target,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { public_key, service_id, template_id } from "@/components/email_js"

export default function CoachNevyWebsite() {
  const [loading,set_loading] = useState<boolean>(false)
 

  
  const form:any =useRef(null)

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    set_loading(true)
    console.log(e)
    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          alert("Message Sent Successfully");
          form.current.reset()
        },
        (error) => {
          console.log(error)
          alert("Message Not Sent");

        },
      ).finally(()=>{
        set_loading(false)
      })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600 rounded-sm rounded-5">
              <img src="https://ngratesc.sirv.com/nevy/Coach.png" className="rounded-sm"  width={50} alt="logo"/>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
              Book a Session
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ngratesc.sirv.com/nevy/pexels-kindelmedia-6572955.jpg?height=1080&width=1920"
            alt="Coach Nevy teaching golf"
            fill
            className="object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Your Swing with <span className="text-blue-400">PGA Certified</span> Coach Nevy Milazi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Personalized Golf Coaching for Juniors, Beginners, and Pros in Harare
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400">
              <Award className="w-4 h-4 mr-2" />
              8+ Years Experience
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400">
              <Trophy className="w-4 h-4 mr-2" />
              PGA & Leadbetter Certified
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400">
              <Users className="w-4 h-4 mr-2" />
              Junior Development Specialist
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("services")}
            >
              View Programs
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <div className="text-start mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Coach Nevy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building champions through dedication, expertise, and the philosophy: "Stay in the lane, you'll be a
                champion"
              </p>
            </div>
               <div className="mb-16">
                <img src="https://ngratesc.sirv.com/nevy/nevyile.jpg" className="rounded-sm"/>
              </div>
                        </div>


            <div className="grid  md:grid-cols-2 gap-12 items-center">
              <div>
                <video
                  src="https://ngratesc.sirv.com/nevy/File.mp4"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  controls={false}
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6 ">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">My Journey</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inspired by my professional golfer brother, I discovered my passion for golf and teaching. With over
                    8 years of coaching experience, I specialize in developing junior golfers and helping beginners fall
                    in love with the game.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Coaching Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Stay in the lane, you'll be a champion" - I believe in focused, personalized instruction that
                    builds both technical skills and mental strength. Every student has unique potential, and my job is
                    to unlock it.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-blue-600">3</div>
                    <div className="text-sm text-gray-600">Tournament Wins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services & Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive golf instruction tailored to your skill level and goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl text-blue-600">Private Lessons</CardTitle>
                  <CardDescription>One-on-one personalized instruction</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Ages 8-50 welcome
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Video swing analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Professional swing aids
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Customized practice plans
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl text-blue-600">Group Clinics</CardTitle>
                  <CardDescription>Learn with others in a fun environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Ladies' golf programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Junior golf camps
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Beginner-friendly groups
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Competitive rates
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl text-blue-600">Specialized Training</CardTitle>
                  <CardDescription>Advanced techniques and fitness</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Golf fitness & mobility
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Mental game coaching
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Tournament preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Advanced swing mechanics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("contact")}>
                Get Your Custom Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from students who've transformed their game with Coach Nevy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Coach Nevy transformed my daughter's swing in just 3 months! Her confidence on the course has grown
                    tremendously."
                  </p>
                  <div className="font-semibold text-blue-600">- Sarah M., Parent of Junior Golfer</div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "His patience and expertise got me from complete beginner to club competitor. Couldn't ask for a
                    better coach!"
                  </p>
                  <div className="font-semibold text-blue-600">- Michael T., Adult Student</div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "The video analysis and personalized drills made all the difference. My handicap dropped by 8
                    strokes!"
                  </p>
                  <div className="font-semibold text-blue-600">- Jennifer L., Intermediate Player</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Notable Alumni</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Rumbie Takawira</div>
                    <div className="text-gray-600">Student</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold">C. Sibanda</div>
                    <div className="text-gray-600">Tournament Winner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media & Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognition and accomplishments in the golf community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hwange Open Winner</h3>
                <p className="text-gray-600">Championship victory showcasing competitive excellence</p>
              </Card>

              <Card className="text-center p-6">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">4th Place NAC</h3>
                <p className="text-gray-600">Strong performance in national competition</p>
              </Card>

              <Card className="text-center p-6">
                <Star className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Media Features</h3>
                <p className="text-gray-600">Featured in Ugandan golf publications</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact & Booking</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to improve your game? Get in touch to schedule your first lesson
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Send a Message</h3>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                       
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        
                        required
                        className="mt-1"
                      />
                    </div>
                      <div>
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                       
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="skillLevel">Skill Level</Label>
                      <select
                        id="skill_level"
                        name="skill_level"
                    
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select your level</option>
                        <option value="beginner">Complete Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="junior">Junior Player</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="goals">Your Goals</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                      
                        placeholder="Tell me about your golf goals and what you'd like to achieve..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-gray-600">+263 71 486 2130</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-600">+263 71 486 2130</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600">info@coachnevy.co.zw</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-gray-600">Royal Harare Golf Club, Harare</div>
                      </div>
                    </div>
                  </div>
                </Card>

              

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com/in/nevy-milazi-69034a346/?originalSubdomain=zw" className="text-blue-600 hover:text-blue-800">
                      Linkedin
                    </Link>
                
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Common questions about golf lessons and coaching</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">What should I bring to my first lesson?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Bring your golf clubs if you have them, comfortable athletic wear, and golf shoes or sneakers. If you
                  don't have clubs, I can provide them for your first few lessons while you decide what to purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Do you offer discounts for group sessions?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Group lessons are more affordable per person and can be a fun way to learn with friends or
                  family. Contact me for group rates and scheduling options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">How long does it take to see improvement?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Most students see noticeable improvement within 3-4 lessons, but this varies based on your starting
                  level, practice frequency, and individual goals. Consistency is key to faster progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Do you teach complete beginners?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  I specialize in teaching beginners and have a patient, encouraging approach that makes learning golf
                  enjoyable. Many of my students started with zero golf experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">What makes your coaching approach unique?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  I combine PGA and Leadbetter certification with personalized video analysis, custom practice plans,
                  and a focus on both technical skills and mental game. My philosophy is "Stay in the lane, you'll be a
                  champion" - focused, consistent improvement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Coach Nevy Milazi</h3>
                <p className="text-blue-200 mb-4">
                  PGA Certified Golf Coach specializing in junior development and personalized instruction in Harare.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/in/nevy-milazi-69034a346/?originalSubdomain=zw" className="text-blue-200 hover:text-white">
                    Linkedin
                  </Link>
                
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection("about")} className="block text-blue-200 hover:text-white">
                    About
                  </button>
                  <button onClick={() => scrollToSection("services")} className="block text-blue-200 hover:text-white">
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="block text-blue-200 hover:text-white"
                  >
                    Success Stories
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="block text-blue-200 hover:text-white">
                    Contact
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-blue-200">
                  <div>Royal Harare Golf Club, Harare</div>
                  <div>+263 71 486 2130</div>
                  <div>info@coachnevy.co.zw</div>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; {new Date().getFullYear()} Coach Nevy Milazi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
