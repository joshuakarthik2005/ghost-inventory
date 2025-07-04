import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Ghost, Zap, Calendar, TrendingUp, Clock, Target } from "lucide-react"

const ghostProducts = [
	{
		id: 1,
		name: "Premium Automatic Umbrella",
		category: "Weather Protection",
		confidence: 85,
		discount: 25,
		originalPrice: 1200,
		ghostPrice: 900,
		preOrders: 320,
		maxPreOrders: 500,
		deliveryDate: "June 1-7, 2024",
		downPayment: 300,
		trigger: "Monsoon prediction for Mumbai",
		aiInsight: "Weather patterns indicate 300% spike in umbrella demand",
	},
	{
		id: 2,
		name: "Portable Air Cooler",
		category: "Home Appliances",
		confidence: 92,
		discount: 15,
		originalPrice: 8500,
		ghostPrice: 7225,
		preOrders: 180,
		maxPreOrders: 250,
		deliveryDate: "April 20-25, 2024",
		downPayment: 2000,
		trigger: "Heat wave forecast",
		aiInsight: "Temperature predictions show early summer demand surge",
	},
	{
		id: 3,
		name: "Festival Decoration Kit",
		category: "Seasonal",
		confidence: 78,
		discount: 35,
		originalPrice: 2500,
		ghostPrice: 1625,
		preOrders: 95,
		maxPreOrders: 200,
		deliveryDate: "March 15-20, 2024",
		downPayment: 500,
		trigger: "Holi festival approach",
		aiInsight: "Social media trends show increased festival preparation activity",
	},
	{
		id: 4,
		name: "Smart Home Security Kit",
		category: "Electronics",
		confidence: 89,
		discount: 20,
		originalPrice: 12000,
		ghostPrice: 9600,
		preOrders: 156,
		maxPreOrders: 300,
		deliveryDate: "May 10-15, 2024",
		downPayment: 3000,
		trigger: "Crime rate analysis",
		aiInsight: "Security concerns trending upward in urban areas",
	},
]

export default function GhostStorePage() {
	const getConfidenceColor = (confidence: number) => {
		if (confidence >= 90)
			return "text-emerald-400 bg-emerald-500/20 border-emerald-500/30"
		if (confidence >= 80)
			return "text-blue-400 bg-blue-500/20 border-blue-500/30"
		if (confidence >= 70)
			return "text-amber-400 bg-amber-500/20 border-amber-500/30"
		return "text-red-400 bg-red-500/20 border-red-500/30"
	}

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden hero-gradient pattern-overlay">
					<div className="container py-24">
						<div className="text-center mb-16">
							<Badge
								variant="secondary"
								className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
							>
								<Ghost className="h-3 w-3 mr-1" />
								Ghost Store
							</Badge>
							<h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
								Pre-Order the{" "}
								<span className="gradient-text">Future</span>
							</h1>
							<p className="text-xl text-slate-300 max-w-2xl mx-auto">
								Discover AI-predicted products before they hit the market. Save
								up to 45% with our Ghost Inventory system.
							</p>
						</div>

						{/* Stats */}
						<div className="grid md:grid-cols-4 gap-6 mb-16">
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Target className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">85%</div>
								<div className="text-sm text-slate-400">
									Prediction Accuracy
								</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">1,247</div>
								<div className="text-sm text-slate-400">Active Pre-orders</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Clock className="h-8 w-8 text-amber-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">3.2 days</div>
								<div className="text-sm text-slate-400">Avg. Delivery</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Zap className="h-8 w-8 text-teal-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">₹2.5L+</div>
								<div className="text-sm text-slate-400">Customer Savings</div>
							</div>
						</div>
					</div>
				</section>

				{/* Ghost Products Grid */}
				<section className="py-24 section-gradient-1">
					<div className="container">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4 text-white">
								Available Ghost Products
							</h2>
							<p className="text-slate-300">
								Pre-order these AI-predicted bestsellers before they're
							 manufactured
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{ghostProducts.map((product) => (
								<Card
									key={product.id}
									className="glass-card hover:shadow-lg transition-all"
								>
									<CardContent className="p-6">
										<div className="flex items-start justify-between mb-4">
											<div>
												<h3 className="text-xl font-semibold text-white mb-1">
													{product.name}
												</h3>
												<p className="text-slate-400">
													{product.category}
												</p>
											</div>
											<Badge
												className={getConfidenceColor(product.confidence)}
											>
												{product.confidence}% Confidence
											</Badge>
										</div>

										<div className="space-y-4">
											<div className="flex items-center space-x-4">
												<span className="text-3xl font-bold text-white">
													₹{product.ghostPrice}
												</span>
												<span className="text-xl text-slate-500 line-through">
													₹{product.originalPrice}
												</span>
												<Badge variant="destructive">
													-{product.discount}%
												</Badge>
											</div>

											<div className="space-y-2">
												<div className="flex justify-between text-sm text-slate-300">
													<span>
														Pre-orders:{" "}
														{product.preOrders}/
														{product.maxPreOrders}
													</span>
													<span>
														{Math.round(
															(product.preOrders /
																product.maxPreOrders) *
																100
														)}
														% filled
													</span>
												</div>
												<Progress
													value={
														(product.preOrders /
															product.maxPreOrders) *
														100
													}
													className="h-2"
												/>
											</div>

											<div className="bg-slate-800/50 rounded-lg p-4">
												<div className="flex items-center space-x-2 mb-2">
													<Zap className="h-4 w-4 text-emerald-400" />
													<span className="text-sm font-semibold text-white">
														AI Insight
													</span>
												</div>
												<p className="text-sm text-slate-300 mb-2">
													{product.aiInsight}
												</p>
												<p className="text-xs text-slate-400">
													Trigger: {product.trigger}
												</p>
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-2 text-sm text-slate-400">
													<Calendar className="h-4 w-4" />
													<span>Delivery: {product.deliveryDate}</span>
												</div>
												<Button className="bg-emerald-600 hover:bg-emerald-700">
													Pre-order ₹{product.downPayment}
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
