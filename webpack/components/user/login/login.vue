<template>
<div class="login">
	<div class="input-box top-thin-line-t">
		<div class="tel-box bottom-thin-line-t">
			<i></i>
			手机号
			<input type="tel" class="input-tel" placeholder="请输入手机号" maxlength="11"></input>
		</div>
		<div class="password-box">
			<i></i>
			密 &nbsp 码
			<input type="password" class="input-password" placeholder="请输入密码"></input>
		</div>
	</div>
	<a href="javascript:;" class="btn-login">登录</a>
	<div class="forget-register">
		<router-link :to="{name: 'Forget'}" class="login-forget">忘记密码</router-link>
		<router-link :to="{name: 'Register'}" class="login-register">手机号注册</router-link>
	</div>
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
	require('./login.scss');
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