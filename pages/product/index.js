import Link from 'next/link'
import React from 'react'

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        <Link href="/product/1">
          <a> ProductList 1</a>
        </Link>
      </h1>
      <h2>
        {' '}
        <Link href="/product/2">
          <a> ProductList 2</a>
        </Link>
      </h2>
      <h2>
        {' '}
        <Link href="/product/3" replace>
          <a> ProductList 3</a>
        </Link>
      </h2>
      <h2>
        {' '}
        <Link href={`/product/${productId}`}>
          <a> ProductList 4</a>
        </Link>
      </h2>
    </div>
  )
}

export default ProductList
