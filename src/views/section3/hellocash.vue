<script>
export default {name: 'hellocash'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">헬로캐시</h2>
        </div>            
        <div class="contents_box4_hellocash">
            <div class="hellocash">
                <p>헬로캐시</p>
            </div>
            <div class="hellocash_won">
                <p>60<span>원</span></p>
            </div>
        </div>               
        <div class="contents_box3">
            <div class="filter_outline">
                <div><a href="#">최근 1개월</a></div>
                <div><a href="#">3개월</a></div>
                <div><a href="#">6개월</a></div>
                <div><a href="#">기간 조회</a></div>
            </div>
        </div>
        <div class="contents_hellocash_box1">
            <div class="hellocash_savingbox1">
                <p>[행복담원] 서귀포 하우스 감귤 500g</p>
                <div class="hellocash_savingbox1_inner">
                    <p>2021.07.29</p>
                    <div class="hellocash_saving_line"></div>
                    <p>3000001894057</p>
                </div>
            </div>
            <div class="hellocash_savingbox2">
                <p>+60<span>원</span></p>
                <p>구매 적립</p>
            </div>
        </div>
        <div class="contents_hellocash_box2">
            <div class="contents_hellocash_box2_inner">                        
                <div class="hellocash_help">
                    <p>헬로캐시 이용안내</p>
                </div>
            </div>
            <div class="hellocash_help_button overview">
                <a href="#" alt="헬로캐시 이용안내 오버뷰"></a>
            </div>
        </div>
        <div class="contents_hellocash_box3">
            <div class="hellocash_help_list1">
                <div class="hellocash_help_list_title1 help_list_title">
                    <p>헬로캐시</p>
                </div>
                <div class="hellocash_help_list_contents1 help_list_content">
                    <p>헬로캐시는 적립캐시와 충전캐시가 합산된 통합 적립금으로 상품 구매 시 단독으로 또는 다른 결제 수단과 함께 사용할 수 있습니다.</p>
                    <p>헬로캐시 사용 시 적립일을 기준으로 순차 차감됩니다. 단, 적립캐시와 충전캐시를 구분하여 사용할 수는 없습니다.</p>
                </div>
            </div>
            <div class="hellocash_help_list2">
                <div class="hellocash_help_list_title2 help_list_title">
                    <p>적립캐시</p>
                </div>
                <div class="hellocash_help_list_contents2 help_list_content">
                    <p>상품 구매, 작성 가능한 후기, 이벤트 참여 등 헬로네이처 서비스를 이용하는 경우 무상으로 지급되는 적립금입니다.</p>                                
                </div>
            </div>
            <div class="hellocash_help_list3">
                <div class="hellocash_help_list_title3 help_list_title">
                    <p>충전캐시</p>
                </div>
                <div class="hellocash_help_list_contents3 help_list_content">
                    <p>적립금 구매, 상품권 구매, 기프트 카드 등 유상으로 충전 및 발급받은 적립금입니다.</p>                                
                    <p>충전캐시 결제 시 현금영수증 발행이 가능합니다. (장바구니 단계 결제 페이지에서 현금영수증 신청 정보 입력)</p>                        
                </div>
            </div>
            <div class="hellocash_help_list4">
                <div class="hellocash_help_list_title4 help_list_title">
                    <p>유의사항</p>
                </div>
                <div class="hellocash_help_list_contents4 help_list_content">
                    <p>헬로캐시의 유효기간은 적립일로부터 1년입니다. 단, 충전캐시의 소멸시효는 5년이므로 유효기간이 경과한 후에도 소멸시효 이내 해당 적립금 사용을 요청할 수 있습니다.</p>                                
                    <p>적립캐시는 현금으로 환불이 불가하고, 충전캐시는 적립일을 기준으로 아직 5년이 경과하지 않은 경우 환불을 요청할 수 있으며, 이 경우 잔액의 90%를 환불 받을 수 있습니다. 자세한 사항은 고객센터(1644-4339)를 통해 문의하시기 바랍니다.</p>                        
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* ---------------------------------------------------------------- mypage_hellocash 시작 ----------------------------------------------------------------*/
/* mypage_hellocash.html */
.contents_box4_hellocash { background-color: #f6f6f6; display: flex; padding: 30px 20px; justify-content: space-between; width: 780px; margin-bottom: 26px;} 
.hellocash { display: flex; align-items: center;}
.hellocash_won { display: flex; align-items: center;}
.hellocash > p { color:#11b082; font-weight: 700; font-size: 18px; line-height: 1.5; letter-spacing: -0.6px;}
.hellocash_won > p { color:#11b082; font-weight: 700; font-size: 24px; line-height: 1.5; letter-spacing: -0.6px;}
.hellocash_won > p > span { font-size: 14px;}
/* mypage_hellocash.html > contents_hellocash_box1 */
.contents_hellocash_box1 div { box-sizing: border-box;}
.contents_hellocash_box1 { display: flex; justify-content: space-between; padding: 20px 0; border-bottom: 1px solid #cccccc;}
.hellocash_savingbox1_inner { display: flex; align-items: center;}
.hellocash_saving_line { border-right: 1px solid #cccccc; padding-right: 8px; margin-right: 8px; height: 12px;}
.hellocash_savingbox1 > p { font-size: 15px; line-height: 1.73; letter-spacing: -0.6px; margin-bottom: 5px;}
.hellocash_savingbox1_inner > p { font-size: 12px; line-height: 1.58; letter-spacing: -0.5px; color:#888;}
.hellocash_savingbox2 > p:first-child { display: flex; justify-content: flex-end; font-size: 18px; font-weight: 700; line-height: 1.44; letter-spacing: -0.8px; margin-right: 2px;}
.hellocash_savingbox2 > p:first-child > span { display: flex; align-items: flex-end; font-size: 14px; font-weight: 700; line-height: 1; letter-spacing: -0.6px; padding-bottom: 4px; padding-left: 2px;}
.hellocash_savingbox2 > p:last-child { font-size: 14px; line-height: 1.57; letter-spacing: -0.6px; color: #888;}
/* mypage_hellocash.html > contents_hellocash_box2 */
.contents_hellocash_box2 div { box-sizing: border-box;}
.contents_hellocash_box2 { border-top: 1px solid #cccccc; margin-top: 30px; padding: 20px; display: flex; justify-content: space-between;}
.hellocash_help_button, .overview { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/down.png") no-repeat 20px 30%; background-size: 11px 6px;}
.hellocash_help_button:hover, .overview:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/up.png") no-repeat 20px 30%; background-size: 11px 6px;}
.hellocash_help > p { font-size: 15px; font-weight: 700;}
/* mypage_hellocash.html > contents_hellocash_box3 */
.contents_hellocash_box3 { border-right: 1px solid #cccccc; border-left: 1px solid #cccccc; border-bottom: 1px solid #cccccc; padding: 24px 20px;}
.help_list_title { font-size: 15px;  color: #555; line-height: 1.6; letter-spacing: -0.6px; font-weight: 700;}
.help_list_content { font-size: 15px; color: #555; font-weight: 400; line-height: 1.6; letter-spacing: -0.6px; padding: 8px 0 20px 5px;}
.help_list_content p:nth-child(n) { margin-bottom: 8px;}
.filter_outline { display: flex; justify-content: space-between;}
.filter_outline div { width: 210px; border: 1px solid #cccccc; margin-right: -4px;}
.filter_outline div > a { display: flex; justify-content: center; padding: 8px;}
.filter_outline div:nth-child(1) { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
.filter_outline div:nth-child(4) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
.filter_outline div:nth-child(1) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99; border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
.filter_outline div:nth-child(4) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99; border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
/* 첫번째요소와 마지막요소를 뺀 나머지에는 hover시 border-radius를 주지 않음 */
.filter_outline div:not(:first-child:last-child) > a:hover { background-color: #e2e2e2; font-weight: 700; color: #5dab99;}
</style>
