"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Plus,
  Minus,
  CreditCard,
  Shield,
  CheckCircle,
  Music,
  Zap,
  Crown,
  Gift,
  Phone,
  User,
  Ticket,
  Heart,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface TicketTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  color: string;
  icon: React.ElementType;
  popular?: boolean;
  limited?: boolean;
  remaining?: number;
}

const ticketTiers: TicketTier[] = [
  {
    id: "regular",
    name: "Regular Entry",
    price: 5000,
    description:
      "Perfect for party lovers who want to experience the ultimate wet party",
    features: [
      "Event Entry Access",
      "Water Fight Participation",
      "Dance Floor Access",
      "Basic Refreshments",
      "Photo Opportunities",
    ],
    color: "blue",
    icon: Users,
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 10000,
    originalPrice: 12000,
    description: "Enhanced experience with exclusive perks and premium access",
    features: [
      "Everything in Regular",
      "VIP Lounge Access",
      "Meet & Greet with Emybomboy",
      "Premium Refreshments",
      "VIP Photo Session",
      "Priority Entry",
      "Exclusive VIP Area",
    ],
    color: "purple",
    icon: Crown,
    popular: true,
  },
  {
    id: "vvip",
    name: "VVIP Ultimate",
    price: 20000,
    originalPrice: 25000,
    description: "The ultimate party experience with all premium benefits",
    features: [
      "Everything in VIP",
      "Private VVIP Lounge",
      "Personal Meet & Greet",
      "Exclusive Merchandise",
      "Premium Bar Access",
      "VIP Parking",
      "After-party Access",
      "Professional Photos",
    ],
    color: "yellow",
    icon: Zap,
    limited: true,
    remaining: 15,
  },
];

