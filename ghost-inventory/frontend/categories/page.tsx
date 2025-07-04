import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Headphones, Watch, Home, Dumbbell, Shirt, Car, Book } from "lucide-react"

const categories = [
	{
		id: 1,
		name: "Electronics",
		description: "Smartphones, laptops, headphones, and more",
		icon: Smartphone,
		productCount: 1247,
		color: "text-blue-400",
		bgColor: "bg-blue-500/20",
	},
	{
		id: 2,
		name: "Audio & Video",
		description: "Headphones, speakers, cameras, and entertainment",
		icon: Headphones,
		productCount: 856,
		color: "text-purple-400",
		bgColor: "bg-purple-500/20",
	},
	{
		id: 3,
		name: "Wearables",
		description: "Smartwatches, fitness trackers, and accessories",
		icon: Watch,
		productCount: 432,
		color: "text-emerald-400",
		bgColor: "bg-emerald-500/20",
	},
	{
		id: 4,
		name: "Home & Garden",
		description: "Furniture, decor, appliances, and outdoor items",
		icon: Home,
		productCount: 2134,
		color: "text-amber-400",
		bgColor: "bg-amber-500/20",
	},
	{
		id: 5,
		name: "Sports & Fitness",
		description: "Exercise equipment, sportswear, and outdoor gear",
		icon: Dumbbell,
		productCount: 678,
		color: "text-red-400",
		bgColor: "bg-red-500/20",
	},
	{
		id: 6,
		name: "Fashion",
		description: "Clothing, shoes, bags, and fashion accessories",
		icon: Shirt,
		productCount: 3421,
		color: "text-pink-400",
		bgColor: "bg-pink-500/20",
	},
	{
		id: 7,
		name: "Automotive",
		description: "Car accessories, tools, and maintenance items",
		icon: Car,
		productCount: 567,
		color: "text-teal-400",
		bgColor: "bg-teal-500/20",
	},
	{
		id: 8,
		name: "Books & Media",
		description: "Books, magazines, games, and educational content",
		icon: Book,
		productCount: 1892,
		color: "text-indigo-400",
		bgColor: "bg-indigo-500/20",
	},
]

export default function CategoriesPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden hero-gradient pattern-overlay">
					<div className="container py-24">
						<div className="text-center">
							<h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
								Product Categories
							</h1>
							<p className="text-xl text-slate-300 max-w-2xl mx-auto">
								Explore our wide range of product categories, from cutting-edge
								electronics to everyday essentials.
							</p>
						</div>
					</div>
				</section>

				{/* Categories Grid */}
				<section className="py-24 section-gradient-1">
					<div className="container">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{categories.map((category) => (
								<Card
									key={category.id}
									className="group hover:shadow-lg transition-all cursor-pointer glass-card"
								>
									<CardContent className="p-6 text-center">
										<div
											className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center`}
										>
											<category.icon
												className={`h-8 w-8 ${category.color}`}
											/>
										</div>
										<h3 className="text-xl font-semibold mb-2 text-white">
											{category.name}
										</h3>
										<p className="text-slate-400 mb-4">
											{category.description}
										</p>
										<Badge
											variant="secondary"
											className="bg-slate-700/50 text-slate-300"
										>
											{category.productCount.toLocaleString()} products
										</Badge>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Featured Categories */}
				<section className="py-24 section-gradient-2">
					<div className="container">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold mb-4 text-white">
								Trending Categories
							</h2>
							<p className="text-slate-300">
								Most popular categories this month
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<Card className="glass-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-4 mb-4">
										<div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
											<Smartphone className="h-6 w-6 text-emerald-400" />
										</div>
										<div>
											<h3 className="font-semibold text-white">
												Electronics
											</h3>
											<p className="text-sm text-slate-400">
												+45% this month
											</p>
										</div>
									</div>
									<p className="text-slate-300">
										Latest smartphones, laptops, and gadgets trending now.
									</p>
								</CardContent>
							</Card>

							<Card className="glass-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-4 mb-4">
										<div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
											<Home className="h-6 w-6 text-amber-400" />
										</div>
										<div>
											<h3 className="font-semibold text-white">
												Home & Garden
											</h3>
											<p className="text-sm text-slate-400">
												+32% this month
											</p>
										</div>
									</div>
									<p className="text-slate-300">
										Home improvement and garden essentials in high demand.
									</p>
								</CardContent>
							</Card>

							<Card className="glass-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-4 mb-4">
										<div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
											<Dumbbell className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h3 className="font-semibold text-white">
												Sports & Fitness
											</h3>
											<p className="text-sm text-slate-400">
												+28% this month
											</p>
										</div>
									</div>
									<p className="text-slate-300">
										Fitness equipment and sportswear gaining popularity.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
