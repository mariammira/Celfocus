'use client';
import React from 'react'
import styles from './ProductModal.module.scss';
export default function ProductModal({  description}: {
  description: string;
}) {

  return (
    <div className={` bg-black bg-opacity-50  p-2 ${styles.productModal}`} >
      <div 
        className="bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 m-2">
          <p >{description}</p>   
        </div>
      </div>
    </div>
  );
}