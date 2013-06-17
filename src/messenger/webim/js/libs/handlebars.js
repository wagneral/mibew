/*
 Copyright (C) 2011 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
var Handlebars={};
(function(e,m){e.VERSION="1.0.0";e.COMPILER_REVISION=4;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};e.helpers={};e.partials={};var q=Object.prototype.toString;e.registerHelper=function(a,b,c){if("[object Object]"===q.call(a)){if(c||b)throw new e.Exception("Arg not supported with multiple helpers");e.Utils.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b};e.registerPartial=function(a,b){"[object Object]"===q.call(a)?e.Utils.extend(this.partials,a):
this.partials[a]=b};e.registerHelper("helperMissing",function(a){if(2===arguments.length)return m;throw Error("Missing helper: '"+a+"'");});e.registerHelper("blockHelperMissing",function(a,b){var c=b.inverse||function(){},d=b.fn,h=q.call(a);"[object Function]"===h&&(a=a.call(this));return!0===a?d(this):!1===a||null==a?c(this):"[object Array]"===h?0<a.length?e.helpers.each(a,b):c(this):d(a)});e.K=function(){};e.createFrame=Object.create||function(a){e.K.prototype=a;a=new e.K;e.K.prototype=null;return a};
e.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{"0":"debug",1:"info",2:"warn",3:"error"},log:function(a,b){if(e.logger.level<=a){var c=e.logger.methodMap[a];"undefined"!==typeof console&&console[c]&&console[c].call(console,b)}}};e.log=function(a,b){e.logger.log(a,b)};e.registerHelper("each",function(a,b){var c=b.fn,d=b.inverse,h=0,f="",g;"[object Function]"===q.call(a)&&(a=a.call(this));b.data&&(g=e.createFrame(b.data));if(a&&"object"===typeof a)if(a instanceof Array)for(var j=a.length;h<
j;h++)g&&(g.index=h),f+=c(a[h],{data:g});else for(j in a)a.hasOwnProperty(j)&&(g&&(g.key=j),f+=c(a[j],{data:g}),h++);0===h&&(f=d(this));return f});e.registerHelper("if",function(a,b){"[object Function]"===q.call(a)&&(a=a.call(this));return!a||e.Utils.isEmpty(a)?b.inverse(this):b.fn(this)});e.registerHelper("unless",function(a,b){return e.helpers["if"].call(this,a,{fn:b.inverse,inverse:b.fn})});e.registerHelper("with",function(a,b){"[object Function]"===q.call(a)&&(a=a.call(this));if(!e.Utils.isEmpty(a))return b.fn(a)});
e.registerHelper("log",function(a,b){var c=b.data&&null!=b.data.level?parseInt(b.data.level,10):1;e.log(c,a)});var n;n=function(){this.yy={}};var u={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,params:27,
hash:28,dataName:29,param:30,STRING:31,INTEGER:32,BOOLEAN:33,hashSegments:34,hashSegment:35,ID:36,EQUALS:37,DATA:38,pathSegments:39,SEP:40,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,
3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],performAction:function(a,b,c,d,e,f){a=f.length-1;switch(e){case 1:return f[a-1];case 2:this.$=new d.ProgramNode([],f[a]);break;case 3:this.$=new d.ProgramNode(f[a-2],f[a]);break;case 4:this.$=new d.ProgramNode(f[a-1],[]);break;case 5:this.$=
new d.ProgramNode(f[a]);break;case 6:this.$=new d.ProgramNode([],[]);break;case 7:this.$=new d.ProgramNode([]);break;case 8:this.$=[f[a]];break;case 9:f[a-1].push(f[a]);this.$=f[a-1];break;case 10:this.$=new d.BlockNode(f[a-2],f[a-1].inverse,f[a-1],f[a]);break;case 11:this.$=new d.BlockNode(f[a-2],f[a-1],f[a-1].inverse,f[a]);break;case 12:this.$=f[a];break;case 13:this.$=f[a];break;case 14:this.$=new d.ContentNode(f[a]);break;case 15:this.$=new d.CommentNode(f[a]);break;case 16:this.$=new d.MustacheNode(f[a-
1][0],f[a-1][1]);break;case 17:this.$=new d.MustacheNode(f[a-1][0],f[a-1][1]);break;case 18:this.$=f[a-1];break;case 19:this.$=new d.MustacheNode(f[a-1][0],f[a-1][1],"&"===f[a-2][2]);break;case 20:this.$=new d.MustacheNode(f[a-1][0],f[a-1][1],!0);break;case 21:this.$=new d.PartialNode(f[a-1]);break;case 22:this.$=new d.PartialNode(f[a-2],f[a-1]);break;case 24:this.$=[[f[a-2]].concat(f[a-1]),f[a]];break;case 25:this.$=[[f[a-1]].concat(f[a]),null];break;case 26:this.$=[[f[a-1]],f[a]];break;case 27:this.$=
[[f[a]],null];break;case 28:this.$=[[f[a]],null];break;case 29:f[a-1].push(f[a]);this.$=f[a-1];break;case 30:this.$=[f[a]];break;case 31:this.$=f[a];break;case 32:this.$=new d.StringNode(f[a]);break;case 33:this.$=new d.IntegerNode(f[a]);break;case 34:this.$=new d.BooleanNode(f[a]);break;case 35:this.$=f[a];break;case 36:this.$=new d.HashNode(f[a]);break;case 37:f[a-1].push(f[a]);this.$=f[a-1];break;case 38:this.$=[f[a]];break;case 39:this.$=[f[a-2],f[a]];break;case 40:this.$=[f[a-2],new d.StringNode(f[a])];
break;case 41:this.$=[f[a-2],new d.IntegerNode(f[a])];break;case 42:this.$=[f[a-2],new d.BooleanNode(f[a])];break;case 43:this.$=[f[a-2],f[a]];break;case 44:this.$=new d.PartialNameNode(f[a]);break;case 45:this.$=new d.PartialNameNode(new d.StringNode(f[a]));break;case 46:this.$=new d.PartialNameNode(new d.IntegerNode(f[a]));break;case 47:this.$=new d.DataNode(f[a]);break;case 48:this.$=new d.IdNode(f[a]);break;case 49:f[a-2].push({part:f[a],separator:f[a-1]});this.$=f[a-2];break;case 50:this.$=[{part:f[a]}]}},
table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,
8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,
14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,
14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,
28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,
31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,
35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,
16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],
33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],defaultActions:{17:[2,1]},parseError:function(a){throw Error(a);
},parse:function(a){var b=[0],c=[null],d=[],e=this.table,f="",g=0,j=0,n=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});a=this.lexer.yylloc;d.push(a);var s=this.lexer.options&&this.lexer.options.ranges;"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var k,q,r,l,m={},t,p;;){r=b[b.length-1];if(this.defaultActions[r])l=this.defaultActions[r];else{if(null===k||"undefined"==
typeof k)k=void 0,k=this.lexer.lex()||1,"number"!==typeof k&&(k=this.symbols_[k]||k);l=e[r]&&e[r][k]}if("undefined"===typeof l||!l.length||!l[0]){var u="";if(!n){p=[];for(t in e[r])this.terminals_[t]&&2<t&&p.push("'"+this.terminals_[t]+"'");u=this.lexer.showPosition?"Parse error on line "+(g+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+p.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(g+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'");this.parseError(u,
{text:this.lexer.match,token:this.terminals_[k]||k,line:this.lexer.yylineno,loc:a,expected:p})}}if(l[0]instanceof Array&&1<l.length)throw Error("Parse Error: multiple actions possible at state: "+r+", token: "+k);switch(l[0]){case 1:b.push(k);c.push(this.lexer.yytext);d.push(this.lexer.yylloc);b.push(l[1]);k=null;q?(k=q,q=null):(j=this.lexer.yyleng,f=this.lexer.yytext,g=this.lexer.yylineno,a=this.lexer.yylloc,0<n&&n--);break;case 2:p=this.productions_[l[1]][1];m.$=c[c.length-p];m._$={first_line:d[d.length-
(p||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(p||1)].first_column,last_column:d[d.length-1].last_column};s&&(m._$.range=[d[d.length-(p||1)].range[0],d[d.length-1].range[1]]);r=this.performAction.call(m,f,j,g,this.yy,l[1],c,d);if("undefined"!==typeof r)return r;p&&(b=b.slice(0,-2*p),c=c.slice(0,-1*p),d=d.slice(0,-1*p));b.push(this.productions_[l[1]][0]);c.push(m.$);d.push(m._$);l=e[b[b.length-2]][b[b.length-1]];b.push(l);break;case 3:return!0}}return!0},lexer:{EOF:1,
parseError:function(a,b){if(this.yy.parser)this.yy.parser.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&(this.yylloc.range=[0,0]);this.offset=0;return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.offset++;this.match+=a;
this.matched+=a;a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-b-1);this.offset-=b;a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);
c.length-1&&(this.yylineno-=c.length-1);var d=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-b};this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-b]);return this},more:function(){this._more=!0;return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=
this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c;this._more||(this.match=
this.yytext="");for(var d=this._currentRules(),e=0;e<d.length;e++)if((b=this._input.match(this.rules[d[e]]))&&(!a||b[0].length>a[0].length))if(a=b,c=e,!this.options.flex)break;if(a){if(b=a[0].match(/(?:\r\n?|\n).*/g))this.yylineno+=b.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-b[b.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=
a;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];a=this.performAction.call(this,this.yy,this,d[c],this.conditionStack[this.conditionStack.length-1]);this.done&&this._input&&(this.done=!1);if(a)return a}else return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,
line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!==typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},options:{},performAction:function(a,b,c){switch(c){case 0:return b.yytext="\\",14;
case 1:"\\"!==b.yytext.slice(-1)&&this.begin("mu");"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1),this.begin("emu"));if(b.yytext)return 14;break;case 2:return 14;case 3:return"\\"!==b.yytext.slice(-1)&&this.popState(),"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1)),14;case 4:return b.yytext=b.yytext.substr(0,b.yyleng-4),this.popState(),15;case 5:return 25;case 6:return 16;case 7:return 20;case 8:return 19;case 9:return 19;case 10:return 23;case 11:return 22;
case 12:this.popState();this.begin("com");break;case 13:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.popState(),15;case 14:return 22;case 15:return 37;case 16:return 36;case 17:return 36;case 18:return 40;case 20:return this.popState(),24;case 21:return this.popState(),18;case 22:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),31;case 23:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\'/g,"'"),31;case 24:return 38;case 25:return 33;case 26:return 33;case 27:return 32;
case 28:return 36;case 29:return b.yytext=b.yytext.substr(1,b.yyleng-2),36;case 30:return"INVALID";case 31:return 5}},rules:[/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,
/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],inclusive:!1},emu:{rules:[3],inclusive:!1},com:{rules:[4],inclusive:!1},INITIAL:{rules:[0,1,2,31],inclusive:!0}}}};n.prototype=u;u.Parser=n;n=new n;e.Parser=n;e.parse=function(a){if(a.constructor===e.AST.ProgramNode)return a;
e.Parser.yy=e.AST;return e.Parser.parse(a)};e.AST={};e.AST.ProgramNode=function(a,b){this.type="program";this.statements=a;b&&(this.inverse=new e.AST.ProgramNode(b))};e.AST.MustacheNode=function(a,b,c){this.type="mustache";this.escaped=!c;this.hash=b;c=this.id=a[0];a=this.params=a.slice(1);this.isHelper=(this.eligibleHelper=c.isSimple)&&(a.length||b)};e.AST.PartialNode=function(a,b){this.type="partial";this.partialName=a;this.context=b};e.AST.BlockNode=function(a,b,c,d){var h=a.id;if(h.original!==
d.original)throw new e.Exception(h.original+" doesn't match "+d.original);this.type="block";this.mustache=a;this.program=b;if((this.inverse=c)&&!this.program)this.isInverse=!0};e.AST.ContentNode=function(a){this.type="content";this.string=a};e.AST.HashNode=function(a){this.type="hash";this.pairs=a};e.AST.IdNode=function(a){this.type="ID";for(var b="",c=[],d=0,h=0,f=a.length;h<f;h++){var g=a[h].part,b=b+((a[h].separator||"")+g);if(".."===g||"."===g||"this"===g){if(0<c.length)throw new e.Exception("Invalid path: "+
b);".."===g?d++:this.isScoped=!0}else c.push(g)}this.original=b;this.parts=c;this.string=c.join(".");this.depth=d;this.isSimple=1===a.length&&!this.isScoped&&0===d;this.stringModeValue=this.string};e.AST.PartialNameNode=function(a){this.type="PARTIAL_NAME";this.name=a.original};e.AST.DataNode=function(a){this.type="DATA";this.id=a};e.AST.StringNode=function(a){this.type="STRING";this.original=this.string=this.stringModeValue=a};e.AST.IntegerNode=function(a){this.type="INTEGER";this.original=this.integer=
a;this.stringModeValue=Number(a)};e.AST.BooleanNode=function(a){this.type="BOOLEAN";this.bool=a;this.stringModeValue="true"===a};e.AST.CommentNode=function(a){this.type="comment";this.comment=a};var w="description fileName lineNumber message name number stack".split(" ");e.Exception=function(a){for(var b=Error.prototype.constructor.apply(this,arguments),c=0;c<w.length;c++)this[w[c]]=b[w[c]]};e.Exception.prototype=Error();e.SafeString=function(a){this.string=a};e.SafeString.prototype.toString=function(){return this.string.toString()};
var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},A=/[&<>"'`]/g,B=/[&<>"'`]/,C=function(a){return z[a]||"&amp;"};e.Utils={extend:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},escapeExpression:function(a){if(a instanceof e.SafeString)return a.toString();if(null==a||!1===a)return"";a=a.toString();return!B.test(a)?a:a.replace(A,C)},isEmpty:function(a){return!a&&0!==a?!0:"[object Array]"===q.call(a)&&0===a.length?!0:!1}};var v=e.Compiler=function(){},s=
e.JavaScriptCompiler=function(){};v.prototype={compiler:v,disassemble:function(){for(var a=this.opcodes,b,c=[],d,e,f=0,g=a.length;f<g;f++)if(b=a[f],"DECLARE"===b.opcode)c.push("DECLARE "+b.name+"="+b.value);else{d=[];for(var j=0;j<b.args.length;j++)e=b.args[j],"string"===typeof e&&(e='"'+e.replace("\n","\\n")+'"'),d.push(e);c.push(b.opcode+" "+d.join(" "))}return c.join("\n")},equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],
e=a.opcodes[c];if(d.opcode!==e.opcode||d.args.length!==e.args.length)return!1;for(var f=0;f<d.args.length;f++)if(d.args[f]!==e.args[f])return!1}b=this.children.length;if(a.children.length!==b)return!1;for(c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.children=[];this.depths={list:[]};this.options=b;var c=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};
if(c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.program(a)},accept:function(a){return this[a.type](a)},program:function(a){a=a.statements;var b;this.opcodes=[];for(var c=0,d=a.length;c<d;c++)b=a[c],this[b.type](b);this.isSimple=1===d;this.depths.list=this.depths.list.sort(function(a,b){return a-b});return this},compileProgram:function(a){a=(new this.compiler).compile(a,this.options);var b=this.guid++,c;this.usePartial=this.usePartial||a.usePartial;this.children[b]=a;for(var d=0,
e=a.depths.list.length;d<e;d++)c=a.depths.list[d],2>c||this.addDepth(c-1);return b},block:function(a){var b=a.mustache,c=a.program;a=a.inverse;c&&(c=this.compileProgram(c));a&&(a=this.compileProgram(a));var d=this.classifyMustache(b);"helper"===d?this.helperMustache(b,c,a):"simple"===d?(this.simpleMustache(b),this.opcode("pushProgram",c),this.opcode("pushProgram",a),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousMustache(b,c,a),this.opcode("pushProgram",c),this.opcode("pushProgram",
a),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue"));this.opcode("append")},hash:function(a){a=a.pairs;var b,c;this.opcode("pushHash");for(var d=0,e=a.length;d<e;d++)b=a[d],c=b[1],this.options.stringParams?(c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,c.type)):this.accept(c),this.opcode("assignToHash",b[0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0;a.context?this.ID(a.context):
this.opcode("push","depth0");this.opcode("invokePartial",b.name);this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){var b=this.options,c=this.classifyMustache(a);"simple"===c?this.simpleMustache(a):"helper"===c?this.helperMustache(a):this.ambiguousMustache(a);a.escaped&&!b.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(a,b,c){a=a.id;var d=a.parts[0],e=null!=b||null!=c;this.opcode("getContext",a.depth);this.opcode("pushProgram",
b);this.opcode("pushProgram",c);this.opcode("invokeAmbiguous",d,e)},simpleMustache:function(a){a=a.id;"DATA"===a.type?this.DATA(a):a.parts.length?this.ID(a):(this.addDepth(a.depth),this.opcode("getContext",a.depth),this.opcode("pushContext"));this.opcode("resolvePossibleLambda")},helperMustache:function(a,b,c){b=this.setupFullMustacheParams(a,b,c);a=a.id.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",b.length,a);else{if(this.options.knownHelpersOnly)throw Error("You specified knownHelpersOnly, but used the unknown helper "+
a);this.opcode("invokeHelper",b.length,a)}},ID:function(a){this.addDepth(a.depth);this.opcode("getContext",a.depth);a.parts[0]?this.opcode("lookupOnContext",a.parts[0]):this.opcode("pushContext");for(var b=1,c=a.parts.length;b<c;b++)this.opcode("lookup",a.parts[b])},DATA:function(a){this.options.data=!0;if(a.id.isScoped||a.id.depth)throw new e.Exception("Scoped data references are not supported: "+a.original);this.opcode("lookupData");a=a.id.parts;for(var b=0,c=a.length;b<c;b++)this.opcode("lookup",
a[b])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("pushLiteral",a.integer)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:[].slice.call(arguments,1)})},declare:function(a,b){this.opcodes.push({opcode:"DECLARE",name:a,value:b})},addDepth:function(a){if(isNaN(a))throw Error("EWOT");0!==a&&!this.depths[a]&&(this.depths[a]=!0,this.depths.list.push(a))},classifyMustache:function(a){var b=
a.isHelper,c=a.eligibleHelper,d=this.options;c&&!b&&(d.knownHelpers[a.id.parts[0]]?b=!0:d.knownHelpersOnly&&(c=!1));return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b=a.length,c;b--;)if(c=a[b],this.options.stringParams)c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,c.type);else this[c.type](c)},setupMustacheParams:function(a){var b=a.params;this.pushParams(b);a.hash?this.hash(a.hash):this.opcode("emptyHash");
return b},setupFullMustacheParams:function(a,b,c){var d=a.params;this.pushParams(d);this.opcode("pushProgram",b);this.opcode("pushProgram",c);a.hash?this.hash(a.hash):this.opcode("emptyHash");return d}};var t=function(a){this.value=a};s.prototype={nameLookup:function(a,b){return/^[0-9]+$/.test(b)?a+"["+b+"]":s.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+
a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a;this.options=b||{};e.log(e.logger.DEBUG,this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!c;this.context=c||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileStack=[];this.inlineStack=[];this.compileChildren(a,b);a=a.opcodes;this.i=0;for(x=a.length;this.i<
x;this.i++)b=a[this.i],"DECLARE"===b.opcode?this[b.name]=b.value:this[b.opcode].apply(this,b.args);return this.createFunctionContext(d)},nextOpcode:function(){return this.environment.opcodes[this.i+1]},eat:function(){this.i+=1},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = this.merge(helpers, "+b+".helpers);";this.environment.usePartial&&(c=c+" partials = this.merge(partials, "+b+".partials);");this.options.data&&(c+=" data = data || {};");a.push(c)}this.environment.isSimple?
a.push(""):a.push(", buffer = "+this.initializeBuffer());this.lastContext=0;this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);0<b.length&&(this.source[1]=this.source[1]+", "+b.join(", "));if(!this.isChild)for(var c in this.context.aliases)this.context.aliases.hasOwnProperty(c)&&(this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c]);this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";");this.isChild||(this.source[1]+="\n"+
this.context.programs.join("\n")+"\n");this.environment.isSimple||this.source.push("return buffer;");b=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];c=0;for(var d=this.environment.depths.list.length;c<d;c++)b.push("depth"+this.environment.depths.list[c]);c=this.mergeSource();this.isChild||(d=e.COMPILER_REVISION,c="this.compilerInfo = ["+d+",'"+e.REVISION_CHANGES[d]+"'];\n"+c);if(a)return b.push(c),Function.apply(this,b);a="function "+(this.name||"")+"("+b.join(",")+
") {\n  "+c+"}";e.log(e.logger.DEBUG,a+"\n\n");return a},mergeSource:function(){for(var a="",b,c=0,d=this.source.length;c<d;c++){var e=this.source[c];e.appendToBuffer?b=b?b+"\n    + "+e.content:e.content:(b&&(a+="buffer += "+b+";\n  ",b=m),a+=e+"\n  ")}return a},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);this.replaceStack(function(b){a.splice(1,0,b);return"blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing=
"helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b);a[a.length-1]="options";this.source.push("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){this.flushInline();var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }");this.environment.isSimple&&this.source.push("else { "+
this.appendToBuffer("''")+" }")},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupOnContext:function(a){this.push(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(a){return"typeof "+a+" === functionType ? "+a+".apply(depth0) : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(){this.push("data")},pushStringParam:function(a,b){this.pushStackLiteral("depth"+this.lastContext);this.pushString(b);"string"===typeof a?this.pushString(a):this.pushStackLiteral(a)},emptyHash:function(){this.pushStackLiteral("{}");this.options.stringParams&&
(this.register("hashTypes","{}"),this.register("hashContexts","{}"))},pushHash:function(){this.hash={values:[],types:[],contexts:[]}},popHash:function(){var a=this.hash;this.hash=m;this.options.stringParams&&(this.register("hashContexts","{"+a.contexts.join(",")+"}"),this.register("hashTypes","{"+a.types.join(",")+"}"));this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){this.inlineStack.push(a);return a},pushLiteral:function(a){this.pushStackLiteral(a)},
pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b){this.context.aliases.helperMissing="helpers.helperMissing";var c=this.lastHelper=this.setupHelper(a,b,!0),d=this.nameLookup("depth"+this.lastContext,b,"context");this.push(c.name+" || "+d);this.replaceStack(function(a){return a+" ? "+a+".call("+c.callParams+") : helperMissing.call("+c.helperMissingParams+")"})},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,
b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.context.aliases.functionType='"function"';this.pushStackLiteral("{}");var c=this.setupHelper(0,a,b),d=this.lastHelper=this.nameLookup("helpers",a,"helper"),e=this.nameLookup("depth"+this.lastContext,a,"context"),f=this.nextStack();this.source.push("if ("+f+" = "+d+") { "+f+" = "+f+".call("+c.callParams+"); }");this.source.push("else { "+f+" = "+e+"; "+f+" = typeof "+f+" === functionType ? "+f+".apply(depth0) : "+f+
"; }")},invokePartial:function(a){a=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&a.push("data");this.context.aliases.self="this";this.push("self.invokePartial("+a.join(", ")+")")},assignToHash:function(a){var b=this.popStack(),c,d;this.options.stringParams&&(d=this.popStack(),c=this.popStack());var e=this.hash;c&&e.contexts.push("'"+a+"': "+c);d&&e.types.push("'"+a+"': "+d);e.values.push("'"+a+"': ("+b+")")},compiler:s,compileChildren:function(a,
b){for(var c=a.children,d,e,f=0,g=c.length;f<g;f++){d=c[f];e=new this.compiler;var j=this.matchExistingProgram(d);null==j?(this.context.programs.push(""),j=this.context.programs.length,d.index=j,d.name="program"+j,this.context.programs[j]=e.compile(d,b,this.context),this.context.environments[j]=d):(d.index=j,d.name="program"+j)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){this.context.aliases.self=
"this";if(null==a)return"self.noop";var b=this.environment.children[a];a=b.depths.list;for(var c=[b.index,b.name,"data"],d=0,e=a.length;d<e;d++)b=a[d],1===b?c.push("depth0"):c.push("depth"+(b-1));return(0===a.length?"self.program(":"self.programWithDepth(")+c.join(", ")+")"},register:function(a,b){this.useRegister(a);this.source.push(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new t(a))},
pushStack:function(a){this.flushInline();var b=this.incrStack();a&&this.source.push(b+" = "+a+";");this.compileStack.push(b);return b},replaceStack:function(a){var b="",c=this.isInline(),d;c?(d=this.popStack(!0),d instanceof t?d=d.value:(b=this.stackSlot?this.topStackName():this.incrStack(),b="("+this.push(b)+" = "+d+"),",d=this.topStack())):d=this.topStack();a=a.call(this,d);c?((this.inlineStack.length||this.compileStack.length)&&this.popStack(),this.push("("+b+a+")")):(/^stack/.test(d)||(d=this.nextStack()),
this.source.push(d+" = ("+b+a+");"));return d},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot);return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];d instanceof t?this.compileStack.push(d):this.pushStack(d)}}},isInline:function(){return this.inlineStack.length},
popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof t)return c.value;b||this.stackSlot--;return c},topStack:function(a){var b=this.isInline()?this.inlineStack:this.compileStack,b=b[b.length-1];return!a&&b instanceof t?b.value:b},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(a,b,c){var d=
[];this.setupParams(a,d,c);a=this.nameLookup("helpers",b,"helper");return{params:d,name:a,callParams:["depth0"].concat(d).join(", "),helperMissingParams:c&&["depth0",this.quotedString(b)].concat(d).join(", ")}},setupParams:function(a,b,c){var d=[],e=[],f=[],g,j;d.push("hash:"+this.popStack());g=this.popStack();if((j=this.popStack())||g)j||(this.context.aliases.self="this",j="self.noop"),g||(this.context.aliases.self="this",g="self.noop"),d.push("inverse:"+g),d.push("fn:"+j);for(j=0;j<a;j++)g=this.popStack(),
b.push(g),this.options.stringParams&&(f.push(this.popStack()),e.push(this.popStack()));this.options.stringParams&&(d.push("contexts:["+e.join(",")+"]"),d.push("types:["+f.join(",")+"]"),d.push("hashContexts:hashContexts"),d.push("hashTypes:hashTypes"));this.options.data&&d.push("data:data");d="{"+d.join(",")+"}";c?(this.register("options",d),b.push("options")):b.push(d);return b.join(", ")}};n="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" ");
for(var u=s.RESERVED_WORDS={},y=0,x=n.length;y<x;y++)u[n[y]]=!0;s.isValidJavaScriptVariableName=function(a){return!s.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?!0:!1};e.precompile=function(a,b){if(null==a||"string"!==typeof a&&a.constructor!==e.AST.ProgramNode)throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{};"data"in b||(b.data=!0);var c=e.parse(a),c=(new v).compile(c,b);return(new s).compile(c,b)};e.compile=function(a,
b){if(null==a||"string"!==typeof a&&a.constructor!==e.AST.ProgramNode)throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{};"data"in b||(b.data=!0);var c;return function(d,h){if(!c){var f=e.parse(a),f=(new v).compile(f,b),f=(new s).compile(f,b,m,!0);c=e.template(f)}return c.call(this,d,h)}};e.VM={template:function(a){var b={escapeExpression:e.Utils.escapeExpression,invokePartial:e.VM.invokePartial,programs:[],program:function(a,b,h){var f=this.programs[a];
h?f=e.VM.program(a,b,h):f||(f=this.programs[a]=e.VM.program(a,b));return f},merge:function(a,b){var h=a||b;a&&b&&(h={},e.Utils.extend(h,b),e.Utils.extend(h,a));return h},programWithDepth:e.VM.programWithDepth,noop:e.VM.noop,compilerInfo:null};return function(c,d){d=d||{};var h=a.call(b,e,c,d.helpers,d.partials,d.data),f=b.compilerInfo||[],g=f[0]||1,j=e.COMPILER_REVISION;if(g!==j){if(g<j)throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+
e.REVISION_CHANGES[j]+") or downgrade your runtime to an older version ("+e.REVISION_CHANGES[g]+").";throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+f[1]+").";}return h}},programWithDepth:function(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){e=e||{};return b.apply(this,[a,e.data||c].concat(d))};e.program=a;e.depth=d.length;return e},program:function(a,b,c){var d=function(a,d){d=d||
{};return b(a,d.data||c)};d.program=a;d.depth=0;return d},noop:function(){return""},invokePartial:function(a,b,c,d,h,f){d={helpers:d,partials:h,data:f};if(a===m)throw new e.Exception("The partial "+b+" could not be found");if(a instanceof Function)return a(c,d);if(e.compile)return h[b]=e.compile(a,{data:f!==m}),h[b](c,d);throw new e.Exception("The partial "+b+" could not be compiled when running in runtime-only mode");}};e.template=e.VM.template})(Handlebars);
