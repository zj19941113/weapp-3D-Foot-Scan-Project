# 3D足型扫描

 - author: `zhoujie <1601584358@qq.com>`
 - version：`v1.2`

## 总览

### 环境

 - CodeIgniter 3.1.0
 - php >= 5.6.30
 - mysql >= 5.7.18
 - php扩展: mbstring, curl
 - 没有用腾讯云的SDK. wafer相关配置，COS相关配置一律不用管

### 后端文件结构

 - application/controllers 控制器
 - application/models 模型
 - application/config 配置文件
 - index.php 入口文件(在此已配置自动切换环境，无需手动操作)
 - uploads 上传文件仓库
 - uploads/pannel.php 查看服务器文件库(仅在`开发环境`可用)
 - system 系统核心文件 (不要乱动)
 - vendor (tx的东西不知道是啥，不要乱动)

### 维护相关

 - api.weixin.qq.com 的DNS目前是写死的，如果 `login` 接口无法使用请检查DNS是否正确

### 开始使用

本项目分为`开发环境`和`生产环境`

 - 开发环境 `base_url` 为 ` `
 - 生产环境 `base_url` 为 ` `


#### 请求和响应格式

例如：以GET方式访问welcome接口： 

`GET {base_url}/welcome`  

Response 200 

 - 成功响应：
```json
    {
        "code":0,
        "data":
        {
            "msg": "Hello World"
        }
    }
```

 - 错误响应

```json
    {
        "code":-1,
        "error":"错误信息"
    }

```

#### 状态码 `code`


| code       | 含义   
| --------   | -----
| 0          | 正常
| -1         | 登录状态错误
| -2         | 表单参数错误
| -3         | 安全性错误
| -4         | 文件上传错误


## api 列表

### 用户模块

#### 用户登录 `POST {base_url}/login`

Request (application/json)

```json
{
    "code": , // 微信服务器反回的js_code
}
```

Response 200 

```json
    {
        "code":0,
        "data":
        {
            "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
            "token": "0e454b9657852ed68d633b092e7e3f07",
            "phone": "157****3867"
        }
    }
```


### 信息模块

#### 上传信息 `POST {base_url}/message/issue`

Request (application/json)

```json
{
    "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
    "token": "0e454b9657852ed68d633b092e7e3f07",

    "footlength": 243,
    "footwidth": 93,
    "footheight": 56,
    "perimeter": 220,
    "zugong": 0,
    "muzhifandu": 0, 

    "footlength2": 242,
    "footwidth2": 92,
    "footheight2": 55,
    "perimeter2": 223,
    "zugong2": 0,
    "muzhifandu2": 0, 
}
```

Response 200 

```json
    {
        "code":0,
        "data":
        {
            "messageid": 2
        }
    }
```

#### 删除信息 `POST {base_url}/message/remove`

Request (application/json)

```json
{
    "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
    "token": "0e454b9657852ed68d633b092e7e3f07",
    "messageid": 1
}
```

Response 200 

```json
    {
        "code": 0,
    }
```

#### 获取单条信息 `POST {base_url}/message`

Request (application/json)

```json
{
    "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
    "token": "0e454b9657852ed68d633b092e7e3f07",
    "messageid": 11
}
```

Response 200 

```json
    {
        "code": 0,
    }
```

#### 查看自己的信息列表 `POST {base_url}/message/personal`

Request (application/json)

```json
{
    "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
    "token": "0e454b9657852ed68d633b092e7e3f07",
    "beg": 0, //需要查询的起始索引
    "num": 10, //需要查询的个数
    //如 beg=0, num=10, 则返回前10条数据。
}
```

Response 200 

```json
    {
        "code":0,
        "data":
        {
            "message":
            [
                {
                    "messageid": "1",
                    "footlength": 243,
                    "footwidth": 93,
                    "footheight": 56,
                    "perimeter": 220,
                    "zugong": 0,
                    "muzhifandu": 0, 

                    "footlength2": 242,
                    "footwidth2": 92,
                    "footheight2": 55,
                    "perimeter2": 223,
                    "zugong2": 0,
                    "muzhifandu2": 0, 
                },
                {
                    "messageid": "2",
                    "footlength": 243,
                    "footwidth": 93,
                    "footheight": 56,
                    "perimeter": 220,
                    "zugong": 0,
                    "muzhifandu": 0, 

                    "footlength2": 242,
                    "footwidth2": 92,
                    "footheight2": 55,
                    "perimeter2": 223,
                    "zugong2": 0,
                    "muzhifandu2": 0, 
                }
                ...
            ]
        }
    }
```

#### 获取某地的商城列表 `POST {base_url}/market`

Request (application/json)

```json
{
    "openid": "olSoJ4z-Z7b4N8cQcFOUE2kjxBs0",
    "token": "0e454b9657852ed68d633b092e7e3f07",
    "locate": 1001  //陕西西安
}
```

Response 200 

```json
    {
        "code":0,
        "data":
        {
            "message":
            [
                {
                    "id": 1,
                    "latitude": 34.225269,
                    "longitude": 109.001182,
                    "name": "西安交通大学曲江校区西四楼",
                    "detail": "雁翔路99号西安交通大学曲江校区"
                },
                {
                    "id": 2,
                    "latitude": 34.246149,
                    "longitude": 108.984793,
                    "name": "西安交通大学兴庆校区科学馆",
                    "detail": "咸宁西路28号西安交通大学",
                }
                ...
            ]
        }
    }
```

### 上传模块

#### 上传文件 `POST {base_url}/upload`

 - 文件大小：图片：0.5M 视频: 20M 矩阵：
 - 支持格式：jpg|mov|mp4

Request (multipart/form-data)

| 参数          | 类型         | 可选参数   | 注释
| --------     | -----------  |---------   |-----
| messageid    | text         |            |
| openid       | text         |            |
| token        | text         |            |
| type         | text         | 'img' 或 'video'  |
| no           | text         |            | 为防止前端上传时异步产生乱序，在这里规定文件顺序
| file         | file         |            |


Response 200 

```json
    {
        "code": 0,
        "data": 
        {
            "filename": "58-1526733386.jpg"
        }
    }
```

#### 获取资源 `GET {base_url}/uploads/{filename}`

例如: 以 `GET` 方式请求 https://ntfxnyrz.qcloud.la/uploads/58-1526733386.jpg 会接收到图片资源

### 更多模块

#### 发送反馈 `POST {base_url}/more/feedback`

Request

```json
    {
        "openid": "test",
        "token": "test",
        "feedback": "fff"
    }
```

Response 200 

```json
    {
        "code": 0,
    }
```

# weapp-3D-Foot-Scan-Project