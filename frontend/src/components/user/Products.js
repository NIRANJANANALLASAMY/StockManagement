"use client"

import { useState } from "react"
import Navbar from "./Navbar"; // Import Navbar

import {
  FaWhatsapp,
  FaInfoCircle,
  FaRuler,
  FaPalette,
  FaTrademark,
  FaLeaf,
  FaSprayCan,
  FaIndustry,
} from "react-icons/fa"
import "../../styles/Products.css" // Import CSS

const products = [
  {
    image: "user/product/1.jpg",
    name: "Looms Weaving Silk Shuttle",
    size: "14.5X26X36",
    color: "Black & Red",
    brand: "SMT",
    material: "Hylem",
    finishing: "Polished",
    usage: "Textile Machine",
  },
  {
    image: "user/product/2.jpg",
    name: "Silk Loom Weaving Shuttle",
    size: "34-375 mm",
    color: "Natural",
    brand: "SMT",
    material: "Wood",
    finishing: "Polished",
    usage: "Weaving Machines",
  },
  {
    image: "user/product/3.jpg",
    name: "Wooden Weaving Shuttle",
    size: "12X30X40",
    color: "Brown",
    brand: "SMT",
    material: "Teak Wood",
    finishing: "Matte",
    usage: "Handloom Weaving",
  },
]



const ProductList = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [inquirySent, setInquirySent] = useState({})

  const toggleCardExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const openWhatsApp = (product, event, index) => {
    const phoneNumber = "+919344733072" // WhatsApp number (must include country code)

    // Message formatting
    const message =
      `Hello, I am interested in "${product.name}". Here are the details:\n\n` +
      `- 📏 Size: ${product.size}\n` +
      `- 🎨 Color: ${product.color}\n` +
      `- 🏷️ Brand: ${product.brand}\n` +
      `- 🪵 Material: ${product.material}\n` +
      `- ✨ Finishing: ${product.finishing}\n` +
      `- 🏭 Usage: ${product.usage}\n\n` +
      `Please provide more details. Thank you!`

    const encodedMessage = encodeURIComponent(message)

    // Mobile and desktop WhatsApp link
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    // Set inquiry status for this product
    setInquirySent({ ...inquirySent, [index]: true })

    // Re-enable button after 30 seconds
    setTimeout(() => {
      setInquirySent({ ...inquirySent, [index]: false })
    }, 30000)

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="products-container">
        {/* Navbar Component */}
      <Navbar />
      <div className="products-header">
        <h1>Our Premium Products</h1>
        <p>Discover our high-quality weaving shuttles crafted with precision</p>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div className={`product-card ${expandedCard === index ? "expanded" : ""}`} key={index}>
            <div className="product-image-container">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
              </div>
              <div className="product-badge">Premium</div>
            </div>

            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>

              <div className="product-specs">
                <div className="spec-item">
                  <FaRuler className="spec-icon" />
                  <span>{product.size}</span>
                </div>
                <div className="spec-item">
                  <FaPalette className="spec-icon" />
                  <span>{product.color}</span>
                </div>
              </div>

              <div className={`product-details ${expandedCard === index ? "visible" : ""}`}>
                <div className="details-grid">
                  <div className="detail-item">
                    <FaTrademark className="detail-icon" />
                    <div>
                      <h4>Brand</h4>
                      <p>{product.brand}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaLeaf className="detail-icon" />
                    <div>
                      <h4>Material</h4>
                      <p>{product.material}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaSprayCan className="detail-icon" />
                    <div>
                      <h4>Finishing</h4>
                      <p>{product.finishing}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaIndustry className="detail-icon" />
                    <div>
                      <h4>Usage</h4>
                      <p>{product.usage}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-actions">
                <button
                  className="details-btn"
                  onClick={() => toggleCardExpansion(index)}
                  aria-expanded={expandedCard === index}
                >
                  <FaInfoCircle />
                  {expandedCard === index ? "Less Details" : "More Details"}
                </button>

                <button
                  className={`inquiry-btn ${inquirySent[index] ? "sent" : ""}`}
                  onClick={(e) => openWhatsApp(product, e, index)}
                  disabled={inquirySent[index]}
                >
                  <FaWhatsapp />
                  {inquirySent[index] ? "Inquiry Sent" : "Make Inquiry"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList

