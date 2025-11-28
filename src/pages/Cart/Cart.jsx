import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  const [{ basket, user }] = useContext(DataContext)
  
  // Calculate total with quantities
  const total = basket?.reduce((sum, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return sum + itemTotal;
  }, 0) || 0;

  // Calculate total items count
  const totalItems = basket?.reduce((sum, item) => {
    return sum + (item.quantity || 1);
  }, 0) || 0;

  return (
    <LayOut>
      <div className="max-w-screen-2xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <span>Hello, {user?.email || 'Guest'}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1">
            {basket?.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200">
                <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Amazon Cart is empty</h3>
                <p className="text-gray-600 mb-4">Shop today's deals</p>
                <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2 px-6 rounded-full transition-all duration-200 hover:shadow-lg">
                  Sign in to your account
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Cart Header */}
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
                  </h2>
                </div>
                
                {/* Cart Items */}
                <div className="divide-y divide-gray-200">
                  {basket?.map((item, index) => (
                    <div key={item.id || index} className="p-4">
                      <ProductCard 
                        product={item}
                        renderDesc={true}
                        renderAdd={false}
                        flex={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Checkout Section - Only show when cart has items */}
          {basket?.length > 0 && (
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 sticky top-4">
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-900">
                    Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}): 
                    <span className="ml-1">${total.toFixed(2)}</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" className="rounded text-orange-600" />
                  <span className="text-sm text-gray-900">This order contains a gift</span>
                </div>

                <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2 rounded-full transition-all duration-200 hover:shadow-lg mb-3">
                  Proceed to checkout
                </button>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 rounded-full transition-all duration-200 border border-gray-300">
                  Save for later
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayOut>
  )
}

export default Cart