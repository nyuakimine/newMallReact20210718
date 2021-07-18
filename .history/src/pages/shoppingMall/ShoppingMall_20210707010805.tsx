import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategoriesDataActionCreator } from "../../redux/shoppingMall/fetchCategoriesActions";
import { RootState } from "../../redux/store";
import "./ShoppingMall.css";
import { FirstComponent } from "./FirstComponent";
import { Carousel } from "../../components/NewBeeCarousel";
import { HotGoodses } from "../../components/hotGoodses";
import { NewGoods } from "../../components/newGoods";
import { RecommendGoodses } from "../../components/recommendGoodses";
import { Fragment } from "../../components/headerFragment";
import { NavFragment } from "../../components/fragment";
import { NewBeeFooter } from "../../components/newBeeFooter";

export const ShoppingMall: React.FC = () => {
  let categories: any = useSelector((s: RootState) => s.categories);
  let carousels: any = useSelector((s: RootState) => s.carousels);
  let loading = categories.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCategoriesDataActionCreator());
  }, []);

  let hotGoodses: any = useSelector(
    (s: RootState) => s.hotGoodses.hotGoodseList.data
  );
  let newGoodses: any = useSelector(
    (s: RootState) =>
      s.newAndRecommendGoodses.newAndReGoodsesList.data.newGoodses
  );
  let recommendGoodses: any = useSelector(
    (s: RootState) =>
      s.newAndRecommendGoodses.newAndReGoodsesList.data.recommendGoodses
  );
  const onMouseOverHandler = (e) => {
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("all-sort-list")[0];
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    );
    itemList[0].style.display = "block";
    itemList[0].style.top = targetTop - sLTop + "px";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);

    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    );
    itemList[0].style.display = "none";
  };

  return categories.loading === true ? (
    <h1>"loading"</h1>
  ) : (
    <div id="content">
      <Fragment> </Fragment>

      <NavFragment></NavFragment>
      <div id="banner">
        <div className="all-sort-list">
          {categories.error != null
            ? "error"
            : categories.categoryList.data.map((category, index) => {
                return (
                  <FirstComponent
                  key={index}
                    onMouseOverHandler={onMouseOverHandler}
                    onMouseOutHandler={onMouseOutHandler}
                    category={category}
                    index={index}
                  ></FirstComponent>
                );
              })}
        </div>
        <Carousel></Carousel>
      </div>
      <HotGoodses
        data={hotGoodses}
        idx6={hotGoodses}
       
      ></HotGoodses>
      <NewGoods
       newGoodses={newGoodses} 
       idx5={newGoodses}></NewGoods>
      <RecommendGoodses
        recommendGoodses={recommendGoodses}
        idxza1={recommendGoodses}
      ></RecommendGoodses>
      <NewBeeFooter></NewBeeFooter>
    </div>
  );
};
