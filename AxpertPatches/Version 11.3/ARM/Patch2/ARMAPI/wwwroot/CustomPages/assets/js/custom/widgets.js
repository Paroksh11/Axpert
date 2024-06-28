"use strict";var KTWidgets=function(){var e=function(e,t,a,s){var r=document.querySelector(t),o=parseInt(KTUtil.css(r,"height"));if(r){var i={series:[{name:"Profit",data:a}],chart:{fontFamily:"inherit",type:"bar",height:o,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["30%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{crosshairs:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:KTUtil.getCssVariableValue("--bs-gray-400"),fontSize:"12px"}}},yaxis:{crosshairs:{show:!1},labels:{style:{colors:KTUtil.getCssVariableValue("--bs-gray-400"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},fill:{opacity:1},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+"k"}}},colors:[KTUtil.getCssVariableValue("--bs-primary")],grid:{borderColor:KTUtil.getCssVariableValue("--bs-gray-300"),strokeDashArray:4,yaxis:{lines:{show:!0}}}},l=new ApexCharts(r,i),n=!1,h=document.querySelector(e);!0===s&&(l.render(),n=!0),h.addEventListener("shown.bs.tab",(function(e){0==n&&(l.render(),n=!0)}))}};return{init:function(){var t,a,s,r,o;t=document.getElementById("kt_lists_widget_3_chart"),parseInt(KTUtil.css(t,"height")),a=KTUtil.getCssVariableValue("--bs-gray-500"),s=KTUtil.getCssVariableValue("--bs-gray-200"),r=KTUtil.getCssVariableValue("--bs-primary"),o=KTUtil.getCssVariableValue("--bs-info"),t&&new ApexCharts(t,{series:[{name:"Net Profit",data:[40,50,65,70,50,30]},{name:"Revenue",data:[-30,-40,-55,-60,-40,-20]}],chart:{fontFamily:"inherit",type:"bar",stacked:!0,height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["12%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a,fontSize:"12px"}}},yaxis:{min:-80,max:80,labels:{style:{colors:a,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:[r,o],grid:{borderColor:s,strokeDashArray:4,yaxis:{lines:{show:!0}}}}).render(),function(){var e=document.getElementById("kt_chart_widget_1_chart"),t=parseInt(KTUtil.css(e,"height"));if(e){var a={series:[{name:"Net Profit",data:[30,30,43,43,34,34,26,26,47,47]}],chart:{fontFamily:"inherit",type:"area",height:t,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:["#50CD89"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:KTUtil.getCssVariableValue("--bs-gray-500"),fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:KTUtil.getCssVariableValue("--bs-gray-200"),width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{min:0,max:60,labels:{show:!1,style:{colors:KTUtil.getCssVariableValue("--bs-gray-500"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:["#E8FFF3"],markers:{colors:[KTUtil.getCssVariableValue("--bs-light-success")],strokeColor:[KTUtil.getCssVariableValue("--bs-success")],strokeWidth:3}};new ApexCharts(e,a).render()}}(),function(){var e=document.getElementById("kt_charts_widget_2_chart"),t=parseInt(KTUtil.css(e,"height")),a=KTUtil.getCssVariableValue("--bs-gray-500"),s=KTUtil.getCssVariableValue("--bs-gray-200"),r=KTUtil.getCssVariableValue("--bs-primary"),o=KTUtil.getCssVariableValue("--bs-gray-200");e&&new ApexCharts(e,{series:[{name:"Net Profit",data:[50,60,70,80,70,60,70,80,90,100,80]},{name:"Revenue",data:[50,60,70,80,70,60,70,80,90,100,80]}],chart:{fontFamily:"inherit",type:"bar",height:t,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["50%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a,fontSize:"12px"}}},yaxis:{labels:{style:{colors:a,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:[r,o],grid:{borderColor:s,strokeDashArray:4,yaxis:{lines:{show:!0}}}}).render()}(),e("#kt_charts_widget_3_tab_1","#kt_charts_widget_3_chart_1",[30,40,30,25,40,45,30,20,40,25,20,30],!0),e("#kt_charts_widget_3_tab_2","#kt_charts_widget_3_chart_2",[25,30,25,45,30,40,30,25,40,20,25,30],!1),function(){var e=document.getElementById("kt_chart_widget_4_chart"),t=parseInt(KTUtil.css(e,"height"));if(e){var a={series:[74],chart:{fontFamily:"inherit",height:t,type:"radialBar",offsetY:0},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{margin:0,size:"70%"},dataLabels:{showOn:"always",name:{show:!0,fontSize:"13px",fontWeight:"700",offsetY:-5,color:KTUtil.getCssVariableValue("--bs-gray-500")},value:{color:KTUtil.getCssVariableValue("--bs-gray-700"),fontSize:"30px",fontWeight:"700",offsetY:-40,show:!0}},track:{background:KTUtil.getCssVariableValue("--bs-light-primary"),strokeWidth:"100%"}}},colors:[KTUtil.getCssVariableValue("--bs-primary")],stroke:{lineCap:"round"},labels:["My Achievements"]};new ApexCharts(e,a).render()}}()}}}();KTUtil.onDOMContentLoaded((function(){KTWidgets.init()}));
//# sourceMappingURL=widgets.js.map