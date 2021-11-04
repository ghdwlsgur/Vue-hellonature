<script>
export default {name: 'hellopay'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">헬로페이</h2>                        
        </div> 
        <h5 id="contents_hellopay_h5">등록된 카드</h5>
        <div class="contents_hellopay_inputcard">
            <div class="hellopay_radio_box">
                <div class="hellopay_radio_box_inner">
                    <input type="radio" name="radio_id" id="hellopay_radio"/>
                    <label for="hellopay_radio"></label>
                </div>                        
                <div class="hellopay_card_edit_del">
                    <p>별칭수정</p>
                    <div class="hellopay_line"></div>
                    <p>삭제</p>
                </div>
            </div>
            <div class="hellopay_cardname">
                <input type="text" id="cardname" value="국민" readonly="readonly" maxlength="10">
            </div>
            <div class="hellopay_card_info">
                <span class="hellopay_bankname">KB국민카드</span>
                <span class="hellopay_star"><i>**** **** ****</i> 1234</span>
            </div>                    
        </div>
        <div class="hellopay_button_area">
            <button type="submit" class="hellopay_inputcard_submit" id="regist_card">카드 등록</button>
        </div>
    </div>    
</template>

<style scoped>
/* ---------------------------------------------------------------- mypage_hellopay 시작 ---------------------------------------------------------------- */
#contents_hellopay_h5 { display: block; margin-block-start: 1.67em; margin-block-end: 1.67em; margin-inline-start: 0px; margin-inline-end: 0px; font-size: 16px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -0.8px; margin-bottom: 20px; padding-left: 20px;}
.contents_hellopay_inputcard { padding: 20px 20px 20px; background-color: #f6f6f6; width: 100%; margin-right: 0; border-radius: 10px; box-sizing: border-box; margin-bottom: 100px;}
/* 라디오 버튼 기능 삭제 */
#hellopay_radio { -webkit-appearance: none; -moz-appearance: none; appearance: none; outline: 0; box-shadow:none; border: none;}
/* (라디오 커스터마이징) 체크되기 전 */
#hellopay_radio + label:before { background: url("~@/assets/images/mypage/hellopay_radio_unchecked.png") no-repeat; background-size: contain; content: ''; display: inline-block; width: 30px; height: 30px; border-radius: 100%; vertical-align: middle; cursor: pointer;}
/* (라디오 커스터마이징) 체크된 후 */
#hellopay_radio:checked + label:before { background: url("~@/assets/images/mypage/hellopay_radio_checked.png") no-repeat; background-size: contain; content: ''; display: inline-block; width: 30px; height: 30px; border-radius: 100%; vertical-align: middle; cursor: pointer;}
.hellopay_radio_box { width: 780px; display: flex; justify-content:space-between; margin-bottom: 5px;}
.hellopay_card_edit_del { display: flex; align-items: center; justify-self: center;}
.hellopay_line { border-right: 1px solid #ccc; margin: 10px; width: 1px; height: 11px;}
.hellopay_card_edit_del > p:not(:nth-child(2)) { font-size: 12px; color: #555; font-weight: 400; line-height: normal; letter-spacing: -0.55px;}
#cardname { width: 100%; margin-bottom: 3px; padding-left: 5px; border: none; background-color: transparent; font-size: 18px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -0.67px; caret-color: #1d988e; outline: none;}
.hellopay_bankname { margin-right: 10px; font-size: 14px; color: #333; line-height: 1.57; letter-spacing: -0.6px; padding-left: 5px;}
.hellopay_star { font-size: 13.2px; color: #888; line-height: 1.58; letter-spacing: 0.6px; vertical-align: middle;}
.hellopay_star > i { display: inline-block; font-style: normal; font-size: 15px; vertical-align: middle; margin-bottom: -4px;}
.hellopay_inputcard_submit { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 60px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; line-height: 60px; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99;}
</style>
