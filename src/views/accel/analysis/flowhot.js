function moment(input, format = 'yyyy-MM-dd hh:mm:ss') {
  const date = new Date(input)
  if (String(date) === 'Invalid Date')
    return ''

  const makeReg = value => new RegExp(`${value}`)
  const keys = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S']
  const values = [
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    Math.floor((date.getMonth() + 3) / 3),
    date.getMilliseconds(),
  ]
  if (/(y+)/.test(format))
    format = format.replace(/(y+)/, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))

  let len = 0
  let key
  let val
  while (len < keys.length) {
    key = keys[len]
    val = values[len]
    if (makeReg(key).test(format))
      format = (format).replace(makeReg(key), (RegExp.$1.length === 1) ? val : (`00${val}`).substr((`${val}`).length))

    len++
  }
  return format
}
const dataValue = [
  2998,
  2982,
  2948,
  3008,
  3024,
  2926,
  2973,
  2948,
  3062,
  2918,
  3033,
  2948,
  3002,
  2952,
  2944,
  3037,
  2942,
  2948,
  3008,
  2948,
  2968,
  3008,
  2973,
  2952,
  2977,
  2978,
  2978,
  2918,
  3024,
  2956,
  2973,
  2948,
  3006,
  2918,
  3037,
  2978,
  2942,
  3008,
  2982,
  2973,
  2972,
  3003,
  2922,
  3008,
  2942,
  2978,
  2978,
  2918,
  3062,
  3082,
]
const start = 1704146400000
const end = 1704168000000
const data = dataValue.map((item, index) => {
  const gap = (end - start) / dataValue.length
  return [start + gap * index, item]
})
export default {
  color: ['#3cb371', '#ff7f50', '#ffa500', '#da70d6'],
  title: {
    text: '',
    x: 'center',
    textStyle: {
      fontSize: 14,
      color: '#00c1e0',
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,193,224,0.9)',
    textStyle: {
      color: '#fff',
    },
    borderColor: '#00c1e0',
    borderWidth: 1,
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '#ccc',
        width: 1,
        type: 'solid',
      },
    },
  },
  xAxis: [
    {
      type: 'time',
      boundaryGap: false,
      splitNumber: 10,
      offset: 0,
      max: 'dataMax',
      axisLabel: {
        color: '#333',
        showMaxLable: true,
        formatter(value) {
          return moment(value, 'MM-dd hh:mm:ss')
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      name: '流量',
      type: 'value',
      axisLabel: {
        color: '#333',
      },

      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
  ],
  labelLine: {
    normal: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  grid: {
    containLabel: true,
    left: 20,
    right: 20,
    top: 40,
    bottom: 10,
  },
  series: [{ name: '', yAxisIndex: 0, type: 'line', showSymbol: false, smooth: false, areaStyle: { opacity: 0.1 }, data }],
}
