//==>以下是下拉选择框中的数据
//借款期限
var selectDataTerm = {
    title:"借款期限",
    data:[]
};
//所在城市
var selectDataCity = {
    title:"所在城市",
    data:[
        {'id': '10001', 'value': '上海'},
        {'id': '10002', 'value': '北京'},
        {'id': '10003', 'value': '郑州'}
    ]
};
//申请渠道
var selectDataChannel = {
    title:"申请渠道",
    data:[
        {'id': '10001', 'value': '自助申请'},
        {'id': '10002', 'value': '中介/合作机构'}
    ]
};
//行政区县
var selectDataArea = {
    title:"行政区县",
    /**********上海市********/
    "10001":[
        {"id":"10001","value":"黄浦区"},
		{"id":"10002","value":"徐汇区"},
		{"id":"10003","value":"长宁区"},
		{"id":"10004","value":"静安区"},
		{"id":"10005","value":"普陀区"},
		{"id":"10006","value":"闸北区"},
		{"id":"10007","value":"虹口区"},
		{"id":"10008","value":"杨浦区"},
		{"id":"10009","value":"闵行区"},
		{"id":"10010","value":"宝山区"},
		{"id":"10011","value":"嘉定区"},
		{"id":"10012","value":"浦东新区"},
		{"id":"10013","value":"金山区"},
		{"id":"10014","value":"松江区"},
		{"id":"10015","value":"青浦区"},
		{"id":"10016","value":"奉贤区"},
		{"id":"10017","value":"崇明县"}
    ],
    /**********北京市********/
    "10002":[
		{"id":"10001","value":"东城区"},
		{"id":"10002","value":"西城区"},
		{"id":"10003","value":"朝阳区"},
		{"id":"10004","value":"丰台区"},
		{"id":"10005","value":"石景山区"},
		{"id":"10006","value":"海淀区"},
		{"id":"10007","value":"门头沟区"},
		{"id":"10008","value":"房山区"},
		{"id":"10009","value":"通州区"},
		{"id":"10010","value":"顺义区"},
		{"id":"10011","value":"昌平区"},
		{"id":"10012","value":"大兴区"},
		{"id":"10013","value":"怀柔区"},
		{"id":"10014","value":"平谷区"},
		{"id":"10015","value":"密云县"},
		{"id":"10016","value":"延庆县"}
    ],
    /**********郑州市********/
    "10003":[
   		{"id":"10001","value":"中原区"},
		{"id":"10002","value":"二七区"},
		{"id":"10003","value":"管城回族区"},
		{"id":"10004","value":"金水区"},
		{"id":"10005","value":"上街区"},
		{"id":"10006","value":"惠济区"},
		{"id":"10007","value":"中牟县"},
		{"id":"10008","value":"巩义市"},
		{"id":"10009","value":"荥阳市"},
		{"id":"10010","value":"新密市"},
		{"id":"10011","value":"新郑市"},
		{"id":"10012","value":"登封市"}
       ]
};
//抵押情况
var selectDataPledge = {
    title:"抵押情况",
    data:[
        {'id': '10001', 'value': '一抵'},
        {'id': '10002', 'value': '二抵'}
    ]
};
//产权人年龄
var selectDataAge = {
    title:"产权人年龄",
    data:[
        {'id': '10001', 'value': '有未成年人'},
        {'id': '10002', 'value': '有65岁以上老年人'},
        {'id': '10003', 'value': '未成年、老人均有'},
        {'id': '10004', 'value': '18-65岁'}
    ]
};
//房产种类
var selectDataVariety = {
    title:"房产种类",
    data:[
        {'id': '10001', 'value': '商品房'},
        {'id': '10002', 'value': '央产房'},
        {'id': '10003', 'value': '经济适用房'},
        {'id': '10004', 'value': '按经济适用房管理'},
        {'id': '10005', 'value': '优惠价房改房'},
        {'id': '10006', 'value': '成本价房改房'},
        {'id': '10007', 'value': '标准价房改房'},
        {'id': '10008', 'value': '限价房'},
        {'id': '10009', 'value': '两限房'},
        {'id': '10010', 'value': '回迁房'},
        {'id': '10011', 'value': '军产房'},
        {'id': '10012', 'value': '校产房'},
        {'id': '10013', 'value': '其他'}
    ]
};
