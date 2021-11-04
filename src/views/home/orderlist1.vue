
<script>
export default{name: 'orderlist1'}

</script>

<template>
<div>
    <div class="contents_box3">
        <div class="category_name1">
            <h2>주문배송</h2>
        </div>
        <div class="filter_outline">
            <div><a href="#">최근 1개월</a></div>
            <div><a href="#">3개월</a></div>
            <div><a href="#">6개월</a></div>
            <div><a href="#">기간 조회</a></div>
        </div>
    </div>
    <div class="contents_box4">
        <div class="contents_box4_inner1">
            <div class="order_date">
                <p>2021.07.27</p>
            </div>
            <div class="default_ship">
                <p>기본 배송지</p>
            </div>
        </div>
        <div class="order_detail_button">
            <a href="#" alt="주문상세페이지 이동"></a>
        </div>
    </div>
    <div class="contents_box5">
        <div class="order_info">
            <div class="order_info_left">
                <p class="order_info_font1">택배배송</p>
                <div class="order_info_line"></div>
                <p class="order_info_font2">07.29(목) 도착</p>
            </div>
            <div class="order_info_right">
                <p><a href="#" class="order_info_font3">배송완료</a></p>
            </div>
        </div>
    </div>
    <div class="contents_box6">
        <div class="product_image"></div>
        <div class="product_info">
            <p>[행복담원] 서귀포 하우스 감귤 500g</p>
            <div class="contents_box6_inner">
                <p>500g</p>
                <div class="product_info_line"></div>
                <p>1개</p>
            </div>                            
        </div>
        <div class="mantoman_button_box">
            <input type="button" value="1:1문의" class="mantoman_button">
        </div>
    </div>
</div>
</template>

<style scoped>
/* contents_box3 */
.category_name1 { line-height: 34px; font-size: 14px; letter-spacing: -.5px; font-weight: 700; padding: 8px 0 20px 1px;}
.filter_outline { display: flex; justify-content: space-between;}
.filter_outline div { width: 210px; border: 1px solid #cccccc; margin-right: -4px;}
.filter_outline div > a { display: flex; justify-content: center; padding: 8px;}
.filter_outline div:nth-child(1) { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
.filter_outline div:nth-child(4) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
.filter_outline div:nth-child(1) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99; border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
.filter_outline div:nth-child(4) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99; border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
/* 첫번째요소와 마지막요소를 뺀 나머지에는 hover시 border-radius를 주지 않음 */
.filter_outline div:not(:first-child:last-child) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99;}
/* contents_box4 */
.contents_box4 { background-color: #f6f6f6; margin-top: 16px; padding: 20px 20px 14px; display: flex; justify-content: space-between;}
.contents_box4 div { box-sizing: border-box;}
.order_date > p { font-size: 18px; color: #333; font-weight: 800; line-height: 1.22; letter-spacing: -0.6px;}
.order_detail_button { display: flex; justify-content: center; align-items: center; width: 40px; background: #f6f6f6 url("~@/assets/images/mypage/hover_right.png") no-repeat 20px 52%; background-size: 6px 11px;}
/* contents_box5 */
.order_info { display: flex; justify-content: space-between; align-items: center;}
.order_info_left { display: flex; align-items: center;}
.order_info_line { border-right: 1px solid #000; height: 13px; margin: 10px;}
.contents_box5 { padding: 20px 20px 14px;}
.order_info_font1 { font-size: 15px; line-height: 1.6; font-weight: 700;}
.order_info_font2 { font-size: 15px; line-height: 1.6;}
.order_info_font3 { font-size: 15px; line-height: 1.6; color: #11b082;}
/* contents_box6 */
.contents_box6 div { box-sizing: border-box;}
.contents_box6 { width: 780px; height: 90px; border: 1px solid #cccccc; margin: 0 auto; border-radius: 8px; padding: 12px 12px 14px; display: flex; align-items: center;}
.contents_box6_inner { display: flex; align-items: center;}
.contents_box6_inner > p { font-size: 11px; color: #888; font-weight: 400; letter-spacing: -.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.product_info_line { border-right: 1px solid #000; height: 13px; margin: 10px;}
.product_info { padding-left: 10px;}
.product_info > p { font-size: 14px; line-height: 1.6;}
.product_image { width: 60px; height: 60px; background: #fafafa url("~@/assets/images/mypage/product_image.png") center center no-repeat; background-size: contain; border-radius: 10px;}
/* mypage_orderlist1.html > 1:1문의 버튼 */
.mantoman_button_box { padding-left: 400px;}
.mantoman_button { width: 98px; height: 32px; background-color: #ccc; padding: 1px; border: none; border-radius: 10px; color: #fff; display: block; box-sizing: border-box; font-weight: 600; text-align: center; letter-spacing: -.5px; outline: none; cursor: pointer;}
</style>
