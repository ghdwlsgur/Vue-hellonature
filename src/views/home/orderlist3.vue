<script>
export default{name: 'orderlist3'}
</script>


<template>
<div>
    <div class="contents_box3">
        <div class="category_name1">
            <h2>자주 구매 상품</h2>
        </div>
        <div class="filter_outline">
            <div><a href="#">최근 1개월</a></div>
            <div><a href="#">3개월</a></div>
            <div><a href="#">6개월</a></div>
            <div><a href="#">기간 조회</a></div>
        </div>
    </div>
    <div class="margin_bottom"></div>                               
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
        <div class="favorite_box">
            <p class="favorite_count">1번 구매</p>
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
.ordercancel_button { width: 70px; height: 30px; border-radius:14px; font-size: 14px; font-weight: 700; background-color: #fafafa; border: 1px solid #cccccc;}
/* mypage_orderlist3.html > 구매횟수 */
.favorite_box { padding-left: 420px; height: 60px; display: flex; align-items: start;}
.favorite_count { font-size: 14px; color: #11b082; font-weight: 700; letter-spacing: -.5px;}
/* mypage_orderlist3.html > 필터 아래 공간 확보용 */
.margin_bottom { margin-bottom: 20px; visibility: hidden;}
</style>
