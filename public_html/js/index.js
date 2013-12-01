/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
//    $.ajax({
//        type: "GET",
//        url: 'js/userChild.json',
//        async: false,
//        success: function(parent) {
//            
//        }
//    });
    test();
    commonPopulateDetailsUsingAnchor();
});

var data = [
    {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 4.0",
        "platform": "Win 95+",
        "version": 4,
        "grade": "<a href='#' class='hi'>Trident</a>"
    },
    {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 4.0",
        "platform": "Win 95+",
        "version": 4,
        "grade": "X"
    },
    {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 4.0",
        "platform": "Win 95+",
        "version": 4,
        "grade": "X"
    },
    {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 4.0",
        "platform": "Win 95+",
        "version": 4,
        "grade": "X"
    }, {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 4.0",
        "platform": "Win 95+",
        "version": 4,
        "grade": "X"
    },
    {
        "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
        "browser": "Internet Explorer 5.0",
        "platform": "Win 95+",
        "version": 5,
        "grade": "C"
    }
];

function test() {
    for (var i = 0; i < this.data.length; i++) {
        var arr = [];
        var table = "<table class='dbOperator' id=element" + i + "/>";
        var id = "#element" + i;
        $('#here_table').append(table);
        arr.push(this.data[i]);
        createTable(id, arr);
    }
    $("thead").remove();
    $("table tr").removeClass("odd");
    
    $("table tr").removeClass("even");
    $("table tr td").removeClass("sorting_1");
}

function createTable(id, tmpdata) {
    console.log(JSON.stringify(tmpdata));
    $(id).dataTable({
        "sDom": 't',
        "asSorting": false,
        "aaData": tmpdata,
        "aoColumns": [
            {"mDataProp": "engine", "sWidth": "300px"},
            {"mDataProp": "platform", "sWidth": "300px"},
            {"mDataProp": "version", "sWidth": "300px"},
            {"mDataProp": "grade", "sWidth": "300px"}
        ]
    });
}

function commonPopulateDetailsUsingAnchor() {
    var thisObj = this;
    $("a.anchorClickTripSummary").click(function() {
        $(this).parent().parent().parent().parent().parent().append("<table id='extra'/>");
        initTable();
    });
    $("a.hi").click(function() {
        $("#extra").remove();
    });
}
;

function initTable() {
    $("#extra").dataTable({
        "sDom": 't',
        "asSorting": false,
        "bDestroy": true,
        "aaData": [
            {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 4.0",
                "platform": "Win 95+",
                "version": 4,
                "grade": "X"
            },
            {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 4.0",
                "platform": "Win 95+",
                "version": 4,
                "grade": "X"
            },
            {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 4.0",
                "platform": "Win 95+",
                "version": 4,
                "grade": "X"
            },
            {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 4.0",
                "platform": "Win 95+",
                "version": 4,
                "grade": "X"
            }, {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 4.0",
                "platform": "Win 95+",
                "version": 4,
                "grade": "X"
            },
            {
                "engine": "<a href='#' class='anchorClickTripSummary'>Trident</a>",
                "browser": "Internet Explorer 5.0",
                "platform": "Win 95+",
                "version": 5,
                "grade": "C"
            }
        ],
        "aoColumns": [
            {"mDataProp": "engine", "sWidth": "300px"},
            {"mDataProp": "platform", "sWidth": "300px"},
            {"mDataProp": "version", "sWidth": "300px"},
            {"mDataProp": "grade", "sWidth": "300px"}
        ]
    });
    $("thead").remove();
    $("table tr").removeClass("odd");
    $("table tr").removeClass("even");
    $("table tr td").removeClass("sorting_1");
}