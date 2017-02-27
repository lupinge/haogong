<template>
<div class="register">
	<div class="input-box top-thin-line-t">
		<div class="tel-box bottom-thin-line-t">
			<i></i>
			手机号
			<input type="tel" class="input-tel" placeholder="请输入手机号" maxlength="11"></input>
			<div class="get-code ">
				获取验证码
			</div>
		</div>
		<div class="code-box bottom-thin-line-t">
			<i></i>
			验证码
			<input type="text" class="input-code" placeholder="请输入验证码"></input>
		</div>
		<div class="password-box">
			<i></i>
			密 &nbsp 码
			<input type="password" class="input-password" placeholder="请输入密码"></input>
		</div>
	</div>
	<a href="javascript:;" class="btn-login">完成注册</a>
	<div class="social-account">
		<div class="social-acc-title">
			<div class="social-line"></div>
			<div class="social-acc-title-text">社交账号快速登录</div>
		</div>
		<ul class="social-choose">
			<li>
				<a href="javascript:;">
					<i></i>
					<p>微信登录</p>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<i></i>
					<p>QQ登录</p>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	require('./register.scss');
	module.exports = {
		data: function(){
			return {

			};
		},
		methods: {
			initPage: function(){

			}
		},
		created: function(){
			this.initPage();
		}
	};
</script>