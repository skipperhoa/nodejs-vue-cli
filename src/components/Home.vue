<template>
	<v-layout row wrap>
		<vue-headful
			title="Videos Tutorial"
			description=""
			keywords=""
			image=""
			lang=""
			ogLocale=""
			url=""
		/>
		<v-flex xs12 sm3></v-flex>
		<v-flex xs12 sm6>
			<v-card>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/BKM4V0QXcRA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				<v-card-title priamry-title>
					[NodeJS + VueJS] Register Form + Login + Real Time Chat
			   	<div style="width:100%;padding: 10px 0px;">
						<span class="dangkyyoutube" style="float:left;">
							<div class="g-ytsubscribe" data-channelid="UCzc2LM6Y0M7uobuUgJvOAEA" data-layout="default" data-count="default"></div>
						</span>

						<span style=" float:left; margin-left:5px;"><a href="https://twitter.com/skipperhoa?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @skipperhoa</a></span>

						<span style="float:left;margin-left:5px;">
							<div class="fb-share-button" data-href="" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FHoanguyenit-1470198193093022%2F&amp;src=sdkpreparse">Chia sẻ</a></div>
						</span>
					</div>

				</v-card-title>
			</v-card>
		</v-flex>
		<v-flex xs12 sm3></v-flex>
		<!-- tag nodejs -->
		<v-flex xs12 sm12><v-chip color="orange" text-color="white"><v-avatar><v-icon>code</v-icon></v-avatar>{{title_tag}}</v-chip></v-flex>

			<v-flex xs6 sm3 v-for = "(video,index) in videos" :key="index">
		       <v-card class="list-video">
			        <v-card-media
			          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
			          height="200px"
			        ></v-card-media>
			        <v-card-title primary-title>
			          <div>
			            <h3 class="body-2 mb-0"><router-link :to="{name:'PostContent',params:{tag:video.link_tag,link_url:video.link}}">{{video.title}}</router-link></h3>
			          </div>
			        </v-card-title>
			     </v-card>
      		</v-flex>
      		<v-flex xs12 sm12 offset-sm3> <v-pagination
		      v-model="page"
		      :length="pageShow"
		      @input="next"
		    ></v-pagination></v-flex>
      		

	</v-layout>

</template>
<style>
	iframe{
		width:100%;
	}
	.list-video{
		margin:10px;
		box-sizing:border-box;
	}
	
	h3>a{
		text-decoration-line:none;
		color:#5d5d5d;
		font-size:15px;
	}
	.headline{
		font-size:14px;
	}
</style>
<script>
	export default{
		data:()=>({
			videos:{},
			title_tag:"Videos new",
			page:1,
			pageCurrent:1,
			total:0,
			pageShow:0
		}),
		created(){
			//document.title = 'New Title'  
  	     	//document.head.querySelector('meta[name=description]').content = 'New Description'  
            this.get_page_video(0);
            this.get_all_videos();
        },
		methods:{
			get_page_video(page=0){
				this.axios.get("http://localhost:8888/api/videos/"+this.page).then(response => {
                        this.videos = response.data.results;
                        this.pageCurrent = response.data.page_currents;
                        console.log(this.videos);
                  })
                    .catch(error => {
                        console.log(error)
                    });
			},
			get_all_videos(){
				this.axios.get("http://localhost:8888/api/videos").then(response=>{
					this.total=response.data.length;
					this.pageShow=Math.round(this.total/8);
					console.log(this.pageShow);
				}).catch(error=>{
					console.log(error);
				});		
			 
			},
			next (page) {
			  this.get_page_video(page)
			}
		}
	}


</script>
