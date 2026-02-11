/**
 * Image paths index
 * Centralized location for all image asset paths
 */

export const IMAGES = {
	// Logo
	logo: {
		main: "/images/logo.png",
		white: "/images/logo-white.png",
		icon: "/images/logo-icon.png",
	},

	// Hero section
	hero: {
		banner: "/images/hero-banner.jpg",
		background: "/images/hero-bg.jpg",
	},

	// Products
	products: {
		placeholder: "/images/product-placeholder.png",
		// Add specific product images as needed
	},

	// Icons
	icons: {
		delivery: "/images/icons/delivery.svg",
		quality: "/images/icons/quality.svg",
		price: "/images/icons/price.svg",
	},

	// Banners
	banners: {
		sale: "/images/banners/sale.jpg",
		featured: "/images/banners/featured.jpg",
	},

	// Add more categories as needed
} as const;

// Type for autocomplete support
export type ImagePaths = typeof IMAGES;
