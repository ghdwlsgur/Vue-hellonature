<script>
export default {name: 'product_inq'}
</script>



<template>
<div>
    <div class="contents_box1">
        <h2 class="contents_name">상품문의</h2>
    </div>
    <!-- product_inq_home 시작 -->
    <div class="product_inq_home">
        <h3 class="product_inq_title">전체&nbsp;<span>1</span></h3>
        <!-- product_inq_listbox 시작 -->
        <div class="product_inq_listbox">
            <div class="product_box">
                <div class="product_image"></div>
                <div class="product_info">
                    <p>[행복담원] 서귀포 하우스 감귤 500g</p>  
                </div>
            </div>
            <span class="date">2021.08.30 16:01</span>
            <span class="answer_flag">답변대기</span>
            <div class="product_inq_question">
                <p class="inq_title">상품 보관온도는 어느정도가 인가요??</p>
            </div>
            <ul class="inq_button_box">
                <li>
                    <a href="#" @click="$router.push({ name: 'mypage_enroll_product_inq'})">수정</a>
                </li>
                <li>
                    <a href="#">삭제</a>
                </li>
            </ul>
        <!-- product_inq_listbox 끝 -->
        </div>
    <!-- product_inq_home 끝 -->
    </div>     
</div>
</template>

<style>
/* ---------------------------------------------------------------- mypage_product_inq 끝 ---------------------------------------------------------------- */
.product_inq_home { margin-bottom: 50px; box-sizing: border-box; display: block; padding: 26px 20px 0 20px;}
.product_inq_title { margin-bottom: 16px; font-size: 18px; font-weight: 600; line-height: 1.5; letter-spacing: -.6px; color: #333; display: block;}
.product_inq_title > span { display: inline-block; margin-bottom: 1px; font-size: 15px; font-weight: 600; line-height: 1.6; letter-spacing: -.6px; color: #ff4a43; vertical-align: bottom;}
.product_box { width: 100%; height: 90px; margin: 0 auto; border-radius: 8px; padding: 12px 12px 14px; display: flex; align-items: center; box-sizing: border-box; background-color: #f6f6f6; margin-bottom: 18px;}
.product_image { width: 60px; height: 60px; background: #fafafa url("~@/assets/images/mypage/product_image.png") center center no-repeat; background-size: contain; border-radius: 10px;}
.product_inq_info { padding-left: 10px;}
.product_inq_info > p { font-size: 14px; line-height: 1.6; line-height: 1.71; letter-spacing: -.56px;}
.date { font-size: 12px; line-height: 1; letter-spacing: -.55px; color: #888;}
.answer_flag { background-color: #eee; color: #231f20; display: inline-block; height: 22px; width: 57px; margin-left: 9px; border-radius: 12px; font-size: 11px; font-weight: 700; line-height: 22px; letter-spacing: -.5px; text-align: center;}
.product_inq_question { margin-top: 11px; font-size: 15px; line-height: 1.73; letter-spacing: -.6px; color: #555;}
.inq_button_box { display: block; margin: 16px 0 8px; font-size: 0; table-layout: fixed; box-sizing: border-box; text-align: right;}
.inq_button_box li { position: relative; vertical-align: top; display: inline-block;}
.inq_button_box li a { display: block; font-size: 14px; font-weight: 400; line-height: 1.57; color: #555;}
.inq_button_box li + li { padding-left: 17px; margin-left: 16px;}
.inq_button_box li + li::before { content: ''; position: absolute; top: 50%; left: 0; display: block; width: 1px; height: 15px; background-color: #ccc; transform: translate(0, -50%);}
.product_inq_listbox { display: block; border: 1px solid #ccc; padding: 20px; border-radius: 10px;}
.product_info > p { font-size: 14px; line-height: 1.6;}
.product_info { padding-left: 10px;}
/* ---------------------------------------------------------------- mypage_product_inq 끝 ---------------------------------------------------------------- */    
</style>
