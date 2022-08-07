import * as echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

// 移动端适配
const width = document.documentElement.clientWidth
main.style.width=`${width}px`
main.style.height = `${width * 1.2}px`


// 基于准备好的dom,初始化echarts实例
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
    baseOption:{
        title: {
            show:true,
            text: 'ECharts 入门示例'
        },
        tooltip: {
            show: true
        },
        legend: {
            data: ['销量']
        },
        xAxis: {
            type:'category',
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
            },
            name: '销量',
            type: 'line',
            data: values
        }]
    },
    media:[{
        query:{
            maxWidth:500
        },
        option:{
            series: [{
                lineStyle: {
                    color: 'red'
                },
                itemStyle:{
                    borderWidth:9999999999999999
                }
            }]
        }
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
    }, 100)
})

myChart.on('click', (e) => {
    console.log(e)
    console.log(e.data);
    console.log(e.name);
    window.open(`http://www.baidu.com/?time=${e.name}`)
})