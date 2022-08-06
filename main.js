import * as echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

let myChart = echarts.init(main, 'default');
let n = 0
let m = 0

function createKey() {
    n += 1
    return `2020-01-${n}`
}

function createValue() {
    m += 1
    return m
}

let xData = [createKey(), createKey(), createKey(), createKey(), createKey(), createKey()]
let values = [createValue(), createValue(), createValue(), createValue(), createValue(), createValue()]

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {
        show: true
    },
    legend: {
        data: ['销量']
    },
    xAxis: {
        type: 'category',
        data: xData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        lineStyle: {
            color: 'blue'
        },
        itemStyle: {
            color: "rgb(26,115,231)",
            borderWidth: 1000000000
        },
        name: '销量',
        type: 'line',
        data: values
    }]
});

let isLoading = false


loadMoreButton.addEventListener('click', () => {
    if (isLoading === true) {
        return
    }
    let key = createKey()
    let value = createValue()
    myChart.showLoading()
    isLoading = true
    setTimeout(() => {
        xData = [...xData, key]
        values = [...values, value]
        myChart.setOption({
            xAxis: {
                data: xData
            },
            series: [{
                data: values
            }]
        })
        myChart.hideLoading()
        isLoading = false
    }, 3000)
})

myChart.on('click',(e)=>{
    console.log(e)
    console.log(e.data);
    console.log(e.name);
    window.open(`http://www.baidu.com/?time=${e.name}`)
})