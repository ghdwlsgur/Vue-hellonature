<script>
export default {name: 'edit2'}
</script>


<template>
    <div>
        <div class="contents_box1">
            <div class="back_button">
                <a href="#" alt="뒤로 돌아가기"></a>
            </div>
            <h2 class="contents_name">내 정보 관리</h2>
        </div>
        <!-- edit2_myinfo_bigbox 시작 -->
        <div class="edit2_myinfo_bigbox">
            <ul class="edit2_form_list1">
                <li>
                    <h5 class="edit2_form_title">기본 정보</h5>
                    <dl>
                        <dt>이메일</dt>
                        <dd>redmax45@naver.com</dd>
                    </dl>
                    <dl>                                    
                        <dt>이름</dt>
                        <dd>홍진혁</dd>
                    </dl>
                    <dl>
                        <dt>휴대전화번호</dt>
                        <dd id="userPhoneNum">010-1234-1234</dd>
                        <dd class="edit2_form_list_button">
                            <a href="#">변경</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>비밀번호</dt>
                        <dd class="edit2_form_list_button">
                            <a href="#">변경</a>
                        </dd>
                    </dl>
                </li>
            </ul>
            <ul class="edit2_form_list2">
                <li>
                    <h5 class="edit2_form_title">간편 로그인</h5>
                    <dl>
                        <dt>카카오로 로그인</dt> 
                        <dd>
                            <label for="switch_check1" class="switch_label">
                                <div class="slide_checkbox">
                                    <input type="checkbox" id="switch_check1" class="radio_hide">
                                </div>
                                <div class="slider"></div>
                            </label>
                        </dd>                                   
                    </dl>
                    <dl>                                    
                        <dt>네이버로 로그인</dt>
                        <dd>
                            <label for="switch_check1" class="switch_label">
                                <div class="slide_checkbox">
                                    <input type="checkbox" id="switch_check2" class="radio_hide">
                                </div>
                                <div class="slider"></div>
                            </label>
                        </dd>                                    
                    </dl>
                    <dl>
                        <dt>Apple로 로그인</dt>
                        <dd>
                            <label for="switch_check1" class="switch_label">
                                <div class="slide_checkbox">
                                    <input type="checkbox" id="switch_check3" class="radio_hide">
                                </div>
                                <div class="slider"></div>
                            </label>
                        </dd>
                    </dl>
                </li>
            </ul>
            <ul class="edit2_form_list3">
                <li>
                    <h5 class="edit2_form_title">광고 정보 수신</h5>
                    <div class="edit2_form_ad">
                        <p>쿠폰, 특가상품 이벤트 등 혜택/정보 수신</p>
                        <p>
                            이메일/SMS 모두 최초 동의 시 <strong>헬로캐시 1,000원</strong>이 즉시 지급됩니다.
                        </p>
                    </div>
                    <dl>
                        <dt>이메일 수신동의</dt>
                        <dd>
                            <label for="switch_check1" class="switch_label">
                                <div class="slide_checkbox">
                                    <input type="checkbox" id="switch_check3" class="radio_hide">
                                </div>
                                <div class="slider"></div>
                            </label>
                        </dd>
                    </dl>   
                    <dl>
                        <dt>SMS 수신동의</dt>
                        <dd>
                            <label for="switch_check1" class="switch_label">
                                <div class="slide_checkbox">
                                    <input type="checkbox" id="switch_check2" class="radio_hide">
                                </div>
                                <div class="slider"></div>
                            </label>
                        </dd>                                     
                    </dl>     
                    <p>주문 및 배송 관련 SMS는 수신 동의와 상관없이 발송됩니다.</p>                        
                </li>
            </ul>
            <ul class="edit2_form_list4">
                <li>
                    <h5 class="edit2_form_title">회원탈퇴</h5>                                
                    <dl>
                        <dt>
                            회원 탈퇴를 하시면 쿠폰과 적립금 등
                            <br>
                            보유 중인 혜택은 모두 사라집니다.
                        </dt>
                        <dd>
                            <a href="#" class="withdrawal_button">회원탈퇴</a>
                        </dd>
                    </dl>                                         
                </li>
            </ul>  
        </div>    
    </div>
</template>

