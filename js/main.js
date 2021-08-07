var app = new Vue({
    el:'#app',
    data:{
        query:'',
        musicList:[],
        musicUrl:'',
        // artistsName:'',
        picUrl:'',
        hotC:[],
        cmtBg:'',
        // isPlaying:false
        vidUrl:'',
        showM:false
    },
    methods: {
        searchMusic: function(){
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then(res => {
                this.musicList = res.data.result.songs;
                // this.artists = res.data.result.songs[0].artists[0].name;
              
            })
            .catch(err => {
                console.error(err); 
            });


        },
        playMusic: function(id) {
            axios.get('https://autumnfish.cn/song/url?id=' + id)
            .then(res => {
                this.musicUrl = res.data.data[0].url;
            })
            .catch(err => {
                console.error(err); 
            });
            
            axios.get('https://autumnfish.cn/song/detail?ids='+id)
            .then(res => {
                this.picUrl = res.data.songs[0].al.picUrl
            })
            .catch(err => {
                console.error(err); 
            }),

            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+id)
            .then(res => {
                this.hotC = res.data.hotComments;
                console.log(this.hotC[0]);
            })
            .catch(err => {
                console.error(err); 
            }),
            this.cmtBg = 'background-color: rgba(235, 227, 227, .4);'
        },
        // play:function () {
        //     this.isPlaying = true;
        // },
        // pause:function () {
        //     this.isPlaying = false;
        // }
        // playMv:function (mvid) {
        //     axios.get('https://autumnfish.cn/mv/url?id='+mvid)
        //     .then(res => {
        //         this.vidUrl = res.data.data.url;
        //     })
        //     .catch(err => {
        //         console.error(err); 
        //     }),
        //     this.showM = true;
        // },

        // hide:function (params) {
        //    this.showM = false; 
        // }
    },
})