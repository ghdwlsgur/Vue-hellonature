<script>
export default {name: 'orderlist4'}
</script>

<template>
<div>
    <div class="contents_box3">
        <div class="category_name1">
            <h2>좋아요</h2>
        </div>
        <div class="filter_outline">
            <div><a href="#">상품 2</a></div>
            <div><a href="#">브랜드 0</a></div>
            <div><a href="#">매거진 0</a></div>
            <div><a href="#">이벤트 0</a></div>
        </div>
    </div>
    <div class="margin_bottom"></div> 
    <div class="like_list">
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
            <div class="like_box">
                <div class="like_image"></div>
                <p class="like_count">56</p>
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
            <div class="like_box">
                <div class="like_image"></div>
                <p class="like_count">86</p>
            </div>
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
/* contents_box6 */
.contents_box6 div { box-sizing: border-box;}
.contents_box6 { width: 780px; height: 90px; border: 1px solid #cccccc; margin: 0 auto; border-radius: 8px; padding: 12px 12px 14px; display: flex; align-items: center;}
.contents_box6_inner { display: flex; align-items: center;}
.contents_box6_inner > p { font-size: 11px; color: #888; font-weight: 400; letter-spacing: -.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.product_info_line { border-right: 1px solid #000; height: 13px; margin: 10px;}
.product_info { padding-left: 10px;}
.product_info > p { font-size: 14px; line-height: 1.6;}
.product_image { width: 60px; height: 60px; background: #fafafa url("~@/assets/images/mypage/product_image.png") center center no-repeat; background-size: contain; border-radius: 10px;}
/* mypage_orderlist4.html > 좋아요 리스트 */
.like_list { width: 780px; border: 1px solid #cccccc; border-radius: 8px; margin: 0 auto; margin-top: 20px;}
.like_list > div { border: none;}
.like_box { display: flex; align-items: flex-end; padding-left: 420px; height: 60px;}
.like_box > p { width: 50px;}
.like_image { width: 20px; height: 15px; background: #fafafa url("~@/assets/images/mypage/like_red_icon.png") no-repeat; background-size: contain; margin-right: 5px; margin-bottom: 3px;}
.like_count { color: red;}
</style>
