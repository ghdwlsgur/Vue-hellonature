<script>
export default{name: 'mypage_section_type1'}
</script>
<template>
    <div class="main">
        <!-- main_leftaside 시작 -->
        <div class="main_leftaside">
            <a href="#" @click="$router.push({ name:'mypage_section_type1'})"><h2 class="list_name name">마이네이처</h2></a>                    
            <div class="leftaside_list">
                <ul class="list">
                    <label class=contents_category_label @click="$router.push({ name:'mypage_section_type1_home'})"><li><a href="#">주문 내역</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_shipping'})"><li><a href="#">배송지 관리</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_post'})"><li><a href="#">구매 후기</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_thegreen'})"><li><a href="#">더그린배송</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_product_inq'})"><li><a href="#">상품 문의</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_mantoman'})"><li><a href="#">1:1 문의</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_edit1'})"><li><a href="#">개인 정보 수정</a></li></label>
                    <label class=contents_category_label @click="$router.push({ name:'mypage_center'})"><a href="#" class="list_callcenter"><span>도움이 필요하신가요 ?</span><span>고객센터</span></a></label>
                </ul>                
            </div>
        <!-- main_leftaside 끝 -->
        </div>
        <!-- main_contents 시작 -->
        <div class="main_contents">        
            <router-view id="router-view" />     
        <!-- main_contents 끝 -->      
        </div>
    </div>        
</template>

<style scoped>
 /* ---------------------------------------------------------------- list 시작 ---------------------------------------------------------------- */
/* 주문내역/배송지관리/구매 후기/더그린배송/상품 문의/1:1문의/개인 정보 수정 */
.list li { border: 1px solid #cccccc; margin-bottom: -2px;}
.list_name { font-family: 'netmarbleM'; font-size: 30px; color: #11b082; line-height: 34px; font-weight: 700; letter-spacing: -.5px; padding: 8px 0 33px 1px;}
.list li { background: #fafafa url("~@/assets/images/mypage/right.png") no-repeat 174px 52%; background-size: 6px 11px; font-size: 14px; line-height: 20px; letter-spacing: -.3px; padding: 15px 0 15px 20px;}
.list li a { color: #155c65; font-weight: 600;}
.list li a:hover, .list li:hover { background: #e2e2e2 url("~@/assets/images/mypage/hover_right.png") no-repeat 174px 52%; background-size: 6px 11px; font-weight: 700; color: #5dab99;}
.list li { height: 50px; display: flex; align-items: center; box-sizing: border-box;}
/* 헬로캐시/쿠폰/헬로페이/헬로패스 */
.list_callcenter { width: 179px; height: 60px; overflow: hidden; display: block; margin-top: 20px; padding: 9px 0 0 21px;; border-radius: 0 100px 100px 0; background: #fafafa url("~@/assets/images/mypage/right.png") no-repeat 174px 52%; background-size: 6px 11px; font-size: 14px; line-height: 20px; letter-spacing: -.3px; border: 1px solid #cccccc;}
.list_callcenter > span:first-child { display: flex; padding-top: 5px; font-size: 14px; font-weight: 600}
.list_callcenter > span:last-child { font-size: 12px;}
</style>
