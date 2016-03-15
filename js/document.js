
    // // 当没有子层时候
    // level: {
    //     attrName: '',
    //     attrTypeL '',
    //     options: [
    //         { attrValue: '', imgURL: ''},
    //         { attrValue: '', imgURL: ''},
    //         { attrValue: '', imgURL: ''}
    //     ]
    // }
    // // 当还有子层时候
    // level: {
    //     attrName: '',
    //     attrType: '',
    //     childlevel: [
    //         level: {},
    //         level: {},
    //         ...
    //     ]
    // }
    // // 后台接口数据格式
    // [
    //     level: {},
    //     level: {},
    //     ...
    // ]
    // // 前端回送后台检索数据格式
    // [
    //     {attrName: '' ,attrValue: ''},
    //      ...
    // ]
    // 
    // e.g
    // var levelData = [
//     {
//         attrName: '儿科'，
//         attrType: HAS_CHILD_LEVEL,
//         childlevel: [
//             {
//                 attrName: '感冒'，
//                 attrType: NO_CHILD_LEVEL,
//                 options: [
//                     {
//                         attrValue: '发烧',
//                         imgURL: '../the_url_of_the_image/img1.png'
//                     },
//                     {
//                         attrValue: '流行感冒',
//                         imgURL: '../the_url_of_the_image/img2.png'
//                     },
//                     {
//                         attrValue: '普通感冒',
//                         imgURL: '../the_url_of_the_image/img3.png'
//                     }
//                 ]
//             }，
//             {
//                 attrName: '内科'，
//                 attrType: HAS_CHILD_LEVEL,
//                 childlevel: {
//                     {
//                         // level内部
//                     },
//                     {
//                         // level内部
//                     }
//                 }
//             }
//         ]
//     },
//     {
//         // level内部
//     },
//     // ...
// ]

var NO_CHILD_LEVEL = 0,
    HAS_CHILD_LEVEL = 1;

var levelData = [
    {
        attrName: '儿科',
        attrType: HAS_CHILD_LEVEL,
        childlevel: [
            {
                attrName: '感冒',
                attrType: NO_CHILD_LEVEL,
                options: [
                    {
                        attrValue: '发烧',
                        imgURL: './img/1.jpg'
                    },
                    {
                        attrValue: '流行感冒',
                        imgURL: './img/1.jpg'
                    },
                    {
                        attrValue: '普通感冒',
                        imgURL: './img/1.jpg'
                    }
                ]
            },
            {
                attrName: '其他',
                attrType: HAS_CHILD_LEVEL,
                childlevel: [
                    {
                        attrName: '妇产科',
                        attrType: NO_CHILD_LEVEL,
                        options: [
                            {
                                attrValue: '发烧',
                                imgURL: './img/1.jpg'
                            },
                            {
                                attrValue: '流行感冒',
                                imgURL: './img/1.jpg'
                            },
                            {
                                attrValue: '普通感冒',
                                imgURL: './img/1.jpg'
                            }
                        ]
                    },
                    {
                        attrName: '男科',
                        attrType: NO_CHILD_LEVEL,
                        options: [
                            {
                                attrValue: '发烧',
                                imgURL: './img/1.jpg'
                            },
                            {
                                attrValue: '流行感冒',
                                imgURL: './img/1.jpg'
                            },
                            {
                                attrValue: '普通感冒',
                                imgURL: './img/1.jpg'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

levelData = JSON.stringify(levelData);

// [
//     {
//         imgURL: '', // 图片链接
//         chineseName: '', // 中文名
//         latinName: '', // 拉丁名
//         alias: '', // 别名
//         order: '', // 目
//         family: '', // 科
//         genus: '', // 属
//         description: '' // 描述
//     },
//     // ...
// ]

var birdsData = [
    {
        imgURL: './img/1.jpg', // 图片链接
        chineseName: 'chineseName', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './img/1.jpg', // 图片链接
        chineseName: 'chineseName', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './img/1.jpg', // 图片链接
        chineseName: 'chineseName', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './img/1.jpg', // 图片链接
        chineseName: 'chineseName', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
];

birdsData = JSON.stringify(birdsData);

// <!-- 具体项 -->
//                 <div class="col-md-4">
//                     <div class="thumbnail">
//                         <img src="./img/1.jpg" alt="bird">
//                         <div class="caption">
//                             <h3>这个是什么鸟</h3>
//                             <p>这个是某某鸟blablabla...</p>
//                             <p>
//                                 <a href="#" class="btn btn-primary" role="button" data-toggle="modal" data-target=".bs-example-modal-lg">图片</a>
//                                 <a href="#" class="btn btn-default" role="button">详情</a>
//                             </p>
//                         </div>
//                     </div>
//                     <!-- 详情模态框 -->
//                     <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
//                         <div class="modal-dialog modal-lg">
//                             <div class="modal-content">
//                                 <!-- 图集 -->
//                                 <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
//                                     <!-- Indicators -->
//                                     <ol class="carousel-indicators">
//                                         <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
//                                         <li data-target="#carousel-example-generic" data-slide-to="1"></li>
//                                         <li data-target="#carousel-example-generic" data-slide-to="2"></li>
//                                     </ol>

//                                     <!-- Wrapper for slides -->
//                                     <div class="carousel-inner" role="listbox">
//                                         <div class="item active">
//                                             <img src="./img/1.jpg" alt="bird">
//                                             <div class="carousel-caption">这种鸟是blablabla...</div>
//                                         </div>
//                                         <div class="item">
//                                             <img src="./img/1.jpg" alt="bird">
//                                             <div class="carousel-caption">这种鸟是blablabla...</div>
//                                         </div>
//                                         <div class="item">
//                                             <img src="./img/1.jpg" alt="bird">
//                                             <div class="carousel-caption">这种鸟是blablabla...</div>
//                                         </div>
//                                     </div>

//                                     <!-- Controls -->
//                                     <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
//                                         <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//                                         <span class="sr-only">Previous</span>
//                                     </a>
//                                     <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
//                                         <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                                         <span class="sr-only">Next</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <!-- 具体项 -->
//                 <div class="col-md-4">
//                     <div class="thumbnail">
//                         <img src="./img/1.jpg" alt="bird">
//                         <div class="caption">
//                             <h3>这个是什么鸟</h3>
//                             <p>这个是某某鸟blablabla...</p>
//                             <p>
//                                 <a href="#" class="btn btn-primary" role="button">图片</a>
//                                 <a href="#" class="btn btn-default" role="button">详情</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
