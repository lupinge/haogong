<template>
	<div class="init">
		<div class="slider-box">
			<router-link :to="{name: 'Home'}">
				<img :src="'../components/user/init/img/slider1.jpg'">
			</router-link>
		</div>
		<router-link :to="{name: 'Login'}" class="init-btn init-login">登录</router-link>
		<router-link :to="{name: 'Register'}" class="init-btn init-register">注册</router-link>
		<p class="compay-try">企业试用：<a href="tel:4008101199">4008101199</a></p>
	</div>
</template>

<script>
	require('./init.scss');
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