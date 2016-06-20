﻿var d3 = Plotly.d3

function normal_array(mean, stddev, size) {
    var arr = new Array(size), i;
    // from http://bl.ocks.org/nrabinowitz/2034281
    var generator = (function () {
        return d3.random.normal(mean, stddev);
    }());

    for (i = 0; i < arr.length; i++) {
        arr[i] = generator();
    }
    return arr;
}

var x0 = normal_array(2, 0.45, 300);
var y0 = normal_array(2, 0.45, 300);

var x1 = normal_array(6, 0.4, 200);
var y1 = normal_array(6, 0.4, 200)

var x2 = normal_array(4, 0.3, 200);
var y2 = normal_array(4, 0.3, 200);

console.log(x0);

var data = [
    {
        x: x0,
        y: y0,
        mode: 'markers'
    }, {
        x: x1,
        y: y1,
        mode: 'markers'
    }, {
        x: x2,
        y: y2,
        mode: 'markers'
    }, {
        x: x1,
        y: y0,
        mode: 'markers'
    }
];

var layout = {
    shapes: [
        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            x0: d3.min(x0),
            y0: d3.min(y0),
            x1: d3.max(x0),
            y1: d3.max(y0),
            opacity: 0.2,
            fillcolor: 'blue',
            line: {
                color: 'blue'
            }
        },
        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            x0: d3.min(x1),
            y0: d3.min(y1),
            x1: d3.max(x1),
            y1: d3.max(y1),
            opacity: 0.2,
            fillcolor: 'orange',
            line: {
                color: 'orange'
            }
        },
        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            x0: d3.min(x2),
            y0: d3.min(y2),
            x1: d3.max(x2),
            y1: d3.max(y2),
            opacity: 0.2,
            fillcolor: 'green',
            line: {
                color: 'green'
            }
        },
        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            x0: d3.min(x1),
            y0: d3.min(y0),
            x1: d3.max(x1),
            y1: d3.max(y0),
            opacity: 0.2,
            fillcolor: 'red',
            line: {
                color: 'red'
            }
        }
    ],
    height: 400,
    width: 480,
    showlegend: false
}

Plotly.newPlot('myDiv', data, layout);
