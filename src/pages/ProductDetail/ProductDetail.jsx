import React, { useState, useEffect } from "react";
import LayOut from '../../components/LayOut/LayOut'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import ProductDetailsCard from "../../components/Product/ProductDetailsCard";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();
  const [isloading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isloading ? (
        <Loader />
      ) : (
        Object.keys(productDetail).length > 0 && (
          <ProductDetailsCard 
          productDetail={productDetail} 
          flex={true}
          renderDecs={true}
          renderAdd={true}
          />
        )
      )}
    </LayOut>
  );
};

export default ProductDetail;
