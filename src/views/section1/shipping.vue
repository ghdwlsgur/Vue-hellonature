<script>
export default{name: 'shipping'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">배송지 관리</h2>
        </div>
        <div class="shipping_box1">
            <div class="shipping_box1_line1">
                <div class="shipping_txt">
                    <span>기본 배송지</span>
                    <span>기본</span>
                    <span>새벽</span>
                </div>
                <div class="shipping_edit_box">
                    <a href="#" class="shipping_edit_button">수정</a>
                </div>
            </div>
            <div class="shipping_box1_line2">
                <span>홍진혁</span>
                <span>010-1234-1234</span>
                <br>
                <span>[06232] 서울특별시 강남구 강남대로 지하 396 (역삼동, 강남역)</span>
            </div>
            <div class="shipping_delivery_detail">
                <span class="shipping_font">문앞</span> <span>비밀번호 없이 출입 가능</span>
            </div>
        </div>
        <div class="shipping_button_box">
            <a href="#">배송지 추가</a>
        </div> 
    </div>
</template>

<style scoped>
.shipping_box1 { padding: 24px 20px; border: 1.5px solid #dddddd; border-radius: 8px; box-sizing: border-box; margin-top: 20px;}
.shipping_box1_line1 { display: flex; justify-content: space-between; align-items: center; width: 100%;} 
.shipping_box1_line2 { display: block; margin-top: 5px;}
.shipping_delivery_detail { border-top: 1px solid #eee; margin-top: 14px; padding-top: 14px; display: block;}
.shipping_txt { display: flex; justify-content: center; align-items: center;}
.shipping_txt span:nth-child(1), .shipping_font { display: inline-block; font-size: 14px; font-weight: 700; line-height: 1.65; letter-spacing: -.6px; color: #333; margin-right: 10px;}
.shipping_txt span:nth-child(2), .shipping_txt span:nth-child(3) { display: inline-block; height: 16px; border: 1px solid #11b082; border-radius: 10px; font-size: 11px; font-weight: 500; letter-spacing: -.5px; color: #fff; padding: 0 10px; margin-right: 5px; background-color: #11b082;}
.shipping_edit_button { display: inline-block; font-size: 12px; font-weight: normal; letter-spacing: -.6px; color: #888;}
.shipping_box1_line2 > span { font-size: 14px; line-height: 1.6; letter-spacing: -.6px; color: #555;}
.shipping_delivery_detail span:nth-child(2) { font-size: 14px; line-height: 1.6; letter-spacing: -.6px; color: #555;}
.shipping_button_box { display: flex; width: 100%; height: 50px; box-sizing: border-box; color: #555; border: 1.5px solid #ddd; cursor: pointer; justify-content: center; align-items: center; margin: 0 auto; border-radius: 10px; margin-top: 20px;}
.shipping_button_box > a { font-weight: 500; font-size: 15px; color: #333; letter-spacing: -.6px; display: flex; justify-content: center; margin: 0 auto;}
.shipping_button_box > a::before { content: ''; width: 21px; height: 21px; background: url("~@/assets/images/mypage/shipping_plus_icon.png") center center no-repeat; display: inline-block; margin-right: 5px; background-size: cover;}
</style>
