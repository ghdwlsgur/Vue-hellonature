<script>
export default{name: 'enroll_product_inq'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <div class="back_button">
                <a href="#" alt="뒤로 돌아가기"></a>
            </div>
            <h2 class="contents_name">문의 작성</h2>                        
        </div>
        <!-- product_inq_bigbox 시작-->
        <div class="product_inq_bigbox">
            <!-- product_form_list 시작 -->
            <ul class="product_form_list">
                <li>
                    <textarea name id="productInqContents" class="product_textarea" maxlength="2000" placeholder="궁금한 사항을 작성해 주세요."></textarea>
                </li>
            <!-- product_form_list 끝 -->
            </ul>
            <div class="product_guide_box">
                <ul>
                    <li>
                        상품문의 이외 문의사항은 <a href="#" class="mantoman_connect_tomantoman">1:1문의</a>를 이용해주세요.
                    </li>
                    <li>
                        해당 상품과 무관하거나 부적절한 내용의 문의는 통보 없이 삭제될 수 있습니다.
                    </li>
                </ul>
                <button type="submit" class="button_submit">등록</button>
                <div class="post_guide_box">
                    <div class="post_guide_box_inner">                        
                        <div class="post_guide_help">
                            <p>상품문의 운영안내</p>
                        </div>
                    </div>
                    <div class="overview">
                        <a href="#" alt="구매후기 이용안내 오버뷰"></a>
                    </div>
                </div>
                <div class="post_guide_overview">
                    <ul>
                        <li>
                            상품문의 게시판은 상품 상세페이지에서 제공하는 정보 외 추가로 궁금하신 내용을 질문하고 답변 받는 공간입니다. 본 게시판에 남겨주신 상품문의는 관련 부서 확인을 거쳐 최대한 빠르게 답변해드립니다.
                        </li>
                        <li>
                            상품에 대한 문의는 [상품 상세페이지>상품문의] 탭에 남겨주세요. 고객님이 남긴 문의와 헬로네이처의 답변은 [마이페이지>나의 상품문의] 페이지 또는 해당 [상품 상세페이지>상품문의] 탭에서 확인하실 수 있습니다.
                        </li>
                        <li>
                            상품문의 게시판은 상품 구매에 도움이 되는 정보를 고객님 간 공유하는 공간이기도 합니다. 상품에 대한 정보성 문의가 아닌 교환/환불 등 기타 문의는 [마이페이지>1:1게시판]을 통해 접수해주세요. 확인 후 빠르게 도와드리겠습니다.
                        </li>
                    </ul>
                </div>
            </div>
        <!-- product_inq_bigbox 끝-->
        </div>
    </div>    
</template>

<style scoped>
.back_button { background: white url("~@/assets/images/mypage/back_icon.png") center 1px no-repeat; background-size: contain; width: 30px; height: 30px; cursor: pointer}
.product_inq_bigbox { padding: 26px 20px 0 20px; box-sizing: border-box; display: block;}
.product_form_list > li > textarea { width: 100%; border: 2px solid #f6f6f6; border-radius: 4px; box-sizing: border-box; background-color: #f6f6f6; letter-spacing: -.3px; color: #555; caret-color: #1d988e; outline: none; display: block; padding: 9px 10px; height: 160px; overflow: hidden; overflow-y: auto; font-weight: 400; font-size: 15px; line-height: 1.73;}
.product_guide_box { margin-top: 12px; box-sizing: border-box;}
.product_guide_box > ul { font-size: 12px; line-height: 1.58; letter-spacing: -.5px; color: #555; display: block; position: relative;}
.product_guide_box ul li { position: relative; padding-left: 9px;}
.product_guide_box ul li:before { content: 'ㆍ'; position: absolute; top: 0; left: -2px;}
.mantoman_connect_tomantoman { color: #00B081;}
.button_submit { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 50px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99; margin-top: 30px; cursor: pointer;}
.post_guide_box div { box-sizing: border-box;}
.post_guide_box { border-top: 1px solid #cccccc; margin-top: 30px; padding: 20px; display: flex; justify-content: space-between;}
.post_guide_help > p { font-size: 15px; font-weight: 700;}
.post_guide_overview { border-right: 1px solid #cccccc; border-left: 1px solid #cccccc; border-bottom: 1px solid #cccccc; padding: 24px 20px;}
.post_guide_overview ul li { position: relative; padding-left: 9px; margin-top: 2px;}
.post_guide_overview ul { font-size: 12px; line-height: 1.58; letter-spacing: -.5px; color: #555;}
.hellocash_help_button, .overview { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/down.png") no-repeat 20px 30%; background-size: 11px 6px;}
.hellocash_help_button:hover, .overview:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/up.png") no-repeat 20px 30%; background-size: 11px 6px;}
</style>
