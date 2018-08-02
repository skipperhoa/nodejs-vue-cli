<template>
	<v-layout row wrap>
		
		<v-flex xs12 sm3></v-flex>
		<v-flex xs12 sm6>
			<v-card v-for="(post, index) in video_link" :key="index">
				<div v-html="post.content"></div>
				<v-card-title priamry-title >
					{{post.title}}
				</v-card-title>
				<vue-headful
					:title="post.title"
					description=""
					keywords=""
					image=""
					lang=""
					ogLocale=""
					url=""
				/>
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
	.headline{
		font-size:14px;
	}
</style>
<script>
	export default{
		data:()=>({
			title_tag:"",
			videos:{},
			video_link:{},
			link_current:"",
		}),
		mounted(){
			this.title_tag=this.$route.params.tag;
			this.link_current=this.$route.params.link_url;
			this.get_video_link(this.$route.params.link_url);
			this.get_video_tag(this.$route.params.tag);
		},
		watch: {
		    '$route.params.tag'(newTag, oldTag) {
		 		this.title_tag=newTag;
		 		this.get_video_tag(newTag);
		        console.log(newTag);
		    },
		    '$route.params.link_url'(newLink, oldLink) {
		 		this.link_current=newLink;
		 		this.get_video_link(newLink);
		        console.log(newLink);
		    }
		},
		methods:{
			get_video_link(link){
				this.axios.get("http://localhost:8888/api/videos/link/"+link).then(response=>{
					this.video_link=response.data;
					
				});
			},
			get_video_tag(tag){
				this.axios.get("http://localhost:8888/api/videos/tag/"+tag).then(response=>{
					this.videos=response.data;
					
				});
			}
		}
	}


</script>