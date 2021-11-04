<script>
export default {name: 'edit1'}
</script>

<template>
<div>
    <div class="contents_box1">
        <h2 class="contents_name">개인 정보 수정</h2>
    </div>
    <!-- check_password_form 시작 -->
    <div class="check_password_form">
        <h3>
            고객님의 소중한 개인 정보 보호를 위해<br>
            비밀번호를 다시 한번 입력해주세요.
        </h3>
        <ul class="form_list">
            <li>
                <h5 class="list_title">이메일</h5>
                <p class="edit1_email_data">redmax45@naver.com</p>
                <input type="hidden" value="redmax45@naver.com" readonly="readonly">
            </li>
            <li>
                <h5 class="list_title">비밀번호</h5>
                <input type="password" name="pwd" id="pwd" placeholder="영문+숫자 10자 이상으로 입력해주세요." msgid="pwd">
                <div class="caution_not_input">
                    비밀번호를 입력해 주세요.
                </div>
            </li>
            <button type="submit" class="button_submit" @click="$router.push({ name:'mypage_edit2'})">확인</button>
        </ul>
    <!-- check_password_form 끝 -->
    </div>
</div>
</template>

<style scoped>
.check_password_form > h3 { font-size: 16px; color: #333; font-weight: 700; line-height: 1.44; letter-spacing: -.8px;}
.check_password_form { display: block; padding: 24px 20px 20px 20px; box-sizing: border-box;}
.form_list { margin-top: 19px; display: block; box-sizing: border-box;}
.list_title { font-size: 14px; color: #333; font-weight: 700; line-height: 1.57; letter-spacing: -.6px;}
.form_list li .edit1_email_data { margin-top: 8px; font-size: 15px; line-height: 1.6; color: #888;}
.form_list li:not(:first-child) { margin-top: 24px;}
.form_list li input[type="password"] { width: 100%; height: 50px; padding: 0 10px; border: 2px solid #f6f6f6; border-radius: 4px; box-sizing: border-box; background-color: #f6f6f6; letter-spacing: -.3px; color: #555; caret-color: #1d988e; outline: none; margin-top: 6px;}
.caution_not_input { color: #c20000; margin-top: 5px; font-size: 12px; line-height: 1.58; letter-spacing: -.5px;}
.button_submit { display: block; width: 100%; background-color: #5dab99; color: #fff; height: 50px; padding: 0 10px; box-sizing: border-box; border-radius: 8px; font-size: 18px; font-weight: 700; text-align: center; letter-spacing: -0.8px; outline: none; border: 1px solid #5dab99; margin-top: 30px; cursor: pointer;}
</style>
