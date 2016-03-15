
    // // 当没有子层时候
    // leval: {
    //     attrName: '',
    //     attrTypeL '',
    //     options: [
    //         { attrValue: '', imgURL: ''},
    //         { attrValue: '', imgURL: ''},
    //         { attrValue: '', imgURL: ''}
    //     ]
    // }
    // // 当还有子层时候
    // leval: {
    //     attrName: '',
    //     attrType: '',
    //     childLeval: [
    //         leval: {},
    //         leval: {},
    //         ...
    //     ]
    // }
    // // 后台接口数据格式
    // [
    //     leval: {},
    //     leval: {},
    //     ...
    // ]
    // // 前端回送后台检索数据格式
    // [
    //     {attrName: '' ,attrValue: ''},
    //      ...
    // ]
    // 
    // e.g
    // var levalData = [
//     {
//         attrName: '儿科'，
//         attrType: HAS_CHILD_LEVAL,
//         childLeval: [
//             {
//                 attrName: '感冒'，
//                 attrType: NO_CHILD_LEVAL,
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
//                 attrType: HAS_CHILD_LEVAL,
//                 childLeval: {
//                     {
//                         // leval内部
//                     },
//                     {
//                         // leval内部
//                     }
//                 }
//             }
//         ]
//     },
//     {
//         // leval内部
//     },
//     // ...
// ]

var NO_CHILD_LEVAL = 0,
    HAS_CHILD_LEVAL = 1;

var levalData = [
    {
        attrName: '儿科',
        attrType: HAS_CHILD_LEVAL,
        childLeval: [
            {
                attrName: '感冒',
                attrType: NO_CHILD_LEVAL,
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
                attrType: HAS_CHILD_LEVAL,
                childLeval: [
                    {
                        attrName: '妇产科',
                        attrType: NO_CHILD_LEVAL,
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
                        attrType: NO_CHILD_LEVAL,
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

levalData = JSON.stringify(levalData);