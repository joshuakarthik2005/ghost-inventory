import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, TrendingUp, CloudRain, Thermometer, Wind, Calendar, Target, Zap } from "lucide-react"

const weatherPredictions = [
	{
		location: "Mumbai",
		condition: "Heavy Rain Expected",
		icon: CloudRain,
		confidence: 85,
		impact: "300% increase in umbrella demand",
		timeframe: "Next 2 weeks",
		products: ["Umbrellas", "Raincoats", "Waterproof bags"],
	},
	{
		location: "Delhi",
		condition: "Heat Wave Alert",
		icon: Thermometer,
		confidence: 92,
		impact: "250% increase in cooling products",
		timeframe: "Next 3 weeks",
		products: ["Air coolers", "Fans", "Cooling vests"],
	},
	{
		location: "Bangalore",
		condition: "Windy Conditions",
		icon: Wind,
		confidence: 78,
		impact: "180% increase in outdoor gear",
		timeframe: "Next 10 days",
		products: ["Windbreakers", "Outdoor equipment", "Sports gear"],
	},
]

const trendPredictions = [
	{
		category: "Festival Season",
		trend: "Holi Preparations",
		confidence: 89,
		growth: "+340%",
		timeframe: "2 weeks",
		description: "Social media buzz indicates massive Holi celebration preparations",
		products: ["Colors", "Water guns", "Festive clothing", "Decorations"],
	},
	{
		category: "Work from Home",
		trend: "Home Office Setup",
		confidence: 76,
		growth: "+120%",
		timeframe: "1 month",
		description: "Corporate policy changes driving home office equipment demand",
		products: ["Desk chairs", "Monitors", "Webcams", "Lighting"],
	},
	{
		category: "Health & Wellness",
		trend: "Fitness Resolution",
		confidence: 82,
		growth: "+200%",
		timeframe: "3 weeks",
		description: "New year fitness resolutions creating equipment demand surge",
		products: ["Yoga mats", "Dumbbells", "Protein supplements", "Fitness trackers"],
	},
]

const aiInsights = [
	{
		title: "Seasonal Pattern Analysis",
		description: "AI detected 15% earlier monsoon preparation this year compared to historical data",
		accuracy: "94%",
		impact: "High",
	},
	{
		title: "Social Media Sentiment",
		description: "Festival-related posts increased 280% in the last week, indicating demand spike",
		accuracy: "87%",
		impact: "Medium",
	},
	{
		title: "Economic Indicators",
		description: "Consumer spending patterns suggest 25% increase in electronics purchases",
		accuracy: "91%",
		impact: "High",
	},
]

