﻿// global variables
var isMozilla;
var objDiv = null;
var originalDivHTML = "";
var DivID = "";
var over = false;
var addHeader = "";
var fillGridDatatbl = "";
var shouldFaceUser = false;
var flipCamera = false;
var gridDummyRows = false;
var gridDummyRowVal = new Array;
var AxpGridForm = "popup";
var fldmultiSelectdep = false;
var dcLayoutType="default";
var isDcLayoutSelected=false;
var formLabelJSON=[];
var buttonFieldFontJSON=[];
var saveValueFlag = "F";
var sql_editor_test = "";
var sql_editor_depflds = "";
var dynamicMobileResolution = function () {
    if ($(".grid-stack").hasClass("dynamicRunMode")) {
        if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <=
            renderGridOptions.minWidth) {
            $(".grid-stack").addClass("grid-stack-one-column-mode");
        } else if ($(".tileLayoutDiv").length == 0) {
            $(".grid-stack").removeClass("grid-stack-one-column-mode");
        }

    }
}

$j(document).ready(function () {
    AxpGridForm = AxpGridFormCols != "" ? AxpGridFormCols.split("♠")[0] : "popup";
    if (theMode == "design") {
        $(callParentNew("splitIcon", "id")).css({ "display": "" }).removeClass("hide");
        $(callParentNew("spiltHeading", "class")).css({ "display": "" }).removeClass("hide");
    }

    typeof commonReadyTasks == 'function' ? commonReadyTasks() : "";
    if (typeof isTstPostBackVal != "undefined" && isTstPostBackVal != "") {
        var resval = isTstPostBackVal.split("*$*");
        //isTstPostBackVal = "";
        var wBdrHtml = resval[0];
        if (typeof isWizardTstruct != "undefined" && isWizardTstruct) {
            $("#dvlayout").prepend($("#breadcrumb-panel").detach());
            $("#heightframe").append($("#formContainer").detach());
            $("#heightframe").append($("#toolBarBtns").detach());
        }
        $("#wBdr").html("");
        $("#wBdr").prepend(wBdrHtml);
        var toolBarHtml = resval[1];
        if (typeof isWizardTstruct == "undefined" || isWizardTstruct == false) {
            $("#tstIcons").html("");
            $("#tstIcons").prepend(toolBarHtml);
        }
    }
    $("#btnSaveTst").prop({ 'value': callParentNew('lcm')[392], 'title': eval(callParent('lcm[392]')) });
    $("#New").prop({ 'value': callParentNew('lcm')[393], 'title': eval(callParent('lcm[393]')) });
    $(callParentNew("btn_iSDuplicate")).hide();
    $(callParentNew("btn_nxclkDuplicate")).hide();
    callParentNew("sqlRestCallInitiated=", false);
    callParentNew("beforeRestCallId=", "");
    SetFormDirty(false);
    AxpIviewDisableSplit = AxpIviewDisableSplit.toLowerCase();
    if (!isMobile && isTstPop.toLowerCase() == "false") {
        if (AxpIviewDisableSplit != undefined && AxpIviewDisableSplit == "false") {
            $(callParentNew("split-btn", "class")).css({ "display": "" }).removeClass("hide");
            $(callParentNew("split-btn-vertical", "class")).css({ "display": "" }).removeClass("hide");
        }
        else if (AxpIviewDisableSplit === "true") {
            $(callParentNew("splitIcon", "id")).addClass("hide");
            $(callParentNew("spiltHeading", "class")).addClass("hide");
            // $(callParentNew("split-btn-vertical", "class")).addClass("hide");
        }
        else if (AxpIviewDisableSplit === "") {
            $(callParentNew("splitIcon", "id")).css({ "display": "" }).removeClass("hide");
            $(callParentNew("spiltHeading", "class")).css({ "display": "" }).removeClass("hide");
        }
    }
    else {
        $(callParentNew("split-btn", "class")).addClass("hide");
        $(callParentNew("split-btn-vertical", "class")).addClass("hide");
    }

    if (AxpIsAutoSplit.toLowerCase() == "true" && callParentNew("isTstructSplited") === false) {
        callParentNew(`assocateIframe(true)`, 'function');
    }
    var glangType = eval(callParent('gllangType'));
    if (glangType === "ar") {
        //        $('head').append('<link rel="stylesheet" href="../ThirdParty/bootstrap_rtl.min.css" type="text/css" />');
        $('[data-toggle=popover]').each(function () {
            $(this).data('placement', 'left');
        });
    }


    $ == undefined ? $ = $j : "";
    try {
        AxBeforeTstLoad();
    }
    catch (ex) {
        $j('div#wBdr').show();
        ShowDimmer(false);
    }
    var t0 = performance.now();
    AxStartTime = new Date();
    $(document).on("click", "#icons,#btnSaveTst", function (e) {
        if (actionCallFlag != actionCallbackFlag) {
            e.stopPropagation;
            e.preventDefault();
            $("#icons,#btnSaveTst").css({ "pointer-events": "none" });
            return;
        }
    })
    try {
        switchTstructMode();
        GetFormDetails();
        loadingNew();
        LoadGridScript();
        AxAutoGenDeps = GetDependentArray();
        AddVisTabDcsInArray();
        OnTstructLoad();
        SetFieldSetCarryValue();
        AxpFileFields();
        if (typeof isTstPostBackVal != "undefined" && isTstPostBackVal != "") {
            isTstPostBackVal = "";
            recordid = $("#axp_recid1000F1").val();
            $j("#recordid000F0").val($("#axp_recid1000F1").val());
        }
        if (typeof isWizardTstruct != "undefined" && isWizardTstruct) {
            $("#wizardFormContainer").append($("#formContainer").detach());
            $("#wizardFormContainer").append($("#attachment-overlay").detach());
        }
    }
    catch (ex) {
        $j('div#wBdr').show();
        ShowDimmer(false);
    }
    if (gl_language == "ARABIC")
        $j("#pagebdy").css("direction", "rtl");
    SetGridBtnAccess();
    if (mode != "design")
        LoadEvents();

    $(window).resize(dynamicMobileResolution);


    CheckCustFooter();
    CheckCustomTStSave();
    SetAutoCompAccess("");
    FocusOnFirstField("form");
    SetFocusFormControl();
    try {
        AxAfterTstLoad();
    }
    catch (ex) { }
    //DisplaySearchDlg();
    if (AxIsTstructLocked) {
        LockTstruct();
    }
    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();


    if ($j(".clsPrps").length > 0) {
        $j("#tgPurpose").css("display", "inline-block");
    }
    else {
        $j("#tgPurpose").css("display", "none");
    }
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });
    checkSuccessAxpertMsg();
    if (eval(callParent('isPrintPDFClick')))
        $j(".printhtmltopdf").click();

    if (eval(callParent('isSaveAndPrintClick'))) {
        var isSPValues = [];
        isSPValues = eval(callParent('isSavePrintValues'));
        OpenPdfFile(isSPValues[0], isSPValues[1], isSPValues[2], isSPValues[3], "");
        eval(callParent('isSaveAndPrintClick') + "= false");
        eval(callParent('isSavePrintValues') + "=[]");
    }

    makeFieldInitCap();
    var t1 = performance.now();
    //console.log("Call to form load took " + (t1 - t0) + " milliseconds.");

    $("div").scroll(function () {
        $('#ui-datepicker-div').hide();
    });
    //$("#editUpdateButton2").click(function (e) {
    //    $('#ui-datepicker-div').hide(); // This is the preferred method.
    //});

    //if the tstruct field is axp-url (ie, field name starts with axp_url_) then make textbox hidden & make label has hyperlink
    $("[data-axp-url]").each(function () {
        $(this).after('<br/>')
        inputId = $(this).attr("for");
        text = $(this).text();
        $(this).text('');
        $("#" + inputId).attr("type", "hidden");
        urlValue = $("#" + inputId).val();
        url = $("#" + inputId).val() == "" ? "javascript:void(0);" : "window.open('" + urlValue + "','newwindow','width=600,height=500')"; //open link in window only for tstruct edit
        $("#" + inputId).after("<a style='cursor:pointer' onclick=" + url + ">" + text + "</a>");
    });

    //due to this code isbund getting effect 
    //$(".fldAutocomplete").each(function () {
    //    var fldId = $(this).attr("id");
    //    UpdateAssignedFld(fldId)
    //});

    if (typeof hideToolBar != "undefined" && hideToolBar && $("#design").length == 0 && theMode != "design") {
        var srchBarHt = 28; //Search bar height
        $("#searchBar").hide();
        $(".dvheightframe").first().css("top", "0px");
        if (typeof isWizardTstruct != "undefined" && isWizardTstruct)
            $("#wizardBodyContent").height($("#wizardBodyContent").height() + srchBarHt);
        else {
            srchBarHt = srchBarHt + 5 + 8; //Search bar height + Padding + Margin
            $("#pagebdy").height($("#pagebdy").height() + srchBarHt);
            $(".dvheightframe").first().attr("style", $(".dvheightframe").first().attr("style") + ";height:" + ($(".dvheightframe").first().height() + srchBarHt) + "px !important;")
        }
    }

    var curFrameObj = $(window.frameElement);
    if (curFrameObj.attr("id") === "axpiframe" || curFrameObj.attr("id") === "homePageDynamicFrame" || curFrameObj.attr("id").startsWith("homePageFrame")) {
        iframeindex = 1;
        $j("#goback").hide();
    }
    if (callParentNew("IsfieldaddInDesignMode")) {
        callParentNew("IsfieldaddInDesignMode=", false)
        $('.grid-stack').addClass('dirty');
    }


    if (isMobile) {
        $("#wizardHeader").addClass("mobileHeader");
        $("#design").hide();
        $.each(DCIsGrid, function (i, data) {
            if (data === "True") {
                $("#wrapperForEditFields" + (i + 1)).removeClass("hide");
                $("#wrapperForEditFields" + (i + 1)).addClass("mobilewrapperForEditFields");
                if ($(".wrapperForGridData" + (i + 1) + " table tbody tr").length == 0 && !axInlineGridEdit)
                    $("#colScroll" + (i + 1)).hide();
                if (axInlineGridEdit)
                    $(".editWrapTr").hide();
                $(".editLayoutFooter").hide();
                $("#divDc" + (i + 1) + " .grdButtons").addClass('hide');
                let gridButton = $("#divDc" + (i + 1) + " .grdButtons").html();
                $("#wrapperForEditFields" + (i + 1)).append('<div class="clearfix"></div><div class="grdButtons btnMobile hide">' + gridButton + '</div>');
            }
        });
    }

    if (!isMobile) {
        $j(".gridoptions").off('click.gridoptionsa');
        $j(".gridoptions").on("click.gridoptionsa", function (e) {
            let dId;
            if (typeof $(this).closest("a") != "undefined" && $(this).closest("a").length > 0) {
                dId = $(this).closest("a").attr("id").substring(3);
                $("#divDc" + dId + " .grdButtons").css({ "left": ($("#" + $(this).closest("a").attr("id")).offset().left - 20) + "px" });
            }
            else if (typeof $(this).closest("div").attr("id") != "undefined" && !isWizardTstruct) {
                dId = $(this).closest("div").attr("id").substring(4);
                if ($('body').hasClass('btextDir-ltr')) {
                    $("#divDc" + dId + " .grdButtons").css({ "left": ($("#" + $(this).closest("div").attr("id")).offset().left - 20) + "px" });
                }
                else {
                    $("#divDc" + dId + " .grdButtons").css({ "right": ($("#" + $(this).closest("div").attr("id")).offset().right + 20) + "px" });
                }

            }
            else {
                dId = $(this).parent().next(".dvdcframe").attr("id").substring(8);
                $("#divDc" + dId + " .grdButtons").css("left", $("#" + $(this).parent().next("div").attr("id")).offset().left + 20);
            }
            if ($("#divDc" + dId + " .grdButtons").hasClass("hide"))
                $("#divDc" + dId + " .grdButtons").removeClass("hide");
            else
                $("#divDc" + dId + " .grdButtons").addClass("hide");
        }).on('mouseenter', function () {
            if (typeof $(this).closest("ul#myTab") != "undefined" && $(this).closest("li.active").length > 0)
                $(this).trigger('click');
            else if ($(this).closest("div[id^=head]").length > 0)
                $(this).trigger('click');
            else if ($(this).closest("div[id^=grdOptId]").length > 0)
                $(this).trigger('click');
        });

        $("#heightframe").off('keydown.heightframea');
        $("#heightframe").on("keydown.heightframea", function (event) {
            if (event.keyCode == 40 && $(this).find(".grdUlButtons").not('.hide').length > 0) {
                var optionDiv = $(this).find(".grdUlButtons").not('.hide').closest(".mainIframe").attr("id");
                if ($("#" + optionDiv + " .grdUlButtons ul li").hasClass("grdliHover")) {
                    let liIndex = $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").index();
                    $("#" + optionDiv + " .grdUlButtons ul li").removeClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li:not([style*='display:none']):eq(" + (liIndex) + ")").addClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").children().focus();
                }
                else {
                    $("#" + optionDiv + " .grdUlButtons ul li:not([style*='display:none'])").first().addClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").children().focus();
                }
            }
            else if (event.keyCode == 38 && $(this).find(".grdUlButtons").not('.hide').length > 0) {
                var optionDiv = $(this).find(".grdUlButtons").not('.hide').closest(".mainIframe").attr("id");
                if ($("#" + optionDiv + " .grdUlButtons ul li").hasClass("grdliHover")) {
                    let liIndex = $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").index() - $("#" + optionDiv + " .grdUlButtons ul li:hidden").length;
                    $("#" + optionDiv + " .grdUlButtons ul li").removeClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li:not([style*='display:none']):eq(" + (liIndex - 1) + ")").addClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").children().focus();
                }
                else {
                    $("#" + optionDiv + " .grdUlButtons ul li:not([style*='display:none'])").last().addClass("grdliHover");
                    $("#" + optionDiv + " .grdUlButtons ul li.grdliHover").children().focus();
                }
            }
        });

        $j(document).on("click", "body", function (e) {
            if (e.target.className != "" && e.target.className != "gridoptions glyphicon glyphicon-chevron-down" && $(".gridoptions").length > 0) {
                let dId;
                if (typeof $(".gridoptions").closest("a") != "undefined" && $(".gridoptions").closest("a").length > 0) {
                    $(".gridoptions").closest("a").each(function () {
                        dId = $(this).attr("id").substring(3);
                        $("#divDc" + dId + " .grdButtons").addClass("hide");
                    })
                }
                else if (typeof $(".gridoptions").closest("div").attr("id") != "undefined" && !isWizardTstruct) {
                    $(".gridoptions").closest("div").each(function () {
                        dId = $(this).attr("id").substring(4);
                        $("#divDc" + dId + " .grdButtons").addClass("hide");
                    })
                }
                else {
                    $(".gridoptions").closest("div").each(function () {
                        if (typeof $(this).next(".dvdcframe").attr("id") != "undefined") {
                            dId = $(this).next(".dvdcframe").attr("id").substring(8);
                            $("#divDc" + dId + " .grdButtons").addClass("hide");
                        }
                    })
                }
            }
            if (e.target.className != "workflowOptions icon-arrows-down downarrow" && $(".workflowOptions").length > 0) {
                $(".wfselectbox").addClass("hide");
            }
        });
    }

    $j("input:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),select:not([id=selectbox]),textarea:not(#txtCommentWF):not(.labelInp),input[type=checkbox],li.dropdown-chose").bind("keydown", function (e) {
        if (isAutoComSelected != false) {
            var keyCode = e.keyCode || e.which;
            var tabFldId = $(this);
            if ($(this).hasClass("fldAutocomplete"))
                return;
            if (keyCode == 9 && !e.shiftKey) {
                var curFldTabOrder = $(this).closest("[class*=fldindex]").data("dataindex");
                let TabFldDc;
                if (typeof $(this).attr("id") != "undefined")
                    TabFldDc = $(this).attr("id").substring($(this).attr("id").lastIndexOf("F") + 1, $(this).attr("id").length);
                else if ($(this).hasClass("tokenSelectAll"))
                    TabFldDc = $(this).closest("div").attr("name").substring($(this).closest("div").attr("name").lastIndexOf("F") + 1, $(this).closest("div").attr("name").length);
                var listDivTabOrder = [];
                $(this).closest("#divDc" + TabFldDc).find(".rowDUMMY").find("[class*=fldindex]").each(function (ind, val) {
                    if ($(this).css('display') != "none")
                        listDivTabOrder.push($(this).data("dataindex"));
                });
                listDivTabOrder.sort(function (a, b) { return a - b });
                $.each(listDivTabOrder, function (i, indTabOr) {
                    if (curFldTabOrder < indTabOr) {
                        var NextFldId = $j(tabFldId).closest("#divDc" + TabFldDc).find("[data-dataindex=" + indTabOr + "]").find("input:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),select:not([id=selectbox]),textarea:not(#txtCommentWF):not(.labelInp),input[type=checkbox]");
                        if (typeof $("#" + $(NextFldId).attr("id")).attr("disabled") == "undefined" && typeof $("#" + $(NextFldId).attr("id")).attr("readonly") == "undefined") {
                            if (!$("#" + $(NextFldId).attr("id")).hasClass("axpImg") && !$("#" + $(NextFldId).attr("id")).hasClass("fldmultiSelect")) {
                                if ($(NextFldId).length == 4)
                                    return false;
                                if ($("#" + $(NextFldId).attr("id")).hasClass("fldAutocomplete")) {
                                    $("#" + $(NextFldId).attr("id")).addClass('autoComSelWithTab');
                                    isAutoComSelWithTab = false;
                                }
                                $("#" + $(NextFldId).attr("id")).focus().select();
                                e.preventDefault();
                                return false;
                            }
                            else if ($("#" + $(NextFldId).attr("id")).hasClass("fldmultiSelect")) {
                                if ($(NextFldId).length == 4)
                                    return false;
                                $("#" + $(NextFldId).attr("id")).parent(".dropdown-mul").find(".fldmultiSelectInput").click();
                                e.preventDefault();
                                return false;
                            }
                        }
                    }
                });
            }
            else if (keyCode == 9 && e.shiftKey) {
                var curFldTabOrder = $(this).closest("[class*=fldindex]").data("dataindex");
                let TabFldDc;
                if (typeof $(this).attr("id") != "undefined")
                    TabFldDc = $(this).attr("id").substring($(this).attr("id").lastIndexOf("F") + 1, $(this).attr("id").length);
                else if ($(this).hasClass("tokenSelectAll"))
                    TabFldDc = $(this).closest("div").attr("name").substring($(this).closest("div").attr("name").lastIndexOf("F") + 1, $(this).closest("div").attr("name").length);
                var listDivTabOrder = [];
                $(this).closest("#divDc" + TabFldDc).find(".rowDUMMY").find("[class*=fldindex]").each(function (ind, val) {
                    if ($(this).css('display') != "none")
                        listDivTabOrder.push($(this).data("dataindex"));
                });
                listDivTabOrder.sort(function (a, b) { return a - b }).reverse();
                $.each(listDivTabOrder, function (i, indTabOr) {
                    if (curFldTabOrder > indTabOr) {
                        var NextFldId = $j(tabFldId).closest("#divDc" + TabFldDc).find("[data-dataindex=" + indTabOr + "]").find("input:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),select:not([id=selectbox]),textarea:not(#txtCommentWF):not(.labelInp),input[type=checkbox]");
                        if (typeof $("#" + $(NextFldId).attr("id")).attr("disabled") == "undefined" && typeof $("#" + $(NextFldId).attr("id")).attr("readonly") == "undefined") {
                            if (!$("#" + $(NextFldId).attr("id")).hasClass("axpImg") && !$("#" + $(NextFldId).attr("id")).hasClass("fldmultiSelect")) {
                                if ($(NextFldId).length == 4)
                                    return false;
                                if ($("#" + $(NextFldId).attr("id")).hasClass("fldAutocomplete")) {
                                    $("#" + $(NextFldId).attr("id")).addClass('autoComSelWithTab');
                                    isAutoComSelWithTab = false;
                                }
                                $("#" + $(NextFldId).attr("id")).focus().select();
                                e.preventDefault();
                                return false;
                            }
                            else if ($("#" + $(NextFldId).attr("id")).hasClass("fldmultiSelect")) {
                                if ($(NextFldId).length == 4)
                                    return false;
                                $("#" + $(NextFldId).attr("id")).parent(".dropdown-mul").find(".fldmultiSelectInput").click();
                                e.preventDefault();
                                return false;
                            }
                        }
                    }
                });
            }
        }
    });

    if (callParentNew("isDWB")) {
        $("#breadcrumb-panel, #design, #designStatus, #RunMode").hide();
    }

    if (typeof isWizardTstruct != "undefined" && isWizardTstruct) {
        var mainDiv = $('#wizardTstructWrapper').outerHeight(true);
        var toolBarOH = $('#toolBarBtns').outerHeight() - 41; // 41 is the default haight for first row
        var heighFrame = $("#wizardBodyFooterWrapper").outerHeight(true);
        var wizardHeader = $('#wizardHeader').outerHeight(true);
        $('#wizardBodyContent').css({ height: `calc(100vh - ${(mainDiv + toolBarOH + wizardHeader) - heighFrame}px)` });
    }
    else {
        var heighFrame = $("#heightframe").outerHeight();
        var mainDiv = $('#dvlayout').outerHeight();
        $('#heightframe').css({ height: `calc(100vh - ${(mainDiv - heighFrame)}px)` });        
    }

    // to get latitude longitude value
    if (theMode != "design" && ($.inArray("latitude", FNames) != -1) && ($.inArray("longitude", FNames) != -1)) {
        getLocation();
    }

    $(".dropdown-mul").off('click.dropdown-mula');
    $(".dropdown-mul").on('click.dropdown-mula', function (event) {
        if (typeof fldmultiSelectdep == "undefined" || (typeof fldmultiSelectdep != "undefined" && fldmultiSelectdep == false))
            MultiGroupSelectClk(event, this);
    });

    if (breadCrumbStr) {
        $("#breadcrumb-panel span").removeClass("tstivtitle");
        $("#breadcrumb-panel .bcrumb .menuBreadCrumb").length > 0 && $("#breadcrumb-panel .bcrumb .menuBreadCrumb").remove();
        $("#breadcrumb-panel .bcrumb").append('<span class="menuBreadCrumb"><span class="breadCrumbCaption">' + breadCrumbStr + '</span>' + $("#breadcrumb-panel span.tstivCaption").text() + '</span>');
    }

    if (isMobile) {
        $('#breadcrumb-panel').attr({
            'data-toggle': 'popover',
            'data-placement': 'bottom',
            'data-content': "",
        });

        $('#breadcrumb-panel[data-toggle=popover]').popover({
            content: $(".menuBreadCrumb").text(),
            container: 'body'
        });
    }


    if (typeof AutosaveDraft != "undefined" && AutosaveDraft == "true" && savedraftKeyCreatedtime != "") {
        loadSavedDraft(savedraftKeyCreatedtime);
        savedraftKeyCreatedtime = "";
    }

    if (typeof AutosaveDraft != "undefined" && AutosaveDraft == "true" && AutosaveDraftTime != "") {
        draftSetTimeoutObj = setInterval(SaveAsDraft, parseInt(AutosaveDraftTime));
    }

    if (typeof gridScrollBar != "undefined" && gridScrollBar == "true") {
        $('#heightframe').css({ 'overflow-x': 'scroll' });
        $(".griddivColumn").css({ "padding-left": "0", "width": "100%", "overflow": "inherit" });

    }
    hideacoptions();
    $("input.fldAutocomplete").off('click');
    $("input.fldAutocomplete").on('click', function () {
        if (typeof axpShowKeyboard != "undefined" && axpShowKeyboard == "false" && isMobile) {
            let fldId = $(this).attr("id");
            if (fldId != "" && $("#" + fldId).hasClass("custmAutoSelect"))
                $("#" + fldId).removeClass("custmAutoSelect");
        }
    });

    if (appGlobalVarsObject._CONSTANTS.compressedMode) {
        appGlobalVarsObject.methods.toggleCompressModeUI($('body'));
    }

    $(".glyphicon-th").off('click.glyphicon-tha');
    $(".glyphicon-th").on('click.glyphicon-tha', function (event) {
        FieldTypeTable(event, this);
    });
    $(".fldCustTable ").off('keydown.fldtblA');
    $(".fldCustTable ").on("keydown.fldtblA", function (event) {
        if (event.keyCode == 13) {
            FieldTypeTable(event, this);
        }
    });

    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $('#searchBar').on('click', 'ul.dropdown-menu [data-toggle=dropdown]', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

    if($j("#recordid000F0").val()!="" && $j("#recordid000F0").val()!="0" && $j("#savevale000F1").length>0 && $j("#savevale000F1").val()=="T")
        saveValueFlag="T";
    else
        saveValueFlag="F";
});


function hideacoptions() {
    if (typeof axpShowKeyboard != "undefined" && axpShowKeyboard == "false" && isMobile) {
        $(".autoClickddl").parent(".edit").hide();
        $(".autoinputtxtclear").hide();
        $(".virtualKeyboard").hide();
    }
    else if (typeof axpShowKeyboard != "undefined" && axpShowKeyboard == "true" && isMobile) {
        $(".autoClickddl").parent(".edit").removeAttr('style');
        $(".autoinputtxtclear").removeAttr('style');
        $(".virtualKeyboard").removeAttr('style');
    }
}

function getLocation() {
    var mobileLatLong = {};
    if (findGetParameter("recordid") > 0) {
        mobileLatLong.latitude = $("#latitude000F" + GetDcNo("latitude")).val() || 0;
        mobileLatLong.longitude = $("#longitude000F" + GetDcNo("longitude")).val() || 0;
    } else {
        try {
            var mobileAPI = callParentNew("ok");

            if (mobileAPI) {
                mobileLatLong = JSON.parse(mobileAPI.getAndroidLocation());
            }
        } catch (ex) {

        }
    }

    if (($.isEmptyObject(mobileLatLong) || mobileLatLong.latitude == 0 || mobileLatLong.longitude == 0) && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        showPosition({ coords: { latitude: mobileLatLong.latitude, longitude: mobileLatLong.longitude } });
    }

}

function showPosition(position) {
    var fldlatitude = "", fldlongitude = "";
    if (position && position.coords && position.coords.latitude != 0 && position.coords.latitude != 0 && !IsGridField("latitude") && !IsGridField("longitude")) {
        var latitudeDc = GetDcNo("latitude");
        var longitudeDc = GetDcNo("longitude");

        fldlatitude = "latitude000F" + latitudeDc;
        fldlongitude = "longitude000F" + longitudeDc;

        if ($("#" + fldlatitude).val() == "") {
            $("#" + fldlatitude).val(position.coords.latitude);//.trigger("blur");
            UpdateFieldArray(fldlatitude, "000", $("#" + fldlatitude).val(), "parent");
        }
        if ($("#" + fldlongitude).val() == "") {
            $("#" + fldlongitude).val(position.coords.longitude);//.trigger("blur");
            UpdateFieldArray(fldlongitude, "000", $("#" + fldlongitude).val(), "parent");
        }

        var files = { css: [], js: [`https://maps.googleapis.com/maps/api/js?key=${callParentNew("googleMapsApiKey")}`] };

        if (($.inArray("latlongmap", FNames) != -1)) {
            loadAndCall({
                files,
                callBack: function () {
                    var fldLatLongMap = "";
                    var latlongmapDc = GetDcNo("latlongmap");
                    fldLatLongMap = "latlongmap000F" + latlongmapDc;
                    var latLongMapField = $("#" + fldLatLongMap);
                    var position = center = { lat: parseFloat($("#" + fldlatitude).val()), lng: parseFloat($("#" + fldlongitude).val()) };
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'location': position }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                latLongMapField.val(results[0].formatted_address).trigger("blur");
                                if (latLongMapField.is("textarea")) {
                                    var map = new google.maps.Map(latLongMapField.hide().before(`<div class="${latLongMapField.attr("class")} style="${latLongMapField.attr("style")}"></div>`).prev()[0], {
                                        zoom: 8,
                                        center
                                    });

                                    var infowindow = new google.maps.InfoWindow;

                                    map.setZoom(11);
                                    var marker = new google.maps.Marker({
                                        position,
                                        map
                                    });
                                    infowindow.setContent(results[0].formatted_address);
                                    infowindow.open(map, marker);
                                }


                            }
                        }
                    });
                }
            });
        }

    }
}

$(document).on("click", ".virtualKeyboard", function () {
    $(this).parent().children("input").attr("onfocus", function (index, attr) {
        return attr == "blur()" ? null : "blur()";
    });
    $(this).parent().children("input").focus();
    $(this).children().toggleClass('green');
});

function AxpFileFields() {
    if (typeof AxpFileUploadFields != "undefined" && AxpFileUploadFields.length > 0) {
        callParentNew("tstAxpFileFlds=", true);
    }
    else
        callParentNew("tstAxpFileFlds=", false);
}

function SetFieldSetCarryValue() {
    if (recordid == "0" && (AxActiveAction == "Save" || AxActiveAction == "New")) {
        if (typeof FSetCarry != "undefined") {
            FSetCarry.forEach(function (fldSetCarry) {
                var setCaryyDcNo = GetDcNo(fldSetCarry);
                if (!IsDcGrid(setCaryyDcNo)) {
                    var fieldId = fldSetCarry + "000F" + setCaryyDcNo;
                    $.each(SetCarryFlds, function (j, value) {
                        if (value.split("♠")[0] == fieldId) {
                            SetFieldValue(fieldId, value.split("♠")[1]);
                            var fRowNo = GetFieldsRowNo(fieldId);
                            var dbRowNo = GetDbRowNo(fRowNo, setCaryyDcNo);
                            UpdateFieldArray(fieldId, dbRowNo, value.split("♠")[1], "parent", "AutoComplete");
                        }
                    });
                }
            });
        }
        SetCarryFlds = new Array();
    }
}

function GetFldSetCarryValue() {
    try {
        if (SetCarryFlds.length > 0)
            SetCarryFlds = new Array();
        if (typeof FSetCarry != "undefined") {
            FSetCarry.forEach(function (fldSetCarry) {
                var setCaryyDcNo = GetDcNo(fldSetCarry);
                if (!IsDcGrid(setCaryyDcNo)) {
                    var fieldId = fldSetCarry + "000F" + setCaryyDcNo;
                    SetCarryFlds.push(fieldId + "♠" + $("#" + fieldId).val());
                }
            });
        }
    }
    catch (ex) { }
}

function OnMobileNewTst() {
    $("#wizardTstructWrapper wizardWrapper").remove();
    $.each(DCIsGrid, function (i, data) {
        if (data === "True") {
            $("#wrapperForEditFields" + (i + 1) + " .btnMobile").remove();
        }
    });
}

function checkIfFormChanges() {
    if ($(".grid-stack ").hasClass('dirty')) {
        isFormChange = true;
    }
    else {
        isFormChange = false;
    }
    return isFormChange;
}

function SetAutoCompAccess(act, fld) {
    try {
        if (fld == undefined) {
            $j('input.fldAutocomplete:disabled').parent().find("i").css("display", "none");
            //$j('input.fldAutocomplete:readonly').parent().find("i").css("display", "none");
        }
        else {
            if (act == "enabled")
                fld.parent().find("i").css("display", "inline-block");
            else
                fld.parent().find("i").css("display", "none");
        }
    }
    catch (ex) {
        console.log("SetAutoCompAccess-action" + act + "-msg" + ex.message);
    }

}
//to get the expression for INIT_CAP
function makeFieldInitCap(dcNo) {
    var depFldIndx = GetFldNamesIndx("axp_initcap");
    var depFldType = "";
    var initExpression = "";
    var initCapElems;
    if (depFldIndx != -1) {
        depFldType = GetExpressionType("axp_initcap", depFldIndx);
        initExpression = Expressions[depFldIndx].toString();
    }
    if (initExpression != "") {
        initExpression = initExpression.split(',');
        for (var i = 0; i < initExpression.length; i++) {
            if (dcNo) {
                if ($("#DivFrame" + dcNo).find('input[id*="' + initExpression[i] + '"]').length > 0)
                    $("#DivFrame" + dcNo).find('input[id*="' + initExpression[i] + '"]').addClass('initCapField');
            } else {
                if ($("input[id^='" + initExpression[i] + "']").length > 0)
                    $("input[id^='" + initExpression[i] + "']").addClass('initCapField');
            }
        }
        //dcNo ? initCapElems = $("#DivFrame" + dcNo + " .initCapField") : initCapElems = $(".initCapField");
        //initCapElems.blur(function (e) {
        //    var capitalizedString = $(this).val().toLowerCase().replace(/\b[a-z]/g, function (letter) {
        //        return letter.toUpperCase();
        //    });
        //    $(this).val(capitalizedString);
        //    var fldId = $(this).attr("id");
        //    var dbRowNo = GetDbRowNo();
        //    UpdateFieldArray(fld, fldDbRowNo, fldValue, "parent", "");
        //});
    }



}

