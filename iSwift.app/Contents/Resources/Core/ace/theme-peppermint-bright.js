ace.define("ace/theme/peppermint-bright", [ "require", "exports", "module", "ace/lib/dom" ], function(e, t, n) {
                        t.isDark = 0, t.cssClass = "ace-peppermint-bright", t.cssText = ".ace-peppermint-bright {    font-family: Menlo;}.ace-peppermint-bright .ace_gutter {	background: #ebebeb;	color: #AAA;	overflow: hidden;	border-right: 1px solid rgb(209, 209, 209);}.ace-peppermint-bright .ace_print-margin {	width: 1px;	background: #e8e8e8;}.ace-peppermint-bright {	background-color: #FFFFFF;	color: black;}.ace-peppermint-bright .ace_cursor {	color: black;}.ace-peppermint-bright .ace_invisible {	color: rgb(191, 191, 191);}.ace-peppermint-bright .ace_constant.ace_buildin {	color: rgb(88, 72, 246);}.ace-peppermint-bright .ace_constant.ace_language {	color: rgb(88, 92, 246);}.ace-peppermint-bright .ace_constant.ace_library {	color: rgb(6, 150, 14);}.ace-peppermint-bright .ace_invalid {	background-color: rgb(153, 0, 0);	color: white;}.ace-peppermint-bright .ace_fold-widget {	text-align: center}.ace-peppermint-bright .ace_fold-widget:hover {	color: #777}.ace-peppermint-bright .ace_fold-widget.ace_start,.ace-peppermint-bright .ace_fold-widget.ace_end,.ace-peppermint-bright .ace_fold-widget.ace_closed {	background: none;	border: none;	box-shadow: none}.ace-peppermint-bright .ace_fold-widget.ace_start:after {	content: '▾'}.ace-peppermint-bright .ace_fold-widget.ace_end:after {	content: '▴'}.ace-peppermint-bright .ace_fold-widget.ace_closed:after {	content: '‣'}.ace-peppermint-bright .ace_support.ace_function {	color: rgb(60, 76, 114);}.ace-peppermint-bright .ace_support.ace_constant {	color: rgb(6, 150, 14);}.ace-peppermint-bright .ace_support.ace_type,.ace-peppermint-bright .ace_support.ace_class.ace-peppermint-bright .ace_support.ace_other {	color: rgb(109, 121, 222);} .ace-peppermint-bright .ace_variable { font-weight:bold; } .ace-peppermint-bright .ace_variable.ace_parameter {	font-style: italic;	color: #FD971F;}.ace-peppermint-bright .ace_keyword.ace_operator {	color: rgb(104, 118, 135);}.ace-peppermint-bright .ace_comment {	color: #236e24;}.ace-peppermint-bright .ace_comment.ace_doc {	color: #236e24;}.ace-peppermint-bright .ace_comment.ace_doc.ace_tag {	color: #236e24;}.ace-peppermint-bright .ace_constant.ace_numeric {	color: rgb(0, 0, 205);}.ace-peppermint-bright .ace_variable {	color: rgb(49, 132, 149);}.ace-peppermint-bright .ace_xml-pe {	color: rgb(104, 104, 91);}.ace-peppermint-bright .ace_entity.ace_name.ace_function {	color: #0000A2;}.ace-peppermint-bright .ace_heading {	color: rgb(12, 7, 255);}.ace-peppermint-bright .ace_list {	color: rgb(185, 6, 144);}.ace-peppermint-bright .ace_marker-layer .ace_selection {	background: rgb(181, 213, 255);}.ace-peppermint-bright .ace_marker-layer .ace_step {	background: rgb(252, 255, 0);}.ace-peppermint-bright .ace_marker-layer .ace_stack {	background: rgb(164, 229, 101);}.ace-peppermint-bright .ace_marker-layer .ace_bracket {	margin: -1px 0 0 -1px;	border: 1px solid rgb(192, 192, 192);}.ace-peppermint-bright .ace_marker-layer .ace_active-line {	background: rgba(0, 0, 0, 0.07);}.ace-peppermint-bright .ace_gutter-active-line {	background-color: #dcdcdc;}.ace-peppermint-bright .ace_marker-layer .ace_selected-word {	background: rgb(250, 250, 255);	border: 1px solid rgb(200, 200, 250);}.ace-peppermint-bright .ace_storage,.ace-peppermint-bright .ace_keyword,.ace-peppermint-bright .ace_meta.ace_tag {	color: rgb(147, 15, 128);}.ace-peppermint-bright .ace_string.ace_regex {	color: rgb(255, 0, 0)}.ace-peppermint-bright .ace_string {	color: #2F7F27; /*#1A1AA6;*/}.ace-peppermint-bright .ace_entity.ace_other.ace_attribute-name {	color: #994409;}.ace-peppermint-bright .ace_indent-guide {	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==') right repeat-y;}.ace-peppermint-bright .ace_error {  color: #ba2335;  text-shadow: 0px 1px 1px #AAA;  background-image: none;  box-shadow: inset 10px 0px 0px 0px #ba2335; } .ace-peppermint-bright .ace_warning { color: #dc582c;  text-shadow: 0px 1px 1px #AAA;  background-image: none;  box-shadow: inset 10px 0px 0px 0px #dc582c;} .ace-peppermint-bright .ace_info {  color: #888;  text-shadow: 0px 1px 1px #AAA;  background-image: none;  box-shadow: inset 10px 0px 0px 0px #888;}.ace-peppermint-bright .ace_tooltip {    background-image: none;    background-color: rgba(50,50,50,0.9);    border: none;    border-radius: 5px;    font-family: Menlo;    color: #EEE;}.ace-peppermint-bright .ace_breakpoint{     border-radius: 20px 0px 0px 20px;     box-shadow: 0px 0px 1px 1px rgba(200,200,200,1.0) inset; } ";
                        var r = e("../lib/dom");
                        r.importCssString(t.cssText, t.cssClass);
                        });