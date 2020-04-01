/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2020-02-04 16:09:44
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 12:32:28
 */
import Mock from "mockjs";
import {getHashParam} from "@/utils/util";
import {guid} from "@/utils/util";

export default {
    init() {
        // 获取列表数据/job/queryPageData
        Mock.mock(/(\/assets\/standard\/getSourceList)/, "get", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 20,
                    pages: 2,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|10": [
                            {
                                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                                "id|+1": "@id",
                                "code|+1": "@id",
                                // 属性 title 是一个随机长度的标题
                                "name|+1": ["任务" + "@string('number', 2)"],
                                "type|1": ["数据库", "文件", "接口", "指标"],
                                creator: "@cname",
                                "theme|1": ["基础库", "主题库", "专题库"],
                                // 属性 grade 是数组当中的一个值
                                "path|1": ["二级目录01", "一级目录01"],
                                "status|1": ["运行中", "成功", "失败", "未运行"],
                                updateTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
                            }
                        ],
                        headers: [
                            {
                                title: "任务名称",
                                name: "name",
                                width: 120
                            },
                            {
                                title: "元数据类型",
                                name: "type",
                                width: 120
                            },
                            {
                                title: "所属主题",
                                name: "theme",
                                width: 120
                            },
                            {
                                title: "挂载路径",
                                name: "path",
                                width: 120
                            },
                            {
                                title: "状态",
                                name: "status",
                                width: 120
                            },
                            {
                                title: "创建人",
                                name: "creator",
                                width: 120
                            },
                            {
                                title: "创建时间",
                                name: "updateTime",
                                width: 180,
                                sortable: true
                            }
                        ]
                    })
                }
            };
        });
        // 获取元数据类型
        Mock.mock(/(getTypeList)/, "get", {
            code: 200,
            msg: "成功",
            data: [
                {
                    "id|+1": "@id",
                    "name|1": ["文件"]
                },
                {
                    "id|+1": "@id",
                    "name|1": ["指标"]
                },
                {
                    "id|+1": "@id",
                    "name|1": ["接口"]
                }
            ]
        });
        // 数据删除
        Mock.mock(/(delSource)/, "delete", {
            code: 200,
            msg: "成功",
            // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
            data: {}
        });

        // 获取采集数据连接
        Mock.mock(/(getConnectListParams)/, "get", {
            code: 200,
            msg: "成功",
            "data": [
                {
                    "value": "@id",
                    "label": ["Hive"],
                    "children": [
                        {
                            "value": 1,
                            "label": "三色码库"
                        },
                        {
                            "value": 2,
                            "label": "hive人口库"
                        },
                        {
                            "value": 3,
                            "label": "hive03"
                        }
                    ]
                }, {
                    "value": "@id",
                    "label": ["PG"],
                    "children": [
                        {
                            "value": 11,
                            "label": "PG三色码库"
                        },
                        {
                            "value": 21,
                            "label": "PG人口库"
                        },
                        {
                            "value": 31,
                            "label": "PG03"
                        }
                    ]
                }, {
                    "value": "@id",
                    "label": ["ES"],
                    "children": [
                        {
                            "value": 41,
                            "label": "Es三色码库"
                        },
                        {
                            "value": 42,
                            "label": "ES人口库"
                        },
                        {
                            "value": 43,
                            "label": "ES03"
                        }
                    ]
                }
                // {
                //   "value|+1": "@id",
                //   "label|+1": ["Hive","FTP","Hbase","pg"],
                //   "children|5": [
                //     {
                //       "value|+1":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                //       "label|1":  ["Hive"+"@string('number', 1)","FTP"+"@string('number', 1)","Hbase"+"@string('number', 1)"]
                //     }
                //   ]
                // }
            ]
        });

        // 获取采集数据表
        Mock.mock(/(getStrategyTableParams)/, "get", {
            code: 200,
            msg: "成功",
            "data|5": [
                {
                    "id|+1": [1, 2, 3, 4, 5],
                    "name": "test_table_" + "@string('number', 1)"
                }
            ]
        });

        // 根据id获取文件元数据采集
        Mock.mock(/(getCollectSourceById)/, "get", {
            code: 200,
            msg: "成功",
            "data": {
                taskName: "任务" + "@string('number', 1)",
                "conect|1": [1, 2],
                "strategyTable|1": [1, 2, 3],
                remark: "备注",
                "strategyType|1": ["1", "2"],
                startTime: "2020-02-28",
                endTime: "2020-03-28",
                strategyCron: "0 0 * * * ?",
            }
        });

        // 数据保存
        Mock.mock(/(saveCollectSource)/, "post", {
            code: 200,
            msg: "成功",
        });

        // 采集获取运行列表
        Mock.mock(/(\/getStrategyOperation)/, "get", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 20,
                    pages: 2,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|10": [
                            {
                                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                                "id|+1": "@id",
                                "code|+1": "@id",
                                // 属性 title 是一个随机长度的标题
                                name: "任务0" + "@string('number', 1)",
                                week: "@string('number', 2)" + "分钟",
                                "status|1": ["成功", "失败",],
                                startTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
                                endTime: "2020-" + "@datetime(MM-dd HH:mm:ss)",
                                operationTime: "@string('number', 1)" + "s"
                            }
                        ],
                        headers: [
                            {
                                title: "任务名称",
                                name: "name",
                                width: 140
                            },
                            {
                                title: "实例状态",
                                name: "status",
                                width: 100
                            },
                            {
                                title: "调度周期",
                                name: "week",
                                width: 120
                            },
                            {
                                title: "开始时间",
                                name: "startTime",
                                width: 180,
                                sortable: true
                            }, {
                                title: "结束时间",
                                name: "endTime",
                                width: 180,
                                sortable: true
                            }, {
                                title: "运行时间",
                                name: "operationTime",
                                width: 100,
                                sortable: true
                            },
                        ]
                    })
                }
            };
        });

        /************数据编目************/
        // 获取元数据创建树
        Mock.mock(/(getDataModelTree)/, "get", {
            code: 200,
            msg: "成功",
            "data": [
                {
                    "id|+1": "@id",
                    "name|+1": ["TBASE"],
                    parent: true,
                    type: "1",
                    "children|14": [
                        {
                            "id|+1": "@id",
                            "name|+1": [
                                "tb_ods_grid_operator",
                                "tb_std_wjw_jiechu",
                                "tb_dws_human_community_locus",
                                "tb_ads_company_relieve_geli",
                                "tb_ads_report_health_personnel",
                                "tb_dws_qrc_info",
                                "tb_std_wyj_grid",
                                "tb_dw_human_community_locus",
                                "tb_dw_company_relieve_geli",
                                "tb_dw_wjw_jiechu",
                                "tb_dw_human_community_locus",
                                "tb_dw_grid_operator",
                                "tb_dw_grid_point",
                                "tb_dw_grid_zhiyu"
                            ],
                            parent: false,
                            type: "2"
                        }
                    ]
                }
            ]
        });
        // 获取获取元数据编目树
        Mock.mock(/(getCatalogTree)/, "get", function (option) {
            const type = getHashParam(option.url, "type");
            let firstLabel = [];
            let secondLabel = [];
            let thirdLabel = [];
            let data = {data: []};
            if (type == 1) {
                firstLabel = ["ODS层", "STD层", "DWS层", "ADS层"];
                secondLabel = ["table_test" + "@string('number', 1)"];
                data = Mock.mock({
                    "data": [
                        {
                            "id|+1": "@id",
                            "name": "来源层",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name": "标准层",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_std_wjw_jiechu",
                                    parent: false,
                                    type: "2"
                                },
                                {
                                    "id|+1": "@id",
                                    "name": "tb_std_wyj_grid",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name": "融合层",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_dws_human_community_locus",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name": "指标层",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ads_company_relieve_geli",
                                    parent: false,
                                    type: "2"
                                },
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ads_report_health_personnel",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        }
                    ]
                });
            } else if (type == 2) {
                firstLabel = ["标签" + "@string('number', 1)"];
                secondLabel = [
                    "mysql_test" + "@string('number', 1)",
                    "redis_tes" + "@string('number', 1)"
                ];
                data = Mock.mock({
                    "data": [
                        {
                            "id|+1": "@id",
                            "name|+1": "复工复产态势",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name|+1": "重点人员管控",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                },
                                {
                                    "id|+1": "@id",
                                    "name": "tb_dws_human_community_locus",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name|+1": "龙江码总览",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name|+1": "龙江码城市运营",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        },
                        {
                            "id|+1": "@id",
                            "name|+1": "疫情态势感知",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id|+1": "@id",
                                    "name": "tb_std_wjw_jiechu",
                                    parent: false,
                                    type: "2"
                                },
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ods_grid_operator",
                                    parent: false,
                                    type: "2"
                                },
                                {
                                    "id|+1": "@id",
                                    "name": "tb_ads_company_relieve_geli",
                                    parent: false,
                                    type: "2"
                                }
                            ]
                        }

                    ]
                });
            } else {
                firstLabel = ["基础库", "专题库", "主题库"];
                secondLabel = ["人口", "法人", "行为分析", "通联分析", "轨迹分析"];
                thirdLabel = [
                    "tb_ads_company_relieve_geli",
                    "tb_ods_grid_operator",
                    "tb_std_wjw_jiechu",
                    "tb_dws_human_community_locus"
                ];
                data = Mock.mock({
                    "data": [
                        {
                            "id": "@id",
                            "name": "基础库",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id": "@id",
                                    "name": "社区网格信息",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_std_wyj_grid",
                                            parent: false,
                                            type: "2"
                                        },

                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_ads_quezhen_yishi_source",
                                            parent: false,
                                            type: "2"
                                        }

                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "疫情人员信息",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name": "tb_ads_company_relieve_geli",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name": "tb_ads_company_yisi",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name": "tb_ads_report_health_personnel",
                                            parent: false,
                                            type: "2"
                                        }

                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "人员健康码信息",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dws_qrc_info",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "车辆基础信息",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_ads_company_relieve_geli",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "@id",
                            "name": "主题库",
                            parent: true,
                            type: "1",
                            "children": [
                                {
                                    "id": "@id",
                                    "name": "疫情主题库",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_human_community_locus",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_company_relieve_geli",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_wjw_jiechu",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "社区通行主题库",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_human_community_locus",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "卡口通行主题库",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_grid_operator",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                },
                                {
                                    "id": "@id",
                                    "name": "健康上报主题库",
                                    parent: true,
                                    type: "2",
                                    "children": [
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_grid_operator",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_grid_point",
                                            parent: false,
                                            type: "2"
                                        },
                                        {
                                            "id|+1": "@id",
                                            "name|+1": "tb_dw_grid_zhiyu",
                                            parent: false,
                                            type: "2"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                });
            }

            return {
                code: 200,
                msg: "成功",
                data: data.data
            };
        });
        //根据id获取编辑数据
        Mock.mock(/(getCatalogDataById)/, "get", {
            code: 200,
            msg: "成功",
            data: Mock.mock({
                description: "描述",
                id: "@id",
                "name|1": ["ODS层", "标签", "基础库"],
                parentId: "@id"
            })
        });
        //新增编目
        Mock.mock(/(addCatalog)/, "post", {
            code: 200,
            msg: "成功",
            data: "@id"
        });
        //编辑编目
        Mock.mock(/(updateCatalog)/, "post", {
            code: 200,
            msg: "成功",
            data: "@id"
        });
        //删除编目
        Mock.mock(/(delCatalog)/, "delete", {
            code: 200,
            msg: "成功",
            data: "@id"
        });
        //新增元数据
        Mock.mock(/(assets-metadata-catalog-ref\/addMetadata)/, "post", {
            code: 200,
            msg: "成功",
            data: "@id"
        });

        //根据id删除元数据
        Mock.mock(/(assets-metadata-catalog-ref\/delMetadata)/, "delete", {
            code: 200,
            msg: "成功",
            data: "@id"
        });

        //获取元数据采集搜索条件
        Mock.mock(/(getQueryConditions)/, "get", function (option) {
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: Mock.mock({
                    "subjectList|3": [
                        {
                            "id|+1": 1,
                            "name|+1": ["基础库", "主题库", "专题库"]
                        }
                    ],
                    "labelList|3": [
                        {
                            "id|+1": 1,
                            "name|+1": ["卡口", "企业", "社区"]
                        }
                    ]
                })
            };
        });

        // 获取历史足迹/收藏/热门
        Mock.mock(/(getDataModelAccessList)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 20,
                    pages: 2,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies": [
                            {
                                "id|+1": "@id",
                                name: "tb_ads_car_origin",
                                tableName: "回省车辆溯源",
                                description: "回省车辆溯源表",
                                "collectFlag|1": [true, false],
                                type:"mysql"
                            },
                            {
                                "id|+1": "@id",
                                name: "tb_dwd_vehicle_basic",
                                tableName: "车辆基本信息",
                                description: "车辆基本信息表",
                                "collectFlag|1": [true, false],
                                type:"pg"
                            }, {
                                "id|+1": "@id",
                                name: "tb_dwd_human_basic",
                                tableName: "人员基本信息",
                                description: "人员基本信息表",
                                "collectFlag|1": [true, false],
                                type:"es"
                            }, {
                                "id|+1": "@id",
                                name: "tb_ods_quezhen",
                                tableName: "确诊人员登记信息",
                                description: "确诊人员登记信息",
                                "collectFlag|1": [true, false], 
                                type:"http"
                            }, {
                                "id|+1": "@id",
                                name: "tb_ods_grid_point",
                                tableName: "采集点信息",
                                description: "采集点信息",
                                "collectFlag|1": [true, false],
                                type:"tbase"
                            }, {
                                "id|+1": "@id",
                                name: "tb_dwd_company_basic",
                                tableName: "企业基本信息",
                                description: "企业基本信息表",
                                "collectFlag|1": [true, false],
                                type:"tbase"
                            }, {
                                "id|+1": "@id",
                                name: " tb_ods_donation",
                                tableName: "物资捐赠登记",
                                description: "物资捐赠登记表",
                                "collectFlag|1": [true, false],
                                type:"es"
                            }, {
                                "id|+1": "@id",
                                name: " tb_ods_donation_operate",
                                tableName: "物资捐赠处理",
                                description: "物资捐赠处理表",
                                "collectFlag|1": [true, false],
                                type:"http"
                            }, {
                                "id|+1": "@id",
                                name: " tb_ods_qrc_info",
                                tableName: "健康码信息",
                                description: "健康码信息",
                                "collectFlag|1": [true, false],
                                type:"pg"
                            }, {
                                "id|+1": "@id",
                                name: " tb_ods_report",
                                tableName: "群众上报信息",
                                description: "群众上报信息",
                                "collectFlag|1": [true, false],
                                type:"tbase"
                            },
                        ],
                        headers: []
                    })
                }
            };
        });

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapModelList)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 20,
                    pages: 2,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|10": [
                            {
                                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                                "id|+1": 1,
                                "code|+1": 1,
                                // 属性 title 是一个随机长度的标题
                                "name|1": [
                                    "数据模型" + "@string('number', 1)",
                                    "文件模型" + "@string('number', 1)"
                                ],
                                "type|1": ["数据模型", "文件模型"],
                                creator: "@cname",
                                theme: ["基础库"],
                                label: "标签" + "@string('number', 1)",
                                updateTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
                            }
                        ],
                        headers: [
                            {
                                title: "模型名称",
                                name: "name",
                                width: 120
                            },
                            {
                                title: "模型类型",
                                name: "type",
                                width: 120
                            },
                            {
                                title: "标签",
                                name: "label",
                                width: 120
                            },
                            {
                                title: "所属主题",
                                name: "theme",
                                width: 120
                            },
                            {
                                title: "创建人",
                                name: "creator",
                                width: 120
                            },
                            {
                                title: "创建时间",
                                name: "updateTime",
                                width: 180,
                                sortable: true
                            }
                        ]
                    })
                }
            };
        });

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapInfo)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data:  [
                    {
                      type: "Input",
                      label: "模型名称：",
                      name: "cname",
                      placeholder: "请输入模型名称",
                      required: false,
                      disabled: true,
                      defaultValue:"回省车辆溯源"
                    },
                    {
                      type: "Input",
                      label: "英文名称：",
                      name: "name",
                      placeholder: "请输入英文名称",
                      required: false,
                      disabled: true,
                      defaultValue:"tb_ads_car_origin"
                    },
                    {
                      type: "Select",
                      label: "挂载点：",
                      name: "mountPoint",
                      disabled: true,
                      defaultValue:"1",
                      options: [
                        {
                          value: "1",
                          label: "挂载点1"
                        },
                        {
                          value: "2",
                          label: "挂载点2"
                        },
                        {
                          value: "3",
                          label: "挂载点3"
                        }
                      ],
                      required: false,
                      placeholder: "请选择挂载点"
                    },
                    {
                      type: "Select",
                      label: "标签：",
                      name: "labelType",
                      defaultValue:"1",
                      options: [
                        {
                          value: "1",
                          label: "疫情总览"
                        },
                        {
                          value: "2",
                          label: "疫情总览1"
                        },
                        {
                          value: "3",
                          label: "疫情总览2"
                        }
                      ],
                      required: false,
                      disabled: true,
                      placeholder: "请选择标签"
                    },
                    {
                      type: "Select",
                      label: "数据类型：",
                      name: "dataType",
                      defaultValue:"hive",
                      disabled: true,
                      options: [
                        {
                          value: "hive",
                          label: "hive"
                        },
                        {
                          value: "mysql",
                          label: "mysql"
                        },
                        {
                          value: "es",
                          label: "es"
                        },
                        {
                          value: "hbase",
                          label: "hbase"
                        }
                      ],
                      required: false,
                      placeholder: "请选择数据类型"
                    },
                    {
                      type: "Select",
                      label: "计算引擎：",
                      name: "calcEngin",
                      defaultValue:"1",
                      options: [
                        {
                          value: "1",
                          label: "暴风引擎"
                        },
                        {
                          value: "2",
                          label: "暴风引擎1"
                        },
                        {
                          value: "3",
                          label: "暴风引擎3"
                        }
                      ],
                      required: false,
                      disabled: true,
                      placeholder: "请选择计算引擎"
                    },
                    {
                      type: "Input",
                      label: "责任人：",
                      name: "resPerson",
                      placeholder: "请输入责任人",
                      defaultValue:"静香",
                      required: false,
                      disabled: true,
                    },
                    {
                      type: "Input",
                      label: "责任部门：",
                      name: "resDepart",
                      placeholder: "请输入责任部门",
                      defaultValue:"大数据研发部",
                      required: false,
                      disabled: true,
                    },
                    {
                      type: "TextArea",
                      label: "描述：",
                      disabled: true,
                      name: "remark",
                      placeholder: "请输入描述",
                      defaultValue:"此模型为大数据研发部研发",
                    }
                  ]
            };
        });

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapSecond)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 4,
                    pages: 1,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|4": [
                            {
                                "id|+1": 1,
                                "code|+1": 1,
                                "Chname|+1": ["首次入院时间", "预计解除隔离日期", "无症状感染者备注", "就诊日期"],
                                "Enname|+1": ["first_time", "forecast_relieve_time", "remark", "dtime"],
                                "isKey|1": ["是", "否"],
                                "isNull|1": ["是", "否"],
                                "type|1": ["varchar", "int"],
                                "length|+1": 1,
                                "unique|+1": 1,
                                default: "---",
                                "start|1": ["国标", "行标"],
                                rule: "规则" + "@string('number', 1)",
                                desrip: "描述内容",
                                label: "标签" + "@string('number', 1)",
                                "share|1": ["是", "否"],
                                "password|1": ["是", "否"]
                            }
                        ],
                        headers: [
                            {
                                title: "字段中文名",
                                name: "Chname",
                                width: 120
                            },
                            {
                                title: "字段英文名",
                                name: "Enname",
                                width: 120
                            },
                            {
                                title: "是否主键",
                                name: "isKey",
                                width: 120
                            },
                            {
                                title: "是否为空",
                                name: "isNull",
                                width: 120
                            },
                            {
                                title: "字段类型",
                                name: "type",
                                width: 120
                            },
                            {
                                title: "长度",
                                name: "length",
                                width: 120
                            },
                            {
                                title: "精度",
                                name: "unique",
                                width: 120
                            },
                            {
                                title: "默认值",
                                name: "default",
                                width: 120
                            },
                            {
                                title: "引用标准",
                                name: "start",
                                width: 120
                            },
                            {
                                title: "检查规则",
                                name: "rule",
                                width: 120
                            },
                            {
                                title: "字段描述",
                                name: "desrip",
                                width: 120
                            },
                            {
                                title: "引用标签",
                                name: "label",
                                width: 120
                            },
                            {
                                title: "是否共享",
                                name: "share",
                                width: 120
                            },
                            {
                                title: "是否加密",
                                name: "password",
                                width: 120
                            }
                        ]
                    })
                }
            };
        });

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapThird)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 5,
                    pages: 1,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|5": [
                            {
                                "id|+1": 1,
                                "code|+1": 1,
                                "name|+1": ["网格管理点索引", "企业/群众上报信息索引", "自查/疫情上报记录信息索引", "区域健康码扫码登记索引", "公司社区信息索引"],
                                "detail|+1": ["索引英文名：tb_ods_grid_manage_point", "索引英文名：tb_ods_report", "索引英文名：tb_ods_report_pneumonia", "索引英文名：tb_ods_prominent_citizens_passrecord", "索引英文名：tb_ods_resumption_company"]
                            }
                        ],
                        headers: [
                            {
                                title: "名称",
                                name: "name",
                                width: 120
                            },
                            {
                                title: "详细",
                                name: "detail",
                                width: 120
                            }
                        ]
                    })
                }
            };
        });

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapExplore)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 6,
                    pages: 1,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|6": [
                            {
                                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                                "id|+1": 1,
                                "code|+1": 1,
                                // 属性 title 是一个随机长度的标题
                                "name|+1": ["grid_point_id", "longitude", "latitude", "grid_point_name", "province", "city_code","city","area_code","area","leave_province_id","leave_province_name","num","create_time"],
                                "num|+1": 1,
                                "repeat|+1": 1,
                                "type|1": ["number", "string", "boolean"]
                            }
                        ],
                        headers: [
                            {
                                title: "字段名称",
                                name: "name",
                                width: 120
                            },
                            {
                                title: "空值记录数",
                                name: "num",
                                width: 120
                            },
                            {
                                title: "重复记录数",
                                name: "repeat",
                                width: 120
                            },
                            {
                                title: "字段类型",
                                name: "type",
                                width: 120
                            }
                        ]
                    })
                }
            };
        });

        // const tableDataDataMapShow = Mock.mock();

        // 获取列表数据/job/queryPageData
        Mock.mock(/(getDataMapShow)/, "post", function (option) {
            const pageNum = getHashParam(option.url, "pageNum");
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    total: 20,
                    pages: 2,
                    pageNum: Number(pageNum),
                    pageSize: 10,
                    table: Mock.mock({
                        "bodies|10": [
                            {
                                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                                "grid_point_id|+1": 1,
                                "longitude|+1": ["149.124","124.241","136.212"],
                                // 属性 title 是一个随机长度的标题
                               "latitude":["36.5","34.2","39.1"],
                                "grid_point_name|1": ["鸡西区", "红星社区", "富力又一城"],
                                "province|1": ["黑龙江", "吉林", "北京"],
                                "city_code|1": ["11024", "10982", "12982"]
                            }
                        ],
                        headers: [
                            {
                                title: "网格点id",
                                name: "grid_point_id",
                                width: 120
                            },
                            {
                                title: "经度",
                                name: "longitude",
                                width: 120
                            },
                            {
                                title: "纬度",
                                name: "latitude",
                                width: 120
                            },
                            {
                                title: "网格点名称",
                                name: "grid_point_name",
                                width: 120
                            },
                            {
                                title: "省份",
                                name: "province",
                                width: 120
                            },
                            {
                                title: "城市代码",
                                name: "city_code",
                                width: 120
                            }
                        ]
                    })
                }
            };
        });

        //数据地图收藏/取消收藏
        Mock.mock(/(assets-metadata-access-ref\/collect)/, "post", {
            code: 200,
            msg: "成功",
            data: {}
        });

        //添加历史足迹
        Mock.mock(/(addAccessHistory)/, "get", {
            code: 200,
            msg: "成功",
            data: {}
        });

        // 表血缘/影响分析/全链分析
        Mock.mock(/(getTableLineage)/, "get", function (option) {
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    nodes: [
                        {
                            id: "0",
                            name: "tb_ods_traffic_gate"
                        },
                        {
                            id: "1",
                            name: "tb_std_wyj_kk_register"
                        },
                        {
                            id: "2",
                            name: "tb_dws_vehicle_trip"
                        },
                        {
                            id: "3",
                            name: "tb_ads_car_origin",
                            style: {
                                fill: "#FBE5A2"
                            }
                        },
                        {
                            id: "4",
                            name: "tb_dws_vehicle_trip"
                        }
                    ],
                    edges: [
                        {
                            sourceId: "0",
                            targetId: "1"
                        },
                        {
                            sourceId: "1",
                            targetId: "2"
                        },
                        {
                            sourceId: "2",
                            targetId: "3"
                        },
                        {
                            sourceId: "4",
                            targetId: "3"
                        }
                    ]
                }
            };
        });

        // 字段血缘/影响分析/全链分析
        Mock.mock(/(getColumnLineage)/, "get", function (option) {
            return {
                code: 200,
                // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
                msg: "@cparagraph",
                data: {
                    nodes: [
                        {
                            id: "node1",
                            name: "node1-group1",
                            groupId: "group1"
                        },
                        {
                            id: "node2",
                            name: "node2-group2",
                            groupId: "group1"
                        },
                        {
                            id: "node3",
                            name: "node3-group2",
                            groupId: "group2"
                        },
                        {
                            id: "node4",
                            name: "node4-group2",
                            groupId: "group2"
                        },
                        {
                            id: "node5",
                            name: "node5-group2",
                            groupId: "group2"
                        },
                        {
                            id: "node6",
                            name: "node6-group3",
                            groupId: "group3"
                        },
                        {
                            id: "node7",
                            name: "node7-group3",
                            groupId: "group3"
                        },
                        {
                            id: "node8",
                            name: "node8-group4",
                            groupId: "group4"
                        },
                        {
                            id: "node9",
                            name: "node9-group5",
                            groupId: "group5"
                        }
                    ],
                    edges: [
                        // {
                        //     sourceId: "node1",
                        //     targetId: "node3"
                        // },
                        {
                            sourceId: "node7",
                            targetId: "node9"
                        },
                        {
                            sourceId: "node3",
                            targetId: "node6"
                        },
                        {
                            sourceId: "node2",
                            targetId: "node7"
                        },
                        {
                            sourceId: "node3",
                            targetId: "node8"
                        }
                    ],
                    groups: [
                        {
                            id: "group1",
                            name: "我的群组1"
                        },
                        {
                            id: "group2",
                            name: "群组2"
                        },
                        {
                            id: "group3",
                            name: "群组3"
                        },
                        {
                            id: "group4",
                            name: "群组4"
                        },
                        {
                            id: "group5",
                            name: "群组5"
                        }
                    ]
                }
            };
        });
    }
};
