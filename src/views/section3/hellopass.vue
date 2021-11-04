
<script>
export default {name: 'hellopass'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">헬로패스</h2>                        
        </div> 
        <div class="hellopass_box1">
            <div class="hellopass_box1_inner">
                <p class="hellopass_box1_1">헬로패스</p>
                <p class="hellopass_box1_2">헬로패스 3개월 무료권 <span id="hellopass_flag">이용중</span></p>
                <p class="hellopass_box1_3">종료일 2021.10.20 <span id="hellopass_day">D-58</span></p>                    
            </div>                        
        </div>
        <p id="hellopass_tin">자동 결제를 통해 저렴한 가격으로 동일한 혜택을 받아보세요.</p>
        <div class="hellopass_link_move1">
            <div class="hellopass_link_txt1">
                <a href="#">결제 내역</a>
                <div class="hellocash_help_button overview">
                    <a href="#" alt="헬로패스 결제내역 오버뷰"></a>
                </div>
            </div>                        
        </div>
        <div class="hellopass_overview">
            <div class="hellopass_payment">
                <div class="hellopass_payment_txt">
                    <span class="hellopass_payment_time">2021.07.20</span>
                    <p class="hellopass_title">헬로패스 3개월 무료권</p>
                </div>
                <p class="hellopass_price">0원</p>                            
            </div>
            <div class="allow_table hellopass_payment_table">
                <table>
                    <tbody>
                        <tr>
                            <th>결제일</th>
                            <td>2021.07.20</td>
                        </tr>
                        <tr>
                            <th>결제금액</th>
                            <td>0원</td>
                        </tr>
                        <tr>
                            <th>이용기간</th>
                            <td>2021.07.20-2021.10.20 (93일)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="hellopass_link_move2" id="hellopass_button_before">
            <div class="hellopass_link_txt2">
                <a href="#">헬로패스 해지하기</a>
                <div class="link_move">
                    <a href="#" alt="헬로패스 해지하기"></a>
                </div>
            </div>
        </div>
        <div class="hellopay_button_area">
            <button type="submit" class="hellopay_inputcard_submit" id="hellopass_apply">헬로패스 신청</button>
        </div>
    </div>
</template>



<style scoped>
/* ---------------------------------------------------------------- mypage_hellopass 시작 ---------------------------------------------------------------- */
.hellopass_box1 { border-radius: 8px; padding: 26px 25px 20px 20px; background-color: #f1f6f9; box-sizing: border-box;}
.hellopass_box1 div p { display: block;}
.hellopass_box1_inner { background: url("~@/assets/images/mypage/helloNature.png") right top no-repeat; background-size: 68px 71px;}
.hellopass_box1_1 { font-size: 30px; font-weight: 700; line-height: normal; letter-spacing: -1.2px; color: #333; margin-bottom: 10px;}
.hellopass_box1_2 { font-size: 18px; font-weight: 500; line-height: normal; letter-spacing: -.6px; color: #00B081; margin-bottom: 10px;}
#hellopass_flag { margin-left: 6px; background-color: #00B081; color: #fff; width: 60px; height: 22px; border-radius: 11px; font-size: 12px; font-weight: 500; line-height: 22px; letter-spacing: -.5px; text-align: center; display: inline-block;}
.hellopass_box1_3 { font-size: 15px; font-weight: 400; line-height: 1.83; letter-spacing: -.51px; color: #555;}
#hellopass_day { font-size: 15px; font-weight: 700; line-height: normal; letter-spacing: -.48px; color: #00B081; padding-left: 6px;}
#hellopass_tin { font-size: 15px; padding-left: 20px; margin-top: 16px; margin-bottom: 25px; font-weight: 400; line-height: 1.83; letter-spacing: -.51px; color: #555;}
.hellopass_link_move1, .hellopass_link_move2 { box-sizing: border-box; border-top: 1px solid #ccc; margin-right: -20px; padding: 20px 0 0 20px; width: 820px;}
.hellopass_link_move2 { margin-top: 20px;}
.hellopass_link_txt1, .hellopass_link_txt2 { display: flex; justify-content: space-between; padding-right: 20px;}
.hellopass_link_txt1 > a { font-size: 15px; color: #555; letter-spacing: -.6px;}
.hellopass_link_txt2 > a { width: 820px; display: flex; justify-content: space-between; align-items: center; font-size: 15px; color: #555; letter-spacing: -.6px;}
.hellopass_payment { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;}
.hellopass_payment_time { display: block; font-size: 12px; font-weight: 400; line-height: 1.58; letter-spacing: -.5px; color: #888;}
.hellopass_title { font-size: 15px; line-height: 1.73; letter-spacing: -.6px; color: #333; font-weight: 700;}
.hellopass_price { font-size: 15px; line-height: 1.73; letter-spacing: 1px;}
.hellopass_overview { margin-bottom: 50px; box-sizing: border-box; border-right: 1px solid #ccc; border-left: 1px solid #ccc; border-bottom: 1px solid #ccc; width: 820px; margin: 0 auto; padding: 24px 20px;}
#hellopass_button_before { margin-bottom: 50px;}
.link_move { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/right.png") no-repeat 20px 30%; background-size: 6px 11px; cursor: pointer;}
.link_move:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/hover_right.png") no-repeat 20px 30%; background-size: 6px 11px; cursor: pointer;}
.hellopay_inputcard_submit { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 60px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; line-height: 60px; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99;}
.allow_table { border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; width: 100%; table-layout: fixed; border-collapse: collapse; border-spacing: 0;}
.allow_table tbody tr th { width: 110px; border-right: 1px solid #eee; font-size: 13px; color: #555; font-weight: 500; text-align: center; vertical-align: middle; line-height: 1.38; letter-spacing: -.6px;}
.allow_table th, td { word-wrap: break-word; word-break: break-all; vertical-align: middle;}
.allow_table tbody tr td { padding: 12px 0 12px 16px; font-size: 12px; color: #888; font-weight: 400; line-height: 1.58; letter-spacing: -.5px;}
.hellocash_help_button, .overview { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/down.png") no-repeat 20px 30%; background-size: 11px 6px;}
.hellocash_help_button:hover, .overview:hover { width: 40px; height: 40px; background: white url("~@/assets/images/mypage/up.png") no-repeat 20px 30%; background-size: 11px 6px;}
</style>
