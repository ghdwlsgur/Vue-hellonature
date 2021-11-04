
<script>
export default {name: 'coupon'}
</script>

<template>
    <div>
        <div class="contents_box1">
            <h2 class="contents_name">쿠폰</h2>                        
        </div> 
        <div class="contents_coupon_box1">
            <input type="text" placeholder="쿠폰번호를 입력해주세요." title="쿠폰번호를 입력해주세요." name="coupon" id="coupon_number">
            <a herf="#" class="contents_coupon_submit" disabled="true">등록</a>
        </div>
        <div class="contents_coupon_box2">
            <label @click="$router.push({ name: 'available_coupon'})" id="coupon_filter_used"><a href="#">사용가능한 쿠폰 1</a></label>                        
            <label @click="$router.push({ name: 'used_coupon'})" id="coupon_filter_available"><a href="#">사용한 쿠폰</a></label>
        </div>
        <router-view id="router-view" />
    </div>
</template>


<style scoped>
/* ---------------------------------------------------------------- mypage_coupon 시작 ----------------------------------------------------------------*/
/* mypage_coupon.html > coupon_box1 */
.contents_coupon_box1 { display: flex; justify-content: space-between; padding: 20px;}
#coupon_number { width: 100%; height: 50px; padding: 0 10px; border-radius: 10px; border: 2px solid #f6f6f6; box-sizing: border-box; background-color: #f6f6f6; letter-spacing: -0.3px; color: #555; caret-color: #1d988e; outline: none; margin-right: 4px;}
.contents_coupon_submit { display: block; width: 100px; height: 50px; border-radius: 8px; background-color: #ccc !important; color: #e2e2e2 !important; text-align: center; box-sizing: border-box; font-weight: 700; line-height: 50px; letter-spacing: -0.6px; outline: none; cursor: pointer}
.contents_coupon_submit:hover { display: block; width: 100px; height: 50px; border-radius: 8px; background-color: #155c65 !important; color: #e2e2e2 !important; text-align: center; box-sizing: border-box; font-weight: 700; line-height: 50px; letter-spacing: -0.6px; outline: none;}
/* mypage_coupon.html > coupon_box2 */
.contents_coupon_box2 { display: flex; padding: 20px; }
#coupon_filter_used, #coupon_filter_available { color: #00B081; font-weight: bold; padding: 7px 0 11px; font-size: 14px; background-color: #fff; text-align: center; box-sizing: border-box; letter-spacing: -0.6px; line-height: 1.73; width: 410px; height: 46px; border-bottom: 1px solid #cccccc;}
#coupon_filter_used:hover, #coupon_filter_available:hover { color: #00B081; font-weight: bold; padding: 7px 0 11px; font-size: 14px; background-color: #fff; text-align: center; box-sizing: border-box; letter-spacing: -0.6px; line-height: 1.73; width: 410px; height: 46px; border-bottom: 3px solid #155c65;}
.coupon_list { display: flex; padding: 20px;}
.coupon_used_image { width: 80px; height: 80px; background-color: #eee; display: inline-block; box-sizing: border-box; border-radius: 8px; text-align: center; color: #ccc; font-weight: 800; font-size: 18px; line-height: 80px; letter-spacing: -0.6px;}
.coupon_available_image { width: 80px; height: 80px; background-color: #ff4a43; display: inline-block; box-sizing: border-box; border-radius: 8px; text-align: center; color: #fff; font-weight: 800; font-size: 18px; line-height: 80px; letter-spacing: -0.6px;}
.coupon_info { align-items: center; padding: 6.5px 0 0 18px;}
.coupon_info > p:nth-child(1) { font-size: 15px; font-weight: 700; line-height: 1.6; letter-spacing: -0.6px; color: #333;}
.coupon_info > p:nth-child(2) { margin-top: 2px; font-size: 12px; font-weight: 400; line-height: 1.5; letter-spacing: -0.5px; color: #555;}
.coupon_info > p:nth-child(3) { margin-top: 5px; font-size: 12px; font-weight: 400; line-height: 1.58; letter-spacing: -0.5px; color: #888;}
</style>
