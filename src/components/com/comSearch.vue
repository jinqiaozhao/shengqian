<template>
	<div class="search-warp">
		<div class="nav_container">
			<!--<input type="text" v-model="serchVal" @input="searchInput(serchVal)"-->
			<!--placeholder="请输入商品名称" >-->
			<input type="text" v-model="searchVal2" placeholder="" @keyup.enter="searchValFun(searchVal2)" id="test">
			<img src="../../assets/indexSearch.png" @click="searchValFun(searchVal2)" class="com-div-middle-ab" v-show="sShow">
			<div id="p-holder" @click="show_s" v-show="!sShow">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACuklEQVRYR8WW7VEVQRBFLxEoESARKBGAESgRqBEoEagRCBFIBmAEYARqBGoEmoHUoeZSTb+e3dYfz6l6BbU7031uf83uqL8eSdqTdBSO/JD0TdLXvpn7O3caB19Kei3pycJeQC4lvZf0u2HzbssSAEo/SkL5z+EAJzjjx2IP759Lejacnw6QFscMANU4x/E7SecNa4Cw73DAvupEowJ4I+mDpM9D2V+FVJLhqYunaxAZgFBeSPo0nDeEl1sMQUSIxHRFgIeSvo+wk9usHKPkGUgvVOLkrPBA6t4OgGkKI4APELbrYBAwogIULUchetEZQFGUx0U78vyPpP1ZCCIAinEcFeL8ahjgeQSLEChkRgAfZwLQnCcNZRQM4NyjIirkEO8wtDRsAOX9L0kHSS1R4F0UtjEH7AhDXrQVNcFwIT1ry2orES8klS3vhw5tHLNuR/LnwbMGwT5sUbBei3YMQIiogQiAagwRie6qhDgyubhvbRoA5+Q+kjNSmWo5p0swpBLgKKQFUJG7LTsXVpwLOZJtgAdJLT3+ZW2QFEV7IonoeVnIbjWWrW5WKESG/iYNa3cCKfTtGPfyHDFlLRnAajM9z4GgHZcuFnJPq+WBQ1szGxjViNxYMb90AmnIY5MBggNGKuHklmQviihSnvF/hseZw08Ey0EWAVws1eDBAcZQmRdAvMtjmjPUEDdr7K5753OFYwRVZc9KIqSkhR+K4tdRNBzvEPZOB1kG8EwnFfli6Q4j9tEFfEdOLyEbq3rcheecV3f9GowjOc39EgDviARGHo+/KCKXs0W+aT23n89XV/RiDWQHFA/OSYm/F2I144jiJWq51VoQnTGLIVrR3wXAxMVXEtGiE/KwWoXoAFRhJ+TdKzrW1EZh/yvAWhHm91OIbQEAVEJsE6CE2DZAhOCCO/gfAIYgJec3Pe66IV+utmoAAAAASUVORK5CYII="
					 alt="" />
					请输入商品名称</span>
			</div>
		</div>
		<div class="g-tit1"><img src="http://wg.ishopp.club/addons/tiger_newhu/template/mobile/tbgoods/pdd/images/q-icon7.png" /></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'comSearch',
		data() {
			return {
				searchVal2: '',
				sShow: false,
				show: true,
			}
		},
		methods: {
			show_s() {
				this.sShow = true;
				document.getElementById('test').focus();
			},
			searchValFun(val) {
				var obj = {};
				obj.val = val;
				obj.type = '0';
				this.$emit('getSearchValue', obj);
			},
		},
		created() {
			if (this.$route.name == 'goodsItem') {
				this.searchVal2 = m$.sessionStores.get('indexSearch') ? m$.sessionStores.get('indexSearch') : '';
				m$.sessionStores.remove('indexSearch');
			}
		},
	}
</script>
<style scoped lang="less">
	.search-warp {
		line-height: 45px;
		-webkit-background-size: 100% auto;
		-moz-background-size: 100% auto;
		-ms-background-size: 100% auto;
		-o-background-size: 100% auto;
		background-size: 100% auto;
		.g-tit1{
			margin-top: 60px;
			text-align: center;
			height: 40px;
			img{
				height: 18px;
				vertical-align: middle;
			}
		}

		>* {
			vertical-align: middle;
		}
		.nav_container{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 9;
			height: 60px;
			background-image: linear-gradient(to left,  #FDBDBD,#FFAAFF);
		}

		line-height: 0.6rem;
		.com-div-middle-ab{
			margin-left: 5px;
			margin-top: 22px;
		}

		img {
			height: 0.34rem;
			right: .2rem;
			
		}

		input {
			width: 85%;
			margin: 15px 0 0 4%;
			    height: 32px;
			    line-height: 32px;
			    border-radius: 50px;
			    background-color: rgba(255,255,255,.2);	
				font-size: 12px;
				    color: #444;
				    font-family: "微软雅黑","Microsoft Yahei";
				    outline: 0;
					border-width: 0;
		
		}

		#p-holder {
			position: relative;
			top: -0.6rem;

			span {
				display: block;
				font-size: 0.2rem;
				text-align: center;

				img {
					position: absolute;
					left: 1.6rem;
					bottom: 0.13rem;
				}
			}
		}
	}
</style>
