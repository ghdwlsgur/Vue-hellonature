

<script>
export default{name: 'hello_header'}
</script>

<template>
<!-- header 시작 -->
    <header>
        <div class="nav_bg">
            <div class="nav_mold">
                <div class="nav_userMenu">
                    <!-- 더그린배송 버튼 시작 -->
                    <label>
                        <a href="#" target="_blank" >
                        <img src="@/assets/images/mypage/header/nav_theGreenDeli.png" alt="더그린배송 아이콘" class="nav_theGreenDeli"></a>
                    </label>
                    <!-- 더그린배송 버튼 끝 -->
                    <!-- 회원가입, 로그인, 고객센터 시작 -->
                    <a href="#" target="_blank"><div class="callcenter_pointer"><img src="@/assets/images/mypage/header/callcenter_pointer.png" alt="고객센터 아래 화살표"></div></a>
                    <div class="login_wrap">
                        <div class="login_wrap_line1"></div>
                        <div class="login_wrap_line2"></div>
                        <a href="#" target="_blank" class="regist"><span>회원가입</span></a>
                        <a href="#" target="_blank" class="login"><span>로그인</span></a>
                        <a href="#" target="_blank" class="callcenter"><span>고객센터</span></a>
                    </div>
                    <!-- 회원가입, 로그인, 고객센터 끝 -->
                    <!-- 헬로네이처 메인 로고 시작 -->
                    <div class="logo_top_wrap"> 
                        <div class="logo_top"><label><a href="#"><img src="@/assets/images/mypage/header/helloNature.png" alt="헬로네이처 메인 로고"></a></label></div>
                    </div>
                    <!-- 헬로네이처 메인 로고 끝 -->
                    <!-- 전체상품 / 추천 / 신상품 / 할인 / 라이프존 / 매거진 카테고리 시작 -->
                    <label><a href="#" target="_blank" class="category_total_img"></a></label>                    
                    <!-- 전체상품 / 추천 / 신상품 / 할인 / 라이프존 / 매거진 카테고리 시작 -->
                    <label><a href="#" target="_blank" class="ico_category"><img src="@/assets/images/mypage/header/ico_category.png" alt="삼선"></a></label>
                    <div class="category">
                        <label><a href="#" target="_blank" class="totalfood"><span>전체 상품</span></a></label><label><a href="#" target="_blank" class="recommend"><span>추천</span></a></label><label><a href="#" target="_blank" class="newfood"><span>신상품</span></a></label><label><a href="#" target="_blank" class="salefood"><span>할인</span></a></label><label><a href="#" target="_blank" class="lifezone"><span>라이프존</span></a></label> <label><a href="#" target="_blank"  class="magazine"><span>매거진</span></a></label>
                    </div>
                    <!-- 전체상품 / 추천 / 신상품 / 할인 / 라이프존 / 매거진 카테고리 끝 -->
                    <!-- 검색 / 마이페이지 / 장바구니 시작 -->
                    <div class="search_my_cart_box">
                        <div class="searchbar_wrap"><input type="text" maxlength="30"><img src="@/assets/images/mypage/header/search_icon.png" alt="돋보기">
                        </div>
                        <label><a href="#" class="icon_mypage" @click="$router.push({ name: 'mypage_section_type1_home'})"><img src="@/assets/images/mypage/header//icon_my.png" alt="마이페이지 아이콘"></a></label>
                        <label><a href="#" target="_blank" class="icon_cart"><img src="@/assets/images/mypage/header/icon_cart.png" alt="장바구니 아이콘"></a></label>
                    </div>
                    <!-- 검색 / 마이페이지 / 장바구니 끝 -->
                </div>
            </div>
        </div>
    <!-- header 끝 -->
    </header>
</template>

<style>
/* --------------------- header ---------------------*/
/* header 상단 배너 */
.top_bnr_bg { width: 100%; height: 42px; background-color: #447d84;}
.top_bnr_mold { width: 1050px; height: 100%; margin: 0 auto;}
.top_bnr_box div:first-child { margin-top: 9px; margin-left: 410px; display: inline-block;}
.top_bnr_box div:last-child { margin-top: 9px; float: right;}
.top_bnr_mold div a span { color: #fff; font-weight: 300; letter-spacing: 0.5px;}
.bnr_arr { width: 7px; height: 12px; margin-left: 24px; font-size: 15px;}
.brn_close { width: 12px; height: 12px;}
/* nav 시작 */
.nav_bg { width: 100%; height: 192px;}
.nav_mold { width: 1050px; height: 100%; margin: 0 auto;}
.nav_userMenu { width: 100%; height: 43px; margin: 0 auto; position: relative;}
/* nav 더그린배송 버튼 */
.nav_theGreenDeli { width: 135px; height: 21.5px; padding-top: 10px; float: left;}
/* nav 회원가입, 로그인, 고객센터  */
.login_wrap label { margin: 0; padding: 0;}
.login_wrap_line1 { position: absolute; border-right: 1.5px solid #d8d8d8; width: 16px; height: 11px; margin: 1px 0 0 40px;}
.login_wrap_line2 { position: absolute; border-right: 1.5px solid #d8d8d8; width: 16px; height: 11px; margin: 1px 0 0 101px;}
.callcenter img { width: 8px; height: 5px; margin-left: 6px; margin-top: -3px; display: inline-block;}
.callcenter_pointer img { float: right; width: 8px; height: 5px; margin-left: 4px; margin-top: 19px;}
.callcenter_pointer img { float: right; width: 8px; height: 5px; margin-left: 4px; margin-top: 19px;}
.regist, .login, .callcenter { margin-top: -3px; font-size: 12px; display: inline-block;}
.regist:link, .regist:visited, .regist:hover, .regist:focus { color: #155c65;}
.login_wrap { margin-top: 14px; width: 174px; height: 13px; float: right; padding: 0; display: flex; justify-content: space-between; position: relative;}
/* nav 헬로네이처 메인 로고 */
.logo_top_wrap { width: 1050px; padding-top: 31.5px;}
.logo_top { display: flex; justify-content: center;}
.logo_top img { width: 94.5px; height: 95px;}
/* nav 카테고리 */
.ico_category { margin-right:13px ; margin-top: 19px; float: left;}
.category { box-sizing: border-box; width:575px; height: 58px; display: flex; align-items: center; font-size: 16px; justify-content: space-between; float: left;}
.totalfood:hover, .recommend:hover, .newfood:hover, .salefood:hover, .lifezone:hover, .magazine:hover { color: #0db081; transition: 0.3s;}
/* nav 검색 / 마이페이지 / 장바구니 */
.search_my_cart_box { float: right; width: 353px; height: 56px; display: flex; align-items: center; justify-content: space-between;}
.search_my_cart_box img { width: 27.5px; height: 26px;}
.icon_mypage img, .icon_cart img { width: 34px; height: 35px;}
.searchbar_wrap { width: 245px; height: 35px; border-radius: 17px; background-color: #f4f5f5; position: relative;}
.searchbar_wrap img { width: 33.5px; height: 35px; margin-left: 15px; position: absolute;}
.searchbar_wrap input[type="text"] { padding:0 10px ; width: 170px; height: 33px;background-color: rgba(255, 255, 255, 0.1); border: 0px solid #fff; color: #333;}
.searchbar_wrap input[type="text"]:focus { border: 0px solid #fff;}
/* --------------------- header ---------------------*/
</style>
