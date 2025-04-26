'use client'
import React from 'react'
import {  useSelector } from 'react-redux'
import styles from './CartDropdown.module.scss'
export default function CartDropdown() {
  const  cartItems:any[]  = useSelector((state: any) =>  state._todoProduct.Carts);
  return (
    <div className={` right-0 mt-2 w-72 bg-white ${styles.positionAbs}`}>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p >Your cart is empty</p>
        ) : (
          <>
            <div className={styles.cartItemsContainer}>
              {cartItems.map((item ) => (
                <div className='row'>
                  <div key={item.sku} className=' py-2 border-b '>
                    <div className={styles.imgDiv}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className={`w-12 h-12 mr-3 ${styles.productImg}`}
                      />
                    </div>
                    <div className={styles.infoDiv}>
                      <h6 >{item.name}</h6>
                      <p>
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                 </div>
                </div>
              ))}
            </div>
            <div className="mt-4 ">
              <span>Total:</span>
              <span>
                ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </span>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}