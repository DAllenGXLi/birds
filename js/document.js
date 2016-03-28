
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
        attrName: '感冒',
        attrType: NO_CHILD_LEVEL,
        options: [
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            },
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            },
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            },
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            },
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            },
            {
                attrValue: '普通感冒',
                imgURL: './images/1.jpg'
            }
        ]
    },
    {
        attrName: '儿科',
        attrType: HAS_CHILD_LEVEL,
        childlevel: [
            {
                attrName: '感冒',
                attrType: NO_CHILD_LEVEL,
                options: [
                    {
                        attrValue: '普通感冒',
                        imgURL: './images/1.jpg'
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
                                attrValue: '普通感冒',
                                imgURL: './images/1.jpg'
                            }
                        ]
                    },
                    {
                        attrName: '男科',
                        attrType: NO_CHILD_LEVEL,
                        options: [
                            {
                                attrValue: '发烧',
                                imgURL: './images/1.jpg'
                            },
                            {
                                attrValue: '流行感冒',
                                imgURL: './images/1.jpg'
                            },
                            {
                                attrValue: '普通感冒',
                                imgURL: './images/1.jpg'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        attrName: '父科',
        attrType: HAS_CHILD_LEVEL,
        childlevel: [
            {
                attrName: '感冒',
                attrType: NO_CHILD_LEVEL,
                options: [
                    {
                        attrValue: '普通感冒',
                        imgURL: './images/1.jpg'
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
                                attrValue: '普通感冒',
                                imgURL: './images/1.jpg'
                            }
                        ]
                    },
                    {
                        attrName: '男科',
                        attrType: NO_CHILD_LEVEL,
                        options: [
                            {
                                attrValue: '发烧',
                                imgURL: './images/1.jpg'
                            },
                            {
                                attrValue: '流行感冒',
                                imgURL: './images/1.jpg'
                            },
                            {
                                attrValue: '普通感冒',
                                imgURL: './images/1.jpg'
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
        imgURL: './images/1.jpg', // 图片链接
        chineseName: 'chineseName1', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './images/1.jpg', // 图片链接
        chineseName: 'chineseName2', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './images/1.jpg', // 图片链接
        chineseName: 'chineseName3', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
    {
        imgURL: './images/1.jpg', // 图片链接
        chineseName: 'chineseName4', // 中文名
        latinName: 'latinName', // 拉丁名
        alias: 'alias', // 别名
        order: 'order', // 目
        family: 'family', // 科
        genus: 'genus', // 属
        description: 'description' // 描述
    },
];

birdsData = JSON.stringify(birdsData);

var birdDetailData = {
    chineseName: '安然', // 中文名
    latinName: 'latinName', // 拉丁名
    alias: 'alias', // 别名
    order: 'order', // 目
    family: 'family', // 科
    genus: 'genus', // 属
    description: '北美红雀（学名：Cardinalis cardinalis）：\
    体型中等，体长24厘米，翼展25-31厘米，体重 42-48克。雄鸟呈鲜红色，面部呈黑色，\
    一直伸延至上胸。背部及双翼最为沉色。雌鸟呈灰棕色，双翼、冠及尾羽上有红彩。 \
    雌雄异形，均有羽冠。北美红雀的学名意义是天主教会的枢机，因枢机有着明显的红袍及帽子。\
    皇冠般傲立的穗状头冠和一身烈焰般的羽毛异常醒目，是世界上最美丽耀眼的鸟类之一。\
            留鸟。栖息在林地、花园、丛林及沼泽。它们主要吃谷物，也会吃昆虫及果实。\
            雄鸟是地盘性的，会以歌声来定界。分布于加拿大南部，经美国东部缅因州至得克萨斯州，\
            南下至墨西哥，在夏威夷的大岛及瓦胡岛也有分布。', // 描述
    imgURLs: [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/6.jpg'
    ]
}

birdDetailData = JSON.stringify(birdDetailData);

