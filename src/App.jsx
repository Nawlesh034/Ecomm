import { useState } from 'react'

import StickyHeader from './component/StickyHeader'
import Navbar from './component/Navbar'
import HeroSlider from './component/HeroSlider'
import CategoryGrid from './component/CategoryGrid'
import CollectionSection from './component/CollectionSection'
import DiscountBanner from './component/DiscountBanner'
import TopSelling from './component/TopSelling'
import VideoBanner from './component/VideoBanner'
import TrendingCollections from './component/TrendingCollection'
import FlashSale from './component/FlashSale'
import CustomerReviews from './component/CustomerReviews'
import NewsBlog from './component/NewsBlog'
import FashionGallery from './component/FashionGallery'
import Footer from './component/Footer'
import AdminPanel from './component/AdminPanel'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple admin toggle (in a real app, you'd use React Router)
  const togglePage = () => {
    setCurrentPage(currentPage === 'home' ? 'admin' : 'home')
  }

  if (currentPage === 'admin') {
    return (
      <>
        <div className="bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <button 
              onClick={togglePage}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Back to Store
            </button>
          </div>
        </div>
        <AdminPanel />
      </>
    )
  }

  return (
    <>
     <StickyHeader/>
     <div className="relative">
       <Navbar/>
       {/* Admin Button */}
       <div className="absolute top-4 right-4 z-50">
         <button 
           onClick={togglePage}
           className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
         >
           Admin
         </button>
       </div>
     </div>
     <div className="flex flex-col gap-10 py-4">
     <HeroSlider/>
     <CategoryGrid/>
     <CollectionSection/>
     <DiscountBanner/>
     <TopSelling/>
     <VideoBanner/>
     <TrendingCollections/>
     <FlashSale/>
     <CustomerReviews/>
     <NewsBlog/>
     <FashionGallery/>
     <Footer/>
      </div>
      </>
  )
}

export default App
