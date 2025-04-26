import styles from './index.module.scss';
import  ProductCard  from './../../../components/src/molecules/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import  Header  from './../../../components/src/molecules/Header/Header';
import Providers from './../../_redux/provider';
import { AddCart } from './../../_redux/actions';
import { useDispatch } from 'react-redux'
import { useOnlineStatus } from './../../../services/hooks/useOnlineStatus';
import { ProductService } from './../../../services/lib/products';
import { OfflineService } from './../../../services/lib/offline';


export  function Index({}) {
  const [products, setProducts] = useState<any[]>([]);
  // const [cachedProducts, setcachedProducts] = useState<any[]>([]);

  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        getApiProducts();
      } catch (error) {
        if (!OfflineService.isOnline()) {
          getCachedProducts();
        }
      }
    };
    
    loadProducts();
  }, []);

const getCachedProducts = async function(){
  const data = await OfflineService.getProducts(); 
  setProducts(data);
}
const getApiProducts = async function(){
  const products =await ProductService.fetchProducts();
   setProducts(products);
  await OfflineService.saveProducts(products);
}
    
  
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
      <Providers>
        <Header/>
        <div className="next-container container">
        <div className="row">
        {isOnline ?  `${getApiProducts()&&''}`:`${getCachedProducts()&&''}`}

        {(products).map((product)=> (
          <div className="col-lg-3 mb-4 col-sm-6 col-md-4 ">
          <ProductCard  title={product.name} 
                        price={product.price} 
                        image={product.imageUrl} 
                        description={product.description}
                        onAddToCart={() => dispatch(AddCart(product))}
                        />
                        </div>
                ))}
                

      </div>
        </div>
        </Providers>
      </div>
    </div>
  );
}

export default Index;
