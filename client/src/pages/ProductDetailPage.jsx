import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'
import ProductDetails from '../features/product/components/ProductDetails'


function ProductDetailPage() {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
        </div>
    )
}

export default ProductDetailPage