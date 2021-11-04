
<template>
    <div>
        <div class="contents_box1">
            <div class="back_button">
                <a href="#" alt="뒤로 돌아가기"></a>
            </div>
            <h2 class="contents_name">1:1 문의 작성</h2>
        </div>
        <!-- enroll_mantoman_form 시작 -->
        <div class="enroll_mantoman_form">
            <!-- mantoman_form_list 시작 -->
            <div class="mantoman_form_list">
                <ul>
                    <!-- 아이디(이메일) -->
                    <li>
                        <h5>아이디(이메일)</h5>
                        <input type="text" name="" id="mantomanId" class="input_text" value="redmax45@naver.com" disabled>                                                                        
                    </li>     
                    <!-- 아이디(이메일) -->
                    <!-- 이메일 -->                   
                    <li>
                        <h5 class="essbox">이메일<span class="essential">필수</span></h5>
                        <input type="text" name="" id="mantomanEmail" class="input_text" value="redmax45@naver.com" disabled>                                    
                        <a href="#" class="mantoman_email_choose">이메일 선택</a>
                        <div class="caution_not_input">
                            이메일을 입력해주세요.
                        </div>                                    
                    </li>                                
                    <li>
                        <h5 class="essbox">휴대전화<span class="essential">필수</span></h5>
                        <input type="tel" name="" id="mantomanHp" class="input_text" value="01012341234" placeholder="-" maxlength="11" required>
                        <div class="caution_not_input">
                            전화번호를 입력해주세요.
                        </div>
                    </li>
                    <!-- 휴대전화 -->
                    <!-- 문의유형 -->
                    <li>
                        <h5 class="essbox">문의유형<span class="essential">필수</span></h5>
                        <input type="text" name="" id="mantomanCase" class="input_text" placeholder="문의 유형을 선택해 주세요." required>
                        <a href="#" class="mantoman_case_choose"></a>
                        <div class="caution_not_input">
                            문의에 해당되는 유형을 선택해 주세요.
                        </div>
                    </li>
                    <!-- 문의유형 -->
                    <!-- 문의내용 -->
                    <li>
                        <h5>문의내용</h5>
                        <input type="text" name="" id="mantomanTitle" class="input_text" placeholder="제목을 입력해 주세요.">                                    
                        <div class="caution_not_input" style="display: none;">
                            문의 제목을 입력해 주세요.
                        </div>
                        <textarea class="mantoman_textarea" id="mantomanContents" maxlength="2000" placeholder="문의 내용을 입력해 주세요."></textarea>
                        <div class="caution_not_input" style="display: none;">
                            문의 내용을 입력해 주세요.
                        </div>
                    </li>
                    <!-- 문의내용 -->
                    <!-- 사진ㆍ비디오 -->
                    <li>
                        <div class="enroll_post_upload">
                            <h5>사진ㆍ비디오</h5>
                            <ul id="post_upload_file">
                                <li class="input_image">
                                    <a href="#">업로드</a>
                                    <!-- <input type="file" id="file" multiple accept="image/*, video/*">-->
                                    <!-- <input type="hidden" id="fileSave" data-ea="0" data-maxsize="0">-->
                                </li>
                            </ul>
                        </div>
                        <div class="post_upload_guide">
                            <ul>
                                <li>상품이상으로 교환 또는 환불이 필요하신 경우 사진 또는 동영상과 함께 구체적인 내용을 남겨주세요.</li>
                                <li>이미지는 JPEG,JPG,PNG,GIF,AVI,MPG,MPEG,MPE,WMV,ASF,ASX,FLV,RM,MOV,MP4만 가능하며, 개수는 동영상을 포함해 5개, 업로드 용량은 최대 50MB까지 등록 가능합니다.</li>                                            
                            </ul>
                        </div>
                    </li>
                    <!-- 사진ㆍ비디오 -->
                </ul>
            <!-- mantoman_form_list 끝 -->
            </div>                        
        <!-- enroll_mantoman_form 끝 -->
        </div>                   
        <button type="submit" class="button_submit_no_margin">등록</button>
    </div>      
</template>


