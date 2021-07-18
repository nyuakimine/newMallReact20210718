import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewAndRecommendGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchNewAndRecommendGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface isProps {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: BigInteger;
  tag: string;
}
interface props {
  data: isProps[];
}

export const NewGoods: React.FC<props> = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
  }, []);
  return (
    <div id="flash">
      <h2>新品上线</h2>
      <ul>
        {data.map((goods) => {
          return (
            <li>
              <a
                href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}
              >
                <img
                  src={`http://localhost:8081/${goods.goodsCoverImg}`}
                  alt={goods.goodsName}
                ></img>
                <p className="name">{goods.goodsName}</p>
                <p className="discount">{goods.goodsIntro}</p>
                <p className="item_price">{goods.sellingPrice}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
