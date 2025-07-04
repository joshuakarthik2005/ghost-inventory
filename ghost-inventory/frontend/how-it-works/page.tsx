import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
// import { HowItWorksSection } from "@/components/sections/how-it-works"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
	{
		title: "Save Money",
		description: "Get up to 45% discount on predicted bestsellers",
		icon: "💰",
	},
	{
		title: "Early Access",
		description: "Be the first to get trending products",
		icon: "⚡",
	},
	{
		title: "Risk-Free",
		description: "Money-back guarantee if predictions don't materialize",
		icon: "🛡️",
	},
	{
		title: "Smart Shopping",
		description: "AI does the research and timing for you",
		icon: "🧠",
	},
]

const faqs = [
	{
		question: "How accurate are the AI predictions?",
		answer:
			"Our AI maintains an 85% accuracy rate by analyzing weather patterns, social media trends, economic indicators, and historical data.",
	},
	{
		question: "What happens if a ghost product doesn't materialize?",
		answer: "We offer a full money-back guarantee. You can also choose from alternative products or store credit.",
	},
	{
		question: "How much do I need to pay upfront?",
		answer: "Ghost products require only 20-30% down payment. You pay the remaining amount upon delivery.",
	},
	{
		question: "Can I cancel my ghost order?",
		answer:
			"Yes, you can cancel anytime before we trigger the bulk purchase (usually when 60% of inventory is pre-ordered).",
	},
]

export default function HowItWorksPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden hero-gradient pattern-overlay">
					<div className="container py-24">
						<div className="text-center">
							<h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
								How{" "}
								<span className="gradient-text">Ghost Inventory</span> Works
							</h1>
							<p className="text-xl text-slate-300 max-w-2xl mx-auto">
								Discover how our AI-powered system predicts demand and helps you
								save money on future bestsellers.
							</p>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<HowItWorksSection />

				{/* Benefits Section */}
				<section className="py-24 section-gradient-2">
					<div className="container">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold mb-4 text-white">
								Why Choose Ghost Inventory?
							</h2>
							<p className="text-slate-300">
								The advantages of shopping with AI predictions
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{benefits.map((benefit, index) => (
								<Card key={index} className="text-center glass-card">
									<CardContent className="p-6">
										<div className="text-4xl mb-4">{benefit.icon}</div>
										<h3 className="font-semibold text-lg mb-2 text-white">
											{benefit.title}
										</h3>
										<p className="text-slate-300">
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-24 section-gradient-1">
					<div className="container">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold mb-4 text-white">
								Frequently Asked Questions
							</h2>
							<p className="text-slate-300">
								Everything you need to know about Ghost Inventory
							</p>
						</div>

						<div className="max-w-3xl mx-auto space-y-6">
							{faqs.map((faq, index) => (
								<Card key={index} className="glass-card">
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-3 text-white">
											{faq.question}
										</h3>
										<p className="text-slate-300">{faq.answer}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-24 section-gradient-2">
					<div className="container">
						<div className="text-center">
							<h2 className="text-3xl font-bold mb-4 text-white">
								Ready to Shop the Future?
							</h2>
							<p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
								Join thousands of smart shoppers who are already saving money with
								Ghost Inventory.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/ghost-store">
									<Button
										size="lg"
										className="bg-emerald-600 hover:bg-emerald-700"
									>
										Explore Ghost Store
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								<Link href="/products">
									<Button
										size="lg"
										variant="outline"
										className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
									>
										Browse All Products
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