window.onbeforeunload = BeforeWindowClose;
function BeforeWindowClose() {

    if (draftTimer)
        window.clearInterval(draftTimer);
    if (window.parent.globalChange)
        SetFormDirty(false);
    if (window.opener && !window.opener.closed && window.opener.parent.tstructPop && AxActiveAction != "") {
        window.opener.parent.tstructPop = false;
        ReloadListView(window.opener.parent.listViewPage);
    }
    //RemoveTstDataObj();
    //this function is a dummy call to fire the window close event.
    var rid = $j("#recordid000F0").val();

    if (rid != "0" && AxIsTstructLocked == false && callParentNew("isLockOnRead")) {
        try {
            ASB.WebService.UnlockTStructRecord(tst, rid, false);
        }
        catch (ex) {

        }
    }
    if (axpRefreshParent == true) {
        if (window.opener.document.title = "Iview") {
            var param = window.opener.document.getElementById("hdnparamValues").value;
            var iName = window.opener.iName;
            var url = "ivtoivload.aspx?ivname=" + iName;
            var strParam = "";
            strParam = param.replace(/¿/g, "&");
            strParam = strParam.replace(/~/g, "=");
            url = url + "&" + strParam + "&axp_refresh=true";
            window.opener.document.getElementById("hdnIvRefresh").value = "true";
            window.opener.document.location.href = url;
            var browservalue = navigator.userAgent.toUpperCase();
            if (browservalue.indexOf("CHROME") > -1) {
                window.opener.document.getElementById("button1").click();
            }
        }
    }

    callParentNew("removeOverlayFromBody()", "function"); //if any remodal popup is opened & user clicks on browser back button then remove window - header, footer & menu overlay css
}
function CheckCustomTStSave() {
    var custActFld = $j("#axp_savedirective000F1");
    var custActFldVal = "";
    var tstIviewname = "";
    var tstParams = "";
    var ivParam = "";
    var tstRedirect = "";

    custActFldVal = custActFld.val();
    if (custActFldVal != undefined) {
        if (custActFldVal.indexOf("$") > -1) { // as a pop up 
            custActFldVal = GetPopUpVal(custActFldVal);
        }
        if (custActFldVal.indexOf("~") > -1) {
            tstRedirect = custActFldVal.split('~');
            if (tstRedirect[1] != undefined) {
                tstParams = tstRedirect[1].split('*');
                if (tstRedirect[0] != undefined && tstRedirect[0] != "") {
                    if (tstRedirect.indexOf("iview") > -1) {
                        axCustomTstAction = "ivtoivload.aspx?ivname=" + tstParams[0];
                        if (tstParams[1] != undefined && tstParams[1] != "") {
                            axCustomTstAction += "&" + tstParams[1];
                        }
                    }
                        //tstruct~transid*paramname1=value1^paramname2=value2
                    else if (tstRedirect.indexOf("tstruct") > -1) {
                        axCustomTstAction = "tstruct.aspx?transid=" + tstParams[0];
                        if (tstParams[1] != undefined && tstParams[1] != "") {
                            axCustomTstAction += "&" + tstParams[1];
                        }
                    }
                }
            }

        }
        else {
            axCustomTstAction = custActFld.val();
        }
    }
}
function GetPopUpVal(custActFldVal) {

    var dolrIndx = custActFldVal.indexOf("$");
    var sIndx = custActFldVal.indexOf("*");
    if (sIndx > -1)
        AxPopup = custActFldVal.substring(dolrIndx + 1, sIndx);
    else
        AxPopup = custActFldVal.substring(dolrIndx + 1);

    custActFldVal = custActFldVal.replace("$" + AxPopup, '');

    return custActFldVal;

}
//NOTE:Any modification in the below function should be checked with the AssignJQueryEvents function in tstruct.js
function LoadEvents(dvId) {
    $('[data-toggle="tooltip"]').tooltip();
    CKEDITOR.on('instanceReady', function (event) {
        event.editor.on('change', function () {
            currentCK = this.name;
        });
        isReadyCK = true;
    });
    //asigning sql,expression editors   
    createEditors();


    var autoDiv = dvId == undefined ? "#divDc1" : dvId;
    createAutoComplete(autoDiv + " .fldAutocomplete");
    $j(autoDiv).find(".fldAutocomplete").autocomplete();

    var jsonData = JSON.parse("{\"data\":[]}")
    $('.dropdown-mul').dropdown({
        data: jsonData.data,
        //extendProps: extendProps,
        //limitCount: 40,
        multipleMode: 'label',
        choice: function () {
            MultiGroupSelectChoice(this);
        }
    });

    if (recordid != "0" && multiSelectLoadVals.length > 0) {
        $.each(multiSelectLoadVals, function (index, elem) {
            var msFldname = elem.split("♦")[0];
            var msFldsVals = elem.split("♦")[1];
            $("#" + msFldname).attr("data-selected", msFldsVals);
            let msSep = $("#" + msFldname).attr("data-sep");
            $.each(msFldsVals.split(msSep), function (index, el) {
                $("#" + msFldname).next(".dropdown-display-label").find(".dropdown-chose-list").prepend("<span class=\"dropdown-selected\">" + el + "<i class=\"del\" data-id=\"" + el + "\"></i></span>")
            });
        });
    }

    createCheckListTokens(dvId);

    //function call for focus event of textarea, textbox, checkbox, checklist & radiogroup.
    $j("input:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),select:not([id=selectbox]),textarea:not(#txtCommentWF):not(.labelInp)").focus(function () {
        MainFocus($j(this));
    });

    var glType = eval(callParent('gllangType'));
    var dtpkrRTL = false;
    if (glType == "ar")
        dtpkrRTL = true;
    else
        dtpkrRTL = false;
    var glCulture = eval(callParent('glCulture'));
    var dtFormat = "dd/mm/yy";
    if (glCulture == "en-us")
        dtFormat = "mm/dd/yy";
    $j(".date").datepicker({
        isRTL: dtpkrRTL,
        dateFormat: dtFormat,
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+100",
        beforeShow: function (textbox, instance) {
            //$('#ui-datepicker-div').css({
            //    position: 'absolute',
            //    top: -20,
            //    left: 5
            //});
            //$('#pagebdy .dvheightframe').append($('#ui-datepicker-div'));
            //$('#ui-datepicker-div').hide();
        }
    });


    $(document).off("mousedown.designer").on("mousedown.designer", ".tstructDesignMode .grid-stack-item, .tstructDesignMode .ui-resizable", function () {
        setSelectedDesignElement(this);
    });


    $(document).off("dragstop.designer").on("dragstop.designer", ".tstructDesignMode.grid-stack", function (event, ui) {
        selectedDesignObject.elem = event.target;
    });

    $(document).off("change.designer").on("change.designer", ".tstructDesignMode.grid-stack", function (event, ui) {
        setSelectedDesignElement(selectedDesignObject.elem);
    });

    $(document).off("dragstart.designer resizestart.designer").on("dragstart.designer resizestart.designer", ".tstructDesignMode.grid-stack", function (event, ui) {
        $(this).addClass('dirty');
        changeStatus("notSaved");
    });

    $(document).off("gsresizestop.designer").on("gsresizestop.designer", ".tstructDesignMode.grid-stack", function (event, ui) {
        var newHeight = $(ui).attr('data-gs-height');
        var gsiPX = gsiPixels(newHeight);
        gsiHeight = { "height": gsiPX.toString() + "px" };
        if (typeof CKEDITOR.instances[$(ui).find("textarea").attr("id")] != "undefined") {
            //var ckHeight = CKEDITOR.instances[$(currentElm).attr("id")].resize( '100%', gsiHeight.height, true );
            CKEDITOR.instances[$(ui).find("textarea").attr("id")].resize('100%', gsiPX);
        }
    });

    TimePickerEvent(dvId, dtpkrRTL);
    //function call on blur event of textarea, textbox.
    $j("textarea:not(#comment):not(.labelInp),[id]:text:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),[id][type=number]:not([id=searstr],[class=AxAddRows],[class=AxSearchField]),:password").blur(function (event) {
        if (theMode != "design")
            MainBlur($j(this));
    });

    $j(document).mousedown(function (e) {
        if (e.target.id != "") {
            blurNextPreventElement = new Object();
            blurNextPreventId = e.target.id;
        } else {
            blurNextPreventId = "";
            blurNextPreventElement = e.target;
        }
    });

    //function call on change event of dropdown.
    $j("select:not(#ddlSearch,#selectbox):not(#designLayoutSelector)").change(function () {
        if ($j(this).find(':selected').text().indexOf("+ Add") == -1) {
            MainBlur($j(this));
            $j(this).blur();
            $j(this).focus();
        }
        else {
            if ($j(this).val() != null || $j(this).val() != undefined) {
                var ddlrefval = $j(this).val();
                $j(this).val("");
                eval(ddlrefval);
            }
        }
    });

    //function call on blur event of checkbox, checklist & radiogroup.
    $j(":checkbox:not([class=chkAllList]):not(.tokenSelectAll):not(#ckbCompressedMode):not(#ckbStaticRunMode):not(#ckbWizardDC):not('[id^=ckbGridStretch]'),:radio").not(".chkShwSel").change(function () {
        MainBlur($j(this));
    });

    //function call on keydown event in a textarea.
    $j("textarea:not(.labelInp)").keydown(function (event) {
        LimitText($j(this));
    });

    //function call on keyup event in a textarea.
    $j("textarea:not(.labelInp)").keyup(function () {
        LimitText($j(this));
    });

    //function call on keypress event in a numeric field.
    $j(".number").keypress(function (event) {
        return CheckNumeric(event, $j(this).val());
    });

    //function on click of picklist image
    $j(".pickimg").click(function () {
        DisplayPickList($j(this));
    });


    $j(".picklisttxtclear").hover(function (e) {
        if ($j(this).parent(".picklist").find("input").prop("disabled") == true) {

            $j(this).css("cursor", "no-drop");

        }
    });

    //function on click of picklisttxtclear to clear current text in picklist
    $j(".picklisttxtclear").click(function (e) {

        if ($j(this).parent(".picklist").find("input:visible").prop("disabled") == true || $j(this).parent(".picklist").find("input:visible").prop("readonly") == true) {

            return;
        }
        if ($j(this).parent(".picklist").find("input:visible").val() != "") {
            $j(this).parent(".picklist").find("input:visible").val("");
            MainFocus($j(this).parent(".picklist").find("input:visible"));
            $j(this).parent(".picklist").find("input:visible").trigger("blur");
        }
    });

    //function on click of autoinputtxtclear to clear current text in autocomplete 
    $j(".autoinputtxtclear").click(function (e) {
        var autoFld = $j(this).parent(".autoinput-parent").find(".fldAutocomplete");
        if (autoFld.prop("disabled") == true || autoFld.prop("readonly") == true) {
            return;
        }
        if (autoFld.val() != "") {
            MainFocus(autoFld);
            autoFld.val("");
            var autfldName = autoFld.attr("id");
            var fieldName = autfldName.substring(0, autfldName.lastIndexOf("F") - 3);
            if (AutoFillFlds[fieldName] == undefined) {
                //AxWaitCursor(true);
                //ShowDimmer(true);
                $(autoFld).addClass("blurme").autocomplete("search", "");
            }
            else
                autoFld.trigger("blur");
        }
    });

    // function on keypress of picklist input '#tblPickData tr td'
    $j(".inputClass2").keydown(function (event) {
        if (event.keyCode == 13 && pickStatus == true) {
            DisplayPickList($j(this));
        }
        pickStatus = true;
    });

    $j("#searchoverrelay").unbind("keypress").keypress(function (e) {
        if (e.keyCode == 13) { // detect the enter key
            if (!valid_submit())
                return false;
        }
    });

    //function on click of image field
    $j(".axpImg").click(function () {
        if (tstructCancelled != "Cancelled") {
            var imgFld = $j(this);
            var fldName = imgFld[0].id;
            var onclickevent = document.getElementById(fldName).onclick;
            if (onclickevent == null)
                UploadImg(fldName);
        }
    });


    //$j(".axpBtn").click(function () {
    //    var obj = $j(this);
    //    if (obj.length > 0) {
    //        var rowNo = GetFieldsRowNo(obj[0].id);
    //        var dcNo = GetFieldsDcNo(obj[0].id);
    //        RegisterActiveRow(rowNo, dcNo);
    //        CallAction(obj[0].id);
    //    }
    //});

    //function on click of action buttons
    $(".axpBtn").off("click.axpBtn").on("click.axpBtn", function () {
        var obj = $j(this);
        if (obj.length > 0) {
            var rowNo = GetFieldsRowNo(obj[0].id);
            var dcNo = GetFieldsDcNo(obj[0].id);
            RegisterActiveRow(rowNo, dcNo);
            CallAction(obj[0].id);
        }
    });

    $j(".rowdelete").click(function () {
        DeleteCurrentRow($j(this));
    });

    $j(".subGrid").click(function () {

        ShowPopUp($j(this));
    });

    $j("#taskListPopUp").hide();

    $j('.AxAddRows').blur(function () {
        if (!this.value || isNaN(this.value))
            return this.value = "1";
    });

    $j(".achklist").click(function () {
        $j(this).parent().next('.chkListBdr').toggle();
    });


    $j(".spandate").click(function () {
        $j(this).prev().focus();
    });

    $j(".spanTime").click(function () {
        $j(this).prev().find("input").focus();
    });

    $(document).on("keypress", dvId + " .form-group span.fa-paperclip", function (e) {
        if (e.which == "13") {
            $(this).click();
        }
    });
    $j(".rowdelete img").hover(function () {
        $j(this).attr("src", "../axpimages/icons/16x16/delete.png");
    }, function () {
        $j(this).attr("src", "../axpimages/icons/16x16/delete-fade.png");
    });

    if (parent.MainNewEdit == true) {
        $j('html').addClass("makeFullHeight");
    }
    try {
        if ($j("#middle1", parent.document).attr("src") == undefined || $j("#middle1", parent.document).attr("src").indexOf("ParamsTstruct.aspx") === -1) {
            $j(document).off("keydown").on("keydown", function (e) {
                if (e.which == 13 && $j('#dvPickList').is(':visible') && $j('#tblPickData tr.active').length > 0) {
                    if (initialSrchVal == $j("#" + $j("#tblPickData").attr("data-pick")).val()) {
                        e.stopPropagation();
                        var paramString = $j("#tblPickData tr.active td").attr("onclick");
                        paramString = paramString.substring(23, paramString.length - 2);
                        SetPickVal(paramString);
                        pickStatus = false;
                        selectedRow = 0;
                        e.which = -1;
                        //clear the value
                        initialSrchVal = "";
                    }
                    else {
                        DisplayPickList($j("#" + $j("#tblPickData").attr("data-pick")));
                    }
                }
                if (e.which == 40 && $j('#dvPickList').is(':visible') && $j('#tblPickData tr.active').length > 0) {
                    e.preventDefault();
                    e.stopPropagation();
                    pickDownn();
                    if ($("#dvPickHead .active").offset().top - $("#dvPickHead").offset().top + $("#dvPickHead .active").outerHeight() >= $("#dvPickHead").height() || $("#dvPickHead .active").offset().top - $("#dvPickHead").offset().top < 0) {
                        $("#dvPickHead").animate({
                            scrollTop: ($("#dvPickHead .active").offset().top - $("#dvPickHead").offset().top) + $("#dvPickHead .active").height()
                        }, 100);
                    }
                    return false;
                }
                if (e.which == 38 && $j('#dvPickList').is(':visible') && $j('#tblPickData tr.active').length > 0) {
                    e.preventDefault();
                    e.stopPropagation();
                    pickUpp();
                    $("#dvPickHead").animate({
                        scrollTop: ($("#dvPickHead .active").offset().top - $("#dvPickHead").offset().top) - $("#dvPickHead .active").height()
                    }, 100);
                    //    }
                    return false;
                }
            });
        }
        if ($j("#popupIframeRemodal", parent.document).attr("src") != undefined) {
            $j(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    if (IsFormDirty && $('#bootstrapModal').length === 0) {
                        $.confirm({
                            closeIcon: false,
                            title: eval(callParent('lcm[155]')),//lcm[121]
                            content: eval(callParent('lcm[121]')),
                            escapeKey: 'buttonB',
                            onContentReady: function () {
                                disableBackDrop('bind');
                            },
                            buttons: {
                                buttonA: {
                                    text: eval(callParent('lcm[164]')),
                                    btnClass: 'hotbtn',
                                    action: function () {
                                        $j('.remodal-close', parent.document).click();
                                    }
                                },
                                buttonB: {
                                    text: eval(callParent('lcm[192]')),
                                    btnClass: 'coldbtn',
                                    action: function () {
                                        disableBackDrop('destroy');
                                        return true;
                                    },

                                }
                            }
                        });
                    } else if ($('#bootstrapModal').length === 1) {
                        // do nothing;
                    } else {
                        $j('.remodal-close', parent.document).click();
                    }

                }
            });
        }
        //}
    } catch (ex) {
        console.log(ex.message);
    }


    $ == undefined ? $ = $j : "";
    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();


    if ($j(".clsPrps").length > 0) {
        $j("#tgPurpose").css("display", "inline-block");
    }
    else {
        $j("#tgPurpose").css("display", "none");
    }

    $j("input.number").on('input', function () {
        var fldVal = $j(this).val();
        var fldId = $j(this).attr("id");
        if (fldId != undefined) {
            var fName = GetFieldsName(fldId);
            var fldIndex = $j.inArray(fName, FNames);
            if (fldIndex != undefined && fldIndex > -1) {
                var maxFldLength = FMaxLength[fldIndex];
                var decimalLength = FDecimal[fldIndex];
                var fldType = FDataType[fldIndex];
                if (fldType == "Numeric" && decimalLength != undefined && decimalLength > 0) {
                    var intPartMaxLimit = maxFldLength - decimalLength - 1; //Integer Part Max Limit.  
                    if (fldVal.indexOf('.') == -1) {
                        if (fldVal.length > intPartMaxLimit) $j(this).val(fldVal.slice(0, intPartMaxLimit));
                    }
                    else if (fldVal.indexOf('.') != -1) {
                        var intPart = fldVal.substring(0, fldVal.indexOf('.'));
                        var decPart = fldVal.substring(fldVal.indexOf('.') + 1, fldVal.length);
                        if (intPart.length > intPartMaxLimit) intPart = intPart.slice(0, intPartMaxLimit);
                        if (decPart.length > decimalLength) decPart = decPart.slice(0, decimalLength);
                        $j(this).val(intPart + "." + decPart);
                    }
                }
            }
        }
    });

    $j(".workflowOptions").click(function () {
        if ($(".wfselectbox").hasClass("hide")) {
            $(".wfselectbox").removeClass("hide").css({ "left": `${($(this).parent().prev().position().left || 0) + 10}px` });
        }
        else
            $(".wfselectbox").addClass("hide");
    });
}

function createCheckListTokens(dvId) {
    //if (transid == "axstc" && $("#uploadfiletype000F1").length > 0 && $("#uploadfiletype000F1").hasClass("multiFldChk")) {
    //    $("#uploadfiletype000F1").removeAttr("data-valuelist");
    //    var source = ['bmp', 'jpg', 'jpeg', 'pjpeg', 'png', 'doc', 'gif', 'docx', 'xml', 'xls', 'ppt', 'pdf', 'txt', 'xlsx', 'pwd', 'tiff', 'tif', 'dib', 'jfif', 'heic', 'xlxs', 'csv', 'html', 'css', 'js', 'htm', 'eml', 'msg', 'pptx'];
    //    $("#uploadfiletype000F1").attr('data-valuelist', source);
    //}
    $((dvId ? "#" + dvId : "") + " .multiFldChk.form-control").each(function () {
        var thisValueList = $(this).data("valuelist");
        var source = typeof thisValueList == "object" ? thisValueList : [...new Set(
            $(this).data("valuelist").split($(this).data("separator"))
        )
        ];

        $(this).tokenfield({
            autocomplete: {
                source,
                delay: 100,
                minLength: 0,
                appendTo: ".dvheightframe",
                create: function (event, ui) {
                    var heightOfField = "";
                    if (theMode == "design") {
                        $(this).prevAll('.multiFldChk').parent().css({ "height": "calc(100% - 2px)", "width": "" });
                        $(this).closest('.autoinput-parent').css("height", "calc(100% - 5px)");
                    }
                    else {
                        heightOfField = $(this).prevAll('.multiFldChk').outerHeight();
                        $(this).prevAll('.multiFldChk').parent().css({ "max-height": heightOfField + "px", "overflow-x": "auto", "width": "" });
                        // $(this).append('<input type="checkbox" class="tokenSelectAll" onclick="checkAllCheckBoxTokens(this);">');
                    }
                    $(this).data().uiAutocomplete.classesElementLookup["ui-autocomplete"].data("hiddenAutoComp", this.id.replace("-tokenfield", ""));
                },
                open: function (event, ui) {
                    var preasentAutoId = $(this).data('ui-autocomplete').menu.element.attr('id');
                    var presAutFld = $("#" + preasentAutoId);
                    var scrollFrame = $('.dvheightframe');
                    var leftOfUl = $("#" + preasentAutoId).offset().left + "px";
                    var topOfUl = ($("#" + preasentAutoId)[0].offsetTop + $("#" + preasentAutoId)[0].offsetHeight + $(".dvheightframe")[0].offsetTop) - $(".dvheightframe")[0].scrollTop + "px";
                    var widthOfUl = $("#" + preasentAutoId)[0].offsetWidth + "px";
                    $("#" + preasentAutoId).append("<li class='autoComFooter checklistfooter' style='float: left;z-index:9999999;width:" + widthOfUl + " ;margin-top:1px solid;top: " + topOfUl + ";left:" + leftOfUl + ";border-top: 1px solid #ccc;background: #f5f5f5; padding-left: 5px;';><input type='checkbox'  class='tokenSelectAll' onclick='checkAllCheckBoxTokens(this)'>Select All</input></li>");
                    //<input type="checkbox" class="tokenSelectAll" onclick="checkAllCheckBoxTokens(this);">
                    //  $(scrollFrame).append('');
                    var presAutFldHt = presAutFld.offset().top + presAutFld.outerHeight();
                    var scrolFrameHt = $('.dvheightframe').outerHeight();
                    if (presAutFldHt > scrolFrameHt) {
                        scrollFrame.scrollTop((scrollFrame.scrollTop()) + (presAutFldHt - scrolFrameHt));
                    }
                },
                search: function (event, ui) {


                    var prevInput = $(this).prevAll('input')[1];
                    //src = $(prevInput).data("valuelist").split($(prevInput).data("separator"));

                    //var index = $.inArray(ui.items.value, src);
                    //src.splice(index, 1);

                    var listofObject = [];
                    var listarray = [];
                    if (typeof ($(prevInput).data("valuelist")) == "object") {
                        for (let valuelist of $(prevInput).data("valuelist")) {
                            listofObject.push(valuelist.value);
                        }
                        listofObject = [listofObject];
                    }
                    else
                        listofObject.push($(prevInput).data("valuelist").split($(prevInput).data("separator")));

                    if ($('.token-label').length > 0) {

                        for (let data of $('.token-label')) {
                            listarray.push(data.innerHTML);
                        }
                    }

                    listarray = listarray.filter(function (item) {
                        return !listofObject[0].includes(item) ? true : listofObject[0].splice(listofObject[0].indexOf(item), 1) && false;

                    })
                    $(this).autocomplete('option', 'source', listofObject[0]);
                },
                //focus: function (event, ui) {
                //    debugger;
                //    var focusedFooterIcn = $(this).data('ui-autocomplete').menu.element.find('.autoComFooter .glyphicon.footerActive')
                //    if (focusedFooterIcn.length > 0)
                //        focusedFooterIcn.removeClass('footerActive');
                //    return false;
                //},
            },

            //showAutocompleteOnFocus: true,
            delimiter: $(this).data("separator"),
            beautify: false,
            allowEditing: false,
            //createTokensOnBlur: true
        })
            .on('tokenfield:createtoken', function (e) {
                var defaultValue = e.attrs.value;
                //var data = e.attrs.value.split('♣~♣')
                //e.attrs.value = data[0], e.attrs.label = data[1] || data[0];

                var thisValueList = $(this).data("valuelist");
                var thisValueListAvailable = typeof thisValueList == "string" ? thisValueList.split($(this).data("separator")).indexOf(defaultValue) > -1 : thisValueList.filter(function (thisData) { return e.attrs.value == thisData.value && e.attrs.label == thisData.label }).length;
                var existingTokens = $(this).tokenfield('getTokens');
                if (existingTokens.filter(function (val) { return val.value == e.attrs.value }).length > 0 || !thisValueListAvailable) {
                    $(this).nextAll("input:last").val("");
                    e.preventDefault();
                }
            })
            .on('tokenfield:removedtoken', function (e) {
                $(".selector").autocomplete("close");
                $(this).parents(".input-group").find(".input-group-addon input.tokenSelectAll").prop("checked", false);
            })
    });
}

function checkAllCheckBoxTokens(elem) {
    var hiddenAutoComp = $("#" + $(elem).parents("ul").data("hiddenAutoComp"));
    //console.log(hiddenAutoComp);
    var inputField = $(elem).parents(".input-group").find(".tokenfield input.multiFldChk");
    if (hiddenAutoComp == inputField)
        var input = inputField;
    else
        input = hiddenAutoComp;


    if ($(elem).is(":checked")) {
        var thisValueList = input.data("valuelist");
        input.tokenfield('setTokens', typeof thisValueList == "string" ? thisValueList.split(input.data("separator")) : thisValueList);
    } else {
        input.val("");
        input.tokenfield('setTokens', []);
    }

    try {
        inputField.data('bs.tokenfield').$input.trigger("blur");
    } catch (ex) { }
}

function ShowPopUp(imgObj) {
    var imgId = imgObj.attr("id");
    var parFld = imgObj.parent().find("input");
    if (parFld.length == 0)
        parFld = imgObj.parent().find("select");
    var parFldId = parFld.attr("id");
    OpenPopUp(parFldId, imgId);
}

//Function to focus the first element in the form, focus Tab dc and first field in the Tab dc. 
//Parameter - Dc Div id.
function FocusOnFirstField(dcno) {

    if (dcno == "form") {
        var visibleDCs = $j('[id*="divDc"]');
        for (var i = 0; i < visibleDCs.length; i++) {
            if ($j(visibleDCs[i]).is(':visible')) {
                dcno = visibleDCs[i].id.substring(visibleDCs[i].id.indexOf('divDc') + 5);
                break;
            }
        }
    }
    var objId = "";
    if (IsDcGrid(dcno)) {
        objId = "#wrapperForEditFields" + dcno;
    } else {
        objId = "#divDc" + dcno;
    }
    if ($j(objId).length > 0) {
        try {
            if ($j.inArray("1", TabDCs) == -1 && !isMobile) {
                $j(objId).focus();
            }
            else if (isMobile && $("#wizardBodyContent").length) {
                $("#wizardBodyContent").scrollTop(0);
            }
        }
        catch (ex) { }
        var focusObj = getFirstFocusElement(objId);
        //if (!focusObj.hasClass("date")) This condition is removed due to the issue : AGI003000
        if (focusObj != undefined && focusObj.length > 0 && !isMobile) {
            focusObj.focus();
            return focusObj;
        } else if (isMobile && $("#wizardBodyContent").length) {
            $("#wizardBodyContent").scrollTop(0);
        } else if (isMobile) {
            focusObj.focus();
            return focusObj;
        }
    }
}



function DisplaySearchDlg() {

    $j(window).keydown(function (e) {
        OpenSearchPop(e);
    });

    if (window.parent) {
        $j(window.parent).keydown(function (e) {
            OpenSearchPop(e);
        });
    }
};

function LockTstruct() {
    Readonlyform();
    $j("#icons").find('*').attr('disabled', true);
    $j("#icons").find('*').prop('disabled', true);
    if ($j(".search").length > 0)
        $j(".search").removeProp("disabled");
    if ($j(".add").length > 0)
        $j(".add").find('*').removeProp("disabled");
    if ($j(".pdf").length > 0)
        $j(".pdf").find('*').removeProp("disabled");
    if ($j(".listview").length > 0)
        $j(".listview").find('*').removeProp("disabled");
}



function loadingNew() {
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
}

function EndRequestHandler(sender, args) {
    if (args.get_error() == undefined) {
        if ($j("#goval").length > 0) {
            var gov = $j("#goval");
            if (gov.val() == "go") {
                FillDiv("Show");
                $j("#searstr").val(DecodeUrlSplChars($j("#hdnSearchStr").val()));
                gov.val("d");
            }
        }
        ShowDimmer(false);

        var ExportToHtml = $j("#hdnHtml");
        var fileName = $j("#hdnFilename");
        if (ExportToHtml.val() == "Save") {
            showAlertDialog("success", 2028, "client", fileName.val());
            ExportToHtml.val("");
        }
    }
    else {
        showAlertDialog("error", 2029, "client", args.get_error().message);
    }
}

function displaysearchDiv(divId, title) {

    $j("#" + divId).show();
    $j("#" + divId).addClass('Pagebody Bordercolor');
    $j("#searchoverrelay").css("display", "block");

    Resizewindow();
}

function FillDiv(state) {

    if (state == "Show")
        $j("#srchcontent").show();
    else
        $j("#srchcontent").hide();
    Resizewindow();
}

function Pagination() {

    var gov = $j("#goval");
    gov.val("go");
    ShowDimmer(true);
}

function Closediv() {
    $j("#Panel1").hide();
    $j("#srchcontent").hide();
    $j("#searchoverrelay").css("display", "none");
    //adjustwin('100', this.window);

}


//function MouseDown(e) {
//    if (over) {
//        if (isMozilla) {
//            objDiv = $j("#" + DivID);
//            X = e.layerX;
//            Y = e.layerY;
//            return false;
//        }
//        else {
//            objDiv = $j("#" + DivID);
//            objDiv = objDiv.style;
//            X = event.offsetX;
//            Y = event.offsetY;
//        }
//    }
//}


//function MouseMove(e) {
//    if (objDiv) {
//        if (objDiv.length > 0) {
//            if (isMozilla) {
//                objDiv.css("top", (e.pageY - Y) + 'px');
//                objDiv.css("left", (e.pageX - X) + 'px');
//                return false;
//            }
//            else {
//                if (event.clientX - X + document.body.scrollLeft >= 0 && event.clientX - X + document.body.scrollLeft <= 830)
//                    objDiv.css("pixelLeft", event.clientX - X + document.body.scrollLeft);

//                if (event.clientY - Y + document.body.scrollTop >= 0 && event.clientY - Y + document.body.scrollTop <= (document.body.scrollHeight - 400))
//                    objDiv.css("pixelTop", event.clientY - Y + document.body.scrollTop);
//                return false;
//            }
//        }
//    }
//}


//
//function MouseUp() {
//    objDiv = null;
//}

//
//function init() {
//    // check browser
//    isMozilla = (document.all) ? 0 : 1;

//    if (isMozilla) {
//        document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);
//    }

//    document.onmousedown = MouseDown;
//    document.onmousemove = MouseMove;
//    document.onmouseup = MouseUp;
//}

//// call init
//init();


//function displayFloatingDiv(divId, title) {

//    DivID = divId;
//    document.getElementById('dimmer').style.display = "block";
//    var addHeader = '<table style="width:300px;" class="Headerbg Popcap"><tr><td ondblclick="void(0);" onmouseover="over=true;" onmouseout="over=false;" style="cursor:move;height:18px">' + title + '</td><td style="width:18px" align="right"><a href="javascript:hiddenFloatingDiv(\'' + divId + '\');void(0);"><img alt="Close" title="Close" src="images/crossimg.PNG" border="0"></a></td></tr></table>';
//    var columnstxt = '<table style="width:300px;" class="Pagebody"><tr class="Mainbody selectAll"><td><input type="checkbox" onclick="javascript:togglesrchselect();" id="searchall" name="searchall" value="Select All" >Select/Unselect all columns </td></tr>';
//    for (var i = 0; i < document.getElementById("s1").options.length; i++) {
//        var selected = "";
//        if (document.getElementById("s1").selectedIndex == i) selected = "checked";
//        columnstxt += '<tr><td><input type="checkbox" id="search' + i + '" name="search' + i + '" value="' + document.getElementById("s1").options[i].text + '" ' + selected + '>' + document.getElementById("s1").options[i].text + '</td></tr>';
//    }
//    columnstxt += '</table>';
//    var addFooter = '<table style="width:300px;" class="Headerbg"><tr><td align="right" valign="middle"><a href="javascript:hiddenFloatingDiv(\'' + divId + '\');void(0);"><img alt="Ok" title="Ok" src="images/ok.PNG" border="0"></a></td><td align="left" valign="middle">&nbsp;<a href="javascript:hiddenFloatingDiv(\'' + divId + '\');void(0);"><img alt="Cancel" title="Cancel" src="images/cancel.PNG" border="0"></a></td></tr></table>';
//    document.getElementById(divId).innerHTML = addHeader + columnstxt + addFooter;
//    document.getElementById(divId).className = 'dimming Bordercolor';
//    document.getElementById(divId).style.display = "block";
//    document.getElementById('dimmer').style.height = document.body.scrollHeight;

//}

function hiddenFloatingDiv(divId) {

    document.getElementById(divId).style.display = "none";
    document.getElementById('dimmer').style.display = 'none';
    DivID = "";
    Resizewindow();
}

function Resizewindow() {

    //adjustwin('100', this.window);
    // This is to adjust the absolute position of the controls once
    // the grid is shown or hidden.
    var closeimg = document.getElementById("closeimg");
    //closeimg.onmouseover();
    //closeimg.onmouseout();
}

function togglesrchselect() {

    var check = false;
    var obj = document.getElementById("searchall");
    if (obj.checked)
        check = true;
    else
        check = false;

    for (var i = 0; i < document.getElementById("s1").options.length; i++) {
        var cntrl = "search" + i;
        document.getElementById(cntrl).checked = check;
    }
}

function PopupfadeTo(obj, opacity) {

    obj = $j("#" + obj.id);
    if (opacity <= 100) {
        if (opacity < 0) {
            opacity = 100;
            document.body.style.cursor = 'default';
        }
        else {
            document.body.style.cursor = 'Hand';
            opacity = 65;
        }
        SetOpacity(obj, opacity);
    }
}

function valid_submit() {

    var gov = $j("#goval");
    gov.val("go");
    var srchFld = $j("#searstr");
    txtVal = CheckUrlSplChars(srchFld.val());
    if (ValidateSrchFlds()) {
        $j("#hdnSearchStr").val(txtVal);
        $j("#searstr").val("");
        var btn = $j("#btnGo");
        if (btn.length > 0)
            btn.click();
    }
    else
        if (txtVal == "" || txtVal == null || txtVal == undefined) {
            showAlertDialog("warning", 2007, "client");
        }

    return;
}

//function CheckUrlSplChars(value) {
//    value = value.replace(/&amp;/g, "&");
//    value = value.replace(/%/g, "%25");
//    value = value.replace(/&/g, "%26");
//    value = value.replace(/'/g, "%27");
//    value = value.replace(/"/g, "%22");
//    value = value.replace(/#/g, "%23");
//    //value = encodeURIComponent(value);
//    return value;
//}

function DecodeUrlSplChars(value) {
    value = value.replace(/&/g, "&amp;");
    value = value.replace(/%25/g, "%");
    value = value.replace(/%26/g, "&");
    value = value.replace(/%27/g, "'");
    value = value.replace(/%22/g, '"');
    value = value.replace(/%23/g, "#");
    return value;
}

function ValidateSrchFlds() {
    var srchDdl = $j("#ddlSearch");
    var selFld = srchDdl.val();
    var indx = $j.inArray(selFld, FNames);
    var txtVal = $j.trim($j("#searstr").val());
    if (indx != -1 && txtVal != "") {
        var fldType = FDataType[indx];
        if (fldType == "Date/Time") {
            var srchFldValue = $j("#searstr");
            var isproperdate = isDate(srchFldValue.val());
            if (!isproperdate) {
                srchFldValue.focus();
                // showAlertDialog("warning", "please enter correct date/time ");
                return false;
            }
            else {
                srchFldValue.focus();
                return true;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

function loadTstruct(recid) {
    ShowDimmer(true);
    ResetNavGlobalVariables();
    AxWaitCursor(true);
    //window.document.location.href = "tstruct.aspx?transid=" + transid + "&recordid=" + recid;
    try {
        if (!window.parent.isSessionCleared && !window.opener) {
            ASB.WebService.ClearNavigationSession();
            window.parent.isSessionCleared = true;
        }
        if (!window.opener)
            window.parent.disableNavigation = true;
        else
            window.opener.parent.disableNavigation = true;

        GetLoadData(recid, "");
    } catch (ex) {
        Closediv();
    }
}

// Checks if the browsers is IE or another.
// document.all will return true or false depending if its IE
// If its not IE then it adds the mouse event
if (!document.all)
    document.captureEvents(Event.MOUSEMOVE)

// On the move of the mouse, it will call the function getPosition
// These varibles will be used to store the position of the mouse
var iX = 0
var iY = 0

// This is the function that will set the position in the above varibles 
function getPosition(args) {
    // Gets IE browser position
    if (document.all) {
        iX = event.clientX + document.body.scrollLeft
        iY = event.clientY + document.body.scrollTop
    }
        // Gets position for other browsers
    else {
        iX = args.pageX
        iY = args.pageY
    }
}

function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curleft += obj.offsetLeft
            obj = obj.offsetParent;
        }
    }
    else if (obj.x)
        curleft += obj.x;
    return curleft;
}
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curtop += obj.offsetTop
            obj = obj.offsetParent;
        }
    }
    else if (obj.y)
        curtop += obj.y;
    return curtop;
}
function FindCtrlPos(fldName) {

    if (typeof (fldName) == "string") {
        fldName = document.getElementById(fldName);
    }
    var fld = fldName;
    var textbox = jQuery(fldName);
    var offset = textbox.offset();
    iX = findPosX(fld) + fld.clientWidth + 1;
    iY = findPosY(fld) + fld.clientHeight + 1;
}

