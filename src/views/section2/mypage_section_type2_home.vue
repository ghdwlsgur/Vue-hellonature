<script>
export default {name: 'mypage_section_type1_home'}
</script>

<template>
    <div class="main">
        <!-- main_leftaside 시작 -->
        <div class="main_leftaside">
            <a href="#" @click="$router.push({ name: 'mypage_center'})"><h2 class="list_name name">고객센터</h2></a>
            <div class="leftaside_list">
                <ul class="list">
                    <label @click="$router.push({ name: 'mypage_faqcenter'})"><li><a href="#">FAQ</a></li></label>
                    <label @click="$router.push({ name: 'mypage_newscenter'})"><li><a href="#">NEWS</a></li></label>
                </ul>                        
            </div>                
        <!-- main_leftaside 끝 -->   
        </div>                             
        <!-- main_contents 시작 -->
        <div class="main_contents">
            <router-view id="router-view" />                               
        <!-- main_contents 끝 --> 
        </div>                 
    <!-- main 끝 -->
    </div>
</template>

<style scoped>
.list li { border: 1px solid #cccccc; margin-bottom: -2px;}
.list_name { font-family: 'netmarbleM'; font-size: 30px; color: #11b082; line-height: 34px; font-weight: 700; letter-spacing: -.5px; padding: 8px 0 33px 1px;}
.list li { background: #fafafa url("~@/assets/images/mypage/right.png") no-repeat 174px 52%; background-size: 6px 11px; font-size: 14px; line-height: 20px; letter-spacing: -.3px; padding: 15px 0 15px 20px;}
.list li a { color: #155c65; font-weight: 600;}
.list li > a:hover, .list li:hover { background: #e2e2e2 url("~@/assets/images/mypage/hover_right.png") no-repeat 174px 52%; background-size: 6px 11px; font-weight: 700; color: #5dab99;}
.list li { height: 50px; display: flex; align-items: center; box-sizing: border-box;}
.main_content div { box-sizing: border-box;}
.list_callcenter { width: 179px; height: 60px; overflow: hidden; display: block; margin-top: 20px; padding: 9px 0 0 21px;; border-radius: 0 100px 100px 0; background: #fafafa url("~@/assets/images/mypage/right.png") no-repeat 174px 52%; background-size: 6px 11px; font-size: 14px; line-height: 20px; letter-spacing: -.3px; border: 1px solid #cccccc;}
.list_callcenter > span:first-child { display: flex; padding-top: 5px; font-size: 14px; font-weight: 600}
.list_callcenter > span:last-child { font-size: 12px;}
.list label { cursor: pointer;}
</style>
