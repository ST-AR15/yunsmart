# component

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
props: {
    id: string,          // 图表的唯一ID,用于渲染
    options: Options,    // 图表的基础设置
},
```



### 

