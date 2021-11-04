<script>
export default {name: 'used_coupon'}

</script>

<template>
    <div>
        <div class="coupon_list" id="used_coupon_box1">
            <div class="coupon_used_image">7000원</div>
            <div class="coupon_info">
                <p>[7,000원] 할인쿠폰</p>
                <p>25,000원 이상 구매 시</p>
                <p>2021.08.16-2021.08.25 23:59</p>
            </div>
        </div>
        <div class="coupon_list" id="used_coupon_box2">
            <div class="coupon_used_image">5000원</div>
            <div class="coupon_info">
                <p>첫 구매감사 5,000원 할인쿠폰</p>
                <p>30,000원 이상 구매 시</p>
                <p>2021.08.16-2021.08.27 23:59</p>
            </div>
        </div> 
    </div>    
</template>

<style scoped>
.coupon_list { display: flex; padding: 20px;}
.coupon_used_image { width: 80px; height: 80px; background-color: #eee; display: inline-block; box-sizing: border-box; border-radius: 8px; text-align: center; color: #ccc; font-weight: 800; font-size: 18px; line-height: 80px; letter-spacing: -0.6px;}
.coupon_available_image { width: 80px; height: 80px; background-color: #ff4a43; display: inline-block; box-sizing: border-box; border-radius: 8px; text-align: center; color: #fff; font-weight: 800; font-size: 18px; line-height: 80px; letter-spacing: -0.6px;}
.coupon_info { align-items: center; padding: 6.5px 0 0 18px;}
.coupon_info > p:nth-child(1) { font-size: 15px; font-weight: 700; line-height: 1.6; letter-spacing: -0.6px; color: #333;}
.coupon_info > p:nth-child(2) { margin-top: 2px; font-size: 12px; font-weight: 400; line-height: 1.5; letter-spacing: -0.5px; color: #555;}
.coupon_info > p:nth-child(3) { margin-top: 5px; font-size: 12px; font-weight: 400; line-height: 1.58; letter-spacing: -0.5px; color: #888;}
</style>