export default function PredictionsPage() {
	const getConfidenceColor = (confidence: number) => {
		if (confidence >= 90) return "text-emerald-400 bg-emerald-500/20 border-emerald-500/30"
		if (confidence >= 80) return "text-blue-400 bg-blue-500/20 border-blue-500/30"
		if (confidence >= 70) return "text-amber-400 bg-amber-500/20 border-amber-500/30"
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
							<Badge variant="secondary" className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
								<Brain className="h-3 w-3 mr-1" />
								AI Predictions
							</Badge>
							<h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
								Future <span className="gradient-text">Insights</span>
							</h1>
							<p className="text-xl text-slate-300 max-w-2xl mx-auto">
								Our AI analyzes weather patterns, social trends, and market data to predict product demand before it
								happens.
							</p>
						</div>

						{/* Stats */}
						<div className="grid md:grid-cols-4 gap-6">
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Target className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">85%</div>
								<div className="text-sm text-slate-400">Prediction Accuracy</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">50+</div>
								<div className="text-sm text-slate-400">Data Sources</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">24/7</div>
								<div className="text-sm text-slate-400">Real-time Analysis</div>
							</div>
							<div className="text-center glass-card-light p-6 rounded-lg">
								<Zap className="h-8 w-8 text-teal-400 mx-auto mb-2" />
								<div className="text-2xl font-bold text-white">2-4 weeks</div>
								<div className="text-sm text-slate-400">Prediction Window</div>
							</div>
						</div>
					</div>
				</section>

				{/* Predictions Tabs */}
				<section className="py-24 section-gradient-1">
					<div className="container">
						<Tabs defaultValue="weather" className="w-full">
							<TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/50 border border-slate-700">
								<TabsTrigger
									value="weather"
									className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
								>
									Weather Predictions
								</TabsTrigger>
								<TabsTrigger
									value="trends"
									className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
								>
								Trend Analysis
								</TabsTrigger>
								<TabsTrigger
									value="insights"
									className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
								>
									AI Insights
								</TabsTrigger>
							</TabsList>

							<TabsContent value="weather" className="space-y-6">
								<div className="grid md:grid-cols-3 gap-6">
									{weatherPredictions.map((prediction, index) => (
										<Card key={index} className="glass-card">
											<CardContent className="p-6">
												<div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-4 shadow-lg flex items-center space-x-3 mb-4">
													<prediction.icon className="h-8 w-8" />
													<div>
														<h3 className="font-semibold">{prediction.location}</h3>
														<p className="text-sm opacity-90">{prediction.condition}</p>
													</div>
												</div>

												<div className="space-y-3">
													<div className="flex items-center justify-between">
														<span className="text-sm text-slate-300">Confidence</span>
														<Badge className={getConfidenceColor(prediction.confidence)}>
															{prediction.confidence}%
														</Badge>
													</div>

													<div className="space-y-2">
														<div className="flex items-center space-x-2 text-sm">
															<Calendar className="h-4 w-4 text-slate-400" />
															<span className="text-slate-300">{prediction.timeframe}</span>
														</div>
														<div className="flex items-center space-x-2 text-sm">
															<TrendingUp className="h-4 w-4 text-emerald-400" />
															<span className="text-slate-300">{prediction.impact}</span>
														</div>
													</div>

													<div>
														<p className="text-sm text-slate-400 mb-2">Predicted products:</p>
														<div className="flex flex-wrap gap-1">
															{prediction.products.map((product, idx) => (
																<Badge key={idx} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
																	{product}
																</Badge>
															))}
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</TabsContent>

							<TabsContent value="trends" className="space-y-6">
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									{trendPredictions.map((trend, index) => (
										<Card key={index} className="glass-card">
											<CardHeader>
												<CardTitle className="flex items-center justify-between text-white">
													<span>{trend.category}</span>
													<Badge className={getConfidenceColor(trend.confidence)}>{trend.confidence}%</Badge>
												</CardTitle>
											</CardHeader>
											<CardContent>
												<div className="space-y-4">
													<div>
														<h4 className="font-semibold text-emerald-400 mb-1">{trend.trend}</h4>
														<p className="text-sm text-slate-300">{trend.description}</p>
													</div>

													<div className="flex items-center justify-between">
														<span className="text-sm text-slate-400">Expected Growth</span>
														<span className="font-bold text-emerald-400">{trend.growth}</span>
													</div>

													<div className="flex items-center justify-between">
														<span className="text-sm text-slate-400">Timeframe</span>
														<span className="text-sm text-slate-300">{trend.timeframe}</span>
													</div>

													<div>
														<p className="text-sm text-slate-400 mb-2">Related products:</p>
														<div className="flex flex-wrap gap-1">
															{trend.products.map((product, idx) => (
																<Badge key={idx} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
																	{product}
																</Badge>
															))}
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</TabsContent>

							<TabsContent value="insights" className="space-y-6">
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									{aiInsights.map((insight, index) => (
										<Card key={index} className="glass-card">
											<CardContent className="p-6">
												<div className="space-y-4">
													<div className="flex items-center space-x-2">
														<Brain className="h-5 w-5 text-emerald-400" />
														<h3 className="font-semibold text-white">{insight.title}</h3>
													</div>

													<p className="text-slate-300">{insight.description}</p>

													<div className="flex items-center justify-between">
														<div className="flex items-center space-x-2">
															<span className="text-sm text-slate-400">Accuracy:</span>
															<Badge className="bg-emerald-500/20 text-emerald-400">{insight.accuracy}</Badge>
														</div>
														<div className="flex items-center space-x-2">
															<span className="text-sm text-slate-400">Impact:</span>
															<Badge variant={insight.impact === "High" ? "destructive" : "secondary"}>
																{insight.impact}
															</Badge>
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