function ShowTooltipDiv() {
    if (document.getElementById)
        // Standard way to get element
        div = document.getElementById('dvTip');
    else if (document.all)
        // Get the element in old IE's
        div = document.all['dvTip'];

    // if the style.display value is blank we try to check it out here 
    if (div.style.display == '' && div.offsetWidth != undefined && div.offsetHeight != undefined) {
        div.style.display = (div.offsetWidth != 0 && elem.offsetHeight != 0) ? 'block' : 'none';
    }

    div.style.display = "block";
    // Sets the position of the DIV
    div.style.left = iX + 'px';
    div.style.top = iY + 'px';
}
var regexFld = new RegExp("^[a-zA-z0-9_]+$");
function ShowTooltip(fldName, obj) {
    HideTooltip();
    var i = 0; var toolTip = "";
    var toolTipList = new Array();
    var ttURL;
    var toolTipHyperlnk = "";
    for (i = 0; i < FNames.length; i++) {
        if (FNames[i] == fldName) {

            toolTip = FToolTip[i];
            var displyText = "";
            var stPos = toolTip.indexOf("<h>");
            if (stPos != -1) {
                var enPos = toolTip.indexOf("</h>");
                var ttURL = toolTip.substring(stPos + 3, enPos);

                displyText = toolTip.substring(0, stPos);
                toolTipHyperlnk = "<a class='curHand' id='lblTip'  onclick='javascript:HyperlinkToolTip(\"" + ttURL + "\");'>" + displyText + " </a>";
                toolTip = toolTip.substring(enPos + 4, toolTip.length);
            }

            if (toolTip != "")
                toolTipList = toolTip.split("/");

            break;
        }
    }
    var j = 0; var flname = obj.attr("id");
    var flval = obj.value; var temp = "";
    for (j = 0; j < toolTipList.length; j++) {
        //Condition to check if the tooltip Is not empty and is plainText/String .

        if (toolTipList[j] != "") {
            if (toolTipList[j].toString().indexOf(":") == -1) {
                toolTipList[j] = toolTipList[j].trim();
                temp += toolTipList[j].trim();
            }
                //Conodition to check for fields or expressions
            else {
                var tempArr = new Array();
                var tempStr = toolTipList[j]; var finalStr = "";
                var charCnt = 0; var strLen = 0; var ch = ''; var nextCh = ''; var isColon = false;
                //tempStr = ":name_ Hi";

                //Loop through the string to seperate the string, fields and expressions            
                for (charCnt = 0; charCnt <= tempStr.length; charCnt++) {
                    ch = tempStr.charAt(charCnt);

                    if (ch == ":") {
                        nextCh = tempStr.charAt(charCnt + 1);
                        if (nextCh == "+") {
                            //Get the expression and push it to the array
                            var str = tempStr.substring(tempStr.indexOf(":+"), tempStr.indexOf("+:") + 2);
                            str = str.replace(":+", "");
                            str = str.replace("+:", "");
                            str = Evaluate(flname, flval, str, "expr");
                            tempArr.push(str);
                            charCnt = tempStr.indexOf("+:") + 2;
                        }
                        else {
                            isColon = true;
                            if (finalStr != "") {
                                tempArr.push(finalStr);
                            }
                            finalStr = "";
                        }
                    }
                    else {
                        if (isColon == true) {
                            var res = regexFld.test(ch);
                            if (res == false) {
                                var rowFramNo = GetFieldsRowFrameNo(flname);
                                res = GetFieldValue(finalStr + rowFramNo);
                                tempArr.push(res);
                                finalStr = "";
                                isColon = false;
                            }
                        }
                        finalStr += ch;
                    }
                }
                if (finalStr != "")
                    tempArr.push(finalStr);
                //Loop through the tempArr and evaluate the string and generate the tooltip
                var items = 0; toolTipList[j] = "";
                for (items = 0; items < tempArr.length; items++) {
                    toolTipList[j] += tempArr[items];
                }
            }

        }
    }

    //Write the result to the div inner Text
    if (toolTipList.length > 0) {

        FindCtrlPos(flname);
        var dvToolTip = $j("#dvInnerTip");
        var toolTip = "";
        for (i = 0; i < toolTipList.length; i++) {
            if (toolTipList[i] != "") {
                toolTip += toolTipList[i] + "<br/>";
            }
        }
        if (toolTipHyperlnk != "") {
            dvToolTip.html("<br/>" + toolTipHyperlnk + " " + toolTip);
            ShowTooltipDiv();
        }
        else if (toolTip != "") {
            dvToolTip.html("<br/>" + toolTip);
            ShowTooltipDiv();
        }
    }
}
document.onkeypress = function hideTooltip(event) {
    if (event.keyCode == 27) {
        HideTooltip()
    }
}

function HideTooltip() {
    var dvtooltip = $j("#dvTip");
    if (dvtooltip.length > 0) {
        dvtooltip.hide();
    }
}

var hlTipProps = "";
var hlTipParmUrl = "";
var hlTipUrl = "";
var hlTipParamXml = "";
function HyperlinkToolTip(ttUrl) {
    hlTipParmUrl = "";
    var structName = "";
    var propArr = new Array();
    var arrParam = new Array();
    propArr = ttUrl.split(",");
    var iName = ""; var refresh = ""; var newLink = "";
    var openWin = ""; var pType = ""; var load = "";
    var propDetails = new Array();
    if (propArr.length > 0) {
        for (var i = 0; i < propArr.length; i++) {
            propDetails = propArr[i].split("=");
            if (propDetails[0] == 'type') {
                temp = propDetails[1];
                if (temp.startsWith('t')) {
                    hlTipUrl = "tstruct.aspx?act=open&transid=";
                    pType = "t";
                }
                else if (temp.startsWith('i')) {
                    hlTipUrl = "ivtoivload.aspx?ivname=";
                    pType = "i";
                }
            }
            else if (propDetails[0] == 'name') {
                hlTipUrl = hlTipUrl + propDetails[1];
                structName = propDetails[1];
            }
            else if (propDetails[0] == 'popup') {
                openWin = propDetails[1];
            }
            else if (propDetails[0] == 'refresh') {
                refresh = propDetails[1];
            }
            else if (propDetails[0] == 'load') {
                load = propDetails[1];
            }
            else if (propDetails[0] == 'param') {
                CreatParamUrl(propArr[i]);
            }
        }
    }

    hlTipProps = pType + "," + load + "," + openWin;

    if (pType == "t" && structName != "" && load.startsWith("t")) {
        try {
            ASB.WebService.GetRecordId(structName, hlTipParamXml, SuccessGetRecId, OnException);
        }
        catch (e) {
        }
    }
    else {
        GetUrl();
    }
}

function SuccessGetRecId(result, eventArgs) {
    var rId = "0";
    if (result != "") {
        var xmlDoc = $j.parseXML(result), xml = $j(xmlDoc);
        if (xml.find("recordid").length > 0)
            rId = xml.find("recordid").text();
    }
    GetUrl(rId);
}

function GetUrl(rId) {

    var pType = "";
    var load = "";
    var openWin = "";
    if (hlTipProps != "") {
        var strHlProps = hlTipProps.split(",");
        pType = strHlProps[0];
        load = strHlProps[1];
        openWin = strHlProps[2];
    }

    if (hlTipUrl != "") {

        if (pType == "t" && rId != undefined && rId != "0" && load.startsWith("t"))
            hlTipUrl += '&recordid=' + rId;
        else
            hlTipUrl += hlTipParmUrl;

        if (openWin.startsWith('t')) {
            var newWindow;
            try {
                newWindow = window.open(hlTipUrl, 'MyPopUp', 'resizable=yes');
            } catch (ex) {
                showAlertDialog("warning", eval(callParent('lcm[356]')));
            }
        }
        else
            window.document.location.href = hlTipUrl;
    }
}

function CreatParamUrl(temp) {

    var pType = "";
    if (hlTipProps != "") {
        var strHlProps = hlTipProps.split(",");
        pType = strHlProps[0];
    }
    hlTipParmUrl = "";
    var stPos = temp.indexOf("param=");
    if (stPos != -1) {
        var enPos = temp.indexOf("=");
        temp = temp.substring(6, temp.length);
    }
    arrParam = temp.split("~");
    if (arrParam.length > 0) {
        for (var k = 0; k < arrParam.length; k++) {
            var stPos = arrParam[k].indexOf("=");
            var fldName = arrParam[k].substring(stPos + 1, arrParam[k].count);
            var param = arrParam[k].substring(0, stPos)
            if (fldName.startsWith(':')) {
                fldName = fldName.substring(1, fldName.length)
                var isGridDc = IsGridField(fldName);
                var val = "";
                if (IsGridField(fldName)) {
                    var actRowNo = GetRowNoHelper(AxActiveRowNo);
                    var fld = fldName + actRowNo + "F" + AxActiveDc;
                    val = GetFieldValue(fld);
                }
                else {
                    var frameNo = GetDcNo(fldName);
                    var fld = fldName + "000F" + frameNo;
                    val = GetFieldValue(fld);
                }
            }
            else if (fldName.startsWith('{')) {
                if (fldName.indexOf("{") != -1)
                    fldName = fldName.replace('{', '');
                if (fldName.indexOf("}") != -1)
                    fldName = fldName.replace('}', '');

                if (fldName.endsWith("*d"))
                    val = fldName.substring(0, fldName.length - 2)
                else
                    val = fldName;
            }
            else {
                val = fldName;
            }
            hlTipParamXml = hlTipParamXml + "<" + param + ">" + val + "</" + param + ">";
            if (pType == "i" && val != "")
                hlTipUrl = hlTipUrl + '&' + param + '=' + val;
            else if (val != "")
                hlTipParmUrl = hlTipParmUrl + '&' + param + '=' + val;
        }
    }
}

function GetSetTtipHgt(status) {
    var dvTooltip = $j("#dvInnerTip");
    var dvtip = $j("#dvTip");
    if (status == "new") {
        if (dvTooltip.height() < 50) {
            dvTooltip.height("50");
        }
        if (dvTooltip.width() < 100) {
            dvTooltip.width("100");
        }
        if (dvtip.height() < 50) {
            dvtip.height("50");
        }
        if (dvtip.width() < 100) {
            dvtip.width("100");
        }
    }
    else {
        dvTooltip.css("height", "auto");
        dvTooltip.css("width", "auto");
        dvtip.css("height", "auto");
        dvtip.css("width", "auto");
    }
}
var tmpFldName = "";
//Function to get the picklist data and display it in the picklist div.
function DisplayPickList(obj) {
    ShowDimmer(true);
    AxWaitCursor(true);
    var fldProps = obj.attr("id").split("~");
    var i;
    if (fldProps.length == 2)
        i = 1;
    else
        i = 0;

    var fldName = fldProps[i].substring(0, fldProps[i].lastIndexOf("F") - 3);
    var fldValue = "";
    var pickFld = $j("#" + fldProps[i]);
    //The below condition will not open picklist if the picklist field is made readonly
    if (pickFld.attr("readonly") != undefined || pickFld.attr("disabled") != undefined) {
        ShowDimmer(false);
        AxWaitCursor(false);
        return;
    }

    if (pickFld.length > 0) {
        AxOldValue = pickFld.val();
        fldValue = pickFld.val();   //pickFld.value;
    }

    totalPLRows = 0;
    curPageNo = 1;

    var hdn = $j("#hdnPickFldId");
    if (obj.attr("id").indexOf("~") == -1)
        hdn.val("img~" + obj.attr("id"));
    else
        hdn.val(obj.attr("id"));
    AxFromAssociated = true;
    GetPickListData(fldName, fldValue, curPageNo.toString(), pageSize.toString(), fldProps[i]);
}

//Function to position and show the div containing the picklist data.
function ShowPickList() {
    //hide picklist next/prev loader
    $j("#pickDimmer").css("display", "none");
    var hdn = $j("#hdnPickFldId");
    var objId = hdn.val();
    var fldProps = objId.split("~");
    var i;
    if (fldProps.length == 2)
        i = 1;
    else
        i = 0;
    var pickFld = document.getElementById(fldProps[i]);

    FindCtrlPos(pickFld);
    var pickFld = $j("#" + fldProps[i]);
    var wdth = pickFld.width() + 19;
    var plHgt = pickFld.height();

    var dv = $j("#dvPickList");
    var divFrameNo = GetFieldsDcNo(fldProps[i]);
    var isDcGrid = IsDcGrid(divFrameNo);

    dv.width(wdth);
    dv.show();
    //If it's a scroll div,set the position of the left scroll value
    var scrollleft = $(".dvheightframe ").scrollLeft();
    var scrollTop = $(".dvheightframe ").scrollTop();
    //if (!isDcGrid) {
    //    if (scrollTop > 0) {
    //        var tmpHgt = (iY - plHgt - scrollTop - 18);
    //        var tmpTop = parseInt((tmpHgt - 0), 10);
    //        if (tmpTop > 0)
    //            dv.css("top", tmpTop + 'px');
    //        else
    //            dv.css("top", (iY + 5) + 'px');
    //    }
    //    else
    //        dv.css("top", (iY - 69) + 'px');

    //    if (scrollleft > 0) {
    //        var slValue = (iX - wdth - scrollleft);
    //        var clientWidth = $j("#divDc" + divFrameNo).width() + 20;
    //        var scrollWidth = 0;
    //        var popupScrollWidth = (slValue + 200);
    //        if (clientWidth < popupScrollWidth)
    //            scrollWidth = popupScrollWidth - clientWidth;
    //        var leftV = parseInt((slValue - scrollWidth), 10);
    //        if (leftV > 0)
    //            dv.css("left", leftV + 'px');
    //        else
    //            dv.css("left", '0px');
    //    }
    //    else
    //        dv.css("left", (iX - wdth) + 'px');
    //} else {
    if (axInlineGridEdit)
        scrollTop = scrollTop - 36; //calculating picklist position for inline grid
    var top = (pickFld.offset().top - pickFld.parents('.' + (axInlineGridEdit ? 'input' : 'form') + '-group').outerHeight()) + scrollTop;
    dv.css("top", top + 'px');
    dv.css("left", pickFld.offset().left + 'px');
    //}


    // CheckHeight(iY + 5, 205);
    if ($("#dvPickList .pickLstResultCntnr").length > 0) {
        if ($("#dvPickList .pickLstResultCntnr").offset().top + $("#dvPickList .pickLstResultCntnr").outerHeight() - $(".dvheightframe").offset().top > $(".dvheightframe").outerHeight()) {
            $(".dvheightframe").animate({
                scrollTop: (($("#dvPickList .pickLstResultCntnr").offset().top + $("#dvPickList .pickLstResultCntnr").outerHeight() - $(".dvheightframe").offset().top) - ($(".dvheightframe").outerHeight())) + ($(".dvheightframe").scrollTop())
            }, 100);
        }
    }
}

function CheckHeight(top, dvHgt) {
    var frm = $j("#middle1", parent.document);
    var docHgt = document.body.offsetHeight;
    var totHgt = top + dvHgt;
    if (totHgt > docHgt) {
        docHgt = docHgt + (totHgt - docHgt);
        frm.height(docHgt + 10);
    }
}

//Function to call the service to get the filtered picklist data.
function GetPickListData(fldName, value, pageNo, pageSize, objId) {
    currentPickList = objId;
    //initialise the search value
    initialSrchVal = value;
    var includeDcs = "";
    if (arrRefreshDcs.length > 0) {
        for (var i = 0; i < arrRefreshDcs.length; i++) {
            var arrDcNos = arrRefreshDcs[i].split(':');
            includeDcs = arrDcNos[1].replace("dc", "") + ',' + arrDcNos[0].replace("dc", "");

        }
    }
    value = CheckSpecialCharsInStr(value);
    var fldDcNo = GetFieldsDcNo(objId);

    AxActiveRowNo = parseInt(GetFieldsRowNo(objId), 10);
    AxActiveRowNo = GetDbRowNo(AxActiveRowNo, fldDcNo);
    var activeRow = AxActiveRowNo;

    var parStr = "";
    if (AxActivePRow != "" && AxActivePDc != "")
        parStr = AxActivePDc + "~" + AxActivePRow;

    var subStr = "";
    if (IsParentField(fldName, fldDcNo)) {
        //for each subgrid, get the sub grid rows for the given parent row and send this info
        subStr = GetSubGridInfoForParent(fldDcNo, AxActiveRowNo);
    }

    try {
        ASB.WebService.GetSearchResult(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, fldName, value, pageNo.toString(), pageSize.toString(), tstDataId, fldDcNo, activeRow, parStr, subStr, includeDcs, SuccGetSearchResult, OnException);
    }
    catch (exp) {
        AxWaitCursor(false);
        ShowDimmer(false);
        var execMess = exp.name + "^♠^" + exp.message;
        showAlertDialog("error", 2030, "client", execMess);
    }
}

// function to construct td id
function GetTdFrameNo() {
    var hdn = $j("#hdnPickFldId");
    var objId = hdn.val();
    var divFrameNo = GetFieldsDcNo(objId);
    return divFrameNo;
}
var pickStatus = true;
var selectedRow = 0;
//Success function which parses the result and dynamically creates inner html for the picklist div.
function SuccGetSearchResult(result, eventArgs) {
    if (CheckSessionTimeout(result))
        return;
    var hdnFilter = $j("#hdnFiltered");
    var resultArr;
    hdnFilter.val("true");

    if (result != "" && result.substring(0, 7) != "<error>") {
        TogglePrevNextLink("inline");
        var tableStr = "";
        if (result.indexOf("♣") != -1) {
            var totRowStr = result.split("♣");
            totalPLRows = parseInt(totRowStr[0], 10);
            if ((totalPLRows / pageSize) % 1 > 0)
                noOfPLPages = Math.floor(totalPLRows / pageSize) + 1;
            else
                noOfPLPages = totalPLRows / pageSize;
            resultArr = totRowStr[1].split("¿");
        }
        else {
            resultArr = result.split("¿");
        }

        var dv = $j("#dvPickHead");

        if (resultArr != undefined && resultArr != "") {
            tableStr = "<table id='tblPickData'  data-pick='" + currentPickList + "' class='pickGridData'>";
            for (var i = 0; i < resultArr.length; i++) {
                var tdId = "axPickTd00" + (i + 1) + 'F' + GetTdFrameNo();
                var pickValue = CheckSpecialCharsInHTML(resultArr[i]);
                if (resultArr[i].toString().indexOf("^") != -1) {
                    var displayText = resultArr[i].toString().split('^')[1];

                    tableStr += "<tr><td id =" + tdId + " onclick='javascript:SetPickVal(\"" + pickValue + "\")' class='handCur'><a>" + displayText + "</td></tr>";
                }
                else {
                    displayText = resultArr[i].toString();
                    if (pickValue.indexOf("\\") != -1) {
                        pickValue = pickValue.replace("\\", "\\\\");
                        tableStr += "<tr><td id =" + tdId + " onclick='javascript:SetPickVal(\"" + pickValue + "\")' class='handCur' ><a>" + displayText + "</td></tr>";
                    }
                    else {
                        tableStr += "<tr><td id =" + tdId + " onclick='javascript:SetPickVal(\"" + pickValue + "\")' class='handCur'><a>" + displayText + "</td></tr>";
                    }
                }
            }

            if (dv.length > 0)
                dv.html(tableStr);

            if ($j("#tblPickData tr").length > 0) {
                $j("#tblPickData tr:nth-child(1)").addClass('active');
            }

        }
        else {
            if (dv.length > 0) {
                var cutMsg = eval(callParent('lcm[0]'));
                dv.html("<span>" + cutMsg + "</span>");
            }
        }
        SetPrevNextLinks();
        document.getElementById('advancebtn').style.visibility = 'visible';
        document.getElementById('advancesrch').style.visibility = 'visible';
    }
    else {
        tableStr = "<table style='width:100%;height:auto;' id='tblPickData' cellpadding='1' cellspacing='1'>";
        //tableStr += "<tr><td></td><td align='right' class='hdrRow'><img class='curHand' src='../AxpImages/icons/close-button.png' alt='Close' onclick=\"javascript:HidePLDiv(true);\"/></td></tr>";
        tableStr += "</table>";
        document.getElementById('advancebtn').style.visibility = 'hidden';
        document.getElementById('advancesrch').style.visibility = 'hidden';
        var cutMsg = eval(callParent('lcm[0]'));
        tableStr += "<span style=\"font-size: 12px;\">" + cutMsg + "</span>";
        TogglePrevNextLink("none");
        var dv = $j("#dvPickHead");
        if (dv.length > 0)
            dv.html(tableStr);
    }
    pickListRowCount = $j("#tblPickData tbody tr").length;
    if (pickListRowCount > 1) {
        $j(".inputClass2").keydown(function (e) {
            if (e.which == 40) { // down arrow
                if (selectedRow < pickListRowCount) {
                    if ($j("#tblPickData tr:nth-child(" + selectedRow++ + ")").length == 0)
                        selectedRow = 2;

                    $j("#tblPickData tr").removeClass("pickbg");
                    $j("#tblPickData tr:nth-child(" + selectedRow + ")").addClass("pickbg");

                    var totalHgt = 0;
                    var rowTotHgt = 0;
                    for (var i = 0; i < selectedRow; i++) {
                        rowTotHgt += $j("#tblPickData tr:nth-child(" + i + ")").height();
                    }
                    var dvHgt = 0;
                    dvHgt = $j('#dvPickHead').height();
                    if ((rowTotHgt + 20) > dvHgt) {
                        //$j('#dvPickHead').scrollTop((rowTotHgt - dvHgt) + 20);
                        $j('#dvPickHead').scrollTop($j('#dvPickHead')[0].scrollHeight);
                    }
                }
            }
            else if (e.which == 38) { // up arrow
                if (selectedRow > 2) {
                    if ($j("#tblPickData tr:nth-child(" + selectedRow-- + ")").length == 0)
                        selectedRow++;

                    $j("#tblPickData tr").removeClass("pickbg");
                    $j("#tblPickData tr:nth-child(" + selectedRow + ")").addClass("pickbg");

                    if (selectedRow == 1) {
                        e.preventDefault();
                    }
                    var totalHgt = 0;
                    var rowTotHgt = 0;
                    for (var i = pickListRowCount; i >= selectedRow; i--) {
                        rowTotHgt += $j("#tblPickData tr:nth-child(" + i + ")").height();
                    }
                    var dvHgt = 0;
                    dvHgt = $j('#dvPickHead').height();
                    if ((rowTotHgt + 10) > dvHgt) {
                        var tmpRowNo = selectedRow - 1;
                        $j('#dvPickHead').scrollTop($j("#tblPickData tr:nth-child(" + tmpRowNo + ")").height());

                    }
                }
            }
            else if (e.which == 39) { // right arrow
                if ($j('#nextPick').attr("onclick") != undefined && $j('#nextPick').attr("onclick") != "") {
                    GetData('next');
                    $j('#dvPickHead').scrollTop(0);
                    selectedRow = 1;
                }
            }
            else if (e.which == 37) { // left arrow
                if ($j('#prevPick').attr("onclick") != undefined && $j('#prevPick').attr("onclick") != "") {
                    GetData('prev');
                    selectedRow = 1;
                    $j('#dvPickHead').scrollTop(0);
                }
            }

            else if (e.which == 27 || e.which == 9) {  // for Close the picklist
                HidePLDiv(false);
                selectedRow = 0;
            }
            e.which = -1;
        });
    }
    $j(document).keypress(function (e) {
        if (e.keyCode == -1)
            return;
        if (e.keyCode == 13) {
            var fldId = GetActivePickListId();
            var fieldDcNo = GetFieldsDcNo(fldId);
            var fieldRowNo = GetFieldsRowNo(fldId);
            AxActiveRowNo = GetDbRowNo(fieldRowNo, fieldDcNo);

            if ($j("#dvPickList").is(':visible')) {
                var tdId = "#axPickTd00" + --selectedRow + 'F' + GetTdFrameNo();
                if ($j(tdId).length > 0) {
                    var selcteditm = $j(tdId).find('a')[0].innerText;
                    if (selcteditm == undefined)
                        selcteditm = $j(tdId).find('a')[0].textContent;
                    SetPickVal(selcteditm);
                    pickStatus = false;
                }
                selectedRow = 0;
            }
        }
        e.which = -1;
    });
    $j(document).click(function (e) {
        if (e.target.id != 'nextPick' && e.target.id != 'prevPick' && e.target.className != 'curHand' && e.target.className != 'hdrRow') {
            //show picklist next/prev loader
            if (e.target.parentElement.id == 'nextPick' || e.target.parentElement.id == 'prevPick') {
                $j("#pickDimmer").css("display", "block");
            } else {
                HidePLDiv(false);
            }

            selectedRow = 0;
        }
    });
    currentPickList = "";
    ShowPickList();
    ShowDimmer(false);
    AxWaitCursor(false);
}

function GetActivePickListId() {
    var hdn = $j("#hdnPickFldId");
    var objId = hdn.val();
    var fldProps = objId.split("~");
    var i;
    if (fldProps.length > 1)
        i = 1;
    else
        i = 0;

    var fldName = fldProps[i];
    return fldName;
}

function HidePLDiv(setFocus) {

    if (setFocus == true) {
        var hdn = $j("#hdnPickFldId");
        var objId = hdn.val();
        if (objId != "" && objId.indexOf("~") != -1) {
            var fldProps = objId.split("~");
            var fldName = "#" + fldProps[1];
            var fld = $j(fldName);
            fld.focusNextInputField();
        }
    }

    var dv = $j("#dvPickList");
    if (dv.length > 0)
        dv.hide();

}

$j.fn.focusNextInputField = function () {
    return this.each(function () {

        var focusElem = $(this);
        if (axInlineGridEdit && !$($(focusElem).closest("div")).hasClass("form-group"))
            var fields = $j(focusElem).parents('input:eq(0),body').find('button,input[type!="hidden"],textarea,select');
        else
            var fields = $j(focusElem).parents('form:eq(0),body').find('button,input[type!="hidden"],textarea,select');
        var index = fields.index(focusElem);
        if (index > -1 && (index + 1) < fields.length) {

            var fld = fields.eq(index + 1); //togCol
            var isDisabled = fld.prop("disabled");
            if (isDisabled == true || isDisabled == "disabled" || fld.prop("class") == "togCol") {
                fields.eq(index + 1).focusNextInputField();
            }
            else {
                if (axInlineGridEdit && !$(focusElem.closest("div")).hasClass("form-group")) {
                    var dataindex = fields.eq(index).closest("td").attr("data-focus-index");
                    var lastFocusIndex = fields.eq(index).closest("tr").attr("last-focus-index");
                    if (lastFocusIndex != dataindex) {
                        dataindex = parseInt(dataindex) + 1;
                    }
                    $j(focusElem).parents('input:eq(0),body').find("td[data-focus-index='" + dataindex + "']").find("input").focus();

                }
                else if (!isMobile)
                    fields.eq(index + 1).focus();
            }
        }
        return false;
    });
};

//Function to get the next or prev page records in picklist dropdown.
function GetData(str) {

    if (str == "prev" && curPageNo > 1) {
        curPageNo = curPageNo - 1;
    }
    else if (str == "next" && curPageNo < noOfPLPages) {
        curPageNo = curPageNo + 1;
    }

    var hdn = $j("#hdnPickFldId");
    if (hdn.length > 0) {
        var objId = hdn.val();
        if (objId != "" && objId.indexOf("~") != -1) {
            var fldProps = objId.split("~");
            var fldName = fldProps[1].substring(0, fldProps[1].lastIndexOf("F") - 3);
            var fldValue = $j("#" + fldProps[1]).val();

            GetPickListData(fldName, fldValue, curPageNo.toString(), pageSize.toString(), fldProps[1]);
        }
    }
}

//TO hide or show the next and prev buttons in the picklist div.
function TogglePrevNextLink(status) {
    var prev = $j("#prevPick");
    var next = $j("#nextPick");

    if (status == "block" || status == "inline") {
        prev.show();
        next.show();
    }
    else {
        prev.hide();
        next.hide();
    }
}

//Function which decides to display the next and prev button in the picklist div.
function SetPrevNextLinks() {
    var prev = $j("#prevPick");
    var next = $j("#nextPick");
    var tblPick = $j("#tblPickData");

    if (curPageNo == 1) {
        prev.attr("disabled", "disabled");
        prev.css("display", "none");
        prev.removeAttr("onclick");
    }
    else {
        prev.attr("disabled", false);
        prev.css("color", "black");
        next.css("color", "black");
        prev.attr("onclick", "javascript:GetData('prev')");
    }

    if (curPageNo < noOfPLPages) {
        next.attr("disabled", false);
        next.css("color", "black");
        next.attr("onclick", "javascript:GetData('next')");
    }
    else if (curPageNo >= noOfPLPages) {
        next.attr("disabled", "disabled");
        next.css("display", "none");
        next.removeAttr("onclick");
    }
    else {
        tblPick.attr("disabled", "disabled");
        tblPick.removeAttr("onclick");

    }

}

//Function to set the selected value in the picklist field.
function SetPickVal(pickVal) {
    var hdn = $j("#hdnPickFldId");
    if (hdn) {
        var objId = hdn.val();
        var fldProps = objId.split("~");
        var i;
        if (fldProps.length > 1)
            i = 1;
        else
            i = 0;

        var fldName = fldProps[i];
        var fld = $j("#" + fldName);
        var pickFld = $j("#pickfld000F0");
        pickFld.val(fldName);
        if (pickVal.indexOf("^") != -1) {
            var rowFrmNo = GetFieldsRowFrameNo(fldName);
            var pickId = $j("#pickIdVal_" + fldName);
            var picStr = pickVal.split("^");
            pickId.val(picStr[0]);
            pickVal = picStr[1];
        }

        pickVal = RepSpecialCharsInHTML(pickVal);
        fld.val(pickVal);
        try {
            fld.focus();
        }
        catch (ex) {
        }

        AxFromAssociated = true;
    }

    HidePLDiv(false);
}


//Function to open the old picklist pop up on click of Advanced link in the picklist div.
function CallSearchOpen() {
    //Not to enter in mainfocus twice in chrome
    if (window.chrome)
        $j("#HdnAxAdvPickSearch").val("true");
    ShowDimmer(true);
    AxWaitCursor(true);
    HidePLDiv(false);
    if ($j("#hdnPickFldId")) {
        var fldId = $j("#hdnPickFldId").val();
        var imgObj = $j("#" + fldId);
        $j(".pickimg").each(function () {
            if ($j(this).attr("id") == fldId) {
                imgObj = $j(this);
            }
        });

        if (imgObj.length > 0) {
            SearchOpen(imgObj);
        }
    }
    AxWaitCursor(false);
}


//<Module>  FormControl </Module>
//<Author>  Naveen  </Author>
//<Description> Function to change the property of the dependency controls based on the paricular action of a field </Description>
//<Return> Changes the property of the dependency control </Return>
// 1 - Enable Field, 2 - Disable Field, 3 - SetValue, 4 - Show DC, 5 - Hide DC(its not really hide, rather disable,
// 6 - Enable Field and Editable, 7 - Enable Field but not editable? TODO: check this case
// 8 - Hide (DC or Field), 9 - Show (DC or Field)
// 10 - hidepopdc, 11 - showpopdc
var fcontrols = new Array();
var found = false;
var process = false;
var fc = 0;
var ch, strch, cmdfchar;
var cresult = true;
var cond = '';
var skip;
var fld;
var count = 0;
var cont = false;
var fldExtn = "";
var isobject = false;
var btnObject = false;
var firstFldDc = "NONGRID";
var secFldDc = "NONGRID";
var isFieldBtn = false;
var arrVisibleTabDcs = new Array();
function DoFormControl(componentName) {

    var v;
    var fName = GetFieldsName(componentName);
    var dcNo = GetFieldsDcNo(componentName);
    var rowNo = GetFieldsRowNo(componentName);
    var isGrid = IsDcGrid(dcNo);
    fldExtn = rowNo + "F" + dcNo;
    if (isGrid)
        firstFldDc = "GRID";
    else
        firstFldDc = "NONGRID";


    if (fcontrols.length == 0) {

        for (var m = 0; m < Formcontrols.length; m++) {
            var s = Formcontrols[m];
            if (s.startsWith('f')) {
                v = s.substr(1, s.length);
                fcontrols[fc] = v;
                fc++;
            }
        }
    }

    found = false;
    for (var k = 0; k < fcontrols.length; k++) {
        if (fcontrols[k] == fName) {
            found = true;
            break;
        }
    }
    process = false;

    if (found) {
        EvaluateFormControl(fName);
    }
}

function AddVisTabDcsInArray() {
    var cnt = PagePositions.length;
    for (var i = 0; i < cnt; i++) {
        arrVisibleTabDcs.push("");
    }
}

function DoFormControlOnload() {
    var isgrid = false;

    if (fcontrols.length == 0) {
        for (var m = 0; m < Formcontrols.length; m++) {
            var s = Formcontrols[m];
            if (s.startsWith('f')) {
                v = s.substr(1, s.length);
                fcontrols[fc] = v;
                fc++;
            }
        }
    }

    try {
        var rId = $j("#recordid000F0").val();
        if (rId == "") rId = "0";
        for (var k = 0; k < fcontrols.length; k++) {
            if ((rId == "0" && fcontrols[k] == "_On Form Load") || (rId != "0" && fcontrols[k] == "_On Data Load"))
                EvaluateFormControl(fcontrols[k]);

        }
    }
    catch (ex) {
        console.log(ex.message);
    }
}

function EvaluateFormControl(fName) {



    for (var j = 0; j < Formcontrols.length; j++) {

        ch = Formcontrols[j];
        strch = ch;
        ch = ch.split('');
        if (strch.startsWith("10") || strch.startsWith("11") || strch.startsWith("12"))
            cmdfchar = ch[0] + ch[1];
        else
            cmdfchar = ch[0];
        if (cmdfchar == "1" && ch.length > 1 && (ch[1] == "0" || ch[1] == "1") && ch[2] == "d" && ch[3] == "c") {
            cmdfchar = ch[0] + ch[1];
            fldname = strch.substr(2, strch.length);
        } else if (cmdfchar == "10" || cmdfchar == "11" || cmdfchar == "12") {
            fldname = strch.substr(2, strch.length);
        } else {
            fldname = strch.substr(1, strch.length);
        }

        if ((cmdfchar == 'f') && (fldname == fName)) {
            process = true;
            continue;
        }

        if ((cmdfchar == 'e') && (process == true)) {
            process = false
            continue;
        }

        if (process == false)
            continue;

        var IndexValue = 0;
        if ((cmdfchar == 3) && (cresult == true)) {
            j = j + 1;
            var result = Formcontrols[j];
            result = result.substring(1, result.length);
            if (result == "''") result = "";
            var ch = result.split('');
            var got = "No";
            if (ch[0] == ":") {
                got = "yes";
                result = result.substring(1, result.length);
                result = GetComponentName(GetExactFieldName(result), fldExtn);
                var srcFld = $j("#" + result);

                if (srcFld.length > 0) {
                    result = GetFieldValue(result);
                }
                else
                    continue;
            }
            CallProcessFormControl(fldname, fldExtn, "3", result);
        }
        else if ((cmdfchar == 12) && (cresult == true)) {
            j = j + 1;
            var result = Formcontrols[j];
            result = result.substring(2, result.length);
            if (result == "''") result = "";
            var ch = result.split('');
            var got = "No";
            if (ch[0] == ":") {
                got = "yes";
                result = result.substring(1, result.length);
                result = GetComponentName(GetExactFieldName(result), fldExtn);
                var srcFld = $j("#" + result);

                if (srcFld.length > 0) {
                    result = GetFieldValue(result);
                }
                else
                    continue;
            }
            CallProcessFormControl(fldname, fldExtn, "12", result);
        }
        else if ((cmdfchar == 1 || cmdfchar == 2 || cmdfchar == 4 || cmdfchar == 5 || cmdfchar == 6 || cmdfchar == 7 || cmdfchar == 8 || cmdfchar == 9 || cmdfchar == 10 || cmdfchar == 11) && (cresult == true)) {

            CallProcessFormControl(fldname, fldExtn, cmdfchar.toString());
        }
        else if (cmdfchar == 'c') {

            if (fldname == 'if') {
                count = 0;
                try {
                    cresult = Getcondition(j);
                    skip = cresult;

                    if (skip)
                        count = 1;
                    j += 3;
                } catch (e) { }

            }
            else if (fldname == "elseif") {

                if (skip) {
                    cresult = false;
                    count = 3;
                }
                else {
                    cresult = (!cresult);
                }
                if (cresult) {
                    cresult = Getcondition(j);
                    skip = cresult;

                    if (skip)
                        count = 2;
                }
                j += 3;
            }
            else if (fldname == 'else') {

                if (skip == true)
                    cresult = false;
                else
                    cresult = (!cresult);

                skip = cresult;

            }
            else if (fldname == 'and') {

                cresult = cresult && Getcondition(j);

                if (count == 1) {
                    if (count == 1 && cresult == false)
                        skip = false;
                }

                if (count == 2) {
                    if (count == 2 && cresult == true)
                        skip = true;
                    else
                        skip = false;
                }

                if (count == 3) {
                    skip = true;
                }
                j += 3;
            }
            else if (fldname == 'or') {
                //continue;
                cresult = cresult || Getcondition(j);

                if (count == 1) {
                    if (count == 1 && cresult == false)
                        skip = false;
                }

                if (count == 2) {
                    if (count == 2 && cresult == true)
                        skip = true;
                    else
                        skip = false;
                }

                if (count == 3) {
                    skip = true;
                }
                j += 3;

            }
            else if (fldname == 'end') {
                cresult = true;
                skip = false;
            }
        }
    }
}

