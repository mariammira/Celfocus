import React from 'react';
import { ProductCardProps } from './types';
import styles from './ProductCard.module.scss';
import { useState } from 'react';
import ProductModal from './../ProductModal/ProductModal';
import { useOnlineStatus } from './../../../../services/hooks/useOnlineStatus';

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const isOnline = useOnlineStatus();
  const isLongTitle = title.length > 65 

  return (
    <div className={styles.productCard}>
       <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={title} className={styles.productImage} />
        {isHovered && (
           <ProductModal 
           description={description}
         />        
        )}
      </div>

      <h2 className={styles.productTitle} onMouseEnter={() => setIsTitleHovered(true)}
        onMouseLeave={() => setIsTitleHovered(false)} >{isLongTitle?title.substring(0,65)+'...':title}</h2>
      {isLongTitle && isTitleHovered && (
           <ProductModal 
           description={title}
         />        
        )}
      <p className={styles.productPrice}>{price}€</p>
      <button onClick={onAddToCart}  disabled={!isOnline} className={styles.addToCartButton}>
      {isOnline ? 'Add to Cart' : 'Offline - Try Later'}
      </button>
    </div>
  );
};

export default ProductCard;
