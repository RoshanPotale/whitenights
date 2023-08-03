﻿var HiddenValues = { vCity: "", vIP: "", vCountry: "", vCountryCode: "", iqGuid: "" }, blockedIP = ["180.151.11.118", "219.90.110.197"]; function SubmitQueryData(e, n) { var a = HiddenValues.vCity, t = HiddenValues.vCountry, i = HiddenValues.vIP, r = e.vURL + "{device=" + HiddenValues.iqGuid + "}"; if (!contains.call(blockedIP, i)) { var o = $("#" + n.SenderControlID).val(); if (checkempty(o)) return invalid_data_msg($("#" + n.SenderControlID), "Please enter a valid name to submit your query!"), $("#" + n.SenderControlID).focus(), !1; invalid_data_msg($("#" + n.SenderControlID), ""); var l = $("#" + n.SenderControlCountryCodeID).val(); checkempty(l) && (l = HiddenValues.vCountryCode); var d = $("#" + n.SenderControlMobileID).val(); if (checkempty(d)) return invalid_data_msg($("#" + n.SenderControlMobileID), "You have entered an invalid mobile number. Please try again."), $("#" + n.SenderControlMobileID).focus(), !1; if (!is_numeric(d)) return invalid_data_msg($("#" + n.SenderControlMobileID), "You have entered an invalid mobile number. Please try again."), $("#" + n.SenderControlMobileID).focus(), !1; if ("+91" == HiddenValues.vCountryCode && 10 != d.length) return invalid_data_msg($("#" + n.SenderControlMobileID), "Please enter a valid 10 digit mobile number."), $("#" + n.SenderControlMobileID).focus(), !1; invalid_data_msg($("#" + n.SenderControlMobileID), ""); var s = $("#" + n.SenderControlEmailID).val(); if (checkempty(s)) return invalid_data_msg($("#" + n.SenderControlEmailID), "You have entered an invalid e-mail address. Please try again."), $("#" + n.SenderControlEmailID).focus(), !1; if (!validate_email(s)) return invalid_data_msg($("#" + n.SenderControlEmailID), "You have entered an invalid e-mail address. Please try again."), $("#" + n.SenderControlEmailID).focus(), !1; invalid_data_msg($("#" + n.SenderControlEmailID), ""); if (qMessage = $("#" + n.SenderControlMsgID).val(), checkempty(qMessage)) return invalid_data_msg($("#" + n.SenderControlMsgID), "Please provide some information about your query!"), $("#" + n.SenderControlMsgID).focus(), !1; invalid_data_msg($("#" + n.SenderControlMsgID), ""); var u = $("#" + n.SenderControlTimeID).val(); void 0 === u && (u = ""); var v = $("#" + n.SenderControlBudgetRangeID).val(); checkempty(v) && (v = "Any"), setProjectQueryData(e.vAgentID, o, l, u, d, s, qMessage, t, a, i, r, e.vProject, v), $("#" + n.SenderControlID).val(""), $("#" + n.SenderControlMobileID).val(""), $("#" + n.SenderControlMobileID).val(""), $("#" + n.SenderControlEmailID).val(""), $("#" + n.SenderControlMsgID).val(""), $("#" + n.SenderControlTimeID).prop("selectedIndex", 0); var c = window.open(e.thankspageurl, "popupWindow", "popupWindow", "width=359,height=365,top=150,left=500,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no"); setTimeout(function () { c.close() }, 3e3) } return !0 } function setProjectQueryData(e, n, a, t, i, r, o, l, d, s, u, v, c) { var m; (m = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function () { 4 == m.readyState && m.status }, m.open("GET", "http://whiteknights02.realboost.in/IVR_Inbound.aspx?UID=fourqt&PWD=wn9mxO76f34=&f=m&src=Google Adwords&ch=GA&con=" + i + "&email=" + r + "&name=" + n + "&Remark=" + o + "&Proj=" + v + "&city=" + d), m.send() } function isNumberKey(e) { var n = e.which ? e.which : event.keyCode; return !(n > 31) || !(n < 48) && !(n > 57) } function emailValidator(e) { return !!e.value.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/) || (alert("Invalid E-mail Address! Please re-enter ?"), e.focus(), !1) } function validate_email(e) { var n = !1; return null != e.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/) && (n = !0), n } function is_numeric(e) { return !!/^[0-9-+]+$/.test(e) } function checkempty(e) { return null == e || void 0 == e || "undefined" == e || "" == e || 0 == e.length } var contains = function (e) { var n, a = e != e; return (a || "function" != typeof Array.prototype.indexOf ? function (e) { var n = -1, t = -1; for (n = 0; n < this.length; n++) { var i = this[n]; if (a && i != i || i === e) { t = n; break } } return t } : Array.prototype.indexOf).call(this, e) > -1 }, invalid_data_msg = function (e, n) { checkempty(n) ? ($(e).attr("data-exists", "false"), $(e).next(".invalid-data").remove()) : ($(e).attr("data-exists", "true"), $(e).next(".invalid-data").remove(), $(e).after("<label class='invalid-data existingCheck' style='color:red; width:100%;padding-left: 10px;background-color: #ffffff;'> " + n + "</label>")) }; function getCookie(e) { for (var n = e + "=", a = document.cookie.split(";"), t = 0; t < a.length; t++) { for (var i = a[t]; " " == i.charAt(0);)i = i.substring(1); if (0 == i.indexOf(n)) return i.substring(n.length, i.length) } return "" } function setCookie(e, n, a) { var t = new Date; t.setTime(t.getTime() + 864e5 * a); var i = "expires=" + t.toUTCString(); document.cookie = e + "=" + n + ";" + i + ";path=/" } function randomValueGenerator(e, n) { for (var a = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = t.length, r = 0; r < e; r++)0 != r && r % n == 0 && r - 1 != e && (a += "-"), a += t.charAt(Math.floor(Math.random() * i)); return a } $(document).on("keypress", ".number-only", function (e) { isNumberKey(e) ? invalid_data_msg(this, "") : ($(this).focus(), invalid_data_msg(this, "You have entered an invalid mobile number. Please try again.")) }), $(document).on("focusout", ".number-only", function () { var e = $(this).val(); checkempty(e) ? invalid_data_msg(this, "") : is_numeric(e) ? invalid_data_msg(this, "") : ($(this).focus(), invalid_data_msg(this, "You have entered an invalid mobile number. Please try again.")) }), $(document).on("focusout", ".email-address", function () { var e = $(this).val(); checkempty(e) ? invalid_data_msg(this, "") : validate_email(e) ? invalid_data_msg(this, "") : ($(this).focus(), invalid_data_msg(this, "You have entered an invalid e-mail address. Please try again.")) });