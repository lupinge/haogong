<template>
	<div class="nav-bar">
		<div class="bar-left left">
			<a class="return" :class="{active: navBarConfig.returnBool}" onClick="javascript :history.back(-1);">
				<i></i>
				返回
			</a>
			<a class="menu" :class="{active: navBarConfig.menuBool}">
				<ul><li></li><li></li><li></li></ul>
			</a>
		</div>
		<div class="title left">{{navBarConfig.title}}</div>
		<div class="bar-right right">
			<a href="javascript:;" class="skip" :class="{active: navBarConfig.skipBool}">跳过</a>
		</div>
	</div>
</template>

<script>
	require('./nav-bar.scss');
	module.exports = {
		props: ['nav-bar-config'],
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