<style scoped>
.edit2_myinfo_bigbox { display: block; padding: 24px 20px 20px 20px; box-sizing: border-box;}
.edit2_myinfo_bigbox div { box-sizing: border-box; display: block;}
.edit2_form_list1, .edit2_form_list2, .edit2_form_list3, .edit2_form_list4 { border-bottom: 1px solid rgb(146, 134, 134); padding: 0 20px 30px 0; display: block; margin-top: 24px;}
.edit2_form_title { position: relative; margin-bottom: 20px; color: #333; font-size: 18px; font-weight: 700; line-height: 1.44; letter-spacing: -.8px; display: block;}
/* 상위요소 > display: table */
.edit2_myinfo_bigbox .edit2_form_list1 li dl, .edit2_form_list2 li dl, .edit2_form_list3 li dl, .edit2_form_list4 li dl { display: table; table-layout: fixed; width: 100%; padding-bottom: 16px;}
/* 하위요소 > display: table-cell 시작 */
.edit2_myinfo_bigbox .edit2_form_list1 li dl dt { display: table-cell; width: 100px; padding-right: 10px; box-sizing: border-box; line-height: 1.37; color: #555; word-break: keep-all;}
.edit2_form_list2 li dl dt { display: table-cell; width: 170px; padding-right: 10px; box-sizing: border-box; line-height: 1.37; color: #555; word-break: keep-all;}
.edit2_form_list3 li dl dt { display: table-cell; width: 170px; padding-right: 10px; box-sizing: border-box; line-height: 1.37; color: #555; word-break: keep-all;}
.edit2_form_list4 li dl dt { display: table-cell; width: 50%; padding-right: 10px; box-sizing: border-box; line-height: 1.37; color: #555; word-break: keep-all; vertical-align: middle;}
.edit2_myinfo_bigbox .edit2_form_list1 li dl dd, .edit2_form_list2 li dl dd, .edit2_form_list3 li dl dd { display: table-cell; color: #555;}
.edit2_form_list4 li dl dd { text-align: right; vertical-align: middle; display: table-cell; color: #555;}
/* 하위요소 > display: table-cell 끝 */
.edit2_form_list_button { width: 20%; text-align: right;}
.edit2_form_list_button > a { width: 54px; background-color: #ededed; color: #333; height: 30px; padding: 5px 16px; box-sizing: border-box; border-radius: 18px; font-size: 13px; font-weight: 700; text-align: center; line-height: 30px; letter-spacing: -.5px; outline: none;}
.edit2_form_list2 > li > dl:nth-child(2) > dt::before { content: ''; background: url('~@/assets/images/mypage/edit2_kakao.png') center center no-repeat; width: 30px; height: 30px; margin-right: 8px; display: inline-block; vertical-align: -8px; background-size: contain;}
.edit2_form_list2 > li > dl:nth-child(3) > dt::before { content: ''; background: url('~@/assets/images/mypage/edit2_naver.png') center center no-repeat; width: 30px; height: 30px; margin-right: 8px; display: inline-block; vertical-align: -8px; background-size: contain;}
.edit2_form_list2 > li > dl:nth-child(4) > dt::before { content: ''; background: url('~@/assets/images/mypage/edit2_apple.png') center center no-repeat; width: 30px; height: 30px; margin-right: 8px; display: inline-block; vertical-align: -8px; background-size: contain;}
.switch_label { position: relative; display: inline-block; width: 30px; height: 14px; top: .5px; left: 550px; cursor: pointer;}
.slider { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #ccc; border-radius: 7px;}
.slide_checkbox { position: absolute; top: 0; left: 0; width: 30px; height: 14px; margin-right: 0; background: none; cursor: pointer;}
.slide_checkbox + .slider::before { content: ''; position: absolute; width: 20px; height: 20px; left: -2px; top: 50%; transform: translate(0, -50%); border-radius: 50%; background: #e2e2e2; transition: all 0.4s; box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);}
.switch_label:hover > .slider::before { background:#00B081; transform: translate(14px, -50%); transition: all 0.4s; box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);}
.edit2_form_list3 p { display: block; margin-top: -5px; font-size: 12px; font-weight: 400; line-height: 1.58; letter-spacing: -.5px; color: #888;}
.edit2_form_ad { border-radius: 8px; background-color: #e8f6f3; margin: 20px 0; padding: 20px;}
.edit2_form_ad > p:first-child { font-size: 14px; font-weight: 700; line-height: 1.57; letter-spacing: -.6px; color: #555; margin-bottom: 5px;}
.edit2_form_ad > p:last-child { color: #1d988e; font-size: 12px; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
.eidt2_form_list4 li dl dt { font-size: 15px; font-weight: 400; color: #333; letter-spacing: -.6px; line-height: 1.73;}
.withdrawal_button { min-width: auto; height: 36px; padding: 0 14px; border-radius: 8px; background-color: #11b082; font-size: 14px; color: #fff; font-weight: 500; line-height: 36px; padding: 10px;}
</style>
