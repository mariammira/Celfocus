'use client'
import React from 'react'
import {  useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import  CartDropdown  from './../CartDropDown/CartDropdown';
import styles from './Header.module.scss';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const  numberCart  = useSelector((state: any) => state._todoProduct.numberCart);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    
    <header className={`top-0 ${styles.bgRed}  ${styles.sticky}`}>
    <div className="container px-4 py-4 ">
      
      <div  ref={dropdownRef}>
        <img src="https://cdn.prod.website-files.com/65363d385688281ce5b016ec/65363d385688281ce5b016f5_Vectors-Wrapper.svg"  
             width="200" height="32" alt="celfocus logo" ></img>
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)}
          className={` ${styles.bgRed}   ${styles.floatRight}`}
        >
          <ShoppingCart />
          {numberCart > 0 && (
            <span className={styles.numberCart}>
              {numberCart}
            </span>
          )}
        </button>
        
        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  </header>
  )
}


