import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Star, ShoppingCart, Heart, Eye } from "lucide-react"

const products = [
	{
		id: 1,
		name: "Wireless Bluetooth Headphones",
		category: "Electronics",
		price: 2999,
		originalPrice: 3999,
		discount: 25,
		rating: 4.5,
		reviews: 128,
		image: "/placeholder.svg?height=300&width=300",
		inStock: true,
		badge: "Bestseller",
	},
	{
		id: 2,
		name: "Smart Fitness Watch",
		category: "Wearables",
		price: 8999,
		originalPrice: 12999,
		discount: 31,
		rating: 4.7,
		reviews: 89,
		image: "/placeholder.svg?height=300&width=300",
		inStock: true,
		badge: "New Arrival",
	},
	{
		id: 3,
		name: "Portable Power Bank",
		category: "Accessories",
		price: 1499,
		originalPrice: 1999,
		discount: 25,
		rating: 4.3,
		reviews: 256,
		image: "/placeholder.svg?height=300&width=300",
		inStock: true,
		badge: "Popular",
	},
	{
		id: 4,
		name: "Wireless Mouse",
		category: "Electronics",
		price: 899,
		originalPrice: 1299,
		discount: 31,
		rating: 4.2,
		reviews: 67,
		image: "/placeholder.svg?height=300&width=300",
		inStock: true,
		badge: "Sale",
	},
	{
		id: 5,
		name: "USB-C Hub",
		category: "Accessories",
		price: 2499,
		originalPrice: 3499,
		discount: 29,
		rating: 4.6,
		reviews: 143,
		image: "/placeholder.svg?height=300&width=300",
		inStock: false,
		badge: "Out of Stock",
	},
	{
		id: 6,
		name: "Smartphone Stand",
		category: "Accessories",
		price: 599,
		originalPrice: 899,
		discount: 33,
		rating: 4.1,
		reviews: 89,
		image: "/placeholder.svg?height=300&width=300",
		inStock: true,
		badge: "Budget Pick",
	},
]

const categories = [
	"All",
	"Electronics",
	"Wearables",
	"Accessories",
	"Home & Garden",
	"Sports",
	"Fashion",
]

export default function ProductsPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden hero-gradient pattern-overlay">
					<div className="container py-16">
						<div className="text-center">
							<h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
								All Products
							</h1>
							<p className="text-xl text-slate-300 max-w-2xl mx-auto">
								Discover our complete collection of products, from everyday
								essentials to cutting-edge technology.
							</p>
						</div>
					</div>
				</section>

				{/* Filters and Search */}
				<section className="py-8 section-gradient-1">
					<div className="container">
						<div className="flex flex-col md:flex-row gap-4 mb-8">
							<div className="flex-1 relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
								<Input
									placeholder="Search products..."
									className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
								/>
							</div>
							<Button
								variant="outline"
								className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
							>
								<Filter className="h-4 w-4 mr-2" />
								Filters
							</Button>
						</div>

						<Tabs defaultValue="all" className="w-full">
							<TabsList className="grid w-full grid-cols-7 mb-8 bg-slate-800/50 border border-slate-700">
								{categories.map((category) => (
									<TabsTrigger
										key={category}
										value={category.toLowerCase()}
										className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
									>
										{category}
									</TabsTrigger>
								))}
							</TabsList>

							<TabsContent value="all">
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									{products.map((product) => (
										<Card
											key={product.id}
											className="group hover:shadow-lg transition-all glass-card"
										>
											<div className="relative">
												<div className="w-full h-48 bg-slate-700/50 rounded-t-lg flex items-center justify-center">
													<div className="text-slate-400">Product Image</div>
												</div>

												{/* Badges */}
												<div className="absolute top-3 left-3 space-y-1">
													{product.badge && (
														<Badge
															variant={
																product.inStock
																	? "secondary"
																	: "destructive"
															}
															className={
																product.inStock
																	? ""
																	: "bg-red-600"
															}
														>
															{product.badge}
														</Badge>
													)}
													{product.discount > 0 && (
														<Badge variant="destructive">
															-{product.discount}%
														</Badge>
													)}
												</div>

												{/* Action Buttons */}
												<div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
													<Button
														size="icon"
														variant="secondary"
														className="h-8 w-8"
													>
														<Heart className="h-4 w-4" />
													</Button>
													<Button
														size="icon"
														variant="secondary"
														className="h-8 w-8"
													>
														<Eye className="h-4 w-4" />
													</Button>
												</div>
											</div>

											<CardContent className="p-4">
												<div className="space-y-3">
													<div>
														<h3 className="font-semibold text-lg text-white">
															{product.name}
														</h3>
														<p className="text-sm text-slate-400">
															{product.category}
														</p>
													</div>

													<div className="flex items-center space-x-2">
														<div className="flex items-center">
															{[...Array(5)].map((_, i) => (
																<Star
																	key={i}
																	className={`h-4 w-4 ${
																		i < Math.floor(product.rating)
																			? "fill-yellow-400 text-yellow-400"
																			: "text-gray-300"
																	}`}
																/>
															))}
														</div>
														<span className="text-sm text-slate-400">
															{product.rating} ({product.reviews} reviews)
														</span>
													</div>

													<div className="flex items-center space-x-2">
														<span className="text-2xl font-bold text-white">
															₹{product.price}
														</span>
														{product.originalPrice > product.price && (
															<span className="text-lg text-slate-500 line-through">
																₹{product.originalPrice}
															</span>
														)}
													</div>

													<Button
														className="w-full"
														size="sm"
														disabled={!product.inStock}
													>
														<ShoppingCart className="h-4 w-4 mr-2" />
														{product.inStock
															? "Add to Cart"
															: "Out of Stock"}
													</Button>
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