//Function to get the component name of the field on which the formcontrol should be applied, 
//and to call formcontrol based on the dc type.
function CallProcessFormControl(fldName, fldExtn, actionStr, fldValue) {

    if (actionStr == "4" || actionStr == "5" || (fldName.substring(0, 2) == "dc" && (actionStr == "8" || actionStr == "9" || actionStr == "10" || actionStr == "11"))) {
        ProcessFormControl(fldName, actionStr, fldValue);
    }
    else {

        fldName = GetExactFieldName(fldName);
        var conFldDcNo = GetDcNo(fldName);
        var isGrid = IsDcGrid(conFldDcNo);
        if (isGrid)
            secFldDc = "GRID";
        else
            secFldDc = "NONGRID";


        if ((firstFldDc == "NONGRID" && secFldDc == "NONGRID") || (firstFldDc == "GRID" && secFldDc == "NONGRID")) {
            fldName = fldName + "000F" + conFldDcNo;
            ProcessFormControl(fldName, actionStr, fldValue);
        }
        else if (firstFldDc == "NONGRID" && secFldDc == "GRID") {
            var rCnt = GetDcRowCount(conFldDcNo);
            for (var i = 1; i <= rCnt; i++) {
                var newrow = GetRowNoHelper(i);
                var tmpFldName = fldName + newrow + "F" + conFldDcNo;
                ProcessFormControl(tmpFldName, actionStr, fldValue);
            }
        }
        else if (firstFldDc == "GRID" && secFldDc == "GRID") {
            var clientRowNo = GetClientRowNo(AxActiveRowNo, conFldDcNo);
            fldName = fldName + clientRowNo + "F" + conFldDcNo;
            ProcessFormControl(fldName, actionStr, fldValue);
        }
        else {
            fldName = fldName;
            ProcessFormControl(fldName, actionStr, fldValue);
        }
    }
}

//Function to perform SetValue or fieldAccess on the given field based on the command.
function ProcessFormControl(fld, actionStr, fldValue) {

    isFieldBtn = false;
    if (fld.indexOf(".") != -1)
        fld.replace(".", "\\.");

    var destfld = $j("#" + fld);
    if (actionStr == "4" || actionStr == "5" || (fld.substr(0, 2) == "dc" && (actionStr == "8" || actionStr == "9" || actionStr == "10" || actionStr == "11"))) {
        var dcName = fld.substr(2);
        destfld = $j("#DivFrame" + fld.toString().substring(2));
        if (destfld.length == 0) {
            if ($j.inArray(dcName, TabDCs) != -1) {
                destfld = $j("#ank" + dcName);
            }
        }
    }
    var fldRowNo = GetFieldsRowNo(fld);
    var fldDcNo = GetFieldsDcNo(fld);
    var fldDbRowNo = GetDbRowNo(fldRowNo, fldDcNo);

    var isFldSaveBtn = false;

    if (destfld.length <= 0) {
        //check if the field is button, by removing the rowno and dc number
        var newFldName = fld;
        if (fld.toString().indexOf("F") != -1)
            newFldName = fld.substring(0, fld.lastIndexOf("F") - 3);

        $j(".axpBtn").each(function () {
            if ($j(this).attr("id") == newFldName) {
                destfld = $j(this);
                isFieldBtn = true;
                return false;
            }
        });

        var actTmpBtn;
        $j(".action img").each(function () {
            if ($j(this).attr("id") == newFldName) {
                actTmpBtn = $j(this);
                isFieldBtn = true;
                return false;
            }
        });

        //AxpTstBtn
        var actTmpBtn; var isBtnInDc = false;
        $j(".AxpTstBtn input,img").each(function () {
            if ($j(this).attr("value") == newFldName || $j(this).attr("id") == "AxpTstBtn_" + newFldName) {
                actTmpBtn = $j(this);
                isFieldBtn = true;
                isBtnInDc = true;
                return false;
            }
        });

        if (newFldName.toLowerCase() == "remove")
            newFldName = "delete";
        else if (newFldName.toLowerCase() == "list view")
            newFldName = "listview";
        else if (newFldName.toLowerCase() == "new")
            newFldName = "add";

        if (newFldName.toLowerCase() == "save")
            isFldSaveBtn = true;

        $j("#icons").find("a").each(function () {
            if ($j(this).attr("class") == newFldName.toLowerCase() || (typeof btnName !== 'undefined' && $j(this).text() == btnName)) {
                destfld = $j(this);
                isFieldBtn = true;
            }
        });

        //condition to check prev and next button in list view header
        if (!isFieldBtn) {
            $j("#nextprevicons").find("a").each(function () {
                if ($j(this).attr("class") == newFldName.toLowerCase()) {
                    destfld = $j(this);
                    isFieldBtn = true;
                }
            });
            $(".dvdcframe input:button").each(function () {
                if ($j(this).val() == newFldName) {
                    destfld = $j(this);
                    isFieldBtn = true;
                }
            });
        }


        if (actTmpBtn != undefined && actTmpBtn.length > 0)
            destfld = actTmpBtn.parent(0);
        if (isBtnInDc)
            destfld = actTmpBtn;
    }

    // 1 - Enable Field, 2 - Disable Field, 3 - SetValue, 4 - Show DC, 5 - Hide DC(its not really hide, rather disable,
    // 6 - Enable Field and Editable, 7 - Enable Field but not editable? TODO: check this case
    // 8 - Hide (DC or Field), 9 - Show (DC or Field)
    // 10 - hidepopdc, 11 - showpopdc
    if (destfld.length > 0) {
        switch (actionStr) {
            case ("1"):
                if (isFieldBtn) {
                    if (isFldSaveBtn)
                        EnableSaveBtn(true);
                    else
                        EnableDisableBtns(destfld, true);
                }
                else {

                    if (IsPickListField(destfld.attr("id")) == true) {
                        var pickFld = document.getElementById("img~" + destfld.attr("id"));
                        pickFld.disabled = false;
                        pickFld.className = "input-group-addon handCur pickimg";
                    }


                    if (destfld.val() == 0 && destfld.prop("type") != "select-one")
                        destfld.val("");

                    if (destfld.attr("title") == dateString && destfld.val() == "")
                        destfld.val(dateString);
                    if (destfld.attr("type") == "checkbox") {
                        var checlistid = destfld.attr("id");

                        EnableDisableCheckbox(checlistid, false)
                    }
                    else {

                        // for enabling the Rich Text Box If it is disabled on dataload using form control
                        if (destfld.attr("id").startsWith("rtf_") || destfld.attr("id").startsWith("rtfm_") || destfld.attr("id").startsWith("fr_rtf_") || GetDWBFieldType(GetFieldsName(destfld.attr("id"))) == "Rich Text") {
                            $j("#cke_" + destfld.attr("id")).prop("disabled", false);
                            destfld.css("display", "none");
                            $j("#cke_" + destfld.attr("id")).removeAttr("disabled");
                        }
                        if (destfld.attr("class") == "axpImg") {
                            destfld.attr("onclick", null);
                        }
                        destfld.prop("disabled", false);
                        destfld.prop("readOnly", false);
                        destfld.removeAttr("readOnly");
                        SetAutoCompAccess("enabled", destfld);

                    }
                }
                break;
            case ("2"):
                if (isFieldBtn) {
                    if (isFldSaveBtn)
                        EnableSaveBtn(false);
                    else
                        EnableDisableBtns(destfld, false);
                }
                else {
                    if (IsPickListField(destfld.attr("id")) == true) {
                        var pickFld = document.getElementById("img~" + destfld.attr("id"));
                        pickFld.disabled = true;
                        pickFld.className = "pickimg input-group-addon handCur";
                    }
                    if (destfld.attr("title") == dateString && (destfld.val() == dateString || destfld.val() == "''"))
                        destfld.val("");



                    if (destfld.attr("type") == "checkbox") {
                        var checlistid = destfld.attr("id");
                        EnableDisableCheckbox(checlistid, true)
                    }

                    else {

                        // for disabling the Rich Text Box If it is disabled on dataload using form control
                        if (destfld.attr("id").startsWith("rtf_") || destfld.attr("id").startsWith("rtfm_") || destfld.attr("id").startsWith("fr_rtf_") || GetDWBFieldType(GetFieldsName(destfld.attr("id"))) == "Rich Text") {
                            $j("#cke_" + destfld.attr("id")).attr('disabled', 'disabled');
                            destfld.css("display", "none");
                            $j("#cke_" + destfld.attr("id")).prop("readonly", true);
                        }
                        if (destfld.attr("class") == "axpImg") {
                            destfld.attr("onclick", "callnull");
                        }
                        destfld.prop("disabled", true);
                        destfld.attr("readOnly", "readOnly");
                        SetAutoCompAccess("disabled", destfld);

                    }
                }
                break;
            case ("3"):
                var dcNo = GetDcNo(fldname);
                if ($j("#" + fld).hasClass("multiFldChk") && fldValue.trim() == "") {
                    if (IsDcGrid(dcNo)) {
                        $j("input[id=" + fld + "]").each(function () {
                            $j(this).removeAttr("checked");
                            $j(this).prop("checked", false);
                        });
                    } else {
                        try {
                            $("#" + fld).val("");
                            $("#" + fld).data("valuelist", "");
                            $("#" + fld).tokenfield('setTokens', []);
                        } catch (ex) { }
                    }
                }
                else {
                    CallSetFieldValue(fld, fldValue);
                }

                UpdateFieldArray(fld, fldDbRowNo, fldValue, "parent", "");
                break;
            case ("4"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    ShowingDc(dcNo, "enable");
                }
                break;
            case ("5"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    ShowingDc(dcNo, "disable");
                }
                break;
                //Enable    
            case ("6"):
                if (isFieldBtn) {
                    if (isFldSaveBtn)
                        EnableSaveBtn(true);
                    else
                        EnableDisableBtns(destfld, true);
                }
                else {
                    if (IsPickListField(destfld.attr("id")) == true) {
                        var pickFld = document.getElementById("img~" + destfld.attr("id"));
                        pickFld.disabled = false;
                        pickFld.className = "input-group-addon handCur pickimg";
                    }
                    destfld.prop("disabled", false);
                    destfld.prop("readOnly", false);
                    if (!isFieldBtn)
                        destfld.removeClass("dis");
                    destfld[0].children[0].className = "handCur";
                }
                break;
                //Disable    
            case ("7"):
                if (isFieldBtn) {
                    if (isFldSaveBtn)
                        EnableSaveBtn(false);
                    else
                        EnableDisableBtns(destfld, false);
                }
                else {
                    if (IsPickListField(destfld.attr("id")) == true) {
                        var pickFld = document.getElementById("img~" + destfld.attr("id"));
                        pickFld.disabled = true;
                        pickFld.className = "input-group-addon  pickimg";
                    }
                    destfld.prop("disabled", true);
                    destfld.prop("readOnly", false);
                    destfld.addClass("dis");
                    destfld[0].children[0].className = "";
                }
                break;
            case ("8"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    if (typeof isWizardTstruct != "undefined" && isWizardTstruct)
                        ToggleWizardDc(dcNo, "hide");
                    else
                        ShowingDc(dcNo, "hide");
                }
                else {
                    HideShowField(fldname, "hide");

                    //  var fieldName = GetFieldsName(fieldID);
                    var fldInd = GetFieldIndex(fldname);
                    var fldDType = GetDWBFieldType("", fldInd);
                    if (fldname.startsWith("axptm_") || fldname.startsWith("axpdbtm_") || (fldDType != "" && fldDType.toLowerCase() == "time")) {
                        //$(".ui-datepicker.ui-widget").css("display", "none");
                        $j("#" + destfld.attr("id") + " .tstOnlyTime").removeClass('hasDatepicker');
                    }
                }
                break;
            case ("9"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    if (typeof isWizardTstruct != "undefined" && isWizardTstruct)
                        ToggleWizardDc(dcNo, "show");
                    else
                        ShowingDc(dcNo, "show");
                }
                else {
                    HideShowField(fldname, "show");
                    //  var fieldName = GetFieldsName(fieldID);
                    var fldInd = GetFieldIndex(fldname);
                    var fldDType = GetDWBFieldType("", fldInd);
                    if (fldname.startsWith("axptm_") || fldname.startsWith("axpdbtm_") || (fldDType != "" && fldDType.toLowerCase() == "time")) {
                        //$(".ui-datepicker.ui-widget").css("display", "block");
                        $j("#" + destfld.attr("id") + " .tstOnlyTime").addClass('hasDatepicker');
                    }
                }
                break;
            case ("10"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    ShowingDc(dcNo, "hidepopdc");
                }
                break;
            case ("11"):
                if (fldname.substr(0, 2) == "dc") {
                    var dcNo = parseInt(fldname.substr(2, fldname.length), 10);
                    ShowingDc(dcNo, "showpopdc");
                }
                break;
            case ("12"):
                var dcNo = GetDcNo(fldname);
                if (!IsDcGrid(dcNo)) {
                    if ($j("#" + fld).attr("type") == "checkbox")
                        $("label[for='" + fld + "'] span").text(fldValue);
                    else
                        $("label[for='" + fld + "']").text(fldValue);
                } else {
                    $("#gridHd" + dcNo + " th[id='th-" + fldname + "']").text(fldValue);
                    $("#wrapperForEditFields" + dcNo + " label[for='" + fld + "']").text(fldValue);
                }
                break;
            default:
                return;
        }
    }
    else {
        EnableDisableField(fld, actionStr, '0');

        //If the Dc to be enabled or disbaled is not available, 
        //it is assumed to be a tab dc and the dc no along with the action is captured in the array.
        if ((actionStr == "4" || actionStr == "5") && fldname.substr(0, 2) == "dc") {
            var actn = "";
            if (actionStr == "4")
                actn = "enable";
            else
                actn = "disable";

            var dcNo = parseInt(fldname.substr(2, fldname.length), 10);

            var idx = $j.inArray(dcNo + "~" + actn, DisabledDcs);
            if (idx == -1)
                DisabledDcs.push(dcNo + "~" + actn);
        }
    }
    if (typeof isWizardTstruct != "undefined" && isWizardTstruct)
        CheckWizardSaveButton();
}


function EnableDisableCheckbox(listID, Value) {
    $j("#chkAll_" + listID).prop("disabled", Value);
    $j("#chkAll_" + listID).attr("readOnly", Value);
    $j("input:checkbox[id='" + listID + "']").each(function () {
        $j(this).prop("disabled", Value);
        $j(this).attr("readOnly", Value);
    });

}

//If the field to be enabled or disable and if not avilabe adding these fields to an array  
function EnableDisableField(fldName, action, status) {

    if (status == "1") {
        ProcessFormControl(fldName, action, '')
    }
    else {
        var idx = $j.inArray(fldName + "~" + action, AxFormContDisableFlds);
        if (idx == -1)
            AxFormContDisableFlds.push(fldName + "~" + action);
    }
}



function HideShowField(fldName, action) {
    var dcNo = GetDcNo(fldName);
    var fld = "";


    if (IsDcGrid(dcNo)) {
        if (action == "hide")
            $j("#th-" + fldName).hide();
        else
            $j("#th-" + fldName).show();
        var rowCnt = 0;
        rowCnt = GetDcRowCount(dcNo);
        var eleType = getGridFldType(fldName, dcNo)
        for (var i = 1; i <= rowCnt; i++) {
            fld = $j("#" + fldName + GetClientRowNo(i, dcNo) + "F" + dcNo);
            if (fld.length > 0) {

                if (action == "hide") {
                    //fld.hide().attr("data-type", eleType);
                    fld.hide();
                    inputValue.css("display", "none");
                    fld.parent().hide();
                    var dataStyle = fld.attr("data-style");
                    if (dataStyle != undefined)
                        fld.attr("data-style", dataStyle.indexOf("display: inline") > 0 ? dataStyle.replace("display: inline;", "display: none;") : (dataStyle.indexOf("display: none") > 0 ? dataStyle : (dataStyle + "display: none;")));
                    if ($j("#dvGrid" + fldName).length)
                        $j("#dvGrid" + fldName).hide();
                    if (fld.closest(".gridElement").length)
                        fld.closest(".gridElement").hide();
                    if (!fld.parent().is('td') && fld.parent().parent().length && fld.parent().parent().is('td'))
                        fld.parent().parent().hide();
                }
                else {
                    //fld.show().attr("data-type", eleType);
                    fld.show();
                    fld.parent().show();
                    inputValue.css("display", "inline");
                    var dataStyle = fld.attr("data-style");
                    if (dataStyle != undefined)
                        fld.attr("data-style", dataStyle.indexOf("display: inline") > 0 ? dataStyle : (dataStyle + "display: inline;"))
                    if ($j("#dvGrid" + fldName))
                        $j("#dvGrid" + fldName).show();
                    if (fld.closest(".gridElement").length)
                        fld.closest(".gridElement").show();
                    if (!fld.parent().is('td') && fld.parent().parent().length && fld.parent().parent().is('td'))
                        fld.parent().parent().show();
                }
            }
            else {
                var idx = $j.inArray(fldName + "~" + action, AxFormContHiddenFlds);
                if (idx == -1)
                    AxFormContHiddenFlds.push(fldName + "~" + action);
            }
        }
        // SetGridHeaderWidth(dcNo);
    }
    else {
        fld = $j("#dv" + fldName);
        if (fld.length > 0) {
            if (action == "hide")
                fld.hide().parents(".grid-stack-item").hide();
            else {
                fld.show().parents(".grid-stack-item").show();
                var fldInput = fld.find(':input');
                if (fldInput.css('visibility') == 'hidden') { }
                fldInput.css('visibility', '');
            }
        }
        else {
            var idx = $j.inArray(fldName + "~" + action, AxFormContHiddenFlds);
            if (idx == -1)
                AxFormContHiddenFlds.push(fldName + "~" + action);
        }
    }
}
var inputValue = "";
function getGridFldType(fldName, dcNo) {

    var rc = $("#gridHd" + dcNo + " tbody tr").length == 0 ? 1 : $("#gridHd" + dcNo + " tbody tr").length;
    inputValue = $j("#" + fldName + GetClientRowNo(rc, dcNo) + "F" + dcNo);
    var currentElement = inputValue.closest(".gridElement");
    eleType = "";
    if (currentElement.find('span.picklist').length > 0) {
        eleType = 'pickList';
        hiddenData = currentElement.find('span.picklist input[type = hidden]').attr('id') + '~' + currentElement.find('span.picklist input[type = hidden]').val();
    } else if (currentElement.find('input.grdAttach').length > 0) {
        eleType = 'gridattach';
        isAttachMentExist = true;
    } else if (currentElement.find('input.date').length > 0) {
        eleType = 'datepicker';
    } else if (inputValue.hasClass('fldAutocomplete')) {
        inputValue.hasClass('fastdll') ? eleType = 'autocomplete-select' : eleType = 'autocomplete-pick';
        eleType = inputValue.hasClass('isrefreshsave') ? eleType + "~isrefreshsave" : eleType;

    } else {
        eleType = inputValue[0].nodeName.toLowerCase();
        (eleType == "input" && inputValue[0].type == "checkbox") ? eleType = "checkbox" : "";
        (eleType == "input" && inputValue.hasClass('number')) ? eleType = "numeric" : "";
    }
    return eleType;
}


