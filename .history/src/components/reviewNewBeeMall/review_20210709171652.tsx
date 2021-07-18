import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";

export const ReviewNewBeeMall: React.FC = () => {
  return (
    <div>
      <div className="zv-cqa-step" id="detailFooter">
        <div className="zv-cqa-step-link">
          <span className="previousPage">前ページ</span>
          <span>全2件</span>

          <span>
            ページ<span id="currentPageNo">1</span>/5
          </span>
          <span className="nextPage">次ページ</span>
        </div>
      </div>

      <div id="zv-modal-container" className="zv-hide">
        <div id="zv-modal-root"></div>
        <div id="zv-modal">
          <div id="zv-lightbox">
            <div id="zv-lightbox-header">
              <button id="zv-close-button" type="button">
                <span className="zv-close-icon"></span>
              </button>
            </div>
            <div id="zv-lightbox-body">
              <div id="zv-lightbox-title-area">
                <div id="zv-lightbox-title-label"></div>
                <div id="zv-lightbox-title"></div>
              </div>
              <div id="zv-lightbox-value">
                <div id="zv-lightbox-value-input">
                  <div id="zv-lightbox-name">
                    <label>ニックネーム</label>
                    <input
                      id="zv-cqa-input-reviewer-name"
                      type="text"
                      className="zv-textbox"
                      name="reviewer_name"
                    />
                  </div>
                  <div id="zv-lightbox-text">
                    <label id="zv-lightbox-text-label"></label>
                    <textarea
                      id="zv-cqa-input-text"
                      name="text"
                      className="zv-input zv-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
                </li>
                <li>
                  回答を要するご質問やお急ぎの方は
                  <a
                    className="g-link-u"
                    href="https://www.nitori-net.jp/ec/input-inquiry/"
                    target="_blank"
                  >
                    お問い合わせフォームへ
                  </a>
                  ご連絡ください。
                </li>
                <li>
                  ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの
                  <a
                    className="g-link-u"
                    href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                    target="_blank"
                  >
                    ニトリ商品Q&amp;Aについて
                  </a>
                  をご確認ください。
                </li>
              </ul>

              <p className="zv-error-message" id="ZVSpamError">
                しばらく時間をおいて投稿してください。
              </p>
              <div
                id="ZVPostArea"
                data-customerqa-message-after-post-answer="回答ありがとうございます。"
                data-customerqa-message-after-post-comment="コメントありがとうございます。"
              >
                <button type="button" className="zv-btn" id="ZVPostButton">
                  回答
                </button>
              </div>
              <div id="ZVColseArea" className="zv-hide">
                <button type="button" className="zv-btn" id="ZVColseButton">
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="zv-modal-wrapper"></div>
      </div>

      <div id="ZVCQAPost">
        <div className="zv-cqa-posting-rule">
          <p className="zv-cqa-posting-rule-title">ご注意ください</p>
          <ul>
            <li>
              「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
            </li>
            <li>
              回答を要するご質問やお急ぎの方は
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/input-inquiry/"
                target="_blank"
              >
                お問い合わせフォームへ
              </a>
              ご連絡ください。
            </li>
            <li>
              ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                target="_blank"
              >
                ニトリ商品Q&amp;Aについて
              </a>
              をご確認ください。
            </li>
          </ul>
        </div>

        <input
          type="textbox"
          id="ZVQuestionTextarea"
          className="zv-textbox"
          placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        />
        <div
          id="ZVAskPostArea"
          data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
        >
          <p className="zv-error-message" id="ZVLoginErrorQuestion">
            質問を投稿するにはログインが必要です。
          </p>
          <p className="zv-error-message" id="ZVEmptyErrorQuestion">
            質問を入力してください。
          </p>
          <p className="zv-error-message" id="ZVSpamErrorQuestion">
            しばらく時間をおいて投稿してください。
          </p>
          <button type="button" id="ZVPostQuestionButton" className="zv-btn">
            質問を投稿
          </button>
        </div>
      </div>

      <section
        className="g-grid_item g-sm-block-sm"
        id="js-product-reviews"
        aria-hidden="false"
      >
        <div id="js-replace">
          <input type="hidden" name="productCodePost" value="" />
          <div id="normal-productreview">
            <h2 className="g-h-2 g-h-i p-hd">
              <i className="g-s g-s-comment" aria-hidden="true"></i>
              <span>レビュー</span>
            </h2>
            <div className="p-reviewScore">
              <p className="p-average">
                平均評価<span className="g-digit">4.7</span>
              </p>
              <p className="g-score">
                <span data-score="4.7"></span>

                <span>
                  {" "}
                  (<span id="js-reviews">4</span>){" "}
                </span>
              </p>
            </div>

            <ul className="g-reviewList">
              <li className="g-reviewList_item">
                <p className="g-label-brand g-reviewList_label">
                  ピックアップレビュー
                </p>

                <div className="g-lg-flow-sm">
                  <p className="g-score">
                    <span data-score="5.0">
                      <span className="g-clip">text.product.review.Rating</span>
                    </span>
                  </p>
                </div>

                <p className="g-reviewList_info">
                  購入商品:カジュアルソファ(パトレック GR/MBR）)
                </p>
                <p className="g-reviewList_user">
                  さん<span className="g-clip">2020/07/20</span>
                </p>
                <p className="g-reviewList_h">安くて、座り心地良いです。</p>
                <p>
                  安価なソファだと、座面がかなり低く、立ち上がるのにもしんどいと、よく聞きます。友人の家のソファに座るとなるほどと思い、座面が低すぎなくて、比較的安価なものを探していました。
                  これは、座り心地も良く、立ち上がるのにも足腰に負担にならないです。
                  適度なフカフカさもあります。 良い買い物出来ました。
                  触り心地良いですが、飲み物などこぼしたら、シミになりそうなので、私は色も好きだけど、ソファカバーを店舗で買いました。
                </p>
                <p className="g-reviewList_like">
                  <a
                    className="g-link reviewLike0"
                    id="js-hitLike"
                    data-count="0"
                  >
                    <i className="g-s g-s-like-g" aria-hidden="true"></i>
                    <span className="helpNumSpan">参考になった</span>
                    <span className="hidSpForRevId"> </span>
                  </a>
                </p>
              </li>
              <li className="g-reviewList_item">
                <div className="g-lg-flow-sm">
                  <p className="g-score">
                    <span data-score="5.0">
                      <span className="g-clip">text.product.review.Rating</span>
                      <span className="g-clip">
                        <img src="/goods-img/star.jpg" />
                        <img src="/goods-img/star.jpg" />
                        <img src="/goods-img/star.jpg" />
                        <img src="/goods-img/star.jpg" />
                        <img src="/goods-img/star.jpg" />
                      </span>
                    </span>
                  </p>

                  <p className="g-reviewList_user">
                    <b>ルル</b>さん 2021/03/09
                  </p>
                </div>

                <p className="g-reviewList_info">
                  購入商品:カジュアルソファ(パトレック GR/LBR)
                </p>
                <p className="g-reviewList_h">可愛い</p>
                <p>
                  コンパクトで色もめっちゃ可愛いです。本当に買って良かったです。
                  組み立ても簡単でした。
                </p>
                <p className="g-reviewList_like">
                  <a
                    className="g-link reviewLike1"
                    id="js-hitLike"
                    data-count="1"
                    data-clickable=""
                  >
                    <i className="g-s g-s-like-g" aria-hidden="true"></i>
                    <span>参考になった（2人）</span>
                  </a>
                </p>
              </li>
            </ul>
            <div id="p-reviewMore" aria-hidden="true"></div>
          </div>
        </div>
        <div
          className="g-foot-v g-foot-sm"
          id="js-review-more"
          aria-hidden="false"
        >
          <p className="g-align-tc" id="showMoreReviewsBtn">
            <a
              className="g-link displaymorereview"
              href="#p-reviewMore"
              role="button"
              aria-expanded="false"
              aria-controls="p-reviewMore"
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <i className="g-i g-i-arrow-d"></i>
              <span id="showMoreLabel">
                レビューをもっと見る（3/
                <span id="js-reviews-more">4</span>）
              </span>
            </a>
          </p>

          <p className="g-align-tc" id="closeBtn">
            <a
              className="g-link displaymorereview"
              href="#p-reviewMore"
              role="button"
              aria-expanded="false"
              aria-controls="p-reviewMore"
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <span id="closeLabel">閉じる</span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
