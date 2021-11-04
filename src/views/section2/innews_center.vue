<script>
export default {name: 'innews_center'}
</script>

<template>
    <div>
        <div class="contents_box1">                        
            <div class="back_button">
                <a href="#" alt="뒤로 돌아가기" @click="history.back()"></a>
            </div>
            <h2 class="contents_name">NEWS</h2>                        
        </div>
        <!-- 공지사항 제목 시작 -->
        <div class="center_link_move_box" id="center_news1">                        
            <div class="center_link_txt">                            
                <div class="news_upload_date">
                    <p>2021.06.28</p>
                </div>
                <a href="#" class="news_highlight">일요일 새벽배송 운영 안내 (2021.07.04 부터~)</a>                                                        
            </div>
        <!-- 공지사항 제목 끝 -->                        
        </div>
        <!-- 공지사항 내용 시작 -->
        <div class="news_contents_box">
            <p>안녕하세요. 오늘이 맛있는 탐험 헬로네이처입니다.</p>
            <p>2021년 7월 4일(일)부터 헬로네이처가 <span>일요일 새벽배송을 시작합니다.</span></p>
            <p><b>적용일 : 2021년 7월 3일(토) 주문 건부터~</b></p>
            <p><b>대상지역 : 새벽배송 전 지역(더그린배송 포함)</b></p>
            <img src="~@/assets/images/mypage/innews_contents.jpg">
            <br>
            <br>                     
            <p>토요일 밤 여유롭게 주문하면, 일요일 새벽 신선함이 문 앞까지 도착합니다.</p>                        
            <p>일요일에도 눈뜨면 도착!</p>
            <p>헬로네이처와 함께 매일매일 맛있는 탐험하세요.</p>                    
            <p>감사합니다.</p>  
        <!-- 공지사항 내용 끝 -->          
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
.news_contents_box { box-sizing: border-box; width: 100%; border-right: 1px solid #ccc; border-left: 1px solid #ccc; border-bottom: 1px solid #ccc; background-color: #fafafa; padding: 20px;}
.news_contents_box img { margin-top: 20px; max-width: 100%; width: 800px; height: auto;}
.news_contents_box p { margin-bottom: 16px; line-height: 1.8; color: rgb(32, 32, 32); }
.news_contents_box span { color: rgb(0, 176, 129); font-weight: 700;}
.back_button { background: white url("~@/assets/images/mypage/back_icon.png") center 1px no-repeat; background-size: contain; width: 30px; height: 30px; cursor: pointer}
</style>