export default function TicketsPage() {
  const router = useRouter();
  const [selectedTiers, setSelectedTiers] = useState<{ [key: string]: number }>(
    {}
  );
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalTickets = Object.values(selectedTiers).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalAmount = Object.entries(selectedTiers).reduce(
    (sum, [tierId, count]) => {
      const tier = ticketTiers.find((t) => t.id === tierId);
      return sum + (tier ? tier.price * count : 0);
    },
    0
  );

  const updateTicketCount = (tierId: string, change: number) => {
    setSelectedTiers((prev) => {
      const newCount = Math.max(0, (prev[tierId] || 0) + change);
      if (newCount === 0) {
        const { [tierId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [tierId]: newCount };
    });
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setCurrentStep(4);
    setIsProcessing(false);
  };

  const canProceed = () => {
    if (currentStep === 1) return totalTickets > 0;
    if (currentStep === 2) {
      return (
        customerInfo.firstName &&
        customerInfo.lastName &&
        customerInfo.email &&
        customerInfo.phone
      );
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Event</span>
            </motion.button>

            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                DaBeast Entertainment
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Heart className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Event Info & Tickets */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/30 Fun Pool Party Ideas for Summer 2025 (1).jpeg"
                  alt="DaBeast Get Wet Party"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="bg-yellow-400 text-black font-bold mb-4">
                      🎉 LIVE EVENT
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                      DaBeast Get Wet Party
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-yellow-400" />
                        <span>July 30, 2024</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-yellow-400" />
                        <span>6:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-yellow-400" />
                        <span>Magboro, Ogun State</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    {[
                      { step: 1, title: "Select Tickets", icon: Ticket },
                      { step: 2, title: "Your Details", icon: User },
                      { step: 3, title: "Payment", icon: CreditCard },
                      { step: 4, title: "Confirmation", icon: CheckCircle },
                    ].map(({ step, title, icon: Icon }) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            currentStep >= step
                              ? "bg-yellow-400 text-black"
                              : currentStep === step
                              ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400"
                              : "bg-white/10 text-gray-400"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`ml-2 text-sm font-medium ${
                            currentStep >= step ? "text-white" : "text-gray-400"
                          }`}
                        >
                          {title}
                        </span>
                        {step < 4 && (
                          <div
                            className={`w-8 h-0.5 mx-4 ${
                              currentStep > step
                                ? "bg-yellow-400"
                                : "bg-white/20"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white">
                    Choose Your Experience
                  </h2>
                  <div className="grid gap-6">
                    {ticketTiers.map((tier, index) => (
                      <motion.div
                        key={tier.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          className={`bg-white/10 backdrop-blur-md border-2 transition-all duration-300 ${
                            tier.popular
                              ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
                              : "border-purple-500/20 hover:border-purple-400/40"
                          } ${
                            selectedTiers[tier.id]
                              ? "ring-2 ring-yellow-400"
                              : ""
                          }`}
                        >
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-12 h-12 rounded-full bg-${tier.color}-500/20 flex items-center justify-center`}
                                >
                                  <tier.icon
                                    className={`h-6 w-6 text-${tier.color}-400`}
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <CardTitle className="text-white">
                                      {tier.name}
                                    </CardTitle>
                                    {tier.popular && (
                                      <Badge className="bg-yellow-400 text-black text-xs">
                                        POPULAR
                                      </Badge>
                                    )}
                                    {tier.limited && (
                                      <Badge
                                        variant="destructive"
                                        className="text-xs"
                                      >
                                        LIMITED
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-gray-300 text-sm">
                                    {tier.description}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-2">
                                  {tier.originalPrice && (
                                    <span className="text-gray-400 line-through text-sm">
                                      ₦{tier.originalPrice.toLocaleString()}
                                    </span>
                                  )}
                                  <span className="text-2xl font-bold text-yellow-400">
                                    ₦{tier.price.toLocaleString()}
                                  </span>
                                </div>
                                {tier.remaining && (
                                  <p className="text-red-400 text-xs">
                                    Only {tier.remaining} left!
                                  </p>
                                )}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-white font-semibold mb-2">
                                  What&apos;s Included:
                                </h4>
                                <ul className="space-y-1">
                                  {tier.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center space-x-2 text-gray-300 text-sm"
                                    >
                                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-end justify-end">
                                <div className="flex items-center space-x-3">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() =>
                                      updateTicketCount(tier.id, -1)
                                    }
                                    disabled={!selectedTiers[tier.id]}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </motion.button>
                                  <span className="text-white font-bold text-lg w-8 text-center">
                                    {selectedTiers[tier.id] || 0}
                                  </span>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() =>
                                      updateTicketCount(tier.id, 1)
                                    }
                                    className="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white">
                    Your Details
                  </h2>
                  <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-white">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={customerInfo.firstName}
                            onChange={(e) =>
                              setCustomerInfo((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-white">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={customerInfo.lastName}
                            onChange={(e) =>
                              setCustomerInfo((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white">Payment</h2>
                  <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                    <CardContent className="p-6">
                      <div className="text-center py-12">
                        <motion.div
                          animate={{ rotate: isProcessing ? 360 : 0 }}
                          transition={{
                            duration: 1,
                            repeat: isProcessing ? Number.POSITIVE_INFINITY : 0,
                            ease: "linear",
                          }}
                        >
                          <CreditCard className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {isProcessing
                            ? "Processing Payment..."
                            : "Secure Payment"}
                        </h3>
                        <p className="text-gray-300 mb-6">
                          {isProcessing
                            ? "Please wait while we process your payment"
                            : "Click below to proceed with secure payment"}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-green-400 mb-6">
                          <Shield className="h-5 w-5" />
                          <span className="text-sm">256-bit SSL Encrypted</span>
                        </div>
                        <Button
                          onClick={handlePurchase}
                          disabled={isProcessing}
                          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3"
                        >
                          {isProcessing
                            ? "Processing..."
                            : `Pay ₦${totalAmount.toLocaleString()}`}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Payment Successful!
                    </h2>
                    <p className="text-gray-300 mb-8">
                      Your tickets have been confirmed. Check your email for
                      details.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                        Download Tickets
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        View Order Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-24"
            >
              <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Ticket className="h-5 w-5 text-yellow-400" />
                    <span>Order Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(selectedTiers).map(([tierId, count]) => {
                    const tier = ticketTiers.find((t) => t.id === tierId);
                    if (!tier || count === 0) return null;
                    return (
                      <div
                        key={tierId}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <p className="text-white font-medium">{tier.name}</p>
                          <p className="text-gray-400 text-sm">Qty: {count}</p>
                        </div>
                        <p className="text-yellow-400 font-bold">
                          ₦{(tier.price * count).toLocaleString()}
                        </p>
                      </div>
                    );
                  })}

                  {totalTickets > 0 && (
                    <>
                      <Separator className="bg-white/20" />
                      <div className="flex justify-between items-center">
                        <p className="text-white font-bold">Total</p>
                        <p className="text-yellow-400 font-bold text-xl">
                          ₦{totalAmount.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <p className="text-gray-400">Total Tickets</p>
                        <p className="text-white">{totalTickets}</p>
                      </div>
                    </>
                  )}

                  {currentStep < 4 && (
                    <Button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      disabled={!canProceed()}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                    >
                      {currentStep === 1 && "Continue to Details"}
                      {currentStep === 2 && "Continue to Payment"}
                      {currentStep === 3 && "Complete Purchase"}
                    </Button>
                  )}

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2 text-green-400 text-sm mb-2">
                      <Shield className="h-4 w-4" />
                      <span>Secure & Protected</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-400 text-sm mb-2">
                      <Phone className="h-4 w-4" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-400 text-sm">
                      <Gift className="h-4 w-4" />
                      <span>Instant Digital Delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
