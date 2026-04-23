import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import CollectionCategories from './pages/CollectionCategories'
import CollectionDetail from './pages/CollectionDetail'
import JewelleryCollections from './pages/JewelleryCollections'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            border: '1px solid #e6d9cf',
            padding: '12px 16px',
            color: '#111',
            background: '#fff8f4',
            fontWeight: '500'
          },
          success: {
            iconTheme: {
              primary: '#16a34a',
              secondary: '#fff'
            }
          },
          error: {
            iconTheme: {
              primary: '#dc2626',
              secondary: '#fff'
            }
          }
        }}
      />
      
      {/* your routes/components */}
      <div className="min-h-screen bg-[#f7f1ed] text-[#111111]">
        <Navbar />
        <main className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-72 bg-gold-wave opacity-70 pointer-events-none"></div>
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:collectionId/categories" element={<CollectionCategories />} />
              <Route path="/collections/:collectionId/:categoryId?" element={<CollectionDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
    
  )
}

export default App
