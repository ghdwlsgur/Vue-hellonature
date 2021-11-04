<script>
export default {name: 'thegreen'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">더그린배송</h2>
        </div>
        <!-- main_contents_container 시작 -->
        <div class="main_contents_container">
            <!-- 더그린배송 타이틀 텍스트 시작 -->
            <div class="thegreen_txt_box">
                <div class="thegreen_txt">
                    <strong>매일 받아도 가뿐한 새벽배송</strong>
                    <h3>더그린배송</h3>
                    <p>
                        처치 곤란한 포장재도 환경에 대한 부담도 없이<br>                            
                        매일의 더 신선한 음신만 담아 전합니다.<br>
                        헬로네이처의 한결 가뿐한 <span>친환경 배송 서비스</span><br>
                        <span>더그린배송</span>을 신청하세요.
                    </p>            
                </div>                    
            </div>
            <!-- 더그린배송 타이틀 텍스트 끝 -->
            <!-- 신청자격 시작 -->
            <div class="thegreen_client_right">
                <p>신청자격</p>
                <p><span>새벽배송</span> 가능 지역 거주 고객님</p>                    
            </div>
            <!-- 신청자격 끝 -->
            <!-- 신청방법 시작 -->
            <div class="thegreen_apply_way">
                <p>신청방법</p>
                <div class="thegreen_request_box">
                    <ul>
                        <li>
                            <span><img src="~@/assets/images/mypage/thegreen_request_img01.png" alt="신청하기 클릭"></span>
                            <p>신청하기 클릭</p>                                    
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span><img src="~@/assets/images/mypage/thegreen_request_img02.png" alt="배송지 선택"></span>
                            <p>배송지 선택</p>                                    
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span><img src="~@/assets/images/mypage/thegreen_request_img03.png" alt="보증금 결제완료"></span>
                            <p>보증금 결제완료</p>                                    
                        </li>
                    </ul>
                </div> 
                <div class="thegreen_link_box">                        
                    <div class="thegreen_link_txt">    
                        <a href="#">더그린배송 알아보기</a>                                                        
                    </div>
                    <div class="link_move">
                        <a href="#" alt="더그린배송 알아보기 화살표"></a>
                    </div>
                </div>   
            <!-- 신청방법 끝 -->                                                      
            </div>
            <button type="submit" class="thegreen_apply_button">신청하기</button>      
        </div>
    </div>
</template>

<style scoped>
.thegreen_txt_box { width: 100%; min-height: 1200px; border: none; vertical-align: top; background: #fafafa url("~@/assets/images/mypage/thegreen_title.png") center center no-repeat; background-size: cover;}
.thegreen_txt_box { text-align: center; margin: 0 auto; display: inline-block;}
.thegreen_txt > strong { display: block; margin-bottom: 10px; font-size: 18px; color: #333; font-weight: 700; line-height: 1.5;}
.thegreen_txt > h3 { margin-bottom: 15px; font-size: 46px; font-weight: 800; line-height: 0.91; letter-spacing: -1.38px; font-family: 'netmarbleM';}
.thegreen_txt { display: block; margin-top: 35px;}
.thegreen_txt > p { font-size: 15px; color: #555; font-weight: 400; line-height: 1.6;}
.thegreen_txt > p > span { font-weight: 500; color: #333;}
.main_contents_container { border-right: 1px solid #ccc; border-left: 1px solid #ccc; border-radius: 8px;}
/* 신청자격 */
.thegreen_client_right { padding: 0 20px; margin-top: 40px;}
.thegreen_client_right > p:first-child { margin-bottom: 10px; font-size: 18px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -.8px;}
.thegreen_client_right > p:last-child { font-size: 15px; color: #555; font-weight: 400; line-height: 1.6;}
.thegreen_client_right > p:last-child > span { color: #00B081;}
/* 신청방법 */
.thegreen_apply_way div { box-sizing: border-box;}
.thegreen_apply_way { margin-top: 40px; padding: 0 20px;}
.thegreen_apply_way > p { margin-bottom: 10px; font-size: 18px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -.8px;}
/* thegreen_request_box */
.thegreen_request_box { display: table; table-layout: fixed; width: 100%;}
.thegreen_request_box ul { position: relative; display: table-cell; text-align: center; vertical-align: middle; box-sizing: border-box;}
.thegreen_request_box ul li span { display: block; background-color: #f1f1f1; width: 90px; height: 90px; border-radius: 45px; margin: 0 auto;}
/* 신청하기 클릭 / 배송지 선택 / 보증금 결제완료 이미지 로고 크기 */
.thegreen_request_box ul:first-child li span img { width: 30px; margin-top: 28px;}
.thegreen_request_box ul:nth-child(2) li span img { width: 29px; margin-top: 28px;}
.thegreen_request_box ul:last-child li span img { width: 39px; margin-top: 30px;}
/* 신청하기 클릭 / 배송지 선택 / 보증금 결제완료 폰트 */
.thegreen_request_box ul li p { font-size: 14px; line-height: 1.6; text-align: center; color: #222; letter-spacing: -.56px; margin-top: 10px;}
/* thegreen_request_box > 화살표 */
.thegreen_request_box ul li:after { content: ''; display: block; background: url("~@/assets/images/mypage/thegreen_right_arrow.png") no-repeat center / 100% auto; background-size: cover; width: 20px; height: 22px; position: relative; bottom: 85px; left: 250px;}
/* thegreen_request_box 마지막 요소의 화살표 숨기기 */
.thegreen_request_box ul:last-child li:after { visibility: hidden;}
/* 더그린배송 알아보기 */
.thegreen_link_box div { box-sizing: border-box;}
.thegreen_link_box { box-sizing: border-box; border-top: 1px solid #ccc; margin-right: -20px; width: 100%; display: flex; justify-content: space-between; padding: 20px; margin-top: 30px;}
.thegreen_link_txt > p { display: block; }
.thegreen_link_txt > a { display: flex; justify-content: space-between; font-size: 17px; color: #333; letter-spacing: -.6px; line-height: 1.73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
/* 신청하기 버튼 */
.thegreen_apply_button { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 50px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99; margin-top: 30px; cursor: pointer;}
.link_move { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/right.png") center center no-repeat; background-size: 6px 11px; cursor: pointer;}
.link_move:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/hover_right.png") center center no-repeat; background-size: 6px 11px; cursor: pointer;}
</style>
