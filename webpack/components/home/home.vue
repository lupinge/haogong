<template>
<div class="home">
	<div class="user-msg">
		<img class="user-avatar" :src="'./img/avatar.jpg'">
		<p class="welcome-slogan">欢迎你，<span>{{user.nickName}}</span></p>
	</div>
	<div class="home-content">
		<div class="location">
			十里河瑞安大厦8042
			<i></i>
		</div>
		<ul class="home-nav">
			<li v-for="item in homeNav">
				<router-link :to="{name: 'Login'}">
					<div class="home-icon"><i class=""></i></div>
					<p>{{item.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	require('./home.scss');
	module.exports = {
		data: function(){
			return {
				isLogin: true,
				user: {
					nickName: '阿瓦隆'
				},
				homeNav: [
					{
						title: '考勤',
						msgNum: 0
					},
					{
						title: '任务',
						msgNum: 2
					},
					{
						title: '项目进度',
						msgNum: 0
					},
					{
						title: '我的排班',
						msgNum: 0
					},
					{
						title: '企业招工',
						msgNum: 0
					},
					{
						title: '好工学院',
						msgNum: 0
					},
					{
						title: '绩效档案',
						msgNum: 0
					},
					{
						title: '工资福利',
						msgNum: 0
					}
				]
			};
		},
		methods: {
			initPage: function(){
				if(!this.isLogin){
					window.location.href = '#/init';
				}
			}
		},
		created: function(){
			this.initPage();
		}
	};
</script>