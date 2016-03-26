
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

birdDetailData = {
    
}

