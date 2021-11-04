<script>
export default{name: 'hello_footer'}
</script>

<template>
    <!-- footer 시작 -->   
    <footer>
        <div class="footer_bg">
            <div class="footer_mold">
                <div class="footer_mold_top">
                    <div class="footer_mold_brandname">
                        <span>hellonature</span>
                    </div>
                    <div class="footer_login_wrap">
                        <div class="footer_login_line1"></div>
                        <div class="footer_login_line2"></div>
                        <a href="#" target="_blank"><span>로그인</span></a>
                        <a href="#" target="_blank"><span>채용</span></a>
                        <a href="#" target="_blank"><span>고객센터</span></a>
                    </div>
                </div>
                <div class="footer_info1">사업자 정보 확인</div> 
                <div><a href="#" target="_blank"><img src="@/assets/images/mypage/footer/footer_info1_check.png" alt="사업자 정보 확인" class="footer_info1_check"></a></div>
                <div class="footer_info2_wrap">
                    <a href="#" target="_blank"><span>서비스가입사실확인</span></a>
                    <a href="#" target="_blank"><span>식품안전기준</span></a>
                    <a href="#" target="_blank"><span>이용약관</span></a>
                    <a href="#" target="_blank"><span>개인정보취급방침</span></a>
                    <div class="footer_info_line1"></div>
                    <div class="footer_info_line2"></div>
                    <div class="footer_info_line3"></div>
                </div>
                <div class="footer_info3">COPYRIGHT (C) 2020 HELLONATURE. ALL RIGHTS RESERVED.</div> 
            </div>
        </div>
    <!-- footer 끝 -->
    </footer> 
</template>

<style scoped>
/* --------------------- footer ---------------------*/
.footer_bg { width: 100%; height: 260px;}
.footer_mold { width: 1050px; height: 100%; margin: 0 auto; position: relative;}
/* footer 로고 / 로그인,채용,고객센터 */
.footer_mold_top { width: 1050px; height: 44px; padding-top: 40px;}
.footer_mold_brandname { display: inline-block; align-items: center;}
.footer_mold_brandname span { font-size: 35.5px; font-family: netmarbleM; font-weight: 700; color: #0db081;}
.footer_login_wrap{ width: 200px; float: right; margin-top: 10px; display: flex; justify-content: space-between;}
.footer_login_wrap span { color: #979798; font-size: 16px;}
.footer_login_line1 { position: absolute; border-right: 1.7px solid #979798; width: 2px; height: 16px; margin: 5.5px 0 0 121px;}
.footer_login_line2 { position: absolute; border-right: 1.7px solid #979798; width: 2px; height: 16px; margin: 5.5px 0 0 58px;}
/* footer 사업자정보확인 */
.footer_info1 { margin-top: 23px; font-size: 16px; font-weight: 500; color: #979798; display: inline-block;}
.footer_info1 + div > a, .footer_info1 + div { display: inline-block;}
.footer_info1 + div > a > img { width: 12px; height: 6.5px; padding-bottom: 2px; padding-left: 3px;} 
.footer_info2_wrap { width: 451px; height: 19px; align-items: center; display: flex; justify-content: space-between; margin-top: 18px;}
.footer_info2_wrap a span { font-size: 15px; color: #979798;}
.footer_info3 { margin-top: 18px; font-size: 15px; color: #979798; font-weight: 300;}
.footer_info_line1 { position: absolute; border-right: 1.7px solid #979798; width: 2px; height: 14px; margin: 1px 0 0 134px;}
.footer_info_line2 { position: absolute; border-right: 1.7px solid #979798; width: 2px; height: 14px; margin: 1px 0 0 244px;}
.footer_info_line3 { position: absolute; border-right: 1.7px solid #979798; width: 2px; height: 14px; margin: 1px 0 0 325px;}
/* --------------------- footer ---------------------*/
</style>
