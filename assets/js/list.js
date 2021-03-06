window.onload = function(){
    new Vue({
        el:'#container',
        data:{
            num : 0,
            shopList:[
                {
                    title:'热门推荐',
                    list:[
                        {
                            src:'./images/images/产品分类_03.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        },
                        {
                            src:'./images/images/产品分类_03.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        },
                        {
                            src:'./images/images/产品分类_03.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        }
                    ]

                },
                {
                    title:'发现好货',
                    list:[
                        {
                            src:'./images/images/产品分类_05.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        },
                        {
                            src:'./images/images/产品分类_05.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        },
                        {
                            src:'./images/images/产品分类_05.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        }
                    ]

                },
                {
                    title:'只看专场',
                    list:[
                        {
                            src:'./images/images/产品分类_13.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        },
                        {
                            src:'./images/images/产品分类_13.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        },
                        {
                            src:'./images/images/产品分类_13.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        }
                    ]

                },
                {
                    title:'只看商品',
                    list:[
                        {
                            src:'./images/images/产品分类_18.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        },
                        {
                            src:'./images/images/产品分类_18.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        },
                        {
                            src:'./images/images/产品分类_18.jpg',
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        }
                    ]

                }
            ]
        },
        methods:{
            select(i){
                this.num = i;
            }
        }
    })
}