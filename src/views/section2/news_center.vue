
<script>
export default {name: 'news_center'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">NEWS</h2>                        
        </div>
        <div class="center_link_move_box" id="center_news1">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.06.28</p>
                </div>
                <a href="#" class="news_highlight" @click="$router.push({name: 'mypage_innews'})">일요일 새벽배송 운영 안내 (2021.07.04 부터~)</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news1"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news2">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.06.21</p>
                </div>
                <a href="#" class="news_highlight">배송비 인상 안내</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news2"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news3">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.03.24</p>
                </div>
                <a href="#" class="news_highlight">주문확인서 미동봉 안내의 건</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news3"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news4">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.08.23</p>
                </div>
                <a href="#">더비비고 포토후기 이벤트 당첨 안내</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news4"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news5">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.08.18</p>
                </div>
                <a href="#">2021 더그린배송 2주년 이벤트 당첨 안내</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news5"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news6">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.08.13</p>
                </div>
                <a href="#">광복절(공휴일) 배송 안내</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news6"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news7">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.08.07</p>
                </div>
                <a href="#">씨티은행 결제 일시중단 안내 (2021.08.08 / 08.15 01:00 ~ 09:00)</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news7"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news8">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.07.16</p>
                </div>
                <a href="#">수협은행 결제 일시중단 안내 (2021.07.17 00:30 ~ 01:30)</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news8"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news9">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.05.24</p>
                </div>
                <a href="#">개인정보처리방침 변경 안내 (2021.05.31)</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news9"></a>
            </div>
        </div>
        <div class="center_link_move_box" id="center_news10">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.05.17</p>
                </div>
                <a href="#">석가탄신일(공휴일) 배송 안내</a>                                                        
            </div>
            <div class="link_move">
                <a href="#" alt="news10"></a>
            </div>
        </div>
        <!-- 페이징 시작 -->
        <div class="center_faq_paging">
            <ul>
                <li class="prev_page"><a href="#">이전</a></li>
                <li class="now_page"><span>1</span> / 47</li>
                <li class="next_page"><a href="#">다음</a></li>
            </ul>
        <!-- 페이징 끝 -->    
        </div> 
    </div>
</template>

<style scoped>
.center_link_move_box div { box-sizing: border-box;}
.center_link_move_box { box-sizing: border-box; border-bottom: 1px solid #ccc; margin-right: -20px; width: 820px; display: flex; justify-content: space-between; padding: 20px;}
.center_link_txt > p { display: block; }
.center_link_txt > a { display: flex; justify-content: space-between; font-size: 17px; color: #333; letter-spacing: -.6px; line-height: 1.73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.link_move { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/right.png") center center no-repeat; background-size: 6px 11px; cursor: pointer;}
.link_move:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/hover_right.png") center center no-repeat; background-size: 6px 11px; cursor: pointer;}
.news_upload_date > p { font-size: 13px; color: #888; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
/* 상단 강조 공지사항 글자 font-weight: 700 */
.news_highlight { font-size: 17px; color: #333; letter-spacing: -.6px; line-height: 1.73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 700;}
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
</style>
