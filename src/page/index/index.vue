<template>
	<div id="box">
		<com-search class="indexSearch com-div-center-ab" @getSearchValue='getSearchVal'></com-search>
		<div class="goods-wrap">
			<div style="" v-show="nopro" class="nopro-box">
				<i>对不起，没有找到该类商品。</i>
			</div>
			<ul class="goods-list" id="goods_box">
				<li>
					<div class="con">
						<div class="pic">
							<a href="">
								<img src="https://t00img.yangkeduo.com/goods/images/2019-11-26/278d5bd472d8e142a2c014ee092dd51f.jpeg" alt="">
								<span class="p-price">预估佣金：￥4555</span>
							</a>
						</div>
						<div class="txt">
							<h5><a href=""><em></em>冬季大码宽松收腰大毛 领棉衣</a></h5>
							<p class="p1"><span class="tm-price">天猫价 ￥199</span><span class="sale-num">月销 41万</span></p>
							<p class="p2"><span class="tk-price">券后￥<em>49.9</em></span><a href="" class="ticket">10元券</a></p>
						</div>
					</div>
				</li>
				<li>
					<div class="con">
						<div class="pic">
							<a href="">
								<img src="https://t00img.yangkeduo.com/goods/images/2019-11-26/278d5bd472d8e142a2c014ee092dd51f.jpeg" alt="">
								<span class="p-price">预估佣金：￥4555</span>
							</a>
						</div>
						<div class="txt">
							<h5><a href=""><em></em>冬季大码宽松收腰大毛 领棉衣</a></h5>
							<p class="p1"><span class="tm-price">天猫价 ￥199</span><span class="sale-num">月销 41万</span></p>
							<p class="p2"><span class="tk-price">券后￥<em>49.9</em></span><a href="" class="ticket">10元券</a></p>
						</div>
					</div>
				</li>
				<li>
					<div class="con">
						<div class="pic">
							<a href="">
								<img src="https://t00img.yangkeduo.com/goods/images/2019-11-26/278d5bd472d8e142a2c014ee092dd51f.jpeg" alt="">
								<span class="p-price">预估佣金：￥4555</span>
							</a>
						</div>
						<div class="txt">
							<h5><a href=""><em></em>冬季大码宽松收腰大毛 领棉衣</a></h5>
							<p class="p1"><span class="tm-price">天猫价 ￥199</span><span class="sale-num">月销 41万</span></p>
							<p class="p2"><span class="tk-price">券后￥<em>49.9</em></span><a href="" class="ticket">10元券</a></p>
						</div>
					</div>
				</li>
				<li>
					<div class="con">
						<div class="pic">
							<a href="">
								<img src="https://t00img.yangkeduo.com/goods/images/2019-11-26/278d5bd472d8e142a2c014ee092dd51f.jpeg" alt="">
								<span class="p-price">预估佣金：￥4555</span>
							</a>
						</div>
						<div class="txt">
							<h5><a href=""><em></em>冬季大码宽松收腰大毛 领棉衣</a></h5>
							<p class="p1"><span class="tm-price">天猫价 ￥199</span><span class="sale-num">月销 41万</span></p>
							<p class="p2"><span class="tk-price">券后￥<em>49.9</em></span><a href="" class="ticket">10元券</a></p>
						</div>
					</div>
				</li>
				<li>
					<div class="con">
						<div class="pic">
							<a href="">
								<img src="https://t00img.yangkeduo.com/goods/images/2019-11-26/278d5bd472d8e142a2c014ee092dd51f.jpeg" alt="">
								<span class="p-price">预估佣金：￥4555</span>
							</a>
						</div>
						<div class="txt">
							<h5><a href=""><em></em>冬季大码宽松收腰大毛 领棉衣</a></h5>
							<p class="p1"><span class="tm-price">天猫价 ￥199</span><span class="sale-num">月销 41万</span></p>
							<p class="p2"><span class="tk-price">券后￥<em>49.9</em></span><a href="" class="ticket">10元券</a></p>
						</div>
					</div>
				</li>
			</ul>

			<!--提示下拉框-->
			<div id="info" v-show="binfo" class="bin-fo">
				下拉加载更多...
			</div>
		</div>


	</div>
</template>

<script>
	import comSearch from '@/components/com/comSearch.vue';
	//import brand from '@/components/com/brand.vue';
	//import comFooter from "@/components/com/comfooter.vue"
	export default {
		name: 'index',
		components: {
			comSearch
		},
		data() {
			return {
				msg: 'Welcome to Your hello',
				nopro: false,
				binfo: true

			}
		},
		methods: {
			getSearchVal(val) {
				if (val.type == 0) {
					this.$router.push('/goodsItem/0');
				}
				if (m$.sessionStores.get('noPro') == '0') {
					this.nopro = false;
					m$.sessionStores.remove('noPro')
				}
				this.searchVal = val.val;
				this.getData(this.$route.params.id, val.type)
			},
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.goods-wrap {
		overflow: hidden;
		margin-left: -5px;

		.goods-list:after {
			content: '';
			display: block;
			clear: both;
			height: 0;
			visibility: hidden;

		}

		.goods-list {
			li {
				float: left;
				width: 50%;
				margin-bottom: 5px;

				.con {
					margin-left: 5px;

					.txt {
						background-color: #fff;
						padding: 6px 9px 7px 8px;
						font-size: 12px;
						height: 100px;
						overflow: hidden;
.tm-price,.tk-price {
							float: left;
						}

						.sale-num,.ticket {
							float: right;
						}
						h5 {
							font-weight: normal;

							a {
								display: block;
								font-size: 13px;
								color: #333;
								line-height: 1.4em;
								max-height: 2.8em;
								overflow: hidden;
								-ms-text-overflow: ellipsis;
								text-overflow: ellipsis;
								margin-bottom: 3px;
							}
						}

						.p1 {
							color: #999;
							line-height: 1.83em;
							overflow: hidden;
							font-size: 12px;
							padding: 0;
						}

						.p2 {
							color: #ff5000;
							overflow: hidden;
							margin-top: 3px;
							.ticket{
								background: url(../../assets/i-syj.png) center center no-repeat;
								    height: 20px;
								    width: 59px;
								    -webkit-background-size: cover;
								    background-size: cover;
								    color: #fff;
								    display: block;
								    line-height: 20px;
								    text-align: center;
								    margin-top: 2px;
							}
						}
					}

					.pic {
						width: 100%;
						overflow: hidden;

						a {
							display: block;
							position: relative;
							padding-top: 100%;
							height: 0;

							img {
								display: block;
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;

								.p-price {
									background: #ccc;
									height: 18px;
									position: absolute;
									left: 0;
									bottom: 0;
									width: 100%;
									-webkit-background-size: cover;
									background-size: cover;
									text-align: center;
									color: #fff;
									font-size: 12px;
								}
							}
						}
					}
				}
			}
		}

		.nopro-box {

			font-size: 0.2rem;
			text-align: center;
		}

		.bin-fo {

			font-size: 0.2rem;
			text-align: center;
		}
	}
</style>
