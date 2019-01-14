<template>
	<div class="terminal">

		<v-header title='终端'>
			<!--<router-link to="/addterminal" class="iconfont icon-jiahao add" slot="right">-->
		    <!--</router-link>-->
		</v-header>
    <mt-search v-model="name" class="search"  @input="SearchCardname"></mt-search>
		<div class="itemTop">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
				<li v-for="item in items">
					<div class="item">
						<div class="itemLeft">
						   <p><span class="itemText">终端名:</span>{{item.terminalId}}</p>
						   <p><span class="itemText">标识码:</span>{{item.terminalName}}</p>
						   <p>网络状态：
						   	<span :class="item.networkStatus>0?'iconfont icon-normal green':'iconfont icon-normal red'"></span>
						   	<span v-if="item.networkStatus>0">在线</span>
						   	<span v-else>离线</span>
						   </p>
						   <p>同步状态：
						   	<span class="status" v-if="item.syncStatus===1" style="color: green;">已同步</span>
						   	<span class="status" v-else-if="item.syncStatus===0" style="color: #007AFF;">同步中</span>
						   	<span class="status" v-else-if="item.syncStatus===2" style="color: red;">同步失败</span>
						   	<span class="status" v-else style="color: darkgray;">未同步</span>
						   </p>
						</div>
						<div class="itemRight"><img src="../../static/img/iconterminal.png" alt="" /></div>
					</div>
				</li>
			</ul>
      </mt-loadmore>
		</div>
	</div>

</template>

<script>
	import header from '../views/header'
  import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				items:[],
        allLoaded:false,
        pageNumber:1,
        scrollMode:"touch",
        name:'',
        pageSize: 5
			}
		},
		mounted(){
      this.$indicator.open({
        text: '加载中.....',
        spinnerType: 'triple-bounce'
      });
		  setTimeout(()=>{
        this.getList(this.pageNumber)
        this.$indicator.close();
      },300)


		},
		components:{'v-header':header},
		methods:{
      //输入框查询事件
      SearchCardname(){
        this.pageNumber = 1;
        this.$axios.post('/manage/terminal/list?_'+Date.now(),this.$data)
          .then((res)=>{
            this.list = res.data.rows
            this.items = [];
            if(this.list.length>0) {
              this.list.forEach((val, index) => {
                this.items.unshift(val);
              })
            }
          })
          .catch(function(error){
            console.log(error);
            Toast(error)
          })
      },
      //下拉刷新事件
      loadTop(){
         this.pageNumber+=1;
        this.getList(this.pageNumber)
        setTimeout(()=>{
          this.$refs.loadmore.onTopLoaded();
        },1000)
      },
      loadBottom(){
         // console.log('2');
      },
      //请求数据事件
			getList(pageNumber){
				var obj = {
					    "pageNumber": pageNumber,
              "pageSize": 5,
              "rootNode": "0",
              "sortOrder": "asc"
				}
				this.$axios.post('/manage/terminal/list?_'+Date.now(),obj)
				.then((res)=>{
					this.list = res.data.rows
          if(this.list.length>0){
            this.list.forEach((val,index)=>{
              this.items.unshift(val)
            })
            if(this.items.length>5){
              setTimeout(()=>{
                Toast(`已加载${this.list.length}条数据!`)
              },1000)
            }
          }else{
            setTimeout(()=>{
            Toast('没有更多数据了!')
            },1000)
          }

				})
				.catch(function(error){
					console.log(error);
					Toast(error)
				})
			}
		}
	}
</script>

<style>
  .mint-indicator-text{
    color: black;
  }
  .mint-indicator-wrapper{
    background: none;
  }
  .search{
    z-index: 999;
    height: 0.5rem;
    position: fixed;
    width: 100%;
    top: 0.4rem;
  }
	.terminal{
		position: relative;
	}
	.add{
		position: absolute;
		right: 0;
		top: 0;
		width: 0.5rem;
		height: 0.45rem;
		text-align: center;
		line-height: 0.45rem;
		text-decoration: none;
		color: white;
	}
	.icon-jiahao{
		display: block;
	}
	.itemTop{
		margin-top: 0.35rem;
		margin-bottom: 0.55rem;
	}
  .itemTop ul{
    margin-top: 0.5rem;
  }
	.itemTop ul li{
		background-color: white;
		border-bottom: 0.01rem solid #F7F7F7;
	}
	.itemTop ul li .item{
		display: flex;
		justify-content: space-around;
	}
	.itemTop ul li .item .itemLeft{
		width: 80%;
		line-height: 0.24rem;
		box-sizing: border-box;
		padding: 0.05rem;
		font-size: 0.01rem;
	}
	.itemTop ul li .item .itemLeft p{
		font-size: 0.16rem;
	}
	.itemText{
		letter-spacing: 0.075rem;
	}
	.itemTop ul li .item .itemRight{
		width: 20%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.itemTop ul li .item .itemRight img{
		width: 0.6rem;
		height: 0.8rem;
		
	}
	.red{
		color: red;
	}
	.green{
		color: green;
	}
	.status{
		letter-spacing: 0.05rem;
		padding-left: 0.05rem;
	}
</style>
