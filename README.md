# component

注：以下内容以ts格式编写，但实际环境是js

## Pie.vue - 饼图

```typescript
interface TableData {    // 数据内容
    value: number,       // 数据的值
    name: string,        // 数据的名称
}

interface Options {      // 图表的基础设置
    title?: string,      // 图表标题
    subTitle?: string,   // 图表副标题
    data: TableData[],   // 图表内数据
}
    
props: {                 // 要传的值
    id: string,          // 图表的唯一ID,用于渲染
    options: Options,    // 图表的基础设置
},
```

## Dashboard.vue - 仪表盘

```typescript
interface Options {
    title?: string,      // 图表的标题
    subTitle?: string,   // 仪表盘内的文字标题
    dataArea: [number, number],
                         // 仪表盘数字区间
    data: number,        // 目前的数值
}

props: {                 // 要传的值
    id: string,          // 图表的唯一ID,用于渲染
    options: Options,    // 图表的基础设置
},
```



### 

