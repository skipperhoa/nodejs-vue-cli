<template>
	<v-layout row wrap>
		
		<!-- tag  -->
		<v-flex xs12 sm12><v-chip color="orange" text-color="white"><v-avatar><v-icon>code</v-icon></v-avatar>{{title_tag}}</v-chip></v-flex>
		<v-flex xs6 sm3 v-for = "(video,index) in videos" :key="index">
		       <v-card class="list-video">
			        <v-card-media
			          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
			          height="200px"
			        ></v-card-media>
			        <v-card-title primary-title>
			          <div>
			            <h3 class="body-2 mb-0"><router-link :to="{name:'Content',params:{tag:video.link_tag,link_url:video.link}}">{{video.title}}</router-link></h3>
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
			videos:{}
		}),
		mounted(){
			this.title_tag=this.$route.params.tag;
			this.get_video_tag(this.$route.params.tag);
		},
		watch: {
		    '$route.params.tag'(newTag, oldTag) {
		 		this.title_tag=newTag;
		 		this.get_video_tag(newTag);
		        console.log(newTag);
		    }
		},
		methods:{
			get_video_tag(tag){
				this.axios.get("http://localhost:8888/api/videos/tag/"+tag).then(response=>{
					this.videos=response.data;
				});
			}
		}
	}


</script>