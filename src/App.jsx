import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ProductModal from './components/ProductModal'
import FavoritesDrawer from './components/FavoritesDrawer'
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css'

function App() {
  // Initialize state directly from localStorage if data exists
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('atelier_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state mutations cleanly back to localStorage whenever modifications occur
  useEffect(() => {
    localStorage.setItem('atelier_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // 2. Mock Luxury Leather Product Database
  const products = [
    { id: 1, name: "Aso-Oke Accent Loafers", price: "₦120,000", material: "Full-Grain Calfskin & Handwoven Aso-Oke", img: "https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/734178469_122118540657351417_2419401862246597276_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMnuhlRC7PCi6qs66GHMHez-MwlA37NWXP4zCUDfs1Zaj_ENZwRRR9G6pHyoDCl8tyVp_zpPv8xAY5uHUSVqIu&_nc_ohc=OKo5mDSn9VMQ7kNvwHYuEhl&_nc_oc=AdrhdGI9tRouYQdDDhAiQJ87wGzjD3KtxyMogh3haV8ypxcFGuF43j-EamIZnMMPhjbZoSURbQv4avcIHldOXLIs&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=G1msfWY7XpJQNQDybblDtQ&_nc_ss=782a8&oh=00_AQJjHw3a7CW7AzXs-MmZwsDmMSdGmMAy2Bt2vqaAUuKxeQ&oe=6AA60A38" },
    { id: 2, name: "Abuja Minimalist Slides", price: "₦65,000", material: "Vegetable-Tanned Premium Hide", img: "https://images.unsplash.com/photo-1585120824848-8a5cd41493d2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMHNhbmRhbHN8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Bespoke Monogram Tote", price: "₦210,000", material: "Hand-Burnished Bridle Leather", img: "https://plus.unsplash.com/premium_photo-1787075042155-e4480115dc85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGxlYXRoZXIlMjBzYW5kYWxzfGVufDB8fDB8fHww" },
    { id: 4, name: "Eko Cross-Strap Sandals", price: "₦75,000", material: "Suede Lining & Durable Brass Hardware", img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/8885914/1.jpg?1156" },
    { id: 5, name: "Signature Atelier Belt", price: "₦45,000", material: "Solid Brass Buckle & English Bridle", img: "https://cdn.pixabay.com/photo/2026/08/07/07/34/07-34-30-403_1280.jpg" }
  ];

   const toggleFavorite = (product) => {
    setFavorites(prev => 
      prev.some(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  const marqueeData = [
    { text: "Premium Leather Artisans", icon: "fluent--premium-12-filled" },
    { text: "Handcrafted in Abuja", icon: "akar-icons--scissor" },
    { text: "Worldwide Shipping Available", icon: "emojione-monotone--globe-showing-europe-africa" },
    { text: "Bespoke Fit Guaranteed", icon: "bi--shield-shaded" }
  ];

  const luxuryFeatures = [
    { icon: "fluent--premium-12-filled", title: "Premium Quality", description: "Experience the finest materials and meticulous craftsmanship in every custom piece." },
    { icon: "akar-icons--scissor", title: "Custom Pieces", description: "Tailor-made patterns shaped specifically to match your refined stylistic preferences." },
    { icon: "fluent--location-ripple-12-filled", title: "Abuja Atelier", description: "Visit our physical design workshop for private fittings and luxury consultations." },
    { icon: "emojione-monotone--globe-showing-europe-africa", title: "Worldwide Shipping", description: "Secure, tracked international freight delivering luxury leather directly to your doorstep." },
    { icon: "bi--shield-shaded", title: "Strong & Durable", description: "Built using authentic full-grain skins designed to withstand decades of daily use." }
  ];

  return (
    <>
      <Nav />
      <Hero />
      <Marquee items={marqueeData} />
      <Features featureData={luxuryFeatures} />
      <hr />
      <Gallery products={products} onViewProduct={setSelectedProduct} />
      <hr />
      {/* Testimonials View Section */}
      <Testimonials />
    <Footer />
      <BackToTop />
      <button className="fav-fab" onClick={() => setIsFavOpen(true)}>
        <span className="bi--suit-heart-fill"></span>
        {favorites.length > 0 && <span className="fav-badge">{favorites.length}</span>}
      </button>

      <FavoritesDrawer 
        isOpen={isFavOpen} 
        onClose={() => setIsFavOpen(false)} 
        favorites={favorites} 
        onRemove={toggleFavorite}
      />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          isFavorite={favorites.some(item => item.id === selectedProduct.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </>
  )
}

export default App