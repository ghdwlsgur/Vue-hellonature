<script>
export default {name: 'hello_section'}
</script>

<template>   
        <!-- section 시작 -->
        <div class="section" id="section_article">
            <div class="section_mypage">
                <div class="section_mypage_div">
                    <div class="section_mypage_hello">
                        <div class="hello_info">
                            <p>반가워요 <a href="#"><span class="name">홍진혁님</span></a></p>
                        </div>
                        <div class="hello_percent">
                            <p><span>적립 1%</span></p>
                        </div>
                    </div>
                    <div class="section_mypage_hellocash">
                        <div class="hellocash">
                            <a href="#" @click="$router.push({ name: 'mypage_hellocash'})"><p class="section_name">헬로캐시</p></a>
                        </div>
                        <div class="hellocash_total">
                            <p>563원</p>
                        </div>                                    
                    </div>
                    <div class="section_mypage_coupon">
                        <div class="coupon">
                            <a href="#" @click="$router.push({ name: 'mypage_coupon'})"><p class="section_name">쿠폰</p></a>
                        </div>
                        <div class="coupon_total">
                            <p>2개</p>
                        </div>
                    </div>
                    <div class="section_mypage_hellopay">
                        <div class="hellopay">
                            <a href="#" @click="$router.push({ name: 'mypage_hellopay'})"><p class="section_name">헬로페이</p></a>
                        </div>
                        <div class="hellopay_button">
                            <input type="button" value="미등록" name="hellopay" class="section_bar">
                        </div>
                    </div>
                    <div class="section_mypage_hellopass">
                        <div class="hellopass">
                            <a href="#" @click="$router.push({ name: 'mypage_hellopass'})"><p class="section_name">헬로패스</p></a>
                        </div>
                        <div class="hellopass_button">
                            <input type="button" value="이용중" name="hellopay" class="section_bar">
                        </div>
                    </div>
                </div>
                <div class="section_banner">
                    <a href="#"><img src="@/assets/images/mypage/banner/section_banner.png"></a>
                </div>
            </div>
        <!-- section 끝 -->
        </div>    
</template>


<style scoped>
/* --------------------- section ---------------------*/
.section { width: 100%; height: 278px; background-color:#e2e2e2; padding: 50px 0;}
.section_mypage { width: 1050px; height: 278px; margin: 0 auto; background-color: #e2e2e2;}
.section_banner { height: 60px; margin-top: 20px;}
.section_mypage_div { height: 198px; display: flex;}
.section_mypage_hello { width: 400px; padding: 30px;}
.section_mypage_div > div { background-color: white;}
.name { font-size: 30px; line-height: 34px; font-weight: 700; letter-spacing: -.5px; padding: 8px 0 33px 1px;}
.hello_info > p { font-size: 30px; line-height: 34px; letter-spacing: -.5px; padding: 8px 0 33px 1px;}
.section_name { font-size: 20px; font-weight: 700;}
.section_bar { width: 80px; height: 35px; border: 1px solid #5dab99; border-radius: 20px; background-color: #11b082; color: #e2e2e2; font-weight: 700; font-size: 15px; outline: none;}
.hellopay_button, .hellopass_button { box-sizing: border-box; padding-top: 48.33px;}
.hellocash_total, .coupon_total { box-sizing: border-box; padding-top: 48.33px;}
/* section_mypage_div > div 처음부터 4번째 요소까지  */
.section_mypage_div div:nth-child(-n+4) { margin-right: 4px;}
/* section_mypage_div > div 첫번째빼고 모든 요소 */
.section_mypage_div > div:not(:first-child) { width: 158.5px; padding: 26px 0 30px 30px;}
/* --------------------- section ---------------------*/
</style>
