

<template>
    <div>
        <div class="contents_box1_center">
            <p><span id="center_visitor">홍진혁님</span></p>
            <h2 class="contents_name">무엇을 도와드릴까요?<span>매일<div class="center_operation_line"></div>08:00-18:00</span></h2>                        
        </div> 
        <ul class="form_area center_form_area"> 
            <li id="connect_tel"><a href="tel:1644-4439">전화문의</a></li>
            <li><a href="#">1:1문의</a></li>
            <li><a href="#">카톡으로 상담하기</a></li>
        </ul>  
    </div>    
</template>

<style scoped>
.red { color: red;}
.contents_box1_center { box-sizing: border-box; height: 75px; font-size: 14px; letter-spacing: -.5px; font-weight: 700; box-sizing: border-box; border-bottom: 3px solid black;}
#center_visitor { font-size: 22px; color: #333; font-weight: 400; letter-spacing: -1.1px; line-height: 1.55;}
.center_operation_line { display: inline-flex; border-right: 1px solid #ccc; height: 7px; align-items: center; margin-right: 5px; margin-left: 5px;}
.contents_name > span { font-size: 13px; font-weight: 500; letter-spacing: -.6px; color: #555; margin-left: 10px;}
.center_form_area { display: table; width: 100%; table-layout: fixed; box-sizing: border-box; margin-top: 20px;}
.center_form_area > li { position: relative; display: table-cell; vertical-align: middle;}
.center_form_area li:not(:last-child) > a { height: 50px; font-size: 16px; color: #333; font-weight: 500; line-height: 50px; letter-spacing: -.6px; border-radius: 6px; background-color: #f2f2f2; display: flex; justify-content: center; align-items: center; margin-right: 5px;}
.center_form_area li:last-child > a { height: 50px; font-size: 16px; color: #333; font-weight: 500; line-height: 50px; letter-spacing: -.6px; border-radius: 6px; background-color: #fae54d; display: flex; justify-content: center; align-items: center;}
.center_form_area > li > a::before { content: ''; display: flex; width: 20px; height: 20px; margin-right: 5px; justify-content: center; align-items: center;}
.center_form_area li:first-child > a::before { background: url("~@/assets/images/mypage/center_call.png") center center no-repeat; background-size: 40px;}
.center_form_area li:nth-child(2) > a::before { background: url("~@/assets/images/mypage/center_mantoman.png") center center no-repeat; background-size: contain;}
.center_form_area li:last-child > a::before { background: url("~@/assets/images/mypage/center_kakao.png") center center no-repeat; background-size: contain;}
</style>
