<script>
export default {name: 'post'}
</script>


<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">구매후기</h2>
        </div>
        <div class="contents_post_box">
            <a href="#" id="post_filter_available">작성 가능한 후기 1</a>
            <a href="#" id="post_filter_used">작성한 후기 0</a>
        </div>
        <div class="contents_box6">
            <div class="product_image"></div>
            <div class="product_info_post">                            
                <div class="product_post_firstline">
                    <p>[행복담원] 서귀포 하우스 감귤 500g</p>
                </div>
                <div class="contents_box6_inner">
                    <p>500g</p>
                    <div class="product_post_line"></div>
                    <p>1개</p>
                </div>
                <div class="product_post_lastline">
                    <p>배송완료</p>
                    <p>2021.07.29</p>
                </div> 
            </div>
            <div class="post_button_box">                            
                <a href="#" class="post_delete_button">삭제</a>
                <input type="button" value="후기작성" class="post_button">
            </div>
        </div>
    </div>
</template>

<style scoped>
.contents_post_box { display: flex; padding: 20px; }
#post_filter_used, #post_filter_available { color: #00B081; font-weight: bold; padding: 7px 0 11px; font-size: 14px; background-color: #fff; text-align: center; box-sizing: border-box; letter-spacing: -0.6px; line-height: 1.73; width: 410px; height: 46px; border-bottom: 1px solid #cccccc;}
#post_filter_used:hover, #post_filter_available:hover { color: #00B081; font-weight: bold; padding: 7px 0 11px; font-size: 14px; background-color: #fff; text-align: center; box-sizing: border-box; letter-spacing: -0.6px; line-height: 1.73; width: 410px; height: 46px; border-bottom: 3px solid #155c65;}
.post_button_box { padding-left: 400px;}
.post_button { width: 98px; height: 32px; background-color: #ccc; padding: 1px; border: none; border-radius: 10px; color: #fff; display: block; box-sizing: border-box; font-weight: 600; text-align: center; letter-spacing: -.5px; outline: none; cursor: pointer; margin-top: 30px;}
.product_post_line { border-right: 1px solid #888; height: 8px; margin: 5px; margin: 7px;}
.product_info_post { padding-left: 10px;}
.product_post_firstline > p { font-size: 14px; line-height: 1.6;}
.contents_box6_inner > p, .product_post_lastline p { font-size: 11px; color: #888; font-weight: 400; letter-spacing: -.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.product_post_lastline { display: flex; justify-content: start; align-items: center;}
.product_post_lastline p:first-child { margin-right: 10px;}
.post_delete_button { width: 20px; height: 20px; background: url("~@/assets/images/mypage/post_cancel_icon.png") center center no-repeat; background-size: 20px; color:transparent; display: block; position: relative; top: 3px; left: 80px;}
.contents_box6 div { box-sizing: border-box;}
.contents_box6 { width: 780px; height: 90px; border: 1px solid #cccccc; margin: 0 auto; border-radius: 8px; padding: 12px 12px 14px; display: flex; align-items: center;}
.contents_box6_inner { display: flex; align-items: center;}
.product_info_line { border-right: 1px solid #000; height: 13px; margin: 10px;}
.product_info { padding-left: 10px;}
.product_info > p { font-size: 14px; line-height: 1.6;}
.product_image { width: 60px; height: 60px; background: #fafafa url("~@/assets/images/mypage/product_image.png") center center no-repeat; background-size: contain; border-radius: 10px;}
.contents_box6_inner > p, .product_post_lastline p { font-size: 11px; color: #888; font-weight: 400; letter-spacing: -.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
</style>
