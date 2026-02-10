'use client'

import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 'scan-n-dine',
    title: 'Scan-N-Dine',
    tagline: 'Digital menu & table ordering',
    description: 'Revolutionary digital menu solution replacing costly POS systems—scan, order, pay directly from tables.',
    href: 'https://scananddine-tau.vercel.app/',
    bgColor: '#FFFFFF', // Set background color to white
    textColor: '#8B4513', // Set text color to brown
  },
  {
    id: 'e-catalog',
    title: 'GoWholeSale',
    tagline: 'Coming Soon — B2B catalog & ordering',
    description: 'Private digital ordering & credit platform for wholesalers. Own your brand, data, and relationships—not a marketplace.',
    href: '/products/e-catalog',
    bgColor: '#FFFFFF', // Set background color to white
    textColor: '#8B4513', // Set text color to brown
  },
  {
    id: 'paysync',
    title: 'PaySync',
    tagline: 'Global invoicing & billing',
    description: 'Global invoicing software for frictionless billing across currencies and compliance standards.',
    href: '/products/paysync',
    bgColor: '#FFFFFF', // Set background color to white
    textColor: '#8B4513', // Set text color to brown
  }
]

export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with center card

  return (
    <div className="relative">
      {/* Desktop: 1-3-1 Stack (Center Focus) */}
      <div className="hidden md:flex flex-col gap-6">
        {products.map((product, index) => {
          const isCenter = index === activeIndex
          
          return (
            <article
              key={product.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ backgroundColor: product.bgColor }}
              className={`
                relative overflow-hidden rounded-[2rem] transition-transform duration-300 cursor-pointer
                ${isCenter ? 'scale-105' : 'scale-100 hover:scale-105'}
              `}
            >
              <div className="relative p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-halant)] text-3xl md:text-4xl font-normal" style={{ color: product.textColor }}>
                  {product.title}
                </h3>
                
                <p className="text-sm mb-4 font-medium" style={{ color: `${product.textColor}B3` }}>
                  {product.tagline}
                </p>
                
                <p className="text-lg leading-relaxed mb-6" style={{ color: `${product.textColor}CC` }}>
                  {product.description}
                </p>
                
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-3 font-medium group pb-1 border-b border-white/20 hover:border-white transition-all duration-300"
                  style={{ color: product.textColor }}
                >
                  <span>View Product</span>
                  <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                    <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      {/* Mobile: Horizontal Carousel */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {products.map((product) => {
            return (
              <article
                key={product.id}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-96"
              >
                <div 
                  className="relative overflow-hidden rounded-[2rem]"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <div className="relative p-6">
                    <h3 className="font-[family-name:var(--font-halant)] text-2xl md:text-3xl font-normal" style={{ color: product.textColor }}>
                      {product.title}
                    </h3>
                    <p className="text-sm mb-4 font-medium" style={{ color: `${product.textColor}B3` }}>
                      {product.tagline}
                    </p>
                    <p className="text-base mb-6 leading-relaxed" style={{ color: `${product.textColor}CC` }}>
                      {product.description}
                    </p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-3 font-medium group pb-1 border-b border-white/20 hover:border-white transition-all duration-300"
                      style={{ color: product.textColor }}
                    >
                      <span>View Product</span>
                      <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                        <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                          <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {products.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted/20"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
