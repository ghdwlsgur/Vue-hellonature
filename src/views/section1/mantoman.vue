<script>
export default {name: 'mantoman'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">1:1 문의</h2>                        
        </div>                    
        <div class="mantoman_guide">
            <h5 class="mantoman_title">
                <a href="">FAQ</a>를 확인하시면<br>
                답변을 더 빠르게 찾을 수 있습니다.
            </h5>
        </div>
        <a href="#" class="button_submit_new" @click="$router.push({ name: 'mypage_enroll_mantoman'})">1:1 문의</a>
        <!-- 문의하신 내역 제목 시작 -->
        <div class="mantoman_list">
            <h5>문의하신 내역</h5>
        </div>
        <!-- 문의하신 내역 제목 끝-->
        <!-- 문의내역 리스트 시작 -->
        <div class="mantoman_list_box">                        
            <div class="mantoman_list_txt">                            
                <div class="mantoman_post_date">
                    <p>2021.06.28</p>
                </div>
                <a href="#" class="mantoman_list_category">반품/교환</a>  
                <div class="mantoman_preview">
                    <a href="#" alt="오버뷰 펼치기">
                        <p>반품해주세요 <span>상담종료</span></p>
                    </a>                                
                </div>                                                      
            </div>
            <div class="mantoman_list_overview">
                <a href="#" alt="문의내역"></a>
            </div>                                                
        </div> 
        <!-- 문의내역 리스트 끝 -->
        <!-- 문의내역 오버뷰 시작 -->
        <div class="mantoman_contents_qna">
            <!-- Question -->
            <div class="mantoman_q">
                <p class="q_flag"></p>
                <div>
                    <span>주문번호<div class="mantoman_q_line"></div><span>3000001894057</span></span>
                    <p>[행복담원] 서귀포 하우스 감귤 500g</p><br><br>
                    <p>반품해주세요.</p>
                </div>
            </div>
            <!-- Question -->
            <!-- Answer -->
            <div class="mantoman_a">
                <p class="a_flag"></p>
                <div>
                    <p class="mantoman_a_date">2021.08.06 09:24</p>
                    <p>안녕하세요, 헬로네이처입니다.</p>
                    <p>바쁘신 시간 내어,상담 이용에 감사드립니다.</p><br><br>
                    <p>어떤 문의사항이신지 정확한 확인이 어려워 안내 드리기 어려운 점 양해 부탁드리며,</p>
                    <p>상품에 이상 있을 경우 사진 및 처리방안과 함께 문의 부탁드립니다.</p><br><br>
                    <p>더 필요한 문의사항이 있을 경우 헬로네이처 고객센타(1644-4339),카카오톡,1:1 문의하기를 통해 문의 부탁드립니다.</p><br><br>
                    <p>감사합니다.</p>
                    <p>더 나은 서비스로 보답하겠습니다.</p><br><br>
                    <p>
                        * 헬로네이처 고객센터 상담 시간 안내<br>
                            ▷ 전화 / 카카오톡 : 월요일~일요일 08:00 ~ 18:00<br>
                                (일요일 점심시간 12:00~13:00) <br>
                            ▷ 1:1게시판 : 24시간 접수 가능, 답변 시간 : 월요일~일요일 08:00 ~ 18:00<br>
                                - 1:1게시판의 경우, 운영시간 이후 접수건은 익일 운영시간 내<br>
                            순차적으로 답변해드립니다.<br>
                    </p>                    
                </div>
            </div>
            <!-- Answer -->
        </div>
        <!-- 페이징 시작 -->
        <div class="center_faq_paging">
            <ul>
                <li class="prev_page"><a href="#">이전</a></li>
                <li class="now_page"><span>1</span> / 1</li>
                <li class="next_page"><a href="#">다음</a></li>
            </ul>                     
        </div>   
        <!-- 페이징 끝 -->  
    </div>
</template>

<style scoped>
.mantoman_title, .mantoman_list > h5 { font-size: 16px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -.8px; padding: 20px 0 0 20px; box-sizing: border-box;}
.mantoman_title > a { color: #333;}
.button_submit_new { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 50px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99; margin-top: 30px; cursor: pointer; text-align: center; outline: none; line-height: 45px; margin-bottom: 64px;}
.mantoman_list > h5 { margin-bottom: 18px; line-height: 1.44;}
.mantoman_list { border-bottom: 1px solid #ccc;}
/* 문의하신 내역 오버뷰 */
.mantoman_q_line { border-right: 1px solid #333; width: 7px; height: 10px; margin-right: 7px; display: inline-block;}
.mantoman_list_box div { box-sizing: border-box;}
.mantoman_list_box { box-sizing: border-box; border-bottom: 1px solid #ccc; margin-right: -20px; width: 820px; display: flex; justify-content: space-between; padding: 20px;}
.mantoman_list_txt > p { display: block; }
.mantoman_list_txt > a { display: flex; justify-content: space-between; font-size: 17px; color: #333; letter-spacing: -.6px; line-height: 1.73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.mantoman_list_overview { width: 80px; height: 80px; background: white url("~@/assets/images/mypage/down.png") center center no-repeat; background-size: 20px 13px; cursor: pointer;}
.mantoman_list_overview:hover { width: 80px; height: 80px; background: white url("~@/assets/images/mypage/up.png") center center no-repeat; background-size: 20px 13px; cursor: pointer;}
.mantoman_post_date > p { font-size: 13px; color: #888; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
.mantoman_preview > a > p { margin-top: 4px; padding-right: 80px; font-size: 15px; color: #333; line-height: 1.63; letter-spacing: -.6px;}
.mantoman_preview > a > p > span { color: #fff; background: #333; margin-left: 6px; padding: 2px 10px; border-radius: 11px; font-size: 11px; letter-spacing: -.5px; box-sizing: border-box;}
.mantoman_contents_qna > div { display: block; box-sizing: border-box;}
.mantoman_contents_qna { border-left: 1px solid #ccc; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; margin-top: 20px;}
.mantoman_q { padding: 24px 20px 26px 20px;}
.mantoman_a { padding: 24px 20px 26px 20px;}
.center_faq_paging > ul li { display: inline-block; min-width: 40px; height: 40px; font-size: 14px; color: #888; font-weight: 500; line-height: 40px;}
.center_faq_paging { display: block; margin-top: 28px; text-align: center;}
.prev_page a { background: url("~@/assets/images/mypage/prev_page.png") center center no-repeat; background-size: 12px;}
.next_page a { background: url("~@/assets/images/mypage/next_page.png") center center no-repeat; background-size: 12px;}
.center_faq_paging > ul li > a { display: block; color: transparent;}
.now_page > span { color: #333; font-weight: 700;}
.center_faq_move { box-sizing: border-box; margin-right: -20px; padding: 5px 0 0 20px; width: 820px; text-overflow: ellipsis; overflow: hidden; border-bottom: 1px solid #ccc; margin-bottom: 10px;}
.center_faq_txt { display: flex; justify-content: space-between; padding-right: 20px;}
.center_faq_txt > a { font-size: 15px; color: #555; letter-spacing: -.6px;}
.center_faq_box { border-right: 1px solid #cccccc; border-left: 1px solid #cccccc; border-bottom: 1px solid #cccccc; padding: 24px 20px; margin-bottom: 20px;}
.faq_list_title { font-size: 15px;  color: #555; line-height: 1.6; letter-spacing: -0.6px; font-weight: 700;}
.faq_list_content { font-size: 15px; color: #555; font-weight: 400; line-height: 1.6; letter-spacing: -0.6px; padding: 8px 0 20px 5px;}
.faq_list_title > p { line-height: 1.5; font-weight: 700; font-size: 18pt; color: rgb(0, 176, 129)}
.faq_list_linebox { width: 30px; height: 30px; box-sizing: border-box; padding-top: 15px;}
.faq_list_line { border-bottom: 1px solid #cccccc;}
.faq_list_answer { line-height: 1.5; font-weight: 700; font-size: 18pt; color: #000; margin-bottom: 20px;}
.faq_list_content > p { line-height: 1.8; margin-bottom: 20px;}
.faq_list_content > p > span { margin-bottom: 10px; font-size: 9pt; margin-top: -30px;}
/* ---------------------------------------------------------------- mypage_faq_center 끝 ---------------------------------------------------------------- */
</style>
