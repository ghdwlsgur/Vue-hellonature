

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
        <div class="contents_box1">
            <h2 class="contents_name" @click="$router.push({ name: 'mypage_section_type1_1'})"><a href="#">주문 내역</a></h2>
        </div>
        <div class="time">
            <p>1997.10.13 (20시 55분)</p>
        </div>
        <div class="contents_box2" id="test2">            
            <ul class="contents_category">                
                <label class="contents_category_label" @click="$router.push({ name: 'mypage_orderlist1'})"><li class="mypage_orderlist1_image"><a href="#">주문배송</a></li></label>
                <label class="contents_category_label" @click="$router.push({ name: 'mypage_orderlist2'})"><li class="mypage_orderlist2_image"><a href="#">취소/교환/반품</a></li></label>
                <label class="contents_category_label" @click="$router.push({ name: 'mypage_orderlist3'})"><li class="mypage_orderlist3_image"><a href="#">자주 구매</a></li></label>
                <label class="contents_category_label" @click="$router.push({ name: 'mypage_orderlist4'})"><li class="mypage_orderlist4_image"><a href="#">좋아요</a></li></label>
            </ul>                        
        </div>                    
        <div class="contents_box3">  
            <router-view id="router-view" /> 
        </div>                
    <!-- main_contents 끝 -->      
    </div>
</div>        
</template>

<style scoped>
 /* ---------------------------------------------------------------- list 시작 ---------------------------------------------------------------- */
/* 주문내역/배송지관리/구매 후기/더그린배송/상품 문의/1:1문의/개인 정보 수정 */
.isRed { background-color: black; color: red;}
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
/* ---------------------------------------------------------------- list 끝 ---------------------------------------------------------------- */
/* main_contents */
.main_content div { box-sizing: border-box;}
.contents_box1 { height: 75px; display: flex; font-size: 14px; letter-spacing: -.5px; font-weight: 700; padding: 8px 0 33px 1px; box-sizing: border-box; border-bottom: 3px solid black;}
.time { padding: 20px 0 20px 0;}
.contents_category { display: flex; justify-content: space-between;}
/*
.contents_category li:nth-child(1) { background: #fafafa url("~@/assets/images/mypage/orderlist1.png") no-repeat 75px 15%; background-size: 45px;}
.contents_category li:nth-child(2) { background: #fafafa url("~@/assets/images/mypage/orderlist2.png") no-repeat 75px 15%; background-size: 45px;}
.contents_category li:nth-child(3) { background: #fafafa url("~@/assets/images/mypage/orderlist3.png") no-repeat 75px 15%; background-size: 45px;}
.contents_category li:nth-child(4) { background: #fafafa url("~@/assets/images/mypage/orderlist4.png") no-repeat 75px 15%; background-size: 45px;}
*/
.ChangeBackground { background-color: #e2e2e2}
.mypage_orderlist1_image { background: #fafafa url("~@/assets/images/mypage/orderlist1.png") no-repeat 75px 15%; background-size: 45px; cursor: pointer;}
.mypage_orderlist2_image { background: #fafafa url("~@/assets/images/mypage/orderlist2.png") no-repeat 75px 15%; background-size: 45px; cursor: pointer;}
.mypage_orderlist3_image { background: #fafafa url("~@/assets/images/mypage/orderlist3.png") no-repeat 75px 15%; background-size: 45px; cursor: pointer;}
.mypage_orderlist4_image { background: #fafafa url("~@/assets/images/mypage/orderlist4.png") no-repeat 75px 15%; background-size: 45px; cursor: pointer;}
.contents_category a { display: flex; justify-content: center; color: black; padding-bottom: 8px;}
.contents_category li a:hover, .contents_category li:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99;}
.contents_category_label { cursor: pointer;}
</style>