//<Module>  FormControl </Module>
//<Author>  Naveen  </Author>
//<Description> Function to evaluate the if else condition statement </Description>
//<Return> Returns the evaluated result </Return>
var s;
function Getcondition(i) {

    var isfld = false;
    var expFldname1 = "";
    var fieldVal = '';
    s = Formcontrols[i + 1];
    var firstChar = s.substring(0, 1);
    if (firstChar == ":")
        s = s.substring(1, s.length);
    s = GetExactFieldName(s);
    fld = GetComponentName(s, fldExtn);

    cond = GetCondFldValue(fld);
    if (cond == "") cond = "''";

    var op = Formcontrols[i + 2];
    if (op == "et")
        op = "==";
    if (op == "net")
        op = "!=";
    if (op == "gt")
        op = ">";
    if (op == "lt")
        op = "<";
    if (op == "gtoet")
        op = ">=";
    if (op == "ltoet")
        op = "<=";

    cond = cond + op;
    //TODO:Need to handle the condition (:fieldname = :fieldname)
    s = Formcontrols[i + 3];
    var firstChar = s.substring(0, 1);
    if (firstChar == ":") {
        s = s.substring(1, s.length);
        s = GetExactFieldName(s);
        s = GetComponentName(s, fldExtn);
        s = GetCondFldValue(s);
    }
    s = TrimAll(s);
    s = s.replace(/\s/g, "");
    if (isNaN(s)) {
        s = s.replace(/\"/g, "");
        s = '"' + s + '"';
    }

    cond = cond + s;
    result = eval(cond);
    return result;
}

//
function GetComponentName(fieldName, fldExtn) {

    var fldDcNo = GetDcNo(fieldName);
    var isGrid = IsDcGrid(fldDcNo);

    if (fldExtn == "") {
        if (isGrid)
            fld = fieldName + "001F" + fldDcNo;
        else
            fld = fieldName + "000F" + fldDcNo;
    }
    else {
        var fld = fieldName + fldExtn;
    }

    if (!document.getElementById(fld)) {
        if (isGrid)
            fld = fieldName + "001F" + fldDcNo;
        else
            fld = fieldName + "000F" + fldDcNo;
    }
    return fld;
}

//Function to fetch the value of the field in condition, from the field or parameters list.
function GetCondFldValue(fld) {
    var isfld = $j("#" + fld);
    var fieldVal = "";

    if (isfld.length > 0) {

        fieldVal = GetFieldValue(fld);
    }
    else {

        var w = 0;
        if (Parameters.length > 1) {
            for (var pki = 1; pki < Parameters.length; pki++) {
                var list = Parameters[pki].toString();
                list = list.split("~");
                varlist[w] = list[0].toString();
                valuelist[w] = list[1].toString();
                w++;
            }
        }

        for (var ij = 0; ij < varlist.length; ij++) {

            if (s == varlist[ij]) {
                fieldVal = valuelist[ij];
                break;
            }
        }
    }

    if (fieldVal != undefined) {
        fieldVal = fieldVal.replace(/\s/g, "");
    }
    else {
        fieldVal = "''";
    }
    // fixed for the "dd/mm/yyyy" to be considered as empty value.
    if (fieldVal == dateString) {
        fieldVal = "''";
    }

    if (isNaN(fieldVal))
        fieldVal = '"' + fieldVal + '"';

    return fieldVal;
}


//<Module>  FormControl </Module>
//<Author>  Naveen  </Author>
//<Description> Function to hide/show the DC control </Description>
//<Return> hide/show the DC control based on the action </Return>
function ShowingDc(a, x, calledFrom) {

    var isGrid = IsDcGrid(a);
    var adddcno = parseInt(a, 10);

    var isHidden = 'visible';
    var isDisplay = 'block';
    var classDcBut = "glyphicon glyphicon-chevron-down icon-arrows-down";
    var imgAlt = "show";
    var cursorStyle = 'hand';
    var disable = "true";
    x = x.toString().toLowerCase();
    var callGetTab = false;

    if (x == "hide") {

        isHidden = 'hidden';
        isDisplay = 'none';
        classDcBut = "glyphicon glyphicon-chevron-up icon-arrows-up";
        imgAlt = "show";
        cursorStyle = 'default';
        disable = "true"
    }
    else if (x == "show") {

        var dcIdx = GetTabDcIndexPagePos(adddcno);
        if (dcIdx != -1) {
            if (arrVisibleTabDcs[dcIdx] == "") {
                arrVisibleTabDcs[dcIdx] = (adddcno);
                callGetTab = true;
            }
            else
                callGetTab = false;
        }
        isHidden = 'visible';
        isDisplay = 'block';
        classDcBut = "glyphicon glyphicon-chevron-down icon-arrows-down";
        imgAlt = "hide";
        cursorStyle = 'hand';
        disable = "false";
    }

    var dcBut = $j("#dcButspan" + a);
    if (dcBut.length > 0) {
        dcBut.attr("alt", imgAlt);
        dcBut.attr("class", classDcBut);
        dcBut.css("visibility", isHidden);
        dcBut.css("cursor", cursorStyle);
    }

    $j(".fbutton").each(function () {
        if (x == "hide") {
            $j(this).prop("disabled", true);
        }
        else {
            $j(this).prop("disabled", false);
        }
    });

    var dvFrame = $j("#DivFrame" + a);
    var thisFldId = "";
    if (dvFrame.length > 0) {
        if (x == "showpopdc" || x == "hidepopdc") {
            //calling popupdcdialog func
            createPopDcDialog(a, dvFrame);
            if (typeof fld != "undefined" || fld != null || fld != "") {
                thisFldId = fld;
            } else {
                if (parseInt(dcno, 10) > 0) {
                    if (DCIsGrid[dcno - 1].toLowerCase() == "true") {
                        rowNo = GetRowNoHelper(AxActiveRowNo);
                        thisFldId = AxActiveField + rowNo + "F" + GetDcNo(AxActiveField);;
                    }
                    else {
                        rowNo = "000";
                        thisFldId = AxActiveField + rowNo + "F" + GetDcNo(AxActiveField);;
                    }
                }
            }
        }
        if (x == "show") {
            dvFrame.show();
        }
        else if (x == "hide") {
            dvFrame.hide();
        } else if (x == "showpopdc") {
            if (document.readyState == "complete") {
                dvFrame.dialog('open');
            }
            dvFrame.find("#head" + a).find("a[onclick^='javascript:ShowDc(']").hide();
            if (!($("#" + thisFldId).parent().next()).hasClass("ShowPopDc")) {
                $("<span class=\"fa fa-external-link ShowPopDc\" onclick=\"ShowingDc('" + a + "','showpopdc'); return false;\"></span>").insertAfter($("#" + thisFldId).parent());
            }
        } else if (x == "hidepopdc") {
            if (document.readyState == "complete") {
                dvFrame.dialog('close');
            }
            if (($("#" + thisFldId).parent().next()).hasClass("ShowPopDc")) {
                ($("#" + thisFldId).parent().next()).remove();
            }
        }
        else if (x == "enable") {
            $j("#DivFrame" + a).find('input,textarea, img, select, a').removeAttr('disabled');
            $j("#DivFrame" + a).find('.rowdelete').removeClass("disabledelete");
            $j("#wrapperForEditFields" + a).show();
            $j("#gridToggleBtn" + a).removeClass('disables').prop('disables', false);
            $j("#DivFrame" + a).find('.rowadd').removeClass("disableadd");
            $j("#DivFrame" + a).find('.fillcls').removeClass("disablefill");
            $j("#gridAddBtn" + a).prop('disabled', false);
            $j("#wrapperForEditFields" + a).find(".editLayoutFooter button").removeClass('disabled').prop('disabled', false);
            $j("[id ^= 'fillgrid']").prop('disabled', false).removeClass('disabled');
            $j("#gridHd" + a + " tbody tr").removeClass('disableTheRow');
            $j("#gridHd" + a + " tbody tr").find('.glyphicon.glyphicon-pencil,.glyphicon.glyphicon-trash').removeClass('disabled').prop("disabled", false).parent().removeClass('disabled').prop("disabled", false);
            $("#gridAddBtn" + a).next().find(":button").attr("disabled", false).on('click');
        }
        else if (x == "disable") {
            $j("#DivFrame" + a).find('input,textarea, img, select, a').not('.subGrid,.chkShwSel').attr('disabled', true);

            for (var instanceName in CKEDITOR.instances) {
                try {
                    CKEDITOR.instances[instanceName].setReadOnly(true);
                } catch (ex) { }
            }

            $j("#DivFrame" + a).find('a img').removeClass('handCur');
            $j("#DivFrame" + a).find('img').attr('onclick', 'javascript:void(0);');
            $j("#DivFrame" + a).find('.dvImgClear .icon-arrows-remove').attr('onclick', 'javascript:void(0);');
            $j("#DivFrame" + a).find(":button").removeClass('handCur');
            $j("#DivFrame" + a).find('.rowdelete').addClass("disabledelete");
            $j("#DivFrame" + a).find('.rowadd').addClass("disableadd");
            $j("#gridAddBtn" + a).prop('disabled', true);
            $j("#clearThisDC" + a).prop("disabled", true).find(".gridActs").addClass("disabled");
            $j("#wrapperForEditFields" + a).hide();
            $j("#gridToggleBtn" + a).addClass('disabled').prop('disabled', true);
            $j("#DivFrame" + a).find('.fillcls').addClass("disablefill");
            $j("[id ^= 'fillgrid']").prop('disabled', true).addClass('disabled');
            $j("#wrapperForEditFields" + a).find(".editLayoutFooter button").addClass('disabled').prop('disabled', true);
            $j("#colScroll" + a + " table tbody tr").addClass('disableTheRow');
            $j("#colScroll" + a + " table tbody tr").find('.glyphicon.glyphicon-pencil,.glyphicon.glyphicon-trash').addClass('disabled').prop("disabled", true).parent().addClass('disabled').prop("disabled", true);
            $("#gridAddBtn" + a).next().find(":button").attr("disabled", true).off('click');

            //to disable grid attachment icon click event
            $j("#DivFrame" + a).find(".upload-icon").hover(function () {
                $(this).css("cursor", "not-allowed");
            }).attr('onclick', 'javascript:void(0)');

            //to disable grid attachment files click event(remove & preview)
            $j("#DivFrame" + a).find(".attach-files .grdAttach, .grdAttach").hover(function () {
                $(this).css("cursor", "not-allowed");
            }).attr('onclick', 'javascript:void(0)');

            $j("#DivFrame" + a).find(".attachment-count").removeAttr("disabled");

        }
    }
    else {
        if (x == "disable" || x == "enable") {
            var idx = $j.inArray(a + "~" + x, DisabledDcs);
            if (idx == -1)
                DisabledDcs.push(a + "~" + x);
        }
    }

    var li = $j("#li" + a);
    if (li.length > 0) {
        if (x == "show")
            li.show();
        else if (x == "hide")
            li.hide();
    }


    //Rule 1- If the active tab is action tab and x is hide, then show first tab
    //Rule 2- If action tab is the first tab then show the first tab
    if (li.hasClass("active") && x == "hide") {
        var firstTab = GetFirstTabDcNo(a)
        if (firstTab != -1)
            $j("#ank" + firstTab).click();
    }
}

//function to createpopdcdialog

function createPopDcDialog(a, dvFrame) {
    var wWidth = $(window).width();
    var dWidth = wWidth * 0.97;
    var wHeight = $(window).height();
    var dHeight = wHeight * 0.97;

    if (document.readyState == "complete") {

        dvFrame.dialog({
            modal: true,
            autoOpen: false,
            width: dWidth,
            open: function () {
                $('.ui-widget-overlay').bind('click', function () {
                    dvFrame.dialog('close');
                })

            },
            close: function () {
                $(this).dialog("close");
                $(this).dialog('destroy');
                dvFrame.hide();
            },
            buttons: [
                {
                    text: "Save", click: function () {
                        if (ValidateBeforeSubmit(a)) {
                            dvFrame.dialog('close');
                        }
                    }, 'class': "ui-button ui-corner-all ui-widget hotbtn"
                },

                {
                    text: "Cancel",
                    click: function () {
                        ClearFieldsInDC(a);
                        dvFrame.dialog('close');
                    }, 'class': "coldbtn btn", style: "background: antiquewhite"
                }
            ]
        });

        $('.ui-dialog-titlebar').hide();

        if (dvFrame.find("div:eq(0) button").length == 0) {
            dvFrame.find("div:eq(0)").prepend('<button class="remodal-close icon-basic-remove" style="color:rgba(76, 53, 53, 0.61);"></button>');
        }
        else {
            //do nothing
        }

        $('.remodal-close').bind('click', function () {
            dvFrame.dialog('close');
        });
    }

}

function createDataGridDialog(editGridDC) {
    createBootstrapModal("divDc" + editGridDC + " #gridheaddiv", "DC" + editGridDC + " ", "wrapperForEditFields" + editGridDC, "", "", "97%");
}
function clearDataGrid(editGridDC) {
    var isExitDummy = false;
    if (gridDummyRowVal.length > 0) {
        gridDummyRowVal.map(function (v) { if (v.split("~")[0] == editGridDC) isExitDummy = true; });
    }
    if (isExitDummy)
        return false;

    //if ($j("#clearThisDC" + editGridDC).prop("disabled"))
    if ($j("#clearThisDC" + editGridDC).find("a[disabled='disabled']").length > 0)
        return false;

    if ($(".wrapperForGridData" + editGridDC + " table tbody tr").length > 0) {
        var cutMsg = eval(callParent('lcm[25]'));
        //cutMsg = cutMsg.replace('{0}', editGridDC);//GetDcCaption(fillGridDc)
        cutMsg = cutMsg.replace('{0}', GetDcCaption(editGridDC));
        var glType = eval(callParent('gllangType'));
        var isRTL = false;
        if (glType == "ar")
            isRTL = true;
        else
            isRTL = false;

        var clearThisDCGrid = $.confirm({
            closeIcon: false,
            rtl: isRTL,
            title: eval(callParent('lcm[155]')),
            onContentReady: function () {
                $(".jconfirm-buttons .hotbtn").focus(); //bug #AGI000616 -- manually focusing the cursor to Confirm button to avoid tab focus to other elements(once dialog displayed click on Shift+Tab it will navigate to background elements) 
                disableBackDrop('bind');
            },
            backgroundDismiss: 'false',
            escapeKey: 'buttonB',
            content: cutMsg,
            buttons: {
                buttonA: {
                    text: eval(callParent('lcm[164]')),
                    btnClass: 'hotbtn',
                    action: function () {
                        clearThisDCGrid.close();
                        var fDcRowCount = GetDcRowCount(editGridDC);
                        DeleteAllRows(editGridDC, fDcRowCount);
                        ShowDimmer(false);
                    }
                },
                buttonB: {
                    text: eval(callParent('lcm[192]')),
                    btnClass: 'coldbtn',
                    action: function () {
                        AxWaitCursor(false);
                        ShowDimmer(false);
                        disableBackDrop('destroy');
                        return;
                    }
                },
            }
        });
    } else {
        showAlertDialog("info", 2004, "client");
    }
}

function GetFirstTabDcNo(curDcNo) {
    var j = 0;
    for (j = 0; j < PagePositions.length; j++) {

        if (PagePositions[j].toString().indexOf(",") != -1) {

            var strTabs = PagePositions[j].toString().split(',');
            var cnt = 0;
            for (cnt = 0; cnt < strTabs.length; cnt++) {
                if (curDcNo == strTabs[cnt]) {
                    return strTabs[0];
                }
            }
        }
    }

    return -1;
}

//<Module>  FormControl </Module>
//<Author>  Naveen  </Author>
//<Description> Function to Enable/Disable the DC control </Description>
//<Return> Enables/Disables the DC control based on the action </Return>
function EnableDisableDc(a, x) {
    var isGrid = IsDcGrid(a);
    var adddcno = parseInt(a, 10);
    var isDisable = false;
    var cursorStyle = 'hand';
    if (x == "Enable") {

        isDisable = false;
        cursorStyle = 'hand';
    }
    else if (x == "Disable") {

        isDisable = "disabled";
        cursorStyle = 'default';
    }

    var dcBtn = $j("#dcButspan" + a);
    if (dcBtn.length > 0) {
        dcBtn.attr("alt", "hide");
        dcBtn.attr("class", "glyphicon glyphicon-chevron-down icon-arrows-down");
        dcBtn.attr("disabled", isDisable);
        dcBtn.css("cursor", cursorStyle);
    }

    if (isGrid) {
        var dvFrame = $j("#DivFrame" + a);
        if (dvFrame.length > 0) {
            if (x == "Enable")
                dvFrame.attr("disbaled", false);
            else
                dvFrame.attr("disbaled", "disbaled");
        }
    }
    else {
        var nonGridDc = $j("#DivFrame" + a);
        if (nonGridDc.length > 0) {
            if (x == "Enable")
                nonGridDc.attr("disbaled", false);
            else
                nonGridDc.attr("disbaled", "disbaled");
        }
        else {
            var tabDc = $j("#tab-" + a);
            if (tabDc.length > 0) {
                if (x == "Enable")
                    tabDc.attr("disbaled", false);
                else
                    tabDc.attr("disbaled", "disbaled");
            }
        }
    }
}

//-----------------------------List of functions in this file--------------------------------------
//CheckAOWE(dcNo) -Function which returns the actual Grid row count for checking Add Only When Empty in Fill grid.
//FillGrid(tid, dcname, ashow, multiselect, plist) -Function to call fill grid service or open a fillgrid page.  
//SuccessFillGridNonMS(result, eventArgs) -Callback function for DoGetFillGridNonMS service.
//ProcessFillGrid(dcNo) -Function which calls the DoGetFillGrid service.
//SuccGetResultValue(result, eventArgs) -Callback function form the DoGetFillGrid webservice. 
//DoFillControlPrivilege(strSingleLineText) -Function which executes the partial disabling in the fill grid dc.
//CloseWrapper() -Function to close the wrapper on fill grid window.
//CheckAll() -Function to check all the row once the header row is checked. 
//ChkHdrCheckbox() -Function to check if the header checkbox is checked then check all.  
//-------------------------------------------------------------------------------------------------
$j.curCSS = function (element, attrib, val) {
    $j(element).css(attrib, val);
};

//Function which returns the actual Grid row count for checking Add Only When Empty in Fill grid.
//By default the grid has one row, 
//Function to add a new group to the given format grid dc.
function AddGroup(dcNo, keyColName) {
    fillDcname = dcNo;
    //This below code is to send the existing groups in the format grid on filling new items.
    var dcRowCnt = GetDcRowCount(dcNo);
    if (parseInt(dcRowCnt, 10) == 1) {
        var rowNo = GetClientRowNo("001", dcNo);
        var keyColfldId = keyColName + rowNo + "F" + dcNo;
        var val = GetFieldValue(keyColfldId);
        if (val != "")
            UpdateFieldArray(keyColfldId, "001", val, "");
    }

    var rid = $j("#recordid000F0").val();
    ArrActionLog = "AddGroup-DcNo-" + dcNo + "-KeyColumn-" + keyColName + "-Recordid-" + rid;

    var dIndx = GetFormatGridIndex(dcNo);
    if (dIndx != -1) {
        var multiSelect = DcMultiSelect[dIndx].toString().toLowerCase();
        try {
            if (multiSelect == "true")
                ASB.WebService.GetAddGroupsHtml(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, dcNo, transid, tstDataId, SuccessGetFillGridMS, OnException);
            else {
                var delRows = GetDeletedRows();
                var chngRows = GetChangedRows();
                var recid = $j("#recordid000F0").val();
                ShowDimmer(true);
                ASB.WebService.ExecuteAction(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, ArrActionLog, recid, transid, dcNo, "", "", delRows, chngRows, tstDataId, SuccExecActionValue, OnException);
            }
        }
        catch (ex) {
            AxWaitCursor(false);
            var execMess = ex.name + "^♠^" + ex.message;
            showAlertDialog("error", 2030, "client", execMess);
        }
    }
}

var fillGridDc = "";
var fillOrAdd = "";
var AxActivefillGridName = "";
//Function to call fill grid service or open a fillgrid page.
function FillGrid(frNo, addGroup, fillGridName, fastFill) {
    fastFill == undefined ? fastFill = false : true;
    var IsConfirm = false;
    //if (!checkEditMode())
    //    return;
    AxStartTime = new Date();
    AxStartTime = GetAxDate(AxStartTime);
    var stTime = new Date();

    try {
        AxBeforeFillGrid();
    }
    catch (ex) { }
    AxActivefillGridName = fillGridName;
    if ($j("[name=" + fillGridName + "]").attr("class").indexOf("disablefill") != -1)
        return;
    //ShowDimmer(true);
    //AxWaitCursor(true);
    var vallist = new Array();

    fillGridDc = frNo;

    var ind = $j.inArray(fillGridName, FillGridName);
    var dcIdx = $j.inArray(frNo, DCFrameNo);
    var isExitDummy = false;
    if (gridDummyRowVal.length > 0) {
        gridDummyRowVal.map(function (v) { if (v.split("~")[0] == fillGridDc) isExitDummy = true; });
    }
    //Fill grid rule:1    
    if (FillCondition[ind] == "INIT") {
        if ($("#gridHd" + frNo + " tbody tr").length > 0 && !isExitDummy) {
            IsConfirm = true;
            var cutMsg = eval(callParent('lcm[26]'));
            var glType = eval(callParent('gllangType'));
            var isRTL = false;
            if (glType == "ar")
                isRTL = true;
            else
                isRTL = false;
            var FillGridCB = $.confirm({
                closeIcon: false,
                title: eval(callParent('lcm[155]')),
                onContentReady: function () {
                    disableBackDrop('bind');
                },
                backgroundDismiss: 'false',
                rtl: isRTL,
                escapeKey: 'buttonB',
                content: cutMsg,
                buttons: {
                    buttonA: {
                        text: eval(callParent('lcm[164]')),
                        btnClass: 'hotbtn',
                        action: function () {
                            FillGridCB.close();
                            //var fDcRowCount = GetDcRowCount(frNo);
                            // DeleteAllRows(frNo, fDcRowCount);
                            if (gridDummyRowVal.length > 0) {
                                gridDummyRowVal.map(function (v) {
                                    if (v.split("~")[0] == fillGridDc)
                                        gridDummyRowVal.splice($.inArray(v, gridDummyRowVal), 1);
                                });
                            }
                            FillGridAfterConfirm(fastFill);
                        }
                    },
                    buttonB: {
                        text: eval(callParent('lcm[192]')),
                        btnClass: 'coldbtn',
                        action: function () {
                            disableBackDrop('destroy');
                            AxWaitCursor(false);
                            ShowDimmer(false);
                            return;
                        }
                    }
                }
            });

        }
    }
    else if (FillCondition[ind] == "AOWE") {
        if ($("#gridHd" + frNo + " tbody tr").length > 0 && !isExitDummy && DCHasDataRows[dcIdx] == "True") {
            IsConfirm = true;
            ShowDialog('warning', 5003, "client");
        }
    }

    function FillGridAfterConfirm(fastFill) {
        AxWaitCursor(true);
        ShowDimmer(true);
        var paramList = "";
        if (ind != -1) {
            ashow = FillAutoShow[ind];
            multiselect = FillMultiSelect[ind].toString().toLowerCase();
            paramList = FillParamFld[ind];
        }

        //If the dc has fillgrid from source dc then multiselect should not be shown.
        if (FillSourceDc[ind] != "" && multiselect == "true")
            multiselect = "false";

        var paramXml = "";
        if (paramList != "" && multiselect == "true") {

            var paramlst = paramList.toString();
            var inputdata = paramlst.split(',');

            for (var pr = 0; pr < inputdata.length; pr++) {

                var isGrid = IsGridField(inputdata[pr]);
                var dcNo = GetDcNo(inputdata[pr]);
                if (isGrid == true) {

                    var rCount = GetDcRowCount(dcNo);
                    rCount = parseInt(rCount, 10);

                    var paramValStr = "";
                    for (var k = 1; k <= rCount; k++) {

                        k = GetRowNoHelper(k);
                        inputdata[pr] = GetExactFieldName(inputdata[pr]);
                        var fld = $j("#" + inputdata[pr] + k + "F" + dcNo);
                        if (fld) {

                            var fParamName = inputdata[pr].toString() + k + "F" + dcNo;
                            var paramVal = GetFieldValue(fParamName, "fillGrid");
                            paramVal = CheckSpecialCharsInStr(paramVal);
                            paramXml += "<" + inputdata[pr] + " rowno='" + k + "' >" + paramVal + "</" + inputdata[pr] + ">";
                        }
                    }
                }
                else {
                    var fParamName = inputdata[pr].toString() + "000F" + dcNo;
                    if ($("#" + fParamName).length > 0) {
                        var paramVal = GetFieldValue(fParamName, "fillGrid");
                        paramVal = CheckSpecialCharsInStr(paramVal);
                        paramXml += "<" + inputdata[pr] + ">" + paramVal + "</" + inputdata[pr] + ">";
                    }
                    else {
                        var paramVal = CheckGlobalVars(inputdata[pr].toString());
                        if (paramVal == inputdata[pr].toString())
                            paramXml += "<" + inputdata[pr] + "></" + inputdata[pr] + ">";
                        else
                            paramXml += "<" + inputdata[pr] + ">" + paramVal + "</" + inputdata[pr] + ">";
                    }
                }
            }
        }
        var src = "fill";
        if (addGroup && addGroup != "") src = addGroup;
        fillOrAdd = src;
        if (multiselect == "true") {
            if (fastFill) {
                var res = "t";
                //if (FillGridVExpr[ind] != "") {
                //    res = EvalPrepared("", "000", FillGridVExpr[ind], "expr");
                //}

                //paramXml = "<tid>" + transid + "</tid><dc>" + frNo + "</dc>" + paramXml;
                try {
                    callBackFunDtls = "FillGridAfterConfirm♠" + fastFill;
                    ASB.WebService.GetFastFillGridData(frNo, fillGridName, transid, src, tstDataId, res, SuccessGetFillGridMS, OnException);

                }
                catch (ex) {
                    AxWaitCursor(false);
                    var execMess = ex.name + "^♠^" + ex.message;
                    showAlertDialog("error", 2030, "client", execMess);
                }
            } else {
                //Evaluate validate expression for fillgrid if any
                var res = "t";
                if (FillGridVExpr[ind] != "") {
                    res = EvalPrepared("", "000", FillGridVExpr[ind], "expr");
                }

                paramXml = "<tid>" + transid + "</tid><dc>" + frNo + "</dc>" + paramXml;
                try {
                    callBackFunDtls = "FillGridAfterConfirm♠" + fastFill;
                    ASB.WebService.GetFillGridData(paramXml, ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues,
                        DeletedDCRows, frNo, fillGridName, transid, src, tstDataId, res, SuccessGetFillGridMS, OnException);

                }
                catch (ex) {
                    AxWaitCursor(false);
                    var execMess = ex.name + "^♠^" + ex.message;
                    showAlertDialog("error", 2030, "client", execMess);
                }
            }
        }
        else {
            if (!IsFormDirty)
                SetFormDirty(true);
            //If multi select is false, 
            //Then call the DoFillGrid service directly instead of opening the fillgrid window.
            try {
                changeFillGridDc = frNo;
                callBackFunDtls = "FillGridAfterConfirm♠" + fastFill;
                ASB.WebService.DoGetFillGridNonMS(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues,
                    DeletedDCRows, frNo, fillGridName, tstDataId, SuccessFillGridNonMS, OnException);
            }
            catch (ex) {
                AxWaitCursor(false);
                var execMess = ex.name + "^♠^" + ex.message;
                showAlertDialog("error", 2030, "client", execMess);
            }
        }
        var edTime = new Date();
        AxTimeBefSerCall = edTime - stTime;
    }
    if (IsConfirm == false) {
        FillGridAfterConfirm(fastFill);
    }
}





var dialogObj;
var fgHt = 400;
var fgWid = 400;
function SuccessGetFillGridMS(result, eventArgs) {
    if (result.toLowerCase().indexOf("access violation") === -1) {
        if (CheckSessionTimeout(result))
            return;

        try {
            AxBeforeFillPopUp();
        }
        catch (ex) { }

        var fillTitle = "";
        if (fillOrAdd == "FILL")
            fillTitle = "FILL " + GetDcCaption(fillGridDc);
        else
            fillTitle = "ADD " + GetDcCaption(fillGridDc);

        if (result == "") {
            var cutMsg = eval(callParent('lcm[0]'));
            result = "<label>" + cutMsg + "</label>"
        }

        var resSplit = result.split("*♠*");

        ChangedFields = new Array();
        ChangedFieldDbRowNo = new Array();
        ChangedFieldValues = new Array();
        DeletedDCRows = new Array();

        var tablehtml = resSplit[0].toString();

        $j("#dvFillGrid").html(tablehtml);

        if (resSplit.length > 1 && resSplit[1].toString() != "") {
            var fgSize = resSplit[1].toString();
            var fgsizeSplit = fgSize.split(',');
            try {
                fgHt = fgsizeSplit[2].toString();
                fgWid = fgsizeSplit[3].toString();
            }
            catch (e) { }
            if ((fgHt == "0") || (fgWid == "0")) {
                fgHt = 400;
                fgWid = 400;
            }
            var modalData = "";

            modalData += $j("#dvFillGrid").wrap('<p id="bootstrapModalWrapP"/>').parent().html();
            $j("#bootstrapModalWrapP").html("");
            buttons = {
                "count": 2,
                "button1": {
                    'name': eval(callParent('lcm[281]')),
                    'function': "ProcessFillGrid(" + fillGridDc + ", '" + AxActivefillGridName + "')",
                    'class': 'btn hotbtn',
                    'id': 'modalCnfirmbtn'
                },
                "button2": {
                    'name': eval(callParent('lcm[192]')),
                    'class': 'btn coldbtn'
                }
            }
            createBootstrapModal("dvFillGrid", fillTitle, modalData, buttons, fgHt + "px", fgWid + "px");
            if (jQuery('table[id^=tblFillGrid]').length) bindUpdownEvents(jQuery('table[id^=tblFillGrid]').attr('id'), 'multiple');
            $("#wrapperForMainNewData", window.parent.document).hide();
        }
        else {
            var modalData = "";
            var buttons = {
                "count": 1,
                "button1": {
                    'name': eval(callParent('lcm[281]')),
                    'class': 'btn hotbtn'
                }
            }
            modalData += $j("#dvFillGrid").wrap('<p id="bootstrapModalWrapP"/>').parent().html();
            createBootstrapModal("dvFillGrid", fillTitle, modalData, buttons);
            if (jQuery('table[id^=tblFillGrid]').length) bindUpdownEvents(jQuery('table[id^=tblFillGrid]').attr('id'), 'multiple');
            $("#wrapperForMainNewData", window.parent.document).hide();
        }

        $('#bootstrapModal').ready(function () {
            fillGridDatatbl = $('table[id^=tblFillGrid]').DataTable({
                fixedHeader: true,
                "dom": '<"pull-left"f><"pull-right"l>tip',
                'columnDefs': [{ 'orderable': false, 'targets': 0 }],// hide sort icon on header of first column
                'aaSorting': [[1, 'asc']],//default sort for 1 column in ascending order
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search...",

                },
                scrollCollapse: true,
                "lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
                "autoWidth": false
            });
            $("#dvFillGrid .dataTables_filter input[type=search]").addClass("serachdatatbl form-control");
            $('#dvFillGrid .dataTables_length select').removeClass('form-control input-sm').addClass('showentries');
            var theadtext = $(".gridData.customSetupTableMN.dataTable thead tr th");
            for (var i = 1; i < theadtext.length; i++) {
                var temptext = theadtext[i].innerHTML;
                temptext = temptext.toLowerCase();// console.log(temptext);
                $(".gridData.customSetupTableMN.dataTable thead tr th")[i].innerHTML = capitalizeFirstLetter(temptext);
            }
        });

        AxWaitCursor(false);
        ShowDimmer(false);
    }
    else {
        AxWaitCursor(false);
        ShowDimmer(false);
        $("#reloaddiv").show();
        $("#dvlayout").hide();
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Function to get the dc title and return.
function GetDcCaption(dcNo) {
    dcNo = "dc" + dcNo;
    var dcTitle = "";
    var indx = $j.inArray(dcNo, DCName);
    if (indx != -1) {
        dcTitle = DCCaption[indx];
    }
    return dcTitle;
}

//Callback function for DoGetFillGridNonMS service.
function SuccessFillGridNonMS(result, eventArgs) {
    if (result.toLowerCase().indexOf("access violation") === -1) {
        if (gridDummyRowVal.length > 0) {
            gridDummyRowVal.map(function (v) {
                if (v.split("~")[0] == fillGridDc)
                    gridDummyRowVal.splice($.inArray(v, gridDummyRowVal), 1);
            });
        }

        var stTime = new Date();
        if (CheckSessionTimeout(result))
            return;
        if (result != "") {
            ParseServiceResult(result, "FillGrid");
        }

        var dcColumnValue = $j('#axp_colmerge_' + fillGridDc + '000F1');
        dcColumnValue = dcColumnValue.val();
        if (dcColumnValue != null && dcColumnValue != '' && dcColumnValue != undefined) {
            GetGridDcTable(dcColumnValue, fillGridDc);
        }

        try {
            AxAfterFillGrid();
        }
        catch (ex) {

        }
        changeEditLayoutIds(FillGridFillRows, FillGridCurrentDC, 'fillGrid');
        EvaluateSetFont(fillGridDc);
        showAttachmentPopover();
        if (AxLogTimeTaken == "true") {
            var edTime = new Date();
            var diff = edTime.getTime() - stTime.getTime();
            CreateTimeLog(AxStartTime, AxTimeBefSerCall, diff, ASBTotal, ASBDbTime, "FillGridNonMS");
        }
        //applyDesignJsonAgain(fillGridDc);
        setDesignedLayout("#divDc" + fillGridDc);
        //AlignDcElements("divDc" + fillGridDc);
        FocusOnFirstGridField(fillGridDc);
        if (isMobile) {
            $("#wrapperForEditFields" + (fillGridDc)).removeClass("hide");
            $("#wrapperForEditFields" + (fillGridDc)).addClass("mobilewrapperForEditFields");
            if ($(".wrapperForGridData" + (fillGridDc) + " table tbody tr").length == 0 && !axInlineGridEdit)
                $("#colScroll" + (fillGridDc)).hide();
            if (axInlineGridEdit)
                $(".editWrapTr").hide();
            $(".editLayoutFooter").hide();
            $("#divDc" + (fillGridDc) + " .grdButtons").addClass('hide');
            let gridButton = $("#divDc" + (fillGridDc) + " .grdButtons").html();
            $("#wrapperForEditFields" + (fillGridDc)).append('<div class="clearfix"></div><div class="grdButtons btnMobile">' + gridButton + '</div>');
            $(".dcTitle").hide().nextAll("hr.hrline").hide();

            try {
                if (typeof designObj != "undefined" && designObj[0] != null && designObj[0].selectedLayout != null && designObj[0].selectedLayout != "" && designObj[0].selectedLayout == "tile") {
                    $(".dcTitle").show().nextAll("hr.hrline").show();
                }
            } catch (ex) { }
        }
    }
    else {
        AxWaitCursor(false);
        ShowDimmer(false);
        $("#reloaddiv").show();
        $("#dvlayout").hide();
        //if (callBackFunDtls != "") {
        //    AxWaitCursor(false);
        //    ShowDimmer(false);
        //    $("#reloaddiv").show();
        //    $("#dvlayout").hide();
        //}
    }
}


var addGroupDc = "";
///Function to Add selected groups to the format grid.
function ProcessAddGroup(dcNo) {
    addGroupDc = dcNo;
    var tblFg = $j("#tblFillGrid" + dcNo);
    var rowData = "";
    var data = "";
    var selection = "";

    //Loop through the checklist and get the selected rows data
    tblFg.find('.fgChk').each(function () {
        if ($j(this).prop("checked") != undefined && $j(this).prop("disabled") == false) {
            rowData = $j(this).val();

            var rows = rowData.split("¿");
            if (selection == "")
                selection += rows[0].toString();
            else
                selection += "¿" + rows[0].toString();
        }
    });
    var dcClientRows = GetDcClientRows(dcNo);
    var lastRow = dcClientRows.getMaxVal();
    var newCnt = parseInt(lastRow, 10) + 1;
    var newRowNo = GetRowNoHelper(newCnt);
    //GetNewGroupsHtml
    try {
        ASB.WebService.GetNewGroupsHtml(dcNo, transid, selection, newRowNo, tstDataId, SuccAddGroups);
    }
    catch (ex) {
        AxWaitCursor(false);
        var execMess = ex.name + "^♠^" + ex.message;
        showAlertDialog("error", 2030, "client", execMess);
    }
}

///Success function which appends the ne group to the format grid.
function SuccAddGroups(result, eventArgs) {
    if (CheckSessionTimeout(result))
        return;
    if (addGroupDc != "") {
        var strResult = result.split("♣");
        var oldHtml = $j("#gridDc" + addGroupDc).html();
        $j("#gridDc" + addGroupDc + " > tbody:last").append(strResult[1]);
        if (strResult[0] != "") {
            var rowArray = new Array();
            var rows = strResult[0].toString().split(",");
            for (var i = 0; i < rows.length; i++) {
                UpdateDcRowArrays(addGroupDc, rows[i], "Add");
                UpdateKeyColValues(addGroupDc, rows[i]);
            }

        }
        ResetRowCount(addGroupDc, rows.length);
        ResetGridRowsStyle(addGroupDc);
        rowArray.push("#DivFrame" + addGroupDc);
        AssignJQueryEvents(rowArray);
        AxWaitCursor(false);
        if (dialogObj) {
            dialogObj.dialog("close");
            $("#wrapperForMainNewData", window.parent.document).show();
        }
    }
}


function ResetRowCount(dcNo, newCnt) {
    var oldRowCnt = parseInt($j("#hdnRCntDc" + addGroupDc).val(), 10);
    var rowCnt = oldRowCnt + newCnt;
    SetRowCount(addGroupDc, rowCnt);
}

function UpdateKeyColValues(dcNo, rowNo) {
    var dcIndx = GetFormatGridIndex(dcNo);
    if (dcIndx != -1) {
        var keyCol = DcKeyColumns[dcIndx];
        var fld = $j("#" + keyCol + rowNo + "F" + dcNo);
        var fldValue = GetFieldValue(keyCol + rowNo + "F" + dcNo);
        var dbRowNo = GetDbRowNo(rowNo, dcNo);
        UpdateFieldArray(keyCol + rowNo + "F" + dcNo, dbRowNo, fldValue, "parent");
    }
}

//Function to fill the values from list or sql without action
function ProcessFormatStaticFill(dcNo) {

    fillDcname = dcNo;
    AxWaitCursor(true);

    var tblFg = $j("#tblFillGrid" + dcNo);
    var rowData = "";
    var data = "";
    var selection = "";
    var selectionCol = "";
    var selectionType = "";

    var dcIdx = $j.inArray("dc" + dcNo, DCName);
    var keyCol = "";
    if (dcIdx != -1)
        keyCol = DcKeyColumns[dcIdx];

    //Loop through the checklist and get the selected rows data
    tblFg.find('.fgChk').each(function () {
        if ($j(this).prop("checked") != undefined) {
            rowData = $j(this).val();

            var rows = rowData.split("¿");
            for (var i = 0; i < rows.length; i++) {
                var colData = rows[i].split("♣");
                if (i == 0) {
                    if (colData[0] == keyCol) {
                        selectionCol = colData[0];
                    }
                }
                if (colData[0] == selectionCol) {

                    if (selection == "")
                        selection = colData[1];
                    else
                        selection += "," + colData[1];
                }
            }
        }
    });

    data = data.replace(/&/g, "&amp;");
    var recid = $j("#recordid000F0").val();
    try {
        ASB.WebService.ExecuteFormatFill(transid, dcNo, selection, tstDataId, SuccExecActionValue);
    }
    catch (ex) {
        AxWaitCursor(false);
        var execMess = ex.name + "^♠^" + ex.message;
        showAlertDialog("error", 2030, "client", execMess);
    }
}

//Function to call action for a format grid on the selected rows from the fill.
function ProcessFormatFill(dcNo) {
    fillDcname = dcNo;
    AxWaitCursor(true);

    var tblFg = $j("#tblFillGrid" + dcNo);
    var rowData = "";
    var data = "";
    var selection = "";
    var selectionCol = "";
    var selectionType = "";
    //Loop through the checklist and get the selected rows data
    tblFg.find('.fgChk').each(function () {
        if ($j(this).prop("checked") != undefined) {
            rowData = $j(this).val();

            var rows = rowData.split("¿");
            for (var i = 0; i < rows.length; i++) {
                var colData = rows[i].split("♣");
                if (i == 0) {
                    if (colData[0].substring(1) == "selection") {
                        selectionCol = colData[0];
                        selectionType = colData[0].substring(0, 1);
                    }
                }
                if (colData[0] == selectionCol) {
                    if (selectionType != "n") {
                        if (selection == "")
                            selection = "'" + colData[1] + "'";
                        else
                            selection += "," + "'" + colData[1] + "'";
                    }
                    else {
                        if (selection == "")
                            selection = colData[1];
                        else
                            selection += "," + colData[1];
                    }
                }
            }
        }
    });

    if (selection == "") {
        showAlertDialog("warning", 2005, "client");
        AxWaitCursor(false);
        return;
    }
    data = "<selections>" + selection + "</selections>";
    data = data.replace(/&/g, "&amp;");
    var recid = $j("#recordid000F0").val();

    var rid = $j("#recordid000F0").val();
    ArrActionLog = "FillFormatGrid-DcNo-" + dcNo + "-Selected groups-" + selection + "-Recordid-" + rid;

    var delRows = GetDeletedRows();
    var chngRows = GetChangedRows();
    try {
        ASB.WebService.ExecuteAction(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, ArrActionLog, recid, transid, dcNo, data, selection, delRows, chngRows, tstDataId, SuccExecActionValue, OnException);
    }
    catch (ex) {
        AxWaitCursor(false);
        var execMess = ex.name + "^♠^" + ex.message;
        showAlertDialog("error", 2030, "client", execMess);
    }
}

//Success Function for action after fill in the format grid dc.
function SuccExecActionValue(result, eventArgs) {
    ArrActionLog = "";
    if (CheckSessionTimeout(result))
        return;
    //the result format -> jsonsResult*♠*dcno♣rowCnt*?*dchtml
    //First split the json and html, call assignloadvalues for json 
    //second parse the html
    if (result != "") {
        ParseServiceResult(result, "Action");
    }
    if (dialogObj) {
        dialogObj.dialog("close");
        $("#wrapperForMainNewData", window.parent.document).show();
    }
}


//Function which calls the DoGetFillGrid service.
function ProcessFillGrid(dcNo, fillGridName) {
    if (gridDummyRowVal.length > 0) {
        gridDummyRowVal.map(function (v) {
            if (v.split("~")[0] == dcNo)
                gridDummyRowVal.splice($.inArray(v, gridDummyRowVal), 1);
        });
    }
    AxStartTime = new Date();
    AxStartTime = GetAxDate(AxStartTime);
    var stTime = new Date();
    fillDcname = dcNo;

    ShowDimmer(true);
    AxWaitCursor(true);

    if (!IsFormDirty)
        SetFormDirty(true);

    var tblFg = $j("#tblFillGrid" + dcNo);
    var rowData = "";
    var data = "";

    var presentCB = "";
    var isCBchecked;
    if ($('input[name="chkItem"]:checked').length == 0)
        isCBchecked = false;
    else
        isCBchecked = true;
    //var totalrows = fillGridDatatbl.rows();
    //Loop through the checklist and get the selected rows data
    fillGridDatatbl.rows().every(function () {
        //var node = fillGridDatatbl.rows().nodes();
        var node = this.node();
        var allTds = $(node).find('td');
        var chkBx = $(node).find('td input[type="checkbox"]');
        var isCurRowChkd = chkBx.is(":checked");

        if (isCurRowChkd) {
            presentCB = chkBx.val();
            data += "<row>";
            var rows = presentCB.split("¿");
            for (var i = 0; i < rows.length; i++) {
                var colData = rows[i].split("♣");
                var selColData = CheckSpecialCharsInStr(colData[1]);
                data += "<" + colData[0] + ">" + selColData + "</" + colData[0] + ">";
            }
            data += "</row>";
        }



        //if (isCBchecked)
        //var datatbllength = $(node).find('td').prevObject.find('input[name="chkItem"]:checked').length;
        //for (var k = 0 ; k < datatbllength ; k++) {
        //    presentCB = $(node).find('td').prevObject.find('input[name="chkItem"]:checked')[k].value;
        //    data += "<row>";
        //    var rows = presentCB.split("¿");
        //    for (var i = 0; i < rows.length; i++) {
        //        var colData = rows[i].split("♣");
        //        var selColData = CheckSpecialCharsInStr(colData[1]);
        //        data += "<" + colData[0] + ">" + selColData + "</" + colData[0] + ">";
        //    }
        //    data += "</row>";
        //}
    });

    data = "<GridList>" + data + "</GridList>";
    if (data != "<GridList></GridList>") {
        try {
            callBackFunDtls = "ProcessFillGrid♠" + dcNo + "♠" + fillGridName;
            ASB.WebService.DoGetFillGrid(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, dcNo, fillGridName, data, tstDataId, SuccGetResultValue, OnException);
        }
        catch (ex) {
            AxWaitCursor(false);
            ShowDimmer(false);
            if (dialogObj) {
                dialogObj.dialog("close");
                $("#wrapperForMainNewData", window.parent.document).show();
            }
            var execMess = ex.name + "^♠^" + ex.message;
            showAlertDialog("error", 2030, "client", execMess);
        }
    }
    else {
        ShowDimmer(false);
        AxWaitCursor(false);
        if (dialogObj) {
            dialogObj.dialog("close");
            $("#wrapperForMainNewData", window.parent.document).show();
        }
    }
    var edTime = new Date();
    AxTimeBefSerCall = edTime - stTime;
    AxActivefillGridName = "";
}

//Callback function form the DoGetFillGrid webservice.
function SuccGetResultValue(result, eventArgs) {
    if (result.toLowerCase().indexOf("access violation") === -1) {
        var stTime = new Date();
        if (CheckSessionTimeout(result))
            return;
        //the result format -> jsonsResult*♠*dcno♣rowCnt*?*dchtml
        //First split the json and html, call assignloadvalues for json
        //second parse the html
        ParseServiceResult(result, "FillGrid");

        if (appstatus != "Approved" && appstatus != "Rejected" && theMode != "design") {
            DoFormControlOnload();
        }
        var fldGrImage = $(".wrapperForGridData" + fillDcname + " table tbody tr td").find("textarea[id^=dc" + fillDcname + "_image]");//$(".wrapperForGridData" + fillDcname + " table tbody tr td").find("[id^=dc" + fillDcname + "_image]");
        var fldaxpGrImage = $(".wrapperForGridData" + fillDcname + " table tbody tr td").find("textarea[id^=axp_gridattach_]");
        var fldAxpFileGrdImage = $(".wrapperForGridData" + fillDcname + " table tbody tr td").find("textarea[class^=axpAttach]");
        if (fldGrImage.length > 0) {
            fldGrImage.each(function (ind, val) {
                //if ($(val).attr("id").toLowerCase() != "dc" + fillDcname + "_imagepath") {
                if ($(val).attr("data-type") == "gridattach") {
                    let fldValue = $("textarea#" + $(val).attr("id")).text();
                    if (fldValue != "" && fldValue != undefined) {
                        ConstructAttachHTML(fldValue, $(val).attr("id"), "FillGrid");
                        showAttachmentPopover();
                    }
                }
            });
        }
        if (fldaxpGrImage.length > 0) {
            fldaxpGrImage.each(function (ind, val) {
                let fldValue = $("textarea#" + $(val).attr("id")).text();
                ConstructAttachHTML(fldValue, $(val).attr("id"), "FillGrid");
                showAttachmentPopover();
            });
        }
        if (fldAxpFileGrdImage.length > 0) {
            fldAxpFileGrdImage.each(function (ind, val) {
                if ($(val).attr("data-type") == "gridattach") {
                    let fldValue = $("textarea#" + $(val).attr("id")).text();
                    if (fldValue != "" && fldValue != undefined) {
                        ConstructAxpAttachHTML(fldValue, $(val).attr("id"), "FillGrid");
                        showAttachmentPopover();
                    }
                }
            });
        }
        var dcColumnValue = $j('#axp_colmerge_' + fillDcname + '000F1');
        dcColumnValue = dcColumnValue.val();
        if (dcColumnValue != null && dcColumnValue != '' && dcColumnValue != undefined) {
            GetGridDcTable(dcColumnValue, fillDcname);
        }

        try {
            AxAfterFillGrid();
        }
        catch (ex) {

        }

        fillgridColOptVisibility(fillDcname);//hide grid columns(design mode hidden columns) after filling records from fillgrid

        EvaluateSetFont(fillDcname);
        changeEditLayoutIds(FillGridFillRows, FillGridCurrentDC, 'fillGrid');
        //Refer bug - AGI003532 and IWA-C-0000020
        if (axInlineGridEdit) {
            UpdateDcRowArrays(FillGridCurrentDC, GetRowNoHelper(parseInt(FillGridFillRows, 10) + 1), "Add");
        }
        //CallAddRowWS(FillGridCurrentDC, GetRowNoHelper(parseInt(FillGridFillRows, 10)));
        var fields = GetGridFields(FillGridCurrentDC);
        var rowNo = getNewEditRowNo(FillGridCurrentDC);
        AxActiveRowNo = parseInt(rowNo);
        AxActiveDc = FillGridCurrentDC;
        if (typeof wsPerfEnabled != "undefined" && wsPerfEnabled)
            CallEvaluateOnAddPerf(FillGridCurrentDC, GetRowNoHelper(parseInt(FillGridFillRows, 10) + 1), fields, "FillGrid");
        else
            CallEvaluateOnAdd(FillGridCurrentDC, GetRowNoHelper(parseInt(FillGridFillRows, 10) + 1), fields, "FillGrid");
        AxWaitCursor(false);

        if (dialogObj) {
            dialogObj.dialog("close");
            $("#wrapperForMainNewData", window.parent.document).show();
        }
        if (AxLogTimeTaken == "true") {
            var edTime = new Date();
            var diff = edTime.getTime() - stTime.getTime();
            CreateTimeLog(AxStartTime, AxTimeBefSerCall, diff, ASBTotal, ASBDbTime, "FillGridMS");
        }
        //applyDesignJsonAgain(fillDcname);
        setDesignedLayout("#divDc" + fillDcname);
        //AlignDcElements("divDc" + fillDcname);
        FocusOnFirstGridField(fillDcname);
        customAlignTstructFlds([], FillGridCurrentDC);

        $j("textarea[id^='axpvalid']").each(function () {
            DoFormControlPrivilege($j(this).attr("id"), $j(this).val());
        });

        if (isMobile) {
            $("#wrapperForEditFields" + (fillDcname)).removeClass("hide");
            $("#wrapperForEditFields" + (fillDcname)).addClass("mobilewrapperForEditFields");
            if ($(".wrapperForGridData" + (fillDcname) + " table tbody tr").length == 0 && !axInlineGridEdit)
                $("#colScroll" + (fillDcname)).hide();
            if (axInlineGridEdit)
                $(".editWrapTr").hide();
            $(".editLayoutFooter").hide();
            $("#divDc" + (fillDcname) + " .grdButtons").addClass('hide');
            let gridButton = $("#divDc" + (fillDcname) + " .grdButtons").html();
            $("#wrapperForEditFields" + (fillDcname)).append('<div class="clearfix"></div><div class="grdButtons btnMobile">' + gridButton + '</div>');
            $(".dcTitle").hide().nextAll("hr.hrline").hide();
            try {
                if (typeof designObj != "undefined" && designObj[0] != null && designObj[0].selectedLayout != null && designObj[0].selectedLayout != "" && designObj[0].selectedLayout == "tile") {
                    $(".dcTitle").show().nextAll("hr.hrline").show();
                }
            } catch (ex) { }
        }
    }
    else {
        AxWaitCursor(false);
        ShowDimmer(false);
        $("#reloaddiv").show();
        $("#dvlayout").hide();
    }
}

function ClearFldArrays() {
    ChangedFields.length = 0;
    ChangedFieldDbRowNo.length = 0;
    ChangedFieldValues.length = 0;
    DeletedDCRows.length = 0;
}

function ParseServiceResult(result, CalledFrom) {
    if (result != "") {
        ClearFldArrays();
        var tabResult = result.split("*♠*");
        var tabDcServiceCalled = result.split("*♠*~");
        if (tabResult[0] != undefined) {
            try {
                AssignLoadValues(tabResult[0].toString(), CalledFrom);
            }
            catch (ex) {
                AxWaitCursor(false);
                ShowDimmer(false);
            }
        }
        if (tabResult[2] != undefined) {
            try {
                var tempDesignObj = designObj;
                var dcDesignObj = JSON.parse(tabResult[2]);


                if ($.isEmptyObject(dcDesignObj)) {
                    designObj = tempDesignObj;
                } else {
                    //jsonText = tabResult[2];
                    var newIndex = designObj[0].dcs.map(function (obj, index) {
                        return obj.dc_id;
                    });

                    var dcIndex = newIndex.indexOf(dcDesignObj.dc_id);

                    if (dcIndex > -1) {
                        designObj[0].dcs[dcIndex] = dcDesignObj;
                    } else {
                        designObj[0].dcs = _.sortBy([...designObj[0].dcs, dcDesignObj], 'dc_id');
                    }
                }
            } catch (ex) {
                designObj = tempDesignObj;
            }
            jsonText = JSON.stringify(designObj, null, '');
        }
        if (tabResult[1] != undefined) {
            var restxt = tabResult[1].substring(0, ErrLength);

            if (restxt == ErrStr) {
                var nres = tabResult[1].substring(ErrLength, tabResult[1].length - 8);
                AxWaitCursor(false);
                showAlertDialog("error", nres);
            }
            else {
                AssignHTML(tabResult[1], "FillGrid", CalledFrom);
                if (changeFillGridDc != 0) {
                    CheckShowHideFldsGrid(changeFillGridDc.toString());
                    changeFillGridDc = 0;
                }
                AxWaitCursor(false);
            }
        }
        if (CalledFrom == "GetTabData" && tabDcServiceCalled != undefined) {
            if (tabDcServiceCalled.length > 1 && tabDcServiceCalled[1] == "false") {
                //refer bug - AGI003632 After selecting data from fillgrid popup ,one extra blank row is getting added on first position .(this scenario happening when grid contains expression and which is accept field)
                var dcIdx = $j.inArray(CurrTabNo.toString(), DCFrameNo);
                if (IsDcGrid(CurrTabNo) && DCHasDataRows[dcIdx] == "False")
                    UpdateAxpRowVldInArray(CurrTabNo, "001", "1");

                EvalDcFldExpressions(CurrTabNo);
            }
        }
    }
    try {
        AfterParseServiceResult(CalledFrom);
    }
    catch (ex) { }
    ShowDimmer(false);
    AxWaitCursor(false);
}

function EvalDcFldExpressions(dcNo) {
    var fields = GetGridFields(dcNo);
    for (var i = 0; i < fields.length; i++) {
        var fldIdnName = fields[i];
        if (fldIdnName == "axp_recid" + dcNo)
            continue;
        if (!IsGridField(fldIdnName)) {
            EvaluateAxFunction(fields[i], fldIdnName, "000F" + dcNo);
        } else {
            EvaluateAxFunction(fields[i], fldIdnName, "001F" + dcNo);
        }
    }
}

//Function which executes the partial disabling in the fill grid dc.
function DoFillControlPrivilege(strSingleLineText) {

    var rno;
    var noofrows = 1;

    if (strSingleLineText == "") {
        return;
    }

    var myfdcJSONObject = eval('(' + strSingleLineText + ')');
    for (var i = 0; i < myfdcJSONObject.root.length; i++) {

        var dcvalues = myfdcJSONObject.root[i].dc;
        var fields = dcvalues.split("###");
        var gdslno = 1;

        for (var fpar = 0; fpar < fields.length; fpar++) {

            var valSplit = fields[fpar].toString();
            valSplit = valSplit.split('~');
            rno = noofrows + "";
            var rnolength = rno.length;
            if (rnolength == 2) nrno = "0" + rno;
            else if (rnolength == 1) nrno = "00" + rno;
            else if (rnolength == 3) nrno = rno;
            nrno = nrno + 'F' + fillDcname;
            var fldVal = "";

            for (m = 0; m < valSplit.length; m++) {

                var FldSplit = valSplit[m].split("=");
                if (FldSplit[0].toString().indexOf("axpvalid") != -1) {
                    fldVal = FldSplit[1];
                }
                if (fldVal != "") {

                    var strValue = fldVal.toString().toUpperCase();
                    //B-Delete button disable
                    if (strValue == "B") {
                        //Get current img button and disabled here                       

                        var delImg = window.opener.document.getElementById("del" + nrno);
                        if (delImg) {
                            delImg.removeAttribute("onclick");
                            delImg.removeAttribute("onmouseover");
                            delImg.removeAttribute("onmouseout");
                        }
                    }
                    //C-Current Row disable
                    if (strValue == "C") {

                        //B-Delete button disable
                        var delImg = window.opener.document.getElementById("del" + nrno);
                        if (delImg) {
                            delImg.removeAttribute("onclick");
                            delImg.removeAttribute("onmouseover");
                            delImg.removeAttribute("onmouseout");
                        }
                        //Row disable
                        for (var l = 0; l < valSplit.length; l++) {

                            var FldSplit = valSplit[l].split("=");
                            var FieldId = window.opener.document.getElementById(FldSplit[0] + nrno);
                            if (FieldId) {
                                var id = FieldId.id;
                                window.opener.document.getElementById(id).disabled = "true";
                            }
                        }
                        break;
                    }
                }
            }
            dnrno = "'" + nrno + "'";
            noofrows = noofrows + 1;
        }
    }
}

//Function to check all the row once the header row is checked.
function CheckAll(obj, exprResult) {
    //The exprResult will contain the result of the expression evaluation.
    if (exprResult == "t" || exprResult == "true") {
        $j("input[name=chkItem]:checkbox").each(function () {
            if ($j(this).prop("disabled") == false && $j(this).parent().parent().parent().css("display") != "none")
                $j(this).prop("checked", obj.checked);
        });
    }
    else {
        obj.checked = false;

    }
    $j("#dvFillGrid").height($j("#dvFillGrid").height());
}

//Function to check the header checkbox is all the checkboxes are checked.
function ChkHdrCheckbox(obj, exprResult) {
    //The exprResult will contain the result of the expression evaluation.
    if (exprResult == "t" || exprResult == "true") {

        if ($j(".fgChk:visible").length == $j(".fgChk:checked").length)
            $j(".fgHdrChk").prop("checked", true);
        else
            $j(".fgHdrChk").prop("checked", false);
    }
    else {
        obj.checked = false;

    }

    $j("#dvFillGrid").height($j("#dvFillGrid").height());
}

function DeleteAllRows(dcNo, RowCount) {
    var rCount = parseInt(RowCount, 10);
    if (rCount > 1 && !axInlineGridEdit && AxpGridForm != "form") {
        grdRCOunt = $("#gridHd" + dcNo + " tbody tr").length;
        if (grdRCOunt == rCount)
            rCount++;
    }

    for (var i = axInlineGridEdit ? rCount : (AxpGridForm == "form") ? rCount : rCount - 1; i >= 1; i--) {
        DeleteGridRow(dcNo, GetClientRowNo(i, dcNo), "all");
    }
    if (!axInlineGridEdit && AxpGridForm == "form") {
        $("#divDc" + dcNo + " .grid-icons").append(gridDivHtml[dcNo]);
        $("#divDc" + dcNo + " .formGridRow").remove();
        if ($(".wrapperForGridData" + dcNo + " table tbody tr").length == 0)
            adjustEditLayoutId(dcNo);
        setDesignedLayout("divDc" + dcNo);
        editTheRow("", dcNo, "", event);

    } else {
        adjustEditLayoutId(dcNo);
        AxActiveRowNo = "1";
        var fields = GetGridFields(dcNo);
        if (typeof wsPerfEnabled != "undefined" && wsPerfEnabled)
            CallEvaluateOnAddPerf(dcNo, "001", fields);
        else
            CallEvaluateOnAdd(dcNo, "001", fields);

        if (!IsAddRowCalled) {
            IsDcPopGridCleared = true;
            DeleteGridRow(dcNo, "001F" + dcNo, undefined);
        }
        else {
            if (!axInlineGridEdit) {
                UpdateDcRowArrays(dcNo, "001", "Add");
            }
        }
    }
}

//function AddSortingFeature(dcno, calledFrom) {
//    $j("#tblFillGrid" + dcno).tablesorter();
//    if (calledFrom != 'Enter')
//        $j("#searchInput").keyup(function (e) {
//            if (e.keyCode == 13)
//                AddSortingFeature(dcno, 'Enter');

//        });
//    if (calledFrom != 'Direct') {
//        var tbody = $j("#tblFillGrid" + dcno + " > tbody");
//        var rows = tbody.find("tr:not(:first-child)");
//        rows.hide();
//        if ($j("#searchInput").length > 0) {
//            var data = $j("#searchInput").val().split(" ");
//            $j.each(data, function (i, v) {

//                if (v.indexOf('(') > -1)
//                    return;
//                $j.each(rows.find('label'), function (j) {
//                    if ($j(this).text().toString().toLowerCase().indexOf(v.toString().toLowerCase()) != -1) {
//                        $j(this).parent().parent().show();
//                    }
//                });
//                $j("#searchInput").blur();
//                tbody.find('tr.activeSearchTr').removeClass('activeSearchTr');
//                tbody.find('tr:visible:first').addClass('activeSearchTr');
//            });
//            if (!$(rows).is(":visible")) {
//                tbody.find("tr:first-child").hide();
//                $(tbody).append("<tr id=\"fillNoRec\"><td>No data matching " + $j("#searchInput").val() + "</td></tr>");
//            } else {
//                if ($("#fillNoRec").length > 0) {
//                    tbody.find("tr:first-child").show();
//                    $("#fillNoRec").remove();
//                }
//            }
//        }
//    }

//    if ($("#tblFillGrid" + dcno + " .activeSearchTr th input[type=checkbox]").length > 0) {
//        if ($j(".fgChk:checked").length > 0) {
//            $j("input[name=chkItem]:checkbox:checked").prop("checked", false);
//            CheckAll($("#tblFillGrid" + dcno + " .activeSearchTr th input[type=checkbox]")[0], "t");
//        }
//    }

//}


function ChangeDir(dir) {
    $j("#form1").attr("dir", dir);
}
function LoadPdfDDL(ddlStr) {
    document.getElementById("dvPdfDDl").innerHTML = ddlStr;
}

function bindUpdownEvents(idOfTheElement, typeOfSelect) {
    unbindKeyDownEvent();
    if (typeOfSelect != 'single') {
        $("#" + idOfTheElement + " input[type='checkbox']").each(function () {
            $(this).parents('td,th').addClass('text-center');
        });

    }
    if (jQuery("#" + idOfTheElement + " tr:nth-child(2)").length > 0) {
        jQuery("#" + idOfTheElement + " tr:nth-child(2)").addClass('activeSearchTr').find("input").focus();
    }
    if (jQuery('#' + idOfTheElement).length > 0) {
        jQuery("#" + idOfTheElement).on("keydown.tstrctSrch", "tr:not(:first)", function (event) {
            var elemm = $(this);
            $(elemm).addClass('activeSearchTr');
            if (event.keyCode == 9 && !event.shiftKey) {

                if (jQuery("#" + idOfTheElement).find('tr.activeSearchTr').prevAll("tr:visible").length > 0) {
                    if (typeOfSelect == "multiple") {
                        checkTheHeight(idOfTheElement, elemm, 'bottom');
                    }

                    if ($(elemm).next().is("tr")) {
                        jQuery("#" + idOfTheElement).find('tr.activeSearchTr').removeClass('activeSearchTr');
                        $(elemm).next().addClass('activeSearchTr');
                        jQuery('.activeSearchTr').find("input").focus();
                        event.preventDefault();
                    }
                }

            } else if (event.keyCode == 9 && event.shiftKey) {
                if (jQuery("#" + idOfTheElement).find('tr.activeSearchTr').prevAll("tr:visible").length > 0) {
                    if (typeOfSelect == "multiple") {
                        checkTheHeight(idOfTheElement, elemm, 'top');
                    }

                    if ($(elemm).prev().is("tr") && (!$(elemm).prev().is("#" + idOfTheElement + " tr:first"))) {
                        jQuery("#" + idOfTheElement).find('tr.activeSearchTr').removeClass('activeSearchTr');
                        $(elemm).prev().addClass('activeSearchTr');
                        jQuery('.activeSearchTr').find("input").focus();
                        event.preventDefault();
                    }
                }

            } else if (event.keyCode == 38) {
                //up arrow
                event.preventDefault();
                var index = jQuery("#" + idOfTheElement).find('tr.activeSearchTr').index();
                if (index != 0 && jQuery("#" + idOfTheElement).find('tr.activeSearchTr').prevAll("tr:visible").length > 0) {
                    if (typeOfSelect == "multiple") {
                        checkTheHeight(idOfTheElement, elemm, 'top');
                    }
                    jQuery("#" + idOfTheElement).find('tr.activeSearchTr').removeClass('activeSearchTr').prevAll("tr:visible:first").addClass('activeSearchTr').find("input").focus();
                }
            }
            else if (event.keyCode == 40) {
                //down arrow
                if (typeOfSelect == "single") {
                    event.preventDefault();
                }
                var presntIndex = jQuery("#" + idOfTheElement).find('tr.activeSearchTr').index();

                var lstIndex = jQuery("#" + idOfTheElement).find('tr').last().index();
                if (presntIndex < lstIndex && jQuery("#" + idOfTheElement).find('tr.activeSearchTr').nextAll("tr:visible").length > 0) {
                    if (typeOfSelect == "multiple") {
                        checkTheHeight(idOfTheElement, elemm, 'bottom');
                    }
                    jQuery("#" + idOfTheElement).find('tr.activeSearchTr').removeClass('activeSearchTr').nextAll("tr:visible:first").addClass('activeSearchTr').find("input").focus();
                }
            }

            else if (event.keyCode == 32) {
                if ($(event.target).attr('id') != "searchInput") {
                    //event.preventDefault();
                    //jQuery("#" + idOfTheElement + " tr.activeSearchTr input").click();
                    if (typeOfSelect == "single") {
                        unbindKeyDownEvent();
                    }
                }
            }

            else if (event.keyCode == 13 && $(event.target).attr('id') != "searchInput") {
                if (typeOfSelect == "multiple") {
                    event.preventDefault();
                    unbindKeyDownEvent();
                    //here we have to hit the ok button
                    $('#dvFillGrid').parents('.modal-body').next().find("#modalCnfirmbtn").click();

                } else {
                    jQuery("#" + idOfTheElement + " tr.activeSearchTr input").click();
                    if (typeOfSelect == "single") {
                        unbindKeyDownEvent();
                    }
                }
                unbindKeyDownEvent();
            }

        });

        jQuery("#" + idOfTheElement).on("keydown.tstrctSrch", "tr:first", function (event) {
            if (event.keyCode == 13) {
                $('#dvFillGrid').parents('.modal-body').next().find("#modalCnfirmbtn").click();
            }
        });

        jQuery("#" + idOfTheElement + " tr").hover(function () {
            /* Stuff to do when the mouse enters the element */
            jQuery("#" + idOfTheElement + " tr.activeSearchTr").removeClass('activeSearchTr');
            jQuery(this).addClass('activeSearchTr').find("input").focus();
            //jQuery('.activeSearchTr').find("input").focus();
        }, function () {
            /* Stuff to do when the mouse leaves the element */
        });

        jQuery("#" + idOfTheElement + " tr").click(function (event) {
            if (typeOfSelect == "single") {
                unbindKeyDownEvent();
            }
            if ($(event.target).attr('type') != "checkbox" && $(event.target).attr('type') != "radio" && $(this).parent("thead").length == 0) {
                typeOfSelect == "single" ? jQuery(this).find('input[type="radio"]').click() : jQuery(this).find('input[type="checkbox"]').click();
            }
        });

    }
}

function checkTheHeight(idOfTheElement, elemm, direction) {
    var heightOfFrame = parseInt(jQuery("#dvFillGrid").parents('.modal-body-content').css('height').replace("px", ""));
    var frameScrollTop = jQuery("#dvFillGrid").parents('.modal-body-content').scrollTop();
    var currentTr = $(elemm);
    var nextTrheight = $(elemm).next().height();
    var prevTrheight = $(elemm).prev().height();
    var topOfCurrentTr = currentTr.position().top;
    // event.preventDefault();
    if (direction == "bottom") {
        if ((topOfCurrentTr + nextTrheight + 50) > heightOfFrame) {
            jQuery("#dvFillGrid").parents('.modal-body-content').animate({
                scrollTop: frameScrollTop + nextTrheight + 30
            }, 'fast');
        }
    }
    else if (direction == "top") {
        if ((topOfCurrentTr - prevTrheight) < 0) {
            jQuery("#dvFillGrid").parents('.modal-body-content').animate({
                scrollTop: frameScrollTop - prevTrheight - 30
            }, 'fast');
        }
    }
}

function unbindKeyDownEvent() {
    jQuery(document).unbind("keydown.tstrctSrch");
}




$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

// Searching for input filed with partial id 'axp_colmerge_dcno' 
$j(function () {
    //Works only on active fields available on pageload.
    for (var i = 0; i < VisibleDCs.length; i++) {
        if (DCIsGrid[i].toLowerCase() == "true") {
            if ($j('#axp_colmerge_' + VisibleDCs[i] + '000F1').length > 0) {
                var dcColumnValue = $j('#axp_colmerge_' + VisibleDCs[i] + '000F1');
                dcColumnValue = dcColumnValue[0].value;
                if (dcColumnValue != null && dcColumnValue != '' && dcColumnValue != undefined) {
                    GetGridDcTable(dcColumnValue, VisibleDCs[i]);
                }
            }
        }
    }
});

/// get the column values and the dc id...
function GetGridDcTable(strCond, dcNo) {

    //Generate Id according to the dcNo.
    var iDtoFind = 'gridHd' + dcNo;
    var table = document.getElementById(iDtoFind);
    var arrMainHeader = strCond.split('#'); // Split each value from string to create arrays.
    var htmlConcat = table.outerHTML;
    htmlConcat = htmlConcat.replace(iDtoFind, 'mergeHd' + dcNo); // assign html to the table with id as MergeHD + dc name for further changes.
    $j('#' + iDtoFind).before(htmlConcat);

    var mergeTable = $j('#mergeHd' + dcNo);
    var tableCells = mergeTable[0].childNodes[0].childNodes[0].childNodes;
    var count = 0;

    // loop through each table cell then checking it the array of columns to be merged...
    for (var j = 0; j < tableCells.length; j++) {
        var mergeRowContent = arrMainHeader[0].split(',').toString();
        var columns = mergeRowContent.substr(mergeRowContent.indexOf("~") + 1);
        var arrColumns = columns.split(',');
        var mainHeader = mergeRowContent.split("~", 1).toString();
        // loop through each arrColumn to check if the value is equal to the table cell.
        for (var k = 0; k < arrColumns.length; k++) {
            var selectedItem = tableCells[j];
            selectedItem.innerHTML = '';
            thName = "th-" + arrColumns[k];
            if (selectedItem.id == thName) {
                SetHeader(arrColumns, k, mainHeader);
                if (arrMainHeader.length > 1) {
                    arrMainHeader.splice(0, 1);
                }
                j = (j + arrColumns.length) - 1;
            }
            break;
        }
    }
}

//Clear inner html for each table cell and headers
function SetHeader(arrColumns, index, mainHeader) {

    for (var o = 0; o < arrColumns.length; o++) {
        theadName = "th-" + arrColumns[index + o];
        var selectedItem = document.getElementById(theadName);

        //change the color of the border to grey only if the element is not the last in array.
        if ((o - (arrColumns.length - 1)) != 0) {
            selectedItem.style.borderColor = 'grey';
        }
        if (o == 0) {
            selectedItem.innerHTML = '<div id="div-' + arrColumns[0] + '"><b style="font-weight:101">' + mainHeader + '</b></div>';
            selectedItem.style.borderBottom = 'solid 1px white';
            selectedItem.style.maxWidth = selectedItem.style.width;
        }
        else {
            selectedItem.innerHTML = "";
            selectedItem.style.borderBottom = 'solid 1px white';
        }
    }


    SetHeaderWidth(arrColumns, arrColumns[0], index);
}


//Set Width to the header..
function SetHeaderWidth(arrColumns, divID, index) {

    var totalWidth = parseInt(0);
    var currenElementWidth = parseInt(0);
    var selectedDiv = $j('#div-' + divID);
    for (var i = 0; i < arrColumns.length; i++) {
        theadName = "th-" + arrColumns[index + i];
        currenElementWidth = parseInt(document.getElementById(theadName).offsetWidth);
        totalWidth = (totalWidth + currenElementWidth);
    }

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        var selectedDiv = document.getElementById('div-' + divID);
        //replace space with a line break for the header to be aligned.
        if (selectedDiv.childNodes[0].innerHTML.indexOf("_") > -1) {
            selectedDiv.style.width = totalWidth + "px";
            selectedDiv.style.maxWidth = totalWidth + "px";
            selectedDiv.childNodes[0].innerHTML = selectedDiv.childNodes[0].innerHTML.replace(/_/g, " ");
        }
        else {
            selectedDiv.style.width = totalWidth + "px";
            selectedDiv.style.maxWidth = totalWidth + "px";
        }
    }
    else {
        var selectedDiv = $j('#div-' + divID);
        //replace space with a line break for the header to be aligned.
        if (selectedDiv[0].innerText.indexOf("_") > -1) {
            selectedDiv.css(
                {
                    width: totalWidth,
                    maxWidth: totalWidth
                });

            selectedDiv[0].innerText = selectedDiv[0].innerText.replace(/_/g, " ");

        }
        else {
            totalWidth = (totalWidth * 40) / 100;
            selectedDiv.css(
                {
                    marginLeft: totalWidth
                });
        }
    }

}

// This file contains the popup grid related functions. 
//
//------------------List of functions in this file--------------------------------------------
//OpenPopUp(parentfldName, popDcNo) -Function to display the popUp for the current parent row.
//ClosePopUp(popDcNo, validate) -Function to hide the opened pop up.
//ClearPopUp(popDcNo) -Function which deletes all the rows except the first row, and clears the values in  the first row.
//UpdatePopUpParents(fieldName) -Function to update the changed value of the parent into the arrays.
//CheckDuplicateParents(dcNo, ParentFlds, parentStr) -Function to check for duplicate entries in the parent grid for the parent fields. 
//SetPopParents(parentDcNo, popDcNo, parentRowNo, parentStr) -Function to set the concatenated parent value to the array.
//ShowPopUpDiv(dcNo) -Function to set the dimmer on the tstruct, set pop up position and display the popup.
//DisableDeleteForFirmDc(isFirm, popDcNo, rowNo) -Function to diable the delete button in the pop dc if the dc is firm bind.
//DisplaySummaryInPopUp(popDcNo) -Function to display the summary defined for the pop grid.
//GetPopRows(parentDcNo, ParentRowNo, popDcNo) -Function to get the sub grid rows for the current active parent row.
//ClearPopRows(parentDc, parentRow, popDc) -Function to clear the poprows for the given parent row and dc no.
//AddDeletePopRow(parentDcNo, parentRowNo, popDcNo, popRowNo) -Function to add a new row for the given pop up dc no.  
//Ax_BeforeHidePopUp(dcNo) -Function to customize validations before closing the popup.
//IsEmptyRow(rowNo, dcNo) -Function which returns true if the given row is empty.
//SetPopDcStyle(PopDcNo, isFirm) -Function to set style for the pop grid dc if firm bind.
//RegisterActivePRow(clientRowNo, pDcNo) -Function to set the Parents active row to the global variable.
//IsPopGridFirmBind(popDcNo) -Function returns true if the PopDc has firm bind attribute as true.
//DisplayHidePopRow(rowNo, style) -Function to Display or hide the row html in the subgrid.
//GetParentFields(popDcNo) -Function to get the parent fields for the given pop dc.
//GetParentString(parentDcNo, parentRow, popDc) -Function to get the parent values concatenated string for the given parent and pop dc.
//GetPopGrids(parentDcNo) -Function which returs the pop grids for the current parent dc.
//AddParentRow(parentDcNo, parentRowNo, popDcNo, parentStr) -Function which adds the parent row info to the pop arrays.
//UpdatePopUpArrays(dcNo, rowNo, isPopDc) -Function which updates the popRows and rowno arrays for the newly added row.

//---------------------------------------------------------------------------------------------
var popUpTitle = "";
//Function to display the popUp for the current parent row.
function OpenPopUp(parentfldName, popRowDcNo) {

    var pRowNo = GetFieldsRowNo(parentfldName);
    var parentDcNo = GetFieldsDcNo(parentfldName);
    AxActivePDc = parentDcNo;
    RegisterActivePRow(pRowNo, parentDcNo);
    AxIsPopActive = true;
    var popDcNo = popRowDcNo.substring(popRowDcNo.lastIndexOf("F") + 1);
    AxActiveDc = popDcNo;

    var pIdx = $j.inArray(popDcNo, PopGridDCs); //PopCondition 
    if (pIdx != -1) {
        var result = "f";
        if (PopCondition[pIdx] != "") {
            result = EvalPrepared("", "000", PopCondition[pIdx], "expr");
            if (result.toLowerCase() == "f") {
                showAlertDialog("error", 2006, "client");
                return;
            }
        }
    }

    var isPopFirm = IsPopGridFirmBind(popDcNo);
    SetPopDcStyle(popDcNo, isPopFirm);
    var popRowStr = GetPopRows(parentDcNo, pRowNo, popDcNo);
    var popRows = popRowStr.split(",");
    var rowCntFld = "#hdnRCntDc" + popDcNo;
    var popRowCnt = 0;
    popRowCnt = parseInt($j(rowCntFld).val(), 10);

    popUpTitle = $j("#popDcTitle" + popDcNo).val();
    popUpTitle = "<span style='font-size: 20PX;color: white;font-weight: bold;'>" + popUpTitle + "</span>";


    //hide all rows in the table
    $j("#gridDc" + popDcNo + " tbody tr").each(function () {
        var tRow = $j(this);
        $j(this).hide();
    });

    for (var j = 0; j < popRows.length; j++) {
        var rowId = "#sp" + popDcNo + "R" + popRows[j] + "F" + popDcNo;
        $j(rowId).show();
    }

    if ($j(".AxAddRows").length > 0)
        $j(".AxAddRows").val('1');
    //This condition checks
    //If the parent row does not have any sub grid row
    //All the parent fields are bound in the parent row
    if (popRowStr == "" && IsPopParBound(popDcNo, parentDcNo, pRowNo) == true) {

        var newRowNo = "";
        var rCnt = GetDcRowCount(popDcNo);
        if (rCnt == 1 && IsEmptyRow("001", popDcNo)) {
            var isOldRow = IsRowInPopRows(parentDcNo, popDcNo, pRowNo, "001");
            if (isOldRow == false) {
                newRowNo = 1;
                UpdatePopUpArrays(popDcNo, "001", true, "Add");
                UpdatePopParentFlds(popDcNo, parentDcNo, "001", pRowNo);
                SetRowCount(popDcNo, "1");
                $j("#sp" + popDcNo + "R" + "001" + "F" + popDcNo).show();
                RefreshFillFldsInSubGrid(popDcNo, "001");
                AxActiveRowNo = "1";
                CallGetSubGridDDL(popDcNo, pRowNo, parentDcNo, "001");
            }
        }
        else {
            AddSubGridRow(popDcNo);
        }
    }
    else {
        //for all the fill fields in the subgrid, if there is a parent in the nongrid, call combofilldep

        RefreshFillFldsInSubGrid(popDcNo, popRowStr);
        $j("#DivFrame" + popDcNo).dialog({ title: popUpTitle, height: 400, width: 550, close: function () { ClosePopUp(popDcNo); }, position: 'top', modal: true, buttons: { "Ok": function () { ClosePopUp(popDcNo, $j(this)); } } });
    }
}

//Function to refresh the fields in the subgrid which have the combo parents in the primary dc.
function RefreshFillFldsInSubGrid(dcNo, rowStr) {
    var fields = GetGridFields(dcNo);
    for (var i = 0; i < fields.length; i++) {
        var idx = GetFieldIndex(fields[i]);
        var parentStr = FldParents[idx].toString().split(",");
        if (FMoe[idx] == "Fill" && parentStr != "") {

            for (var j = 0; j < parentStr.length; j++) {
                var parDcNo = GetDcNo(parentStr[j]);
                if (!IsDcGrid(parDcNo) && $j.inArray(parentStr[j], ComboParentField) != -1) {
                    var pFldValue = GetFieldValue(parentStr[j] + "000F" + parDcNo);
                    var fieldID = parentStr[j] + "000F" + parDcNo;
                    var fName = parentStr[j];


                    for (var ind = 0; ind < ComboParentField.length; ind++) {
                        //var parFldName = GetFieldsName(ComboParentField[i]);
                        if (ComboParentField[ind] == fName && ComboParentValue[ind] == pFldValue) {
                            var strRows = rowStr.split(",");
                            for (var k = 0; k < strRows; k++) {
                                if (strRows[k] == "")
                                    continue;

                                var rowFrameNo = strRows[k] + "F" + dcNo;
                                var dbRowNo = GetDbRowNo(strRows[k], dcNo);

                                var depFldId = ComboDepField[ind] + rowFrameNo;
                                var depFldValue = ComboDepValue[ind].toString();
                                var depFld = $j("#" + depFldId);
                                if (depFld.length > 0) {
                                    CallSetFieldValue(depFldId, depFldValue);
                                    UpdateFieldArray(depFldId, dbRowNo, depFldValue, "parent");
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}

function AddSubGridRow(dcNo, calledFrom) {
    var tableName = "gridDc" + dcNo;
    var newRow = "";
    var sTRowIndx = -1;
    newRow = $j('#' + tableName + ' tbody>tr:last').clone(true);
    var oldRowNo = newRow.attr("id");

    var hdnRowCount = $j("#hdnRCntDc" + dcNo);
    if (hdnRowCount.length > 0) {

        var dcClientRows = GetDcClientRows(dcNo);
        var lastRow = dcClientRows.getMaxVal();
        var rowCount = $j("#hdnRCntDc" + dcNo).val();
        var newCnt = parseInt(lastRow, 10) + 1;
        var newRowNo = GetRowNoHelper(newCnt);
        newRow.attr("id", "sp" + dcNo + "R" + newRowNo + "F" + dcNo);
        newRow.find(':input').val('');
        newRow.find('select,input,label,img,.Grdlnk').each(function () {
            ConvertFieldID($j(this), newRowNo);
        });

        RegisterActiveRow(newRowNo, dcNo);
        AxActiveDc = dcNo;
        var glType = eval(callParent('gllangType'));
        var dtpkrRTL = false;
        if (glType == "ar")
            dtpkrRTL = true;
        else
            dtpkrRTL = false;
        var glCulture = eval(callParent('glCulture'));
        var dtFormat = "dd/mm/yy";
        if (glCulture == "en-us")
            dtFormat = "mm/dd/yy";
        $j(".date").datepicker({
            isRTL: dtpkrRTL,
            dateFormat: dtFormat,
            showOn: "both",
            buttonImage: "../AxpImages/icons/16x16/calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date",
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+100"
        });
        delImg = newRow.find('.rowdelete');
        if (delImg.attr("id") != undefined)
            delImg.attr("id", ("del" + newRowNo + "F" + dcNo));
        newRow.insertAfter('#' + tableName + ' tbody>tr:last');
        $j("#sp" + dcNo + "R" + newRowNo + "F" + dcNo).show();

        //TODO: the SetRowCount need not be called 
        //if the web service is returning the row since it is already updated in the server array.
        if (calledFrom == undefined)
            SetRowCount(dcNo, newCnt, "i" + newRowNo);
        else
            SetRowCount(dcNo, parseInt(rowCount, 10) + 1);

        if (calledFrom == "GetDep")
            UpdateNewPopInfo(dcNo, newRowNo);

        var rowFrameNo = newRowNo + "F" + dcNo;
        //On clearing the rows, the row will be added to the DeletedDCRows,
        //if you add the same row agian then the row should be removed from the DeletedDCRows

        var ind = $j.inArray(rowFrameNo, DeletedDCRows);
        if (ind != -1)
            DeletedDCRows.splice(ind, 1);

        CheckScroll(dcNo);

        UpdateDcRowArrays(dcNo, newRowNo, "Add");
        if (calledFrom == undefined) {
            UpdateFieldsInNewRow(dcNo, newRowNo);
            UpdatePopParentFlds(dcNo, AxActivePDc, newRowNo, GetClientRowNo(AxActivePRow, AxActivePDc));
        }
        IsFunction = "";

        if (calledFrom == "GetDep") {
            if (AxParStrFromDep != "") {
                var parStr = AxParStrFromDep.split("~");
                var parDc = parStr[0];
                var pRow = GetClientRowNo(parStr[1], parDc);
                UpdatePopUpArrays(dcNo, newRowNo, true, "Add", pRow, parDc);
            }
            else
                UpdatePopUpArrays(dcNo, newRowNo, true, "Add");
        }
        else
            UpdatePopUpArrays(dcNo, newRowNo, true, "Add");

        if (calledFrom == undefined) {
            RefreshFillFldsInSubGrid(dcNo, newRowNo);
            if (subGridJson == "")
                CallGetSubGridDDL(dcNo, AxActivePRow, AxActivePDc, newRowNo);
            else
                ApplyPopJson(dcNo);
        }

        adjustwin("10", window);
    }
}

function CallGetSubGridDDL(popDcNo, pRowNo, parentDcNo, newRowNo) {
    try {
        var recId = $j("#recordid000F0").val();
        ASB.WebService.GetSubGridDropdown(ChangedFields, ChangedFieldDbRowNo, ChangedFieldValues, DeletedDCRows, popDcNo, tstDataId, recId, pRowNo, parentDcNo, newRowNo, SuccessSubGridCombos, OnException);
    }
    catch (exp) {
        AxWaitCursor(false);
        showAlertDialog("error", ServerErrMsg);
    }
}

var subGridJson = "";
function SuccessSubGridCombos(result, eventArgs) {
    if (CheckSessionTimeout(result))
        return;
    ChangedFields = new Array();
    ChangedFieldDbRowNo = new Array();
    ChangedFieldValues = new Array();
    DeletedDCRows = new Array();
    if (result != "") {
        subGridJson = result;
        var dcClientRows = GetDcClientRows(AxActiveDc);
        AxPopRowNo = dcClientRows.getMaxVal();
        AssignLoadValues(result, "PopGridCombos");
        try {
            AxAfterSubGridAddRow();
        }
        catch (ex) { }
        $j("#DivFrame" + AxActiveDc).dialog({ title: popUpTitle, height: 400, width: 550, close: function () { ClosePopUp(AxActiveDc); }, position: 'top', modal: true, buttons: { "Ok": function () { ClosePopUp(AxActiveDc, $j(this)); } } });
    }
}

function ApplyPopJson(dcNo) {
    var dcClientRows = GetDcClientRows(dcNo);
    AxPopRowNo = dcClientRows.getMaxVal();
    AssignLoadValues(subGridJson, "PopGridCombos");
    UpdateRowInDataObj();
    try {
        AxAfterSubGridAddRow();
    }
    catch (ex) { }
}

//Function returns true if this row is assigned to a dc in the pop rows arrays.
function IsRowInPopRows(parDcNo, popDcNo, parRow, popRowNo) {
    var popRows = GetPopRows(parDcNo, parRow, popDcNo);
    var popRowStr = popRows.split(",");
    for (var i = 0; i < popRowStr.length; i++) {
        if (popRowStr[i] == popRowNo) {
            return true;
        }
    }

    return false;
}

//Function to check if the parent fields have empty value and return true.
//This function will not take care of integer fields.
function IsPopParBound(popDcNo, parDcNo, parRowNo) {
    var parFldsStr = GetParentFields(popDcNo);
    var isParBound = true;
    for (var i = 0; i < parFldsStr.length; i++) {
        var parFld = parFldsStr[i] + parRowNo + "F" + parDcNo;
        var parValue = GetFieldValue(parFld);
        //TODO: the try catch block needs to be removed.
        try {
            parValue = parseFloat(parValue);
        }
        catch (ex) { }
        if (parValue.toString() == "") {
            isParBound = false;
            break;
        }
    }
    return isParBound;
}

//function which sets the parent field values from the given parent row to the given rows pop fields.
function UpdatePopParentFlds(popDcNo, parDcNo, popRowNo, parRowNo) {
    var parFldsStr = GetParentFields(popDcNo);
    for (var i = 0; i < parFldsStr.length; i++) {
        var parFld = parFldsStr[i].toString().trim() + parRowNo + "F" + parDcNo;
        var popGridField = GetSubFieldId("sub" + popDcNo + "_" + parFldsStr[i].toString(), popRowNo, popDcNo);
        var parValue = GetFieldValue(parFld);
        SetFieldValue(popGridField, parValue);
        var clientRowNo = GetDbRowNo(popRowNo, popDcNo);
        UpdateFieldArray(popGridField, clientRowNo, parValue, "parent");
    }
}

//This function should be called on close popup to refresh all expression dependent fields outside the pop up.
function EvaluateSubGridDep(popDcNo) {
    var fields = GetGridFields(popDcNo);
    for (var i = 0; i < fields.length; i++) {

        var fldInd = GetFieldIndex(fields[i]);
        if (fldInd != -1) {
            depStr = FldDependents[fldInd].toString();
        }
        var depArray;
        if (depStr != "") {
            depArray = depStr.split(",");

            if (depArray != undefined) {
                for (var di = 0; di < depArray.length; di++) {

                    var dField = depArray[di].toString();
                    var depFirstChar = dField.substring(0, 1);
                    var depfName = dField.substring(1);
                    var depFldDc = GetDcNo(depfName);

                    if (popDcNo != depFldDc) {
                        if (depFirstChar == 'e') {
                            EvaluateAxFunction(depfName, fields[i] + AxActiveRowNo + "F" + popDcNo);
                        }
                    }
                }
            }
        }
    }
}

//Function to hide the opened pop up.
function ClosePopUp(popDcNo, dialogObj) {

    var popRows = GetPopRows(AxActivePDc, GetClientRowNo(AxActivePRow, AxActivePDc), popDcNo).split(",");
    if (popRows.length != 1) {
        for (var i = popRows.length - 1; i >= 0; i--) {
            var rCnt = GetDcRowCount(popDcNo);
            if (popRows[i].toString() != "") {
                if (IsEmptyRow(popRows[i], popDcNo) && rCnt != 1) {
                    DeletePopRow(popDcNo, popRows[i]);
                }
            }
        }
    }
    if ($j("#dvPickList").is(':visible')) $j("#dvPickList").hide();
    AxIsPopActive = false;
    if (dialogObj != undefined)
        dialogObj.dialog("close");
    var parentFld = $j("#" + AxActiveField);
    if (parentFld.length > 0)
        parentFld.focus();
    subGridJson = "";
    EvaluateSubGridDep(popDcNo);
    DisplaySummaryInPopUp(popDcNo);
}

//Function to delete the default pop row in the popgrid.
function DeletePopRow(popDcNo, popRow) {

    var slNo = GetSerialNoCnt(popDcNo);
    slNo = parseInt(slNo, 10) - 1;
    SetSerialNoCnt(popDcNo, slNo);
    var rowCnt = GetDcRowCount(popDcNo);

    var rowFrmNo = popRow + "F" + popDcNo;
    UpdateDcRowArrays(popDcNo, popRow, "Delete");
    var flds = GetGridFields(popDcNo);
    for (var j = 0; j < flds.length; j++) {
        var fld = flds[j] + rowFrmNo;
        RemoveDeletedFields(fld);
    }

    var rowId = "sp" + popDcNo + "R" + popRow + "F" + popDcNo;
    $j("#" + rowId).remove();
    UpdatePopUpArrays(popDcNo, popRow, true, "Delete");
    var rCnt = GetDcRowCount(popDcNo);
    SetRowCount(popDcNo, rCnt - 1);
}

//Function to update the changed value of the parent into the arrays.
function UpdatePopUpParents(fieldName) {
    var fName = GetFieldsName(fieldName);
    var fldDcNo = GetFieldsDcNo(fieldName);
    var fldRowNo = GetFieldsRowNo(fieldName);
    var parentRowNo = fldRowNo;
    for (var i = 0; i < PopParentDCs.length; i++) {
        if (PopParentDCs[i] == fldDcNo) {
            popParentFlds = PopParentFlds[i].toString().split(",");
            var parentStr = "";
            parentStr = GetParentString(fldDcNo, parentRowNo, PopGridDCs[i]);

            var isParentForPop = false;
            var subParFlds = GetParentFields(PopGridDCs[i]);
            for (var parIdx = 0; parIdx < subParFlds.length; parIdx++) {
                if (subParFlds[parIdx] == fName) {
                    isParentForPop = true;
                    break;
                }
            }
            if (!isParentForPop)
                continue;

            //Check for duplicate parents in the parent dc.
            if (CheckDuplicateParents(fldDcNo, popParentFlds, parentStr, PopGridDCs[i], parentRowNo) && parentStr != "") {
                errorFlag = true;
                errorField = fieldName;
                return;
            }

            // replace the old value in the poprows array with parentstr for each of its pop grid.
            SetPopParents(fldDcNo, PopGridDCs[i], parentRowNo, parentStr);

            var popDcNo = PopGridDCs[i];
            var strGridRows = GetPopRows(fldDcNo, parentRowNo, popDcNo);
            var subGrdRows = strGridRows.split(",");

            var newParValue = GetFieldValue(fieldName);

            for (var j = 0; j < subGrdRows.length; j++) {
                if (subGrdRows[j].toString() != "") {
                    var parFldId = GetSubFieldId("sub" + popDcNo + "_" + fName, subGrdRows[j].toString(), popDcNo);
                    parFldId = "#" + parFldId;
                    try {
                        var popFldId = parFldId.substring(1);
                        SetFieldValue(popFldId, newParValue);

                        var dbRowNo = GetDbRowNo(subGrdRows[j].toString(), popDcNo)
                        UpdateFieldArray(popFldId, dbRowNo, newParValue, "parent");
                    }
                    catch (ex) { }
                }
            }
        }
    }
}

//Function to check for duplicate entries in the parent grid for the parent fields.
function CheckDuplicateParents(dcNo, ParentFlds, parentStr, popGridDc, parentRowNo) {

    var isDuplicate = false;
    var rowCount = 0;
    rowCount = parseInt(GetDcRowCount(dcNo), 10);

    for (var i = 1; i < rowCount; i++) {
        var rowNo = GetRowNoHelper(i);
        var rowParentStr = "";
        rowParentStr = GetParentString(dcNo, rowNo, popGridDc);
        if (rowParentStr == parentStr && i != parseInt(parentRowNo, 10))
            isDuplicate = true;
    }
    return isDuplicate;
}

//Function to set the concatenated parent value to the array.
function SetPopParents(parentDcNo, popDcNo, parentRowNo, parentStr) {
    for (var i = 0; i < ParentDcNo.length; i++) {
        if (ParentDcNo[i] == parentDcNo && PopGridDcNo[i] == popDcNo && ParentClientRow[i] == parentRowNo) {
            PopParentsStr[i] = parentStr;
        }
    }
}

//Function to display the summary defined for the pop grid.
function DisplaySummaryInPopUp(popDcNo) {

    var pIndx = -1;
    var i = 0;
    for (i = 0; i < PopGridDCs.length; i++) {
        if (PopGridDCs[i] == popDcNo) {
            pIndx = i;
            break;
        }
    }
    var parentFld = ""; var summaryColumn = ""; var delimiter = ""; var summaryValue = "";
    if (pIndx != -1) {

        parentFld = PopSummaryParent[pIndx];
        summaryColumn = PopSummaryFld[pIndx];
        delimiter = PopSummDelimiter[pIndx] == "" ? "," : PopSummDelimiter[pIndx];
    }

    if (summaryColumn.indexOf(":") != -1) {
        summaryColumn = summaryColumn.replace(":", "");
    }
    var popRowStr = GetPopRows(AxActivePDc, GetClientRowNo(AxActivePRow, AxActivePDc), popDcNo);
    var popRows = popRowStr.split(",");

    for (var j = 0; j < popRows.length; j++) {
        var SummaryFld = summaryColumn + popRows[j] + "F" + popDcNo;
        SummaryFld = $j("#" + SummaryFld);
        if (SummaryFld.length > 0)
            summaryValue += SummaryFld.val() + delimiter;
    }
    summaryValue = summaryValue.substring(0, summaryValue.length - 1);
    parentFld = parentFld + GetClientRowNo(AxActivePRow, AxActivePDc) + "F" + AxActivePDc;
    if ($j("#" + parentFld).length > 0)
        $j("#" + parentFld).val(summaryValue);
}


//General Pop grid functions
//-----------------------------------------------------------------------
//Function to get the sub grid rows for the current active parent row.
function GetPopRows(parentDcNo, parentRowNo, popDcNo) {
    var popRows = "";
    for (var i = 0; i < ParentDcNo.length; i++) {
        if (ParentDcNo[i] == parentDcNo && ParentClientRow[i] == GetRowNoHelper(parentRowNo) && PopGridDcNo[i] == popDcNo) {
            popRows = PopRows[i];
            break;
        }
    }
    return popRows;
}

//Function to clear the poprows for the given parent row and dc no.
function ClearPopRows(parentDc, parentRow, popDc) {
    for (var i = 0; i < ParentDcNo.length; i++) {
        if (ParentDcNo[i] == parentDc && ParentClientRow[i] == parentRow && PopGridDcNo[i] == popDc) {
            PopRows[i] = "";
        }
    }
}

//Function to add a new row for the given pop up dc no.
function AddDeletePopRow(parentDcNo, parentRowNo, popDcNo, popRowNo, action) {

    var IsParentFound = false;
    var IsPDcFound = false;
    var IsFound = false;

    for (var i = 0; i < ParentDcNo.length; i++) {

        if (ParentDcNo[i] == parentDcNo) {

            if (ParentClientRow[i] == parentRowNo) {

                if (PopGridDcNo[i] == popDcNo) {
                    IsFound = true;
                    var tmpPopRows = PopRows[i].toString();
                    if (action == "Add") {
                        if (tmpPopRows == "")
                            tmpPopRows = popRowNo;
                        else {
                            var tmpRows = tmpPopRows.split(",");
                            var indx = $j.inArray(popRowNo, tmpRows)
                            if (indx == -1) {
                                tmpPopRows += "," + popRowNo;
                            }
                        }
                        PopRows[i] = tmpPopRows;
                    }
                    else {
                        tmpPopRows = tmpPopRows.split(",");
                        for (var j = tmpPopRows.length - 1; j >= 0; j--) {
                            if (tmpPopRows[j].toString() == popRowNo) {
                                tmpPopRows.splice(j, 1);
                                break;
                            }
                        }
                        var popRowStr = "";
                        for (var k = 0; k < tmpPopRows.length; k++) {
                            if (popRowStr == "")
                                popRowStr += tmpPopRows[k].toString();
                            else
                                popRowStr += "," + tmpPopRows[k].toString();
                        }
                        PopRows[i] = popRowStr;
                    }
                    break;
                }
            }
        }
    }

    if (action == "Add") {
        if (!IsFound) {
            ParentDcNo.push(parentDcNo);
            ParentClientRow.push(parentRowNo);
            var parStr = GetParentString(parentDcNo, parentRowNo, popDcNo);
            PopGridDcNo.push(popDcNo);
            PopParentsStr.push(parStr);
            PopRows.push(popRowNo);
        }

        //set the parent field values into the components from the parent row.
        //PopParentFlds

        for (var ind = 0; ind < PopParentDCs.length; ind++) {
            if (PopParentDCs[ind] == parentDcNo) {
                parentFlds = PopParentFlds[ind].toString().split(",");
                for (var i = 0; i < parentFlds.length; i++) {
                    var pFldId = parentFlds[i] + parentRowNo + "F" + parentDcNo;
                    var popFldId = GetSubFieldId("sub" + popDcNo + "_" + parentFlds[i], popRowNo, popDcNo);
                    var parFld = $j("#" + pFldId);
                    var popFld = $j("#" + popFldId);

                    if (parFld.length > 0 && popFld.length > 0) {
                        popFld.val(parFld.val());
                    }
                }
            }
        }
    }
}

//Function which returns true if the given row is empty.
function IsEmptyRow(rowNo, dcNo) {
    var range; var IsEmpty = false;
    for (var i = 0; i < FldDcRange.length; i++) {
        var dcRange = FldDcRange[i].split("~");
        if (dcRange[0] == dcNo) {
            range = dcRange[1].split(",");
            break;
        }
    }
    if (range != undefined) {
        var startIndex = parseInt(range[0].toString(), 10);
        var endIndex = parseInt(range[1].toString(), 10);

        for (var j = startIndex; j <= endIndex; j++) {
            var fieldName = FNames[j];
            if (FMoe[j] == "Accept" || FMoe[j] == "Select") {
                fieldName = fieldName + rowNo + "F" + dcNo;
                var fldValue = GetFieldValue(fieldName);
                var field = $j("#" + fieldName);
                if (field.length > 0) {
                    if (field.attr("type") != "hidden") {
                        if (FDataType[j].toLowerCase() == "numeric" && fldValue != "")
                            fldValue = parseInt(fldValue, 10);
                        if (fldValue == "" || fldValue == "0") {
                            IsEmpty = true;
                        }
                        else {
                            IsEmpty = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return IsEmpty;
}

//Function to set style for the pop grid dc if firm bind.
function SetPopDcStyle(PopDcNo, isFirm) {
    var addBtn = document.getElementById("add" + PopDcNo);
    var clearBtn = document.getElementById("btnClear" + PopDcNo);
    var btnOk = document.getElementById("btnOk" + PopDcNo);

    var enableAdd = false;

    if (isFirm) {
        if (addBtn && !enableAdd) {
            addBtn.disabled = true;
            addBtn.style.cursor = 'default';
        }
        if (clearBtn) {
            clearBtn.style.visibility = 'hidden';
        }

        if (btnOk) {
            btnOk.value = "Close";
        }
        ShowingDc(PopDcNo, "Disable");

        if (enableAdd) {
            $j("#DivFrame" + PopDcNo).find('.rowadd').removeClass("disableadd");
            $j("#DivFrame" + PopDcNo).find('.rowadd').removeAttr('disabled');
        }
    }
    else {
        if (addBtn) {
            addBtn.disabled = false;
            addBtn.style.cursor = 'hand';
        }
        if (clearBtn) {
            clearBtn.style.visibility = 'visible';
        }
        if (btnOk) {
            btnOk.value = "Ok";
        }
    }
}

//Function to set the Parents active row to the global variable.
function RegisterActivePRow(clientRowNo, pDcNo) {
    AxActivePRow = GetDbRowNo(clientRowNo, pDcNo);
    AxActivePDc = pDcNo;
    //update the parameters array.
    var found = false;
    for (var i = Parameters.length - 1; i >= 0; i--) {
        var parameter = Parameters[i].split("~");
        if (parameter[0] == "activeprow") {
            Parameters[i] = "activeprow" + "~" + AxActivePRow;
            found = true;
            break;
        }
    }
    if (!found)
        Parameters[Parameters.length] = "activeprow" + "~" + AxActivePRow;
}

//Function returns true if the PopDc has firm bind attribute as true.
function IsPopGridFirmBind(popDcNo) {
    for (var pIndx = 0; pIndx < PopGridDCs.length; pIndx++) {
        if (PopGridDCs[pIndx] == popDcNo) {
            if (PopGridDCFirm[pIndx].toString().toLowerCase() == "t") {
                return true;
            }
        }
    }
    return false;
}

//Function to get the parent fields for the given pop dc.
function GetParentFields(popDcNo) {
    var parentFlds;
    for (var i = 0; i < PopGridDCs.length; i++) {
        if (PopGridDCs[i] == popDcNo) {
            parentFlds = PopParentFlds[i].toString().split(",");
            break;
        }
    }
    return parentFlds;
}

//Function to get the parent values concatenated string for the given parent row and pop dc.
function GetParentString(parentDcNo, parentRow, popDc) {

    var parentStr = "";
    var parentFlds = GetParentFields(popDc);
    if (parentFlds != undefined) {
        for (var j = 0; j < parentFlds.length; j++) {
            var fldName = parentFlds[j] + parentRow + "F" + parentDcNo;
            if (parentStr == "")
                parentStr = GetFieldValue(fldName);
            else
                parentStr += "¿" + GetFieldValue(fldName);
        }
    }
    return parentStr;
}

//Function which returs the pop grids for the current parent dc.
function GetPopGrids(parentDcNo) {
    var popGrids = "";
    for (var i = 0; i < PopParentDCs.length; i++) {
        if (PopParentDCs[i] == parentDcNo) {
            if (popGrids == "")
                popGrids = PopGridDCs[i];
            else
                popGrids += "," + PopGridDCs[i];
        }
    }
    return popGrids;
}

function GetPopGridDcNo(parentDcNo) {
    var popGrids = "";
    for (var i = 0; i < PopParentDCs.length; i++) {
        if (PopParentDCs[i] == parentDcNo) {
            if (popGrids == "")
                popGrids = "dc" + PopGridDCs[i];
            else
                popGrids += "," + "dc" + PopGridDCs[i];
        }
    }
    return popGrids;
}

//Function which adds the parent row info to the pop arrays.
function AddParentRow(parentDcNo, parentRowNo, popDcNo, parentStr) {
    var isFound = false;
    for (var i = 0; i <= parentDcNo.length; i++) {
        if (ParentDcNo[i] == parentDcNo && PopGridDcNo[i] == popDcNo && ParentClientRow[i] == parentRowNo) {
            PopParentsStr[i] = parentStr;
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        ParentDcNo.push(parentDcNo);
        ParentClientRow.push(parentRowNo);
        PopGridDcNo.push(popDcNo);
        PopParentsStr.push(parentStr);
        PopRows.push("");
    }
}

//Function which updates the popRows and rowno arrays for the newly added row.
function UpdatePopUpArrays(dcNo, rowNo, isPopDc, action, pRow, pDc) {
    if (TstructHasPop) {

        if (isPopDc) {
            var parentClientRow = GetClientRowNo(AxActivePRow, AxActivePDc);
            var activePDc = AxActivePDc;
            var activePRow = parentClientRow;

            if (pRow != undefined && pDc != undefined) {
                activePDc = pDc;
                activePRow = pRow;
            }

            if (action == "Add") {
                AddDeletePopRow(activePDc, activePRow, AxActiveDc, rowNo, "Add");
            }
            else {
                AddDeletePopRow(activePDc, activePRow, AxActiveDc, rowNo, "Delete");
            }
        }
        else {
            var popGridsStr = GetPopGrids(dcNo);
            var popGrids = popGridsStr.split(",");

            for (var i = 0; i < popGrids.length; i++) {
                if (popGrids[i] != "") {
                    AddParentRow(dcNo, rowNo, popGrids[i], "");
                }
            }
        }
    }
}

function DeletePopRowsAfterGetDep() {
    //format of AxSubGridRows -popdc1~row1,row2,row3¿popdc2~row1,row2
    var strData = AxSubGridRows.split("¿");
    //AxParStrFromDep -dcno~rowno
    var parData = AxParStrFromDep.split("~");
    for (var i = 0; i < strData.length; i++) {
        if (strData[i] != "") {
            var strDcRows = strData[i].split("~");
            var dcNo = strDcRows[0];

            //for every popgrid for the current parent grid, clear the poprows for the given parent row from the pop arrays
            ClearPopRows(parData[0], GetClientRowNo(parData[1], parData[0]), dcNo);

            var dcRows = strDcRows[1].split(",");
            for (var j = dcRows.length - 1; j >= 0; j--) {
                var rowNo = GetClientRowNo(parseInt(dcRows[j], 10), dcNo);
                if ($j("#gridDc" + dcNo)[0].rows.length == 1) {
                    var rowId = $j("#gridDc" + dcNo)[0].rows[0].id;
                    var rowNo = rowId.substring(rowId.lastIndexOf("R") + 1, rowId.lastIndexOf("F"));
                    ClearDeletedFields(dcNo, rowNo);
                    var dcIdx = $j.inArray(dcNo, DCFrameNo);
                    DCHasDataRows[dcIdx] = "False";
                    //convert the rowid of the first row to 001
                    var a = "sp" + dcNo + "R" + dcRows[j] + "F" + dcNo;
                    var newRow = $j("#" + a);

                    newRow.attr("id", "sp" + dcNo + "R001F" + dcNo);
                    newRow.find(':input').val('');
                    newRow.find('select,a,input,label,img,.Grdlnk').each(function () {
                        ConvertFieldID($j(this), "001");
                    });
                    SetRowCount(dcNo, "1");
                    UpdatePopUpArrays(dcNo, rowNo, true, "Delete");
                    UpdateDcRowArrays(dcNo, rowNo, "Delete", -1);
                }
                else {

                    //get the row, and remove the html
                    var a = "sp" + dcNo + "R" + rowNo + "F" + dcNo;
                    $j("#" + a).remove();

                    UpdatePopUpArrays(dcNo, rowNo, true, "Delete");
                    UpdateDcRowArrays(dcNo, rowNo, "Delete", -1);
                    SetRowCount(dcNo, GetDcRowCount(dcNo) - 1);
                }
            }
        }
    }
}

function AddRowAfterGetDep(rowNo, dcNo, oldHasData) {
    if (TstructHasPop) {

        //GetDep will always return the sub grid rows starting from "1" for the active parent row.
        //For e.g the cr attribute will always have "i1,i2...." Hence just adding at the end.
        //if (strDelRows[i].toString() != "i1" || (dcIsPop && calledFrom == "GetDep" && GetDcRowCount(dcNo) > 1)) {
        if (rowNo != "1" || oldHasData == "True") {
            AddRow(dcNo, "GetDep");
            AxDepRows.push(rowNo + "~" + GetDcRowCount(dcNo));
        }
        else {
            //if dc is pop grid or parent grid update the pop rows array
            AxDepRows.push(rowNo + "~" + "1");

            $j("#sp" + dcNo + "R" + "001" + "F" + dcNo).show();
            UpdateNewPopInfo(dcNo, "001");
            if (AxParStrFromDep != "") {
                var parStr = AxParStrFromDep.split("~");
                var parDc = parStr[0];
                var pRow = GetClientRowNo(parStr[1], parDc);
                UpdatePopUpArrays(dcNo, "001", true, "Add", pRow, parDc);
            }
            UpdateDcRowArrays(dcNo, "001", "Add");
        }
    }
}

//Function which returns the dbrowno for the poprows of a given parent row
function GetDbPopRows(strRows, dcNo) {
    if (strRows != "") {
        var dbPopRows = strRows.split(",");
        dbPopRows.sort();
        var tmpRows = "";
        for (var i = 0; i < dbPopRows.length; i++) {
            var rNo = GetRowNoHelper(GetDbRowNo(dbPopRows[i], dcNo));

            if (tmpRows == "")
                tmpRows = rNo;
            else
                tmpRows += "," + rNo;
        }
        return tmpRows;
    }
    else
        return strRows;
}

//Function to return the calcualted/last rowno to be used for adding to the table.
function GetSubDsRowNo(wsRowNo, dcNo) {
    var dsRowNo = 0;
    var idx = $j.inArray(wsRowNo, AxSubWsRows);
    if (idx == -1) {
        AxSubWsRows.push(wsRowNo);
        dsRowNo = GetDcRowCount(dcNo) + 1;
        AxSubDsRows.push(dsRowNo);
    }
    else {
        dsRowNo = AxSubDsRows[idx];
    }
    return dsRowNo;
}
var result;
function toggleSwitch(type) {
    var usrFlag = '';
    if ($j("#ckbPurposeUser").prop("checked") == true) {
        //checkbox is unchecked 
        $j("#ckbPurposeUser").prop('checked', false);
        usrFlag = '0';
        $j(".clsPrps").css("display", "none");

    } else {
        $j("#ckbPurposeUser").prop('checked', true);
        //checkbox is checked
        usrFlag = '1';
        $j(".clsPrps").css("display", "block");
    }

    try {
        result = ASB.WebService.GetChoices('normal', usrFlag);
    }
    catch (ex) {
        result = ex.toString();
    }
}


function toggleSwitchDesign(type) {
    var valFlag = '';
    if ($("#ckbPurposeDev").prop("checked") == true) {
        //checkbox is unchecked                 
        $("#ckbPurposeDev").prop('checked', false);
        valFlag = '0';
        $j(".clsPrps").css("display", "none");

    } else {
        //checkbox is checked
        $("#ckbPurposeDev").prop('checked', true);
        valFlag = '1';
        $j(".clsPrps").css("display", "block");
    }
    try {
        result = ASB.WebService.GetChoices('design', valFlag);
    }
    catch (ex) {
        result = ex.toString();
    }

}

// AJAX Calls on tstruct design load
function GetChoiceStatusForDSign() {
    //alert(1);
    $.ajax({
        type: "POST",
        url: "TstructDesign.aspx/GetPrpLblStatusForDSign",
        data: '',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //alert(response.d);
            var res = response.d;
            if (res == "true") {
                $j(".clsPrps").css("display", "block");
                $j("#ckbPurposeDev").prop("checked", true);


            }
            else {
                $j(".clsPrps").css("display", "none");
                $j("#ckbPurposeDev").prop("checked", false);
            }
        }
    });


}
function pageloadlogtime(logTime) {
    console.log("Page Load:  " + logTime + " milliseconds.");
}

function disableDC(dcno) {
    const DCNumber = $j("#DivFrame" + dcno)
    DCNumber.find('input,textarea, img, select, a').not('.subGrid,.chkShwSel,.swtchDummyAnchr,.tgl').attr('disabled', true);
    DCNumber.find('a img').removeClass('handCur');
    DCNumber.find('img').attr('onclick', 'Callnull');
    DCNumber.find(":button").removeClass('handCur');
    DCNumber.find('.rowdelete').addClass("disabledelete");
    DCNumber.find('.rowadd').addClass("disableadd");
    DCNumber.find('.axpBtn').css({ "pointer-events": "none", "cursor": "default" });
    DCNumber.find('.upload-icon').attr('disabled', true).css("cursor", "default");
    DCNumber.find('.fillcls').addClass("disablefill");
    $j("#gridAddBtn" + dcno).prop('disabled', true);
    if (!axInlineGridEdit && AxpGridForm != "form")
        $j("#wrapperForEditFields" + dcno).hide();
    $j("#gridToggleBtn" + dcno).addClass('disabled').prop('disabled', true);
    $j("[id ^= 'fillgrid']").prop('disabled', true).addClass('disabled');
    $j("#wrapperForEditFields" + dcno).find(".editLayoutFooter button").addClass('disabled').prop('disabled', true);
    $j("#colScroll" + dcno + " table tbody tr").addClass('disableTheRow');
    $j("#colScroll" + dcno + " table tbody tr").find('.glyphicon.glyphicon-pencil,.glyphicon.glyphicon-remove').addClass('disabled').prop("disabled", true).parent().addClass('disabled').prop("disabled", true);
    $("#gridAddBtn" + dcno).next().find(":button").attr("disabled", true).off('click');

}

function createEditors() {
    $("textarea").each(function () {
        let elem = $(this);
        let editorId = "";
        editorId = elem.attr("id") != undefined ? elem.attr("id") : "";
        if (editorId.toLowerCase().indexOf("sql_editor") === 0 || editorId.toLowerCase().indexOf("exp_editor") === 0 || GetDWBFieldType(GetFieldsName(editorId)) == "SQL Editor" || GetDWBFieldType(GetFieldsName(editorId)) == "Expression Editor" || editorId.toLowerCase().indexOf("js_editor") === 0 || editorId.toLowerCase().indexOf("html_editor") === 0) {

            if (IsGridField(GetFieldsName(editorId)) && AxpGridForm != "form" && !elem.parent('div').hasClass("edit-mode-content") && !elem.parents('.modal').length)
                return true;
            if (elem.hasClass('CodeMirrorApplied'))
                return true;
            elem.addClass('CodeMirrorApplied');

            if (elem.data("myeditor")) {
                //destroying the text editor
                elem.data("myeditor").toTextArea();
            }
            if (editorId.toLowerCase().indexOf("sql_editor") === 0 || GetDWBFieldType(GetFieldsName(editorId)) == "SQL Editor") {
                //createTheEditor({ type: "sql", textarea: editorId, loadSqlHintObj: false, sqlHintObj: callParentNew("mainSQLhintObj") })
                //if (transid == 'ad_i' || transid == 'ad_iq' || transid == 'ad_ip') {
                // if (transid == 'ad_iq') {
                //     createTheEditor({ type: "sql", textarea: editorId, loadSqlHintObj: false, sqlHintObj: callParentNew("mainSqlHintObj"), customValidationFn: null, validateOnBlur: false })
                // } else
                if(transid == "ad_i" || transid == "ad_iq" || transid == "ad_ip"){
                    createTheEditor({ type: "sql", textarea: editorId, loadSqlHintObj: false, sqlHintObj: callParentNew("mainSqlHintObj"), customValidationFn: null, validateOnBlur: false });
                }
                else
                {
                    createTheEditor({ type: "sql", textarea: editorId, loadSqlHintObj: false, sqlHintObj: callParentNew("mainSqlHintObj"), customValidationFn: customValidationFn });
                }
                var btnHTML = "<div id=\"dvpop" + editorId + "\" class=\"tstsqleditorbtn\"><a value=\"SQL Editor\" data-id=\""+editorId+"\" class=\"tstbtnSqlConsole\" href=\"javascript:void(0);\" tooltip=\"SQL Editor\"><i class=\"fa fa-external-link\" id=\"tstlinkSqlConsole\"></i></a></div>";
                $("#" + editorId).after(btnHTML);
            } else if (editorId.toLowerCase().indexOf("exp_editor") === 0 || GetDWBFieldType(GetFieldsName(editorId)) == "Expression Editor") {
                createTheEditor({ type: "expression", textarea: editorId, customValidationFn: customValidationFn })
                //createTheEditor({ type: "expression", textarea: editorId })
            } else if (editorId.toLowerCase().indexOf("html_editor") === 0) {
                if(transid == "sect")
                    createHtmlEditor(editorId);
                else
                    applyCodeMirror(editorId, "html");
            } else if (editorId.toLowerCase().indexOf("js_editor") === 0) {
                applyCodeMirror(editorId, "js");
            } else if (editorId.toLowerCase().indexOf("css_editor") === 0) {
                applyCodeMirror(editorId, "css");
            } else {
                console.log("Not Applied " + editorId)
            }

        }

        //elem.blur(function () {
        //    MainBlur($j(this));
        //});
    })
}

//Open SQL Editor Modified in popup(devendra)
function createPopupdesignnew(txtid) {

    htmlContent = '<div id="axpertPopupWrapperDWB"  class="remodal" data-pushtxt-id="' + txtid + '" data-remodal-id="axpertPopupModalDWB"><button data-remodal-action="close" class="remodal-close remodalCloseBtn icon-basic-remove" title="Close"></button><div style="height:100%;" id="iframeMarkUp1"><div id="QryEditor"><div ><button id="exeQuery" title="Execute"><i class="fa fa-bolt"></i></button><textarea id="dwbtxtEditorsql" rows="4" cols="50"></textarea></div><div class="dvOutput"><div class="rsltHeader">Result<span id="spnRowCnt"></span></div><div id="txtOutput"></div><table id="tblOutput" class="table-responsive"></table></div></div></div></div>';
    $("head").append(htmlContent);
    var options = { "closeOnOutsideClick": true, "hashTracking": false, "closeOnEscape": true };
    var inst = $('[data-remodal-id=axpertPopupModalDWB]:not(.remodal-is-initialized):not(.remodal-is-closed):eq(0)').remodal(options);
    if (inst && inst.state != "opened")
        inst.open();

    let mainSqlCM = CodeMirror.fromTextArea(document.getElementById('dwbtxtEditorsql'), {
        mode: 'text/x-sql',
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        theme: "default",
        hintOptions: {
            tables: callParentNew("mainSqlHintObj")
        },

    });

    mainSqlCM.on('keyup', function (editor, event) {
        if (
            !(event.ctrlKey) &&
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (event.keyCode >= 97 && event.keyCode <= 122) ||
            (event.keyCode >= 46 && event.keyCode <= 57)
        ) {
            // type code and show autocomplete hint in the meanwhile
            CodeMirror.commands.autocomplete(editor, null, { completeSingle: false });
        }
    });
    var parentdiv = '#dv' + $("#axpertPopupWrapperDWB").attr('data-pushtxt-id').split('0')[0];

    // var parentEditor = $(parentdiv + ' .CodeMirror')[0].CodeMirror;
    $('#QryEditor .CodeMirror')[0].CodeMirror.setValue($(parentdiv + ' .CodeMirror')[0].CodeMirror.getDoc().getValue());
    //return inst;

}
//---------End devendra

// Calling webservice
function customValidationFn(textarea) {
    var jsonData = "";
    var webServiceName = "";
    var textSqlandExpression = textarea.value;
    if (textSqlandExpression.length <= 0) {
        return;
    }
    if (textarea.id.toLocaleLowerCase().startsWith("sql_editor") || textarea.id.toLocaleLowerCase().startsWith("exp_editor") || GetDWBFieldType(GetFieldsName(textarea.id)) == "SQL Editor" || GetDWBFieldType(GetFieldsName(textarea.id)) == "Expression Editor") {
        var sourcefield = "", sourcetable = "", Axp_Web_SqlExp_Val_Def_RestRad = "";
        var calfrom = "", fgname = "";
        var fieldname = "", fldordno = "", datatype = "", fieldType = "", sfrom = "", expression = "", validateExpression = "", transid = "", savenorm = "", refresh = "", autoselect = "", combobox = "", sql = "", iviewparams = "", pmetadata = "", sourcefieldid = "", sourcetableid = "";
        var dcNo = "";

        fieldType = GetFieldValue(GetComponentName("type", GetDcNo("type"))) || "";
        fieldname = GetFieldValue(GetComponentName("name", GetDcNo("name"))) || "";
        fldordno = GetFieldValue(GetComponentName("fldordno", GetDcNo("fldordno"))) || "";
        datatype = GetFieldValue(GetComponentName("datatype", GetDcNo("datatype"))) || "";

        if (fieldType.toLowerCase() === "field") {
            sfrom = GetFieldValue(GetComponentName("modeofentry", GetDcNo("modeofentry"))) || "";
        } else if (fieldType.toLowerCase() === "fill grid") {
            sfrom = "fillgrid";
        }
        transid = GetFieldValue(GetComponentName("stransid", GetDcNo("stransid"))) || callParentNew("transid");
        expression = GetFieldValue(GetComponentName("exp_editor_expression", GetDcNo("exp_editor_expression"))) || "";
        validateExpression = GetFieldValue(GetComponentName("exp_editor_validateexpression", GetDcNo("exp_editor_validateexpression"))) || "";


        sfrom = sfrom.toLowerCase();

        if (sfrom === "select from sql") {
            sfrom = "accept";
            sql = GetFieldValue(GetComponentName("sql_editor_test", GetDcNo("sql_editor_test"))) || "";
            pmetadata = GetFieldValue(GetComponentName("pmetadata", GetDcNo("pmetadata"))) || "";
            sourcefieldid = "sourcefield";
            sourcetableid = "sourcetable";
        }
        else if (sfrom === "select from form") {
            savenorm = GetFieldValue(GetComponentName("savenormalized_form", GetDcNo("savenormalized_form"))) || "";
            refresh = GetFieldValue(GetComponentName("refreshonsave_form", GetDcNo("refreshonsave_form"))) || "";
            autoselect = GetFieldValue(GetComponentName("autoselect_form", GetDcNo("autoselect_form"))) || "";
            combobox = GetFieldValue(GetComponentName("combobox_form", GetDcNo("combobox_form"))) || "";
            sql = GetFieldValue(GetComponentName("sql_editor_sqltextform", GetDcNo("sql_editor_sqltextform"))) || "";
            sourcefield = GetFieldValue(GetComponentName("selectfield", GetDcNo("selectfield"))) || "";
            sourcetable = GetFieldValue(GetComponentName("tname", GetDcNo("tname"))) || "";
            pmetadata = GetFieldValue(GetComponentName("pmetadata", GetDcNo("pmetadata"))) || "";

        }
        else if (sfrom === "accept") {
            sql = GetFieldValue(GetComponentName("sql_editor_detail", GetDcNo("sql_editor_detail"))) || "";

        }
        else if (sql == "") {
            sql = textSqlandExpression;
        }
        if (transid == "axcad" || transid == "ad_i" || transid == "ad_ip" || transid == "axvar" || transid == "axeml")
            Axp_Web_SqlExp_Val_Def_RestRad = "online";
        else
            Axp_Web_SqlExp_Val_Def_RestRad = GetFieldValue(GetComponentName("Axp_Web_SqlExp_Val_Def_RestRad", GetDcNo("Axp_Web_SqlExp_Val_Def_RestRad"))) || "";

        let paramsForSQL = "";

        if (textarea.id.toLocaleLowerCase().startsWith("sql_editor") || GetDWBFieldType(GetFieldsName(textarea.id)) == "SQL Editor") {
            if(transid == "ad_i" || transid == "ad_iq" || transid == "b_sql"){
                sfrom = "iview";

                if(transid == "b_sql"){
                    paramsForSQL = $("#sqlparams000F1").val() || "";
                }else{
                    paramsForSQL = $("#Def_Table_params000F1").val() || $("#Def_Table_paramsmain000F1").val() || "";// "puser~Character~admin,abcd~Character~";
                }

                if(paramsForSQL){
                    paramsForSQL = `{${paramsForSQL.split(',').map(par=>par.split('~').map((pars,ind, allPars)=>{
                        if(ind == 0){
                            return allPars.length == 1 ? `"${pars}":""` : `"${pars}":`
                        }
                        else if(ind == 1){
                            return `"${(pc = pars[0]?.toLowerCase()) ? `${pc}~` : ""}`
                        }
                        else if(ind == 2){
                            return `${pars}"`;
                        }
                    }).join("")).join(",")}}`;
                }
            }else if(transid == "ad_ip"){
                sfrom = "iview";

                let paramSqlFld = $(textarea);
                var sqlParStr = "";
                try {
                    if (paramSqlFld.val() != "" && (paramSqlFld.val().replace(/'(.*?)'/g, "''").match(/(:)+[a-zA-Z0-9]{1,}/g) || []).filter(v=>v.indexOf("::") != 0).length > 0) {
                        sqlParStr = _.uniqBy(paramSqlFld.val().replace(/'(.*?)'/g, "''").match(/(:)+[a-zA-Z0-9]{1,}/g).filter(v=>v.indexOf("::") != 0).map((val) => val.replace(/[:\s]/g, ""))).join(",");
                    }
                    if (paramSqlFld.val() != "" && (paramSqlFld.val().replace(/'(.*?)'/g, "''").match(/(\{(?:\[??[^\[]*?\}))*/g) || []).filter(v=>v).length > 0) {
                        sqlParStr = (sqlParStr ? (sqlParStr + ",") : "") + _.uniqBy(paramSqlFld.val().replace(/'(.*?)'/g, "''").match(/(\{(?:\[??[^\[]*?\}))*/g).map((val) => val.replace(/[{\s]/g, "").replace(/[}\s]/g, ""))).filter(v=>v).join(",");
                    }
                    // sqlParStr = sqlParStr.endsWith(",") ? sqlParStr.substr(0, sqlParStr.length - 1) : sqlParStr;
                } catch (ex) {}

                if(sqlParStr){
                    let ivPJSON = callParentNew("ivParamsJSON");
                    paramsForSQL = sqlParStr.split(",").map(par=>{
                        let obj = ivPJSON.filter(parObj=>parObj.pname == par)?.[0];
                        if(obj){
                            return `"${par}":"${obj.datatype[0].toLowerCase()}~"`
                        }
                        else {
                            let parVal = GetFieldValue("Def_Table_querycols000F1").split(",").filter(vvv=>vvv.startsWith(`${par}~`))?.[0];
                            if(parVal){
                                return `"${par}":"${parVal.split("~")[1]?.[0].toLowerCase()}~"`
                            }
                        }
                    }).filter(par=>par).join(",");

                    if(paramsForSQL){
                        paramsForSQL = `{${paramsForSQL}}`;
                    }
                }
            }

            jsonData = {
                "_parameters": [{
                    "tstructs": {
                        "axpapp": callParentNew('webProject'), //callParentNew('mainProject'),
                        "webaxpapp": callParentNew('mainProject'),
                        "transid": transid,
                        "fieldname": fieldname,
                        "iviewparams": iviewparams,
                        "fldordno": fldordno,
                        "datatype": datatype,
                        "sfrom": sfrom,
                        //"expression": expression,
                        //"validateexpression": validateExpression,
                        "expression": "",
                        "validateexpression": "",
                        "savenorm": savenorm,
                        "refresh": refresh,
                        "autoselect": autoselect,
                        "combobox": combobox,
                        "sql": sql,
                        "sourcefield": sourcefield,
                        "sourcetable": sourcetable,
                        "Axp_Web_SqlExp_Val_Def_RestRad": Axp_Web_SqlExp_Val_Def_RestRad,
                        "metadata": pmetadata,
                        "sourcefieldid": sourcefieldid,
                        "sourcetableid": sourcetableid,
                        "trace": "",
                        "scriptpath": ""
                    }
                }]
            }
            webServiceName = "ValidateSQL";
        } else if (textarea.id.toLocaleLowerCase().startsWith("exp_editor") || GetDWBFieldType(GetFieldsName(textarea.id)) == "Expression Editor") {
            //For expression called from
            textAreaID = textarea.id.toLocaleLowerCase();
            if (textAreaID.indexOf("exp_editor_expression") != -1)
                calfrom = "field"
            else if (callParentNew("transid")=="ad_fg" && textAreaID.indexOf("exp_editor_validateexpression") != -1)
                calfrom = "fgval"
            else if (callParentNew("transid")!="ad_fg" && textAreaID.indexOf("exp_editor_validateexpression") != -1)
                calfrom = "field"
            else if (textAreaID.indexOf("exp_editor_footerstring") != -1)
                calfrom = "fgfootstr"
            else
                calfrom = "field";
            var formCntl="f";
            if(callParentNew("transid")=="ad_s" && $("#control_type000F1").length>0 && $("#control_type000F1").val()=="T")
                formCntl="t";            
            if(callParentNew("transid")=="ad_s" && $("#event000F1").val()!="" && $("#control_type000F1").val()=="F" && textAreaID=="exp_editor_script000f1" && textSqlandExpression!="")
            {
                var FunScriptsAvoid="";
                textSqlandExpression=textSqlandExpression.replaceAll(" ","");
                $.each(ScriptsAvoidOnEvent, function (i, scrFunName) {                    
                    if(textSqlandExpression.toLowerCase().indexOf(scrFunName)>-1)
                    {
                        FunScriptsAvoid=scrFunName;
                        return false;
                    }
                });
                if(FunScriptsAvoid!="")
                {
                    FunScriptsAvoid= FunScriptsAvoid.slice(0,-1);
                    showAlertDialog("warning", FunScriptsAvoid+" function not allowed in selected event.");
                    return;
                }
            }
            else if(callParentNew("transid")=="ad_s" && $("#control_type000F1").val()=="F" && textAreaID=="exp_editor_script000f1" && textSqlandExpression!="")
            {
                var FunScriptsAvoid="";
                textSqlandExpression=textSqlandExpression.replaceAll(" ","");
                $.each(SciptsAvoidWithoutEvent, function (i, scrFunName) {                    
                    if(textSqlandExpression.toLowerCase().indexOf(scrFunName)>-1)
                    {
                        FunScriptsAvoid=scrFunName;
                        return false;
                    }
                });
                if(FunScriptsAvoid!="")
                {
                    return;
                }
            }

            jsonData = {
                "_parameters": [{
                    "tstructs":
                    {
                        //"axpapp": eval(callParent('mainProject')),
                        "axpapp": callParentNew('webProject'), //callParentNew('mainProject'),
                        "webaxpapp": callParentNew('mainProject'),
                        "transid": transid,
                        "calfrom": calfrom,
                        "expression": textSqlandExpression,
                        "fgname": fieldname,
                        "Axp_Web_SqlExp_Val_Def_RestRad": Axp_Web_SqlExp_Val_Def_RestRad,
                        "trace": "",
                        "scriptpath": "",
                        "fc":formCntl
                    }
                }]
            }
            webServiceName = "ValidateExpression";
        }
        ShowDimmer(true);

        if (actionCallFlag == actionCallbackFlag) {
            actionCallFlag = Math.random();
            $("#icons").css({ "pointer-events": "auto" });
        } else {
            $("#icons").css({ "pointer-events": "none" });
            return;
        }
        try {
            if((typeof $(blurNextPreventElement).attr("id")!="undefined" && $(blurNextPreventElement).attr("id")=="tstlinkSqlConsole" && $(blurNextPreventElement).parent().hasClass("tstbtnSqlConsole")) || (typeof blurNextPreventId!="undefined" && blurNextPreventId=="tstlinkSqlConsole"))
                callParentNew("beforeRestCallId=","tstbtnSqlConsole");     
            callParentNew("sqlRestCallInitiated=", true);
            ASB.WebService.CallRestWS(`${JSON.stringify(jsonData)}${paramsForSQL ? `*$*"params":${paramsForSQL}` : ""}`, webServiceName, SuccessCallbackAction, OnException);
        }
        catch (exp) {
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
        }


        function SuccessCallbackAction(result, eventArgs) {
            callParentNew("sqlRestCallInitiated=", false);
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
            ShowDimmer(false);
            try {
                var json = $.parseJSON(result);
                var msg = json["result"][0].msg;
                var autofillsql = "", fldid = "";
                var status = json["result"][0].status;
                if (status == "Failed" && webServiceName == "ValidateSQL") {
                    if (transid == "ad_ip") {
                        parent.$("#actbtn_nextclk.dwbIvBtnbtm").hide();
                        $(callParentNew("btn_nxclkDuplicate")).show();
                        parent.$("#actbtn_iSave.dwbIvBtnbtm").hide();
                        $(callParentNew("btn_iSDuplicate")).show();
                    } else {
                        if (parent.$("#actbtn_nextclk.dwbIvBtnbtm:visible").length > 0 || parent.$("#btn_nxclkDuplicate.dwbIvBtnbtm:visible").length > 0) {
                            parent.$("#actbtn_nextclk.dwbIvBtnbtm").hide();
                            $(callParentNew("btn_nxclkDuplicate")).show();
                        } else {
                            parent.$("#actbtn_iSave.dwbIvBtnbtm").hide();
                            $(callParentNew("btn_iSDuplicate")).show();
                        }
                    }
                }
                else if (status == "success" && webServiceName == "ValidateSQL") {
                    if (transid == "ad_ip") {
                        $(callParentNew("btn_nxclkDuplicate")).hide();
                        parent.$("#actbtn_nextclk.dwbIvBtnbtm").show();
                        $(callParentNew("btn_iSDuplicate")).hide();
                        parent.$("#actbtn_iSave.dwbIvBtnbtm").show();
                    } else {
                        if (parent.$("#btn_nxclkDuplicate:visible").length > 0 || parent.$("#actbtn_nextclk:visible").length > 0) {
                            $(callParentNew("btn_nxclkDuplicate")).hide();
                            parent.$("#actbtn_nextclk.dwbIvBtnbtm").show();
                        } else {
                            $(callParentNew("btn_iSDuplicate")).hide();
                            parent.$("#actbtn_iSave.dwbIvBtnbtm").show();
                        }
                    }
                }

                if (typeof json["result"][0].metadata != "undefined") {

                    autofillsql = "F";
                    if (json["result"][0].metadata[0].data.includes(',').toString() == "true" && GetFieldValue(GetComponentName("modeofentry", GetDcNo("modeofentry"))).toString().toLowerCase() == "select from sql") {
                        if (json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase() == json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id') {
                            autofillsql = "T";
                        }
                        else if (json["result"][0].metadata[0].datatypes.split(',')[0].toString().toLowerCase() == "n") {
                            autofillsql = "T";
                        }
                    }

                    if (autofillsql == "T") {
                        fldid = GetComponentName("savenormalized", GetDcNo("savenormalized"));
                        SetFieldValue(fldid, 'T');
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), 'T', "parent");
                        fldid = GetComponentName("sourcefield", GetDcNo("sourcefield"));
                        SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[1].toString().toLowerCase());
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[0].data.split(',')[1].toString().toLowerCase(), "parent");
                        fldid = GetComponentName("sourcetable", GetDcNo("sourcetable"));
                        SetFieldValue(fldid, json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase());
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase(), "parent");
                        fldid = GetComponentName("ptableid", GetDcNo("ptableid"));
                        SetFieldValue(fldid, json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id');
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id', "parent");
                        fldid = GetComponentName("firstcolvalue", GetDcNo("firstcolvalue"));
                        SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase(), "parent");
                        fldid = GetComponentName("tablename", GetDcNo("tablename"));
                        SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase(), "parent");
                    }
                    else if (autofillsql == "F") {
                       let _savenormalized = $("#savenormalized000F2").val();
                        if (callParentNew("transid") == "mntss" && GetFieldValue(GetComponentName("modeofentry", GetDcNo("modeofentry"))) == "Select From Sql" && _savenormalized == "T") {
                            
                            try {
                                let _dcname = $("#dcname000F1").val();
                                let _stransid = $("#stransid000F1").val();
                                let _fldName = $("#name000F1").val();
                                let _fldDataType = $("#datatype000F1").val()
                                ASB.WebService.CallExecuteSQLFldSN(_stransid, _dcname, _fldName, _fldDataType, SuccessCallbackDctbl, OnException);
                            }
                            catch (exp) {
                            }
                            function SuccessCallbackDctbl(result, eventArgs) {
                                try {
                                    var json = $.parseJSON(result);
                                    var jsonVal = getCaseInSensitiveJsonProperty(json.result.row[0], "rcount");
                                    if (jsonVal != "0") {
                                        let _sqlFld = GetComponentName("sql_editor_test", GetDcNo("sql_editor_test"));
                                        SetFieldValue(_sqlFld, sql_editor_test);
                                        UpdateFieldArray(_sqlFld, GetFieldsRowNo(_sqlFld), sql_editor_test, "parent");
                                        let _fldid = GetComponentName("savenormalized", GetDcNo("savenormalized"));
                                        SetFieldValue(_fldid, 'T');
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), 'T', "parent");

                                        let _sql_editor_depflds = sql_editor_depflds.split(',');
                                        _fldid = GetComponentName("tablename", GetDcNo("tablename"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[0]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[0], "parent");

                                        _fldid = GetComponentName("ptableid", GetDcNo("ptableid"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[1]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[1], "parent");

                                        _fldid = GetComponentName("firstcolvalue", GetDcNo("firstcolvalue"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[2]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[2], "parent");

                                        _fldid = GetComponentName("sourcefield", GetDcNo("sourcefield"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[3]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[3], "parent");

                                        _fldid = GetComponentName("sourcetable", GetDcNo("sourcetable"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[4]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[4], "parent");

                                        _fldid = GetComponentName("dynamicfiltercnt", GetDcNo("dynamicfiltercnt"));
                                        SetFieldValue(_fldid, _sql_editor_depflds[5]);
                                        UpdateFieldArray(_fldid, GetFieldsRowNo(_fldid), _sql_editor_depflds[5], "parent");

                                        showAlertDialog("error", "Normalized field data already exist in the transaction table");
                                    } else {
                                        fldid = GetComponentName("savenormalized", GetDcNo("savenormalized"));
                                        SetFieldValue(fldid, 'F');
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), 'F', "parent");
                                        fldid = GetComponentName("sourcefield", GetDcNo("sourcefield"));
                                        SetFieldValue(fldid, '');
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), '', "parent");
                                        fldid = GetComponentName("sourcetable", GetDcNo("sourcetable"));
                                        SetFieldValue(fldid, '');
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), '', "parent");
                                        fldid = GetComponentName("ptableid", GetDcNo("ptableid"));
                                        SetFieldValue(fldid, json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id');
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id', "parent");
                                        fldid = GetComponentName("firstcolvalue", GetDcNo("firstcolvalue"));
                                        SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase(), "parent");
                                        fldid = GetComponentName("tablename", GetDcNo("tablename"));
                                        SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                                        UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase(), "parent");
                                    }
                                    //ShowDimmer(false)
                                } catch (ex) {
                                    //ShowDimmer(false)
                                }
                            }

                            function OnException(result) {
                                //ShowDimmer(false)
                            }
                        } else {
                            fldid = GetComponentName("savenormalized", GetDcNo("savenormalized"));
                            SetFieldValue(fldid, 'F');
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), 'F', "parent");
                            fldid = GetComponentName("sourcefield", GetDcNo("sourcefield"));
                            SetFieldValue(fldid, '');
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), '', "parent");
                            fldid = GetComponentName("sourcetable", GetDcNo("sourcetable"));
                            SetFieldValue(fldid, '');
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), '', "parent");
                            fldid = GetComponentName("ptableid", GetDcNo("ptableid"));
                            SetFieldValue(fldid, json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id');
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase() + 'id', "parent");
                            fldid = GetComponentName("firstcolvalue", GetDcNo("firstcolvalue"));
                            SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase(), "parent");
                            fldid = GetComponentName("tablename", GetDcNo("tablename"));
                            SetFieldValue(fldid, json["result"][0].metadata[0].data.split(',')[0].toString().toLowerCase());
                            UpdateFieldArray(fldid, GetFieldsRowNo(fldid), json["result"][0].metadata[1].data.split(',')[0].toString().toLowerCase(), "parent");
                        }
                    }
                }
                else {
                    sourceAcMetaJsonFlds = new Array();
                    fldSourceAcMetaJson = "";
                }
                if (status.toLowerCase() == "failed") {
                    callParentNew("beforeRestCallId=","");
                    msg = msg.replace('<error>', '').replace('</error>', '');
                    showAlertDialog("warning", msg);
                }

                if(status == "success" && webServiceName == "ValidateSQL" && callParentNew("actionfldflag")=="change" )
                {
                    if(callParentNew("transid")=="mntss" && GetFieldValue(GetComponentName("modeofentry", GetDcNo("modeofentry")))=="Select From Form" && $("#mastertstructddl000F2").val()!="" && $("#masterflddl000F2").val()!="" && $("#savenormalized_form000F2").val()=="T"){
                        customExecuteSql();
                        return;
                    }
                    else if(callParentNew("transid")=="mntss" && GetFieldValue(GetComponentName("modeofentry", GetDcNo("modeofentry")))=="Select From Sql" && $("#sourcefield000F2").val()!="" && $("#sourcetable000F2").val()!="" && $("#savenormalized000F2").val()=="T"){
                        customExecuteSql();
                        return;
                    }
                }

                if(status == "success" && webServiceName == "ValidateSQL" && callParentNew("beforeRestCallId")!="")
                {
                    var btnBeforeRestCall=callParentNew("beforeRestCallId");
                    callParentNew("beforeRestCallId=","");
                    if (btnBeforeRestCall=="btn_nxclkDuplicate") {
                        $("#actbtn_nextclk").trigger('click');
                    } 
                    else if (btnBeforeRestCall=="btn_iSDuplicate") {
                        $("#actbtn_iSave").trigger('click');
                    }
                    else if(btnBeforeRestCall=="tstbtnSqlConsole"){
                        $(".tstbtnSqlConsole").trigger('click');
                    }
                    else
                        $("#"+btnBeforeRestCall).trigger('click');
                }                
            } catch (ex) { }

        }

        function OnException(result) {
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
            ShowDimmer(false)
        }
    }
}

function customExecuteSql()
{
    ShowDimmer(true);
    let dctblname=$("#olddctablename000F1").val();
    let oldname=$("#oldname000F1").val();
    let newname=$("#name000F1").val();
    
    try {
        ASB.WebService.CallExecuteSQL(newname,dctblname, SuccessCallbackExesql, OnException);
    }
    catch (exp) {
    }

    function SuccessCallbackExesql(result, eventArgs) {
        try {
            var json = $.parseJSON(result);
            var jsonVal = getCaseInSensitiveJsonProperty(json.result.row[0], "rcount");
            if(jsonVal!="0")
            {
                parent.$("#actbtn_iSave.dwbIvBtnbtm").hide();
                $(callParentNew("btn_iSDuplicate")).show();
                showAlertDialog("error", "Data already exist in this field so can't change to save normalized field");
            }
            else if(callParentNew("beforeRestCallId")!=""){
                var btnBeforeRestCall=callParentNew("beforeRestCallId");
                callParentNew("beforeRestCallId=","");
                if (btnBeforeRestCall=="btn_nxclkDuplicate") {
                    $("#actbtn_nextclk").trigger('click');
                } 
                else if (btnBeforeRestCall=="btn_iSDuplicate") {
                    $("#actbtn_iSave").trigger('click');
                }
                else if(btnBeforeRestCall=="tstbtnSqlConsole"){
                    $(".tstbtnSqlConsole").trigger('click');
                }
                else
                    $("#"+btnBeforeRestCall).trigger('click');
            }
            ShowDimmer(false)
        } catch (ex) { 
            ShowDimmer(false)
        }
    }

    function OnException(result) {
        actionCallbackFlag = actionCallFlag;
        $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
        ShowDimmer(false)
    }
}

function DcTableExecuteSql(flName)
{
    ShowDimmer(true);
    if (actionCallFlag == actionCallbackFlag) {
        actionCallFlag = Math.random();
        $("#icons").css({ "pointer-events": "auto" });
    } else {
        $("#icons").css({ "pointer-events": "none" });
        return;
    }
    let newName=$("#"+flName).val();
    if(dctableOnChange!="" && dctableOnChange!=newName){         
        try {
            ASB.WebService.CallExecuteSQL("",dctableOnChange, SuccessCallbackDctbl, OnException);
        }
        catch (exp) {
        }
    }
    function SuccessCallbackDctbl(result, eventArgs) {
        try {
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
            var json = $.parseJSON(result);
            var jsonVal = getCaseInSensitiveJsonProperty(json.result.row[0], "rcount");
            if(jsonVal!="0")
            {
                SetFieldValue(flName, dctableOnChange);
                UpdateFieldArray(flName, "0", dctableOnChange, "parent");
                dctableOnChange="";
                $("#deleteoldtable000F1").parents(".rowDUMMY").hide();
                $("#deleteoldtable000F1").parents("#dvdeleteoldtable").hide();
                showAlertDialog("error", "Data already exist. Use the Axpert Utility to change the table name");
            }
            ShowDimmer(false)
        } catch (ex) { 
            ShowDimmer(false)
        }
    }

    function OnException(result) {
        actionCallbackFlag = actionCallFlag;
        $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
        ShowDimmer(false)
    }
}

function fldSNExecuteSql(flName) {
    if (flName != "" && flName == "savenormalized000F2" && recordid != "0" && $("#dcname000F1").val() != "") {
        ShowDimmer(true);
        if (actionCallFlag == actionCallbackFlag) {
            actionCallFlag = Math.random();
            $("#icons").css({ "pointer-events": "auto" });
        } else {
            $("#icons").css({ "pointer-events": "none" });
            return;
        }
        try {
            let _dcname = $("#dcname000F1").val();
            let _stransid = $("#stransid000F1").val();
            let _fldName = $("#name000F1").val();
            let _fldDataType = $("#datatype000F1").val()
            ASB.WebService.CallExecuteSQLFldSN(_stransid, _dcname, _fldName, _fldDataType, SuccessCallbackDctbl, OnException);
        }
        catch (exp) {
        }
    }
    function SuccessCallbackDctbl(result, eventArgs) {
        try {
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
            var json = $.parseJSON(result);
            var jsonVal = getCaseInSensitiveJsonProperty(json.result.row[0], "rcount");
            if (jsonVal != "0") {
                SetFieldValue(flName, "T");
                UpdateFieldArray(flName, "0", "T", "parent");
                showAlertDialog("error", "Normalized field data already exist in the transaction table");
            }
            ShowDimmer(false)
        } catch (ex) {
            ShowDimmer(false)
        }
    }

    function OnException(result) {
        actionCallbackFlag = actionCallFlag;
        $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
        ShowDimmer(false)
    }
}

function fldWidthChange(flName) {
    if (flName != "" && flName == "datawidth000F1" && parseInt($("#" + flName).val()) < parseInt(fldDataWidthChange)) {
        ShowDimmer(true);
        if (actionCallFlag == actionCallbackFlag) {
            actionCallFlag = Math.random();
            $("#icons").css({ "pointer-events": "auto" });
        } else {
            $("#icons").css({ "pointer-events": "none" });
            return;
        }
        try {
            let _dcname = $("#dcname000F1").val();
            let _stransid = $("#stransid000F1").val();
            let _fldName = $("#name000F1").val();
            let _fldDataType = $("#datatype000F1").val();
            ASB.WebService.CallExecuteSQLFldSN(_stransid, _dcname, _fldName, _fldDataType, SuccessCallbackDctbl, OnException);
        }
        catch (exp) {
        }
    }
    function SuccessCallbackDctbl(result, eventArgs) {
        try {
            actionCallbackFlag = actionCallFlag;
            $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
            var json = $.parseJSON(result);
            var jsonVal = getCaseInSensitiveJsonProperty(json.result.row[0], "rcount");
            if (jsonVal != "0") {
                SetFieldValue(flName, fldDataWidthChange);
                UpdateFieldArray(flName, "0", fldDataWidthChange, "parent");
                fldDataWidthChange = "";
                showAlertDialog("error", "Data already exists in transaction table, can not reduce data width. If you want to reduce the width, needs to take backup of the table and delete the data from concerned column.");
            }
            ShowDimmer(false)
        } catch (ex) {
            ShowDimmer(false)
        }
    }

    function OnException(result) {
        actionCallbackFlag = actionCallFlag;
        $("#icons,#btnSaveTst,.wizardNextPrevWrapper").css({ "pointer-events": "auto" });
        ShowDimmer(false)
    }
}

function IsTabDc(dcNo) {
    if ($j.inArray(dcNo, TabDCs) != -1)
        return true;
    else
        return false;
}

function autocompleteMetadataJson(mtJson) {
    if (mtJson != "") {
        try {
            sourceAcMetaJsonFlds = new Array();
            fldSourceAcMetaJson = mtJson;
            mtJson.forEach(function (varJson) {
                sourceAcMetaJsonFlds.push(varJson.name);
            });
        } catch (ex) { }
    }
}


$(document).on("click",".tstbtnSqlConsole", function (event) {
    var dwbbtnid = $(this).attr("data-id");
    createPopup("AxDBScript.aspx?editorid=" + dwbbtnid, true, undefined, undefined, () => {
        $(callParentNew("Bottomnavigationbar","class")).addClass("hide");
    }, () => {
        $(callParentNew("Bottomnavigationbar","class")).removeClass("hide");
    });
});

function getqsParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

    $(document).on("mousedown","#wbdrHtml", function (event) {
        if(event.which == 3 && theMode=="design" && (designObj[0].dcLayout == null || designObj[0].dcLayout=="default")){
            if(typeof $(event.target).attr("id")=="undefined" && $(event.target).parent().find(".formLabel").length>0)
            {
                let lblid=$(event.target).parent().find(".formLabel").attr("data-id");
                $("#designContextMenuLabelEdit").remove();
                $("#wbdrHtml").append(`<div id="designContextMenuLabelEdit" class="designContextMenuLabelEdit"><ul><li onclick="ChangeFontAndColor('`+lblid+`','label');"><a href="javascript:void(0);">Font</a></li>
                        <li onclick="LabelHyperlink('`+lblid+`','label');"><a href="javascript:void(0);">Hyperlink</a></li>
                        <li onclick="RemoveLabelHyperlink('`+lblid+`');"><a href="javascript:void(0);">Remove</a></li>
                        <li onclick="AddFormLabel('`+lblid+`');"><a href="javascript:void(0);">Edit</a></li></ul></div>`);
                let offSetY= $(event.target).parent().find(".formLabel").offset().top+$('#heightframe').scrollTop();
                let offSetX=$(event.target).parent().find(".formLabel").offset().left+ event.offsetX;
                $("#designContextMenu").css({'display': 'none'});
                $("#designContextMenuLabelEdit").css({'display': 'block','left': offSetX + 'px','top': offSetY + "px"});               
            }
            else if(typeof $(event.target).attr("id")=="undefined" && $(event.target).parent().find(".tstformbutton").length>0){
                let lblid=$(event.target).parent().find(".tstformbutton").attr("id");
                $("#designContextMenuLabelEdit").remove();
                $("#wbdrHtml").append(`<div id="designContextMenuLabelEdit" class="designContextMenuLabelEdit"><ul><li onclick="ChangeFontAndColor('`+lblid+`','button');"><a href="javascript:void(0);">Font</a></li>
                       </ul></div>`);
                let offSetY= $(event.target).parent().find(".tstformbutton").offset().top+($('#heightframe').scrollTop()==0?-25:$('#heightframe').scrollTop());
                let offSetX=$(event.target).parent().find(".tstformbutton").offset().left+ event.offsetX;
                $("#designContextMenu").css({'display': 'none'});
                $("#designContextMenuLabelEdit").css({'display': 'block','left': offSetX + 'px','top': offSetY + "px"});    
            } 
            else if(typeof $(event.target).attr("id")=="undefined" && $(event.target).parent().find("textarea.form-control,input.form-control,input.multiFldChk,input[type=checkbox]").length>0){
                let lblid="";
                lblid=$(event.target).parent().find("textarea.form-control,input.form-control,input[type=checkbox]").attr("id");
                if(typeof lblid=="undefined" || lblid=="")
                    lblid= $(event.target).parent().find("input.multiFldChk").attr("id");                    
                $("#designContextMenuLabelEdit").remove();
                $("#wbdrHtml").append(`<div id="designContextMenuLabelEdit" class="designContextMenuLabelEdit"><ul><li onclick="ChangeFontAndColor('`+lblid+`','field');"><a href="javascript:void(0);">Font</a></li>
                       <li onclick="LabelHyperlink('`+lblid+`','field');"><a href="javascript:void(0);">Hyperlink</a></li></ul></div>`);
                let offSetY=0;
                if($(event.target).parent().find("textarea.form-control,input.form-control,input[type=checkbox]").offset().top>0)
                    offSetY= $(event.target).parent().find("textarea.form-control,input.form-control,input[type=checkbox]").offset().top+($('#heightframe').scrollTop()==0?-25:$('#heightframe').scrollTop());                    
                else
                    offSetY= $(event.target).parent().find("input.multiFldChk").offset().top+($('#heightframe').scrollTop()==0?-25:$('#heightframe').scrollTop());
                let offSetX=$(event.target).parent().find("textarea.form-control,input.form-control,input.multiFldChk,input[type=checkbox]").offset().left+ event.offsetX;
                $("#designContextMenu").css({'display': 'none'});
                $("#designContextMenuLabelEdit").css({'display': 'block','left': offSetX + 'px','top': offSetY + "px"});    
            }
            else{
                let offSetY = event.offsetY;
                offSetY = (event.pageY - $(this).offset().top);
                $("#designContextMenu").remove();
                $("#wbdrHtml").append(`<div id="designContextMenu" class="designContextMenu"><ul><li onclick="AddFormLabel();"><a href="javascript:void(0);">Add Label</a></li></ul></div>`);
                
                if($(event.target).hasClass("grid-stack-item-content ui-draggable-handle")){
                    let trdvId=$(event.target).parent().find('.form-group').attr("id");
                    if(trdvId!="undefined" && trdvId!=""){
                        trdvId=trdvId.slice(2);
                        $('#designContextMenu').attr('data-afFld', trdvId);
                    }
                    else
                        $('#designContextMenu').attr('data-afFld', '');
                    offSetY= $(event.target).offset().top+$('#heightframe').scrollTop();//($('#wBdr').outerHeight(false)-$('#dvlayout').outerHeight());
                }
                else if(typeof $(event.target).attr("id")!="undefined" && !$(event.target).attr("id").startsWith("divDc"))
                {
                    let trdvId=$(event.target).parent().find('.form-group').attr("id");
                    if(trdvId!="undefined" && trdvId!=""){
                        trdvId=trdvId.slice(2);
                        $('#designContextMenu').attr('data-afFld', trdvId);
                    }
                    else
                        $('#designContextMenu').attr('data-afFld', '');
                }
                else
                    $('#designContextMenu').attr('data-afFld', $(event.target).attr("id"));
                $("#designContextMenuLabelEdit").css({'display': 'none'});            
                $("#designContextMenu").css({'display': 'block','left': event.offsetX + 'px','top': offSetY + "px"});               
            }
            document.oncontextmenu = function(e){
                e.preventDefault();
            }  
        }  
    });

    $(document).on({
        click: function (event) {
            $("#designContextMenu").css({'display': 'none'});
            $("#designContextMenuLabelEdit").css({'display': 'none'});            
        }
    });