<style scoped>
/* ---------------------------------------------------------------- mypage_enroll_mantoman 시작 ---------------------------------------------------------------- */
.enroll_mantoman_form { border-right: 1px solid #ccc; border-left: 1px solid #ccc; padding: 24px 20px 20px 20px; display: block; margin: 0 auto; box-sizing: border-box;}
.enroll_mantoman_form div { display: block; box-sizing: border-box;}
.mantoman_form_list > ul > li { margin-top: 24px; position: relative;}
.essbox, .mantoman_form_list > ul > li > h5 { font-size: 14px; color: #333; font-weight: 700; line-height: 1.57; letter-spacing: -.6px;}
.mantoman_form_list > ul:first-child > li:first-child > input[type="text"] { color: #ccc; background-color: #f6f6f6; background-image: none; opacity: 1;}
.mantoman_email_choose { position: absolute; top: 30px; right: 0; height: 50px; padding-right: 30px; border: 0; font-size: 12px; color: #555; line-height: 50px; letter-spacing: -.5px; overflow: hidden; z-index: 1;}
.mantoman_email_choose::after { content: ''; position: absolute; top: 50%; right: 0px; transform: translate(0, -50%); display: block; height: 24px; width: 24px; background: url('~@/assets/images/mypage/mantoman_email_choose.png') center center no-repeat; background-size: 24px;}
.mantoman_case_choose { position: absolute; top: 30px; right: 0; left: 20px; height: 50px; padding-right: 30px; border: 0; font-size: 12px; color: #555; line-height: 50px; letter-spacing: -.5px; overflow: hidden; z-index: 1;}
.mantoman_case_choose::after { content: ''; position: absolute; top: 50%; right: 0px; transform: translate(0, -50%); display: block; height: 40px; width: 40px; background: url('~@/assets/images/mypage/mantoman_email_choose.png') center center no-repeat; background-size: contain;}
.mantoman_textarea { display: block; padding: 9px 10px; height: 160px; overflow: hidden; overflow-y: auto; width: 100%; border: 2px solid #f6f6f6; border-radius: 4px; box-sizing: border-box; background-color: #f6f6f6; letter-spacing: -.3px; color: #555; caret-color: #1d988e; outline: none; margin-top: 12px;}
/* 중앙점 */
.post_upload_guide > ul > li { display: block; position: relative; padding-left: 20px; font-size: 12px; color: #555; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
.post_upload_guide > ul > li::before { content: ''; position: absolute; top: 10px; left: 10px; width: 2px; height: 2px; border-radius: 50%; background-color: #555;}
.back_button { background: white url("~@/assets/images/mypage/back_icon.png") center 1px no-repeat; background-size: contain; width: 30px; height: 30px; cursor: pointer}
.caution_not_input { color: #c20000; margin-top: 5px; font-size: 12px; line-height: 1.58; letter-spacing: -.5px;}
.input_text { margin-top: 6px; width: 100%; height: 50px; padding: 0 10px; border: 2px solid #f6f6f6; border-radius: 4px; box-sizing: border-box; background-color: #f6f6f6; letter-spacing: -.3px; color: #555; caret-color: #1d988e; outline: none;}
.button_submit_no_margin { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 50px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99; cursor: pointer;}
#post_upload_file  { width: 100%; font-size: 0; white-space: nowrap; overflow: hidden; overflow-x: auto; box-sizing: border-box; margin-top: 15px;}
.enroll_post_upload > ul li { position: relative; display: inline-block; width: 88px; height: 88px; border-radius: 4px; border: 1px solid rgba(50,50,50, 0.1); box-sizing: border-box; vertical-align: middle; overflow: hidden;}
.enroll_post_upload > ul li > a { display: block; height: 100%; color: transparent;}
.enroll_post_upload > ul li:first-child > a { background: #eee url("~@/assets/images/mypage/upload_icon.png") center center no-repeat; background-size: 30px;}
.enroll_post_upload > h5 { font-size: 15px; color: #333; font-weight: 700; line-height: 1.57; letter-spacing: -.6px; margin-top: 24px;}
.post_upload_guide > p { font-size: 12px; color: #555; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
.post_upload_guide { margin-top: 12px; padding-right: 20px;}
.warning_list_box > p { font-size: 12px; line-height: 1.58; letter-spacing: -.5px; color: #555;}
.warning_list_box > p:first-child > a { color: #00B081 !important;}
.warning_list_box { margin-top: 24px; padding-left: 9px;}
/* ---------------------------------------------------------------- mypage_enroll_mantoman 끝 ---------------------------------------------------------------- */
</style>

