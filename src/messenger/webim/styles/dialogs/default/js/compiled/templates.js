/*
 Copyright 2005-2013 the original author or authors.
 Licensed under the Apache License, Version 2.0 (the "License").
 You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){var r=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{};s.chat_avatar=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h=this.escapeExpression;return(a=e["if"].call(b,b.imageLink,{hash:{},inverse:this.program(3,function(){return'<div class="default-avatar"></div>'},c),fn:this.program(1,function(a,b){var d,c;d='<img src="';(c=e.imageLink)?c=c.call(a,{hash:{},data:b}):(c=a.imageLink,c="function"===typeof c?c.apply(a):c);return d+=
h(c)+'" border="0" alt="" />'},c),data:c}))||0===a?a:""});s.chat_controls_close=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h;a=e.helperMissing;d=this.escapeExpression;c={hash:{},data:c};return b='<div class="tpl-image" title="'+(d((h=e.L10n||b.L10n,h?h.call(b,"chat.window.close_title",c):a.call(b,"L10n","chat.window.close_title",c)))+'"></div>')});s.chat_controls_history=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);
c=c||{};var h;a=e.helperMissing;d=this.escapeExpression;c={hash:{},data:c};return b='<div class="tpl-image" title="'+(d((h=e.L10n||b.L10n,h?h.call(b,"page.analysis.userhistory.title",c):a.call(b,"L10n","page.analysis.userhistory.title",c)))+'"></div>')});s.chat_controls_redirect=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h,q=e.helperMissing,p=this.escapeExpression;return(a=e["if"].call(b,(h=b.user,null==h||!1===h?h:h.canPost),{hash:{},inverse:this.noop,
fn:this.program(1,function(a,b){var d,c;d={hash:{},data:b};return d='\n<div class="tpl-image" title="'+(p((c=e.L10n||a.L10n,c?c.call(a,"chat.window.toolbar.redirect_user",d):q.call(a,"L10n","chat.window.toolbar.redirect_user",d)))+'"></div>\n')},c),data:c}))||0===a?a:""});s.chat_controls_refresh=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h;a=e.helperMissing;d=this.escapeExpression;c={hash:{},data:c};return b='<div class="tpl-image" title="'+(d((h=
e.L10n||b.L10n,h?h.call(b,"chat.window.toolbar.refresh",c):a.call(b,"L10n","chat.window.toolbar.refresh",c)))+'"></div>')});s.chat_controls_secure_mode=r(function(a,b,e){this.compilerInfo=[4,">= 1.0.0"];this.merge(e,a.helpers);return'<div class="tpl-image" title="SSL"></div>'});s.chat_controls_send_mail=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h;a=e.helperMissing;d=this.escapeExpression;c={hash:{},data:c};return b='<div class="tpl-image" title="'+
(d((h=e.L10n||b.L10n,h?h.call(b,"chat.window.toolbar.mail_history",c):a.call(b,"L10n","chat.window.toolbar.mail_history",c)))+'"></div>')});s.chat_controls_sound=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h=e.helperMissing,q=this.escapeExpression;return(a=e["if"].call(b,b.enabled,{hash:{},inverse:this.program(3,function(a,b){var d,c;d={hash:{},data:b};return d='\n    <div class="tpl-image sound-control-off" title="'+(q((c=e.L10n||a.L10n,c?c.call(a,
"chat.window.toolbar.turn_on_sound",d):h.call(a,"L10n","chat.window.toolbar.turn_on_sound",d)))+'"></div>\n')},c),fn:this.program(1,function(a,b){var d,c;d={hash:{},data:b};return d='\n    <div class="tpl-image sound-control-on" title="'+(q((c=e.L10n||a.L10n,c?c.call(a,"chat.window.toolbar.turn_off_sound",d):h.call(a,"L10n","chat.window.toolbar.turn_off_sound",d)))+'"></div>\n')},c),data:c}))||0===a?a:""});s.chat_controls_user_name=r(function(a,b,e,d,c){function h(a,b){var m,f,d;m=""+('\n        <div class="user-name-control-input-bg"><input id="user-name-control-input" type="text" size="12" value="'+
g((f=(f=a.user,null==f||!1===f?f:f.name),typeof f===t?f.apply(a):f))+'" class="username" /></div>\n        <a href="javascript:void(0)" class="user-name-control-set tpl-image" title="');d={hash:{},data:b};return m+=g((f=e.L10n||a.L10n,f?f.call(a,"chat.client.changename",d):k.call(a,"L10n","chat.client.changename",d)))+'"></a>\n    '}function q(a,d){var m,f,b;b={hash:{},data:d};m='\n        <a href="javascript:void(0)" title="'+(g((f=e.L10n||a.L10n,f?f.call(a,"chat.client.changename",b):k.call(a,"L10n",
"chat.client.changename",b)))+'">'+g((f=(f=a.user,null==f||!1===f?f:f.name),typeof f===t?f.apply(a):f))+'</a>\n        <a class="user-name-control-change tpl-image" title="');b={hash:{},data:d};return m+=g((f=e.L10n||a.L10n,f?f.call(a,"chat.client.changename",b):k.call(a,"L10n","chat.client.changename",b)))+'"></a>\n    '}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var p,t="function",g=this.escapeExpression,k=e.helperMissing,j=this;return(a=e["if"].call(b,(p=b.user,null==p||
!1===p?p:p.canChangeName),{hash:{},inverse:j.program(6,function(a,b){var m,f;m={hash:{},data:b};return m="\n"+(g((f=e.L10n||a.L10n,f?f.call(a,"chat.client.name",m):k.call(a,"L10n","chat.client.name",m)))+"&nbsp;"+g((f=(f=a.user,null==f||!1===f?f:f.name),typeof f===t?f.apply(a):f))+"\n")},c),fn:j.program(1,function(a,b){var m,f;m={hash:{},data:b};m='\n    <span class="user-name-control-prefix">'+(g((f=e.L10n||a.L10n,f?f.call(a,"chat.client.name",m):k.call(a,"L10n","chat.client.name",m)))+"</span>\n    ");
if((f=e["if"].call(a,a.nameInput,{hash:{},inverse:j.program(4,q,b),fn:j.program(2,h,b),data:b}))||0===f)m+=f;return m+="\n"},c),data:c}))||0===a?a:""});s.chat_layout=r(function(a,b,e,d,c){function h(a){var f;return a=""+("\n                <a onclick=\"window.open('"+l((f=(f=a.page,null==f||!1===f?f:f.webimHost),typeof f===j?f.apply(a):f))+'\');return false;" href="'+l((f=(f=a.page,null==f||!1===f?f:f.webimHost),typeof f===j?f.apply(a):f))+'">\n                    <img src="'+l((f=(f=(f=a.page,null==
f||!1===f?f:f.company),null==f||!1===f?f:f.chatLogoURL),typeof f===j?f.apply(a):f))+'" alt=""/>\n                </a>\n            ')}function q(a){var f;return a=""+('\n                <img src="'+l((f=(f=(f=a.page,null==f||!1===f?f:f.company),null==f||!1===f?f:f.chatLogoURL),typeof f===j?f.apply(a):f))+'" alt=""/>\n            ')}function p(a){var f;return a=""+("\n                <a onclick=\"window.open('"+l((f=(f=a.page,null==f||!1===f?f:f.webimHost),typeof f===j?f.apply(a):f))+'\');return false;" href="'+
l((f=(f=a.page,null==f||!1===f?f:f.webimHost),typeof f===j?f.apply(a):f))+'">\n                    <img src="'+l((f=(f=a.page,null==f||!1===f?f:f.tplRoot),typeof f===j?f.apply(a):f))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}function t(a){var f;return a=""+('\n                <img src="'+l((f=(f=a.page,null==f||!1===f?f:f.tplRoot),typeof f===j?f.apply(a):f))+'/images/default-logo.gif" alt=""/>\n            ')}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);
c=c||{};var g,k,j="function",l=this.escapeExpression,n=this;d=e.helperMissing;a='\n<div id="top">\n    <div id="logo">\n        ';if((k=e["if"].call(b,(g=(g=b.page,null==g||!1===g?g:g.company),null==g||!1===g?g:g.chatLogoURL),{hash:{},inverse:n.program(6,function(a,f){var b,d,c;b="\n            ";if((c=e["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(9,t,f),fn:n.program(7,p,f),data:f}))||0===c)b+=c;return b+"\n        "},c),fn:n.program(1,function(a,f){var b,d,c;
b="\n            ";if((c=e["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(4,q,f),fn:n.program(2,h,f),data:f}))||0===c)b+=c;return b+"\n        "},c),data:c}))||0===k)a+=k;a+='\n        &nbsp;\n        <div id="page-title">'+l((g=(g=b.page,null==g||!1===g?g:g.title),typeof g===j?g.apply(b):g))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="chat-header">\n    <div class="bgc"><div class="bgl"><div class="bgr">\n        \n        <div id="controls-region"></div>\n    </div></div></div>\n</div>\n\n\n<div id="chat">\n    <div class="bgl"><div class="bgr"><div class="sdwbgc"><div class="sdwbgl"><div class="sdwbgr">\n        ';
if((k=e.unless.call(b,(g=b.user,null==g||!1===g?g:g.isAgent),{hash:{},inverse:n.noop,fn:n.program(11,function(){return'\n        <div id="avatar-region"></div>\n        '},c),data:c}))||0===k)a+=k;c={hash:{},data:c};return a=a+'\n        \n        <div id="messages-region"></div>\n        \n        <div id="status-region"></div>\n    </div></div></div></div></div>\n</div>\n\n\n<div id="message-form-region"></div>\n\n\n<div id="footer">'+(l((g=e.L10n||b.L10n,g?g.call(b,"chat.window.poweredby",c):d.call(b,
"L10n","chat.window.poweredby",c)))+' <a id="poweredByLink" href="http://mibew.org" title="Mibew Community" target="_blank">mibew.org</a></div>')});s.chat_message=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h,q=this.escapeExpression,p=e.helperMissing;a={hash:{},data:c};a="<span>"+(q((h=e.formatTime||b.formatTime,h?h.call(b,b.created,a):p.call(b,"formatTime",b.created,a)))+"</span> \n");if((h=e["if"].call(b,b.name,{hash:{},inverse:this.noop,fn:this.program(1,
function(a,b){var d,c;d="<span class='n";(c=e.kindName)?c=c.call(a,{hash:{},data:b}):(c=a.kindName,c="function"===typeof c?c.apply(a):c);d+=q(c)+"'>";(c=e.name)?c=c.call(a,{hash:{},data:b}):(c=a.name,c="function"===typeof c?c.apply(a):c);return d+=q(c)+"</span>: "},c),data:c}))||0===h)a+=h;a+="\n<span class='m";(h=e.kindName)?h=h.call(b,{hash:{},data:c}):(h=b.kindName,h="function"===typeof h?h.apply(b):h);a+=q(h)+"'>";if((h=e["if"].call(b,b.allowFormatting,{hash:{},inverse:this.program(5,function(a,
b){var d,c;c={hash:{},data:b};return q((d=e.apply||a.apply,d?d.call(a,a.message,"urlReplace, nl2br",c):p.call(a,"apply",a.message,"urlReplace, nl2br",c)))},c),fn:this.program(3,function(a,b){var d,c;c={hash:{},data:b};return q((d=e.apply||a.apply,d?d.call(a,a.message,"urlReplace, nl2br, allowTags",c):p.call(a,"apply",a.message,"urlReplace, nl2br, allowTags",c)))},c),data:c}))||0===h)a+=h;return a+="</span><br/>"});s.chat_message_form=r(function(a,b,e,d,c){function h(a,b){var d,f;d={hash:{},data:b};
d='\n                <select id="predefined" size="1" class="answer">\n                    <option>'+(g((f=e.L10n||a.L10n,f?f.call(a,"chat.window.predefined.select_answer",d):k.call(a,"L10n","chat.window.predefined.select_answer",d)))+"</option>\n                ");if((f=e.each.call(a,a.predefinedAnswers,{hash:{},inverse:j.noop,fn:j.program(5,q,b),data:b}))||0===f)d+=f;return d+="\n                </select>\n            "}function q(a){var d;return a=""+("\n                    <option>"+g((d=a["short"],
typeof d===r?d.apply(a):d))+"</option>\n                ")}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var p,r="function",g=this.escapeExpression,k=e.helperMissing,j=this;a='<div id="message">\n';if((d=e["if"].call(b,(p=b.user,null==p||!1===p?p:p.canPost),{hash:{},inverse:j.noop,fn:j.program(1,function(){return'\n    <div class="bgc"><div class="bgl"><div class="bgr">\n        <textarea id="message-input" class="message" tabindex="0" rows="4" cols="10"></textarea>\n    </div></div></div>\n'},
c),data:c}))||0===d)a+=d;a+='\n</div>\n\n<div id="send">\n';if((d=e["if"].call(b,(p=b.user,null==p||!1===p?p:p.canPost),{hash:{},inverse:j.noop,fn:j.program(3,function(a,d){var b,f,c;b='\n    <div id="postmessage">\n        <div id="predefined-wrapper">\n            ';if((c=e["if"].call(a,(f=a.user,null==f||!1===f?f:f.isAgent),{hash:{},inverse:j.noop,fn:j.program(4,h,d),data:d}))||0===c)b+=c;c={hash:{},data:d};b=b+'\n        </div>\n        <a href="javascript:void(0)" id="send-message" title="'+
(g((f=e.L10n||a.L10n,f?f.call(a,"chat.window.send_message",c):k.call(a,"L10n","chat.window.send_message",c)))+'">');c={hash:{},data:d};return b+=g((f=e.L10n||a.L10n,f?f.call(a,"chat.window.send_message_short_and_shortcut",c):k.call(a,"L10n","chat.window.send_message_short_and_shortcut",c)))+"</a>\n    </div>\n"},c),data:c}))||0===d)a+=d;return a+'\n</div>\n<div class="clear"></div>'});s.chat_status_base=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};a=this.escapeExpression;
(e=e.title)?e=e.call(b,{hash:{},data:c}):(e=b.title,e="function"===typeof e?e.apply(b):e);return a(e)});s.chat_status_message=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};a=this.escapeExpression;(e=e.message)?e=e.call(b,{hash:{},data:c}):(e=b.message,e="function"===typeof e?e.apply(b):e);return a(e)});s.chat_status_typing=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h;a=e.helperMissing;d=this.escapeExpression;
c={hash:{},data:c};return d((h=e.L10n||b.L10n,h?h.call(b,"typing.remote",c):a.call(b,"L10n","typing.remote",c)))});s.invitation_layout=r(function(a,b,e){this.compilerInfo=[4,">= 1.0.0"];this.merge(e,a.helpers);return'<div id="invitation-messages-region"></div>'});s.leave_message_description=r(function(a,b,e,d,c){this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h,q=e.helperMissing,p=this.escapeExpression;d={hash:{},data:c};a='<div class="buttons">\n    <a href="javascript:window.close();" title="'+
(p((h=e.L10n||b.L10n,h?h.call(b,"leavemessage.close",d):q.call(b,"L10n","leavemessage.close",d)))+'">\n        <img class="tpl-image iclosewin" src="'+p((h=(h=b.page,null==h||!1===h?h:h.webimRoot),"function"===typeof h?h.apply(b):h))+'/images/free.gif" alt="');d={hash:{},data:c};a+=p((h=e.L10n||b.L10n,h?h.call(b,"leavemessage.close",d):q.call(b,"L10n","leavemessage.close",d)))+'" />\n    </a>\n</div>\n<div class="messagetxt">';d={hash:{},data:c};return a+=p((h=e.L10n||b.L10n,h?h.call(b,"leavemessage.descr",
d):q.call(b,"L10n","leavemessage.descr",d)))+"</div>"});s.leave_message_form=r(function(a,b,e,d,c){function h(a,d){var b,c;b='<input type="hidden" name="group" value="';(c=e.groupId)?c=c.call(a,{hash:{},data:d}):(c=a.groupId,c=typeof c===j?c.apply(a):c);return b+=l(c)+'"/>'}function q(a,d){var b,c,m;b=""+('\n                        <option value="'+l((c=a.id,typeof c===j?c.apply(a):c))+'" ');if((m=e["if"].call(a,a.selected,{hash:{},inverse:n.noop,fn:n.program(6,p,d),data:d}))||0===m)b+=m;return b+=
">"+l((c=a.name,typeof c===j?c.apply(a):c))+"</option>\n                    "}function p(){return'selected="selected"'}function r(a,d){var b;return(b=e["if"].call(a,a.selected,{hash:{},inverse:n.noop,fn:n.program(9,g,d),data:d}))||0===b?b:""}function g(a){var d;return l((d=a.description,typeof d===j?d.apply(a):d))}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var k,j="function",l=this.escapeExpression,n=this,m=e.helperMissing;a=""+('<form name="leaveMessageForm" method="post" action="">\n    <input type="hidden" name="style" value="'+
l((k=(k=b.page,null==k||!1===k?k:k.style),typeof k===j?k.apply(b):k))+'"/>\n    <input type="hidden" name="info" value="');(d=e.info)?d=d.call(b,{hash:{},data:c}):(d=b.info,d=typeof d===j?d.apply(b):d);a+=l(d)+'"/>\n    <input type="hidden" name="referrer" value="';(d=e.referrer)?d=d.call(b,{hash:{},data:c}):(d=b.referrer,d=typeof d===j?d.apply(b):d);a+=l(d)+'"/>\n    ';if((d=e.unless.call(b,b.groups,{hash:{},inverse:n.noop,fn:n.program(1,function(a,d){var b;return(b=e["if"].call(a,a.groupId,{hash:{},
inverse:n.noop,fn:n.program(2,h,d),data:d}))||0===b?b:""},c),data:c}))||0===d)a+=d;d={hash:{},data:c};a=a+'\n\n    <div class="errors"></div>\n\n    <table cellspacing="1" cellpadding="5" border="0" class="form">\n        <tr>\n            <td><strong>'+(l((k=e.L10n||b.L10n,k?k.call(b,"form.field.email",d):m.call(b,"L10n","form.field.email",d)))+':</strong></td>\n            <td><input type="text" name="email" size="50" value="');(d=e.email)?d=d.call(b,{hash:{},data:c}):(d=b.email,d=typeof d===j?
d.apply(b):d);a+=l(d)+'" class="username"/></td>\n        </tr>\n        <tr>\n            <td><strong>';d={hash:{},data:c};a+=l((k=e.L10n||b.L10n,k?k.call(b,"form.field.name",d):m.call(b,"L10n","form.field.name",d)))+':</strong></td>\n            <td><input type="text" name="name" size="50" value="';(d=e.name)?d=d.call(b,{hash:{},data:c}):(d=b.name,d=typeof d===j?d.apply(b):d);a+=l(d)+'" class="username"/></td>\n        </tr>\n    ';if((d=e["if"].call(b,b.groups,{hash:{},inverse:n.noop,fn:n.program(4,
function(a,d){var b,c,g;g={hash:{},data:d};b='\n        <tr>\n            <td class="text"><strong>'+(l((c=e.L10n||a.L10n,c?c.call(a,"form.field.department",g):m.call(a,"L10n","form.field.department",g)))+'</strong></td>\n            <td>\n                <select name="group" style="min-width:200px;">\n                    ');if((g=e.each.call(a,a.groups,{hash:{},inverse:n.noop,fn:n.program(5,q,d),data:d}))||0===g)b+=g;b+='\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td class="text"><strong>';
g={hash:{},data:d};b+=l((c=e.L10n||a.L10n,c?c.call(a,"form.field.department.description",g):m.call(a,"L10n","form.field.department.description",g)))+'</strong></td>\n            <td class="text" id="groupDescription">\n                ';if((g=e.each.call(a,a.groups,{hash:{},inverse:n.noop,fn:n.program(8,r,d),data:d}))||0===g)b+=g;return b+="\n            </td>\n        </tr>\n    "},c),data:c}))||0===d)a+=d;a+="\n        <tr>\n            <td><strong>";d={hash:{},data:c};a+=l((k=e.L10n||b.L10n,k?
k.call(b,"form.field.message",d):m.call(b,"L10n","form.field.message",d)))+':</strong></td>\n            <td valign="top">\n                <textarea name="message" tabindex="0" cols="40" rows="5">';(d=e.message)?d=d.call(b,{hash:{},data:c}):(d=b.message,d=typeof d===j?d.apply(b):d);a+=l(d)+"</textarea>\n            </td>\n        </tr>\n    ";if((d=e["if"].call(b,b.showCaptcha,{hash:{},inverse:n.noop,fn:n.program(11,function(){return'\n        <tr>\n            <td><img id="captcha-img" src="captcha.php"/></td>\n            <td><input type="text" name="captcha" size="50" maxlength="15" value="" class="username"/></td>\n        </tr>\n    '},
c),data:c}))||0===d)a+=d;a+='\n    </table>\n    <a href="javascript:void(0);" class="but" id="send-message">';d={hash:{},data:c};return a+=l((k=e.L10n||b.L10n,k?k.call(b,"mailthread.perform",d):m.call(b,"L10n","mailthread.perform",d)))+'</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+l((k=(k=b.page,null==k||!1===k?k:k.tplRoot),typeof k===j?k.apply(b):k))+'/images/ajax-loader.gif" alt="Loading..." /></div>'});s.leave_message_layout=r(function(a,b,e,d,c){function h(a){var b;
return a=""+("\n                <a onclick=\"window.open('"+j((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===k?b.apply(a):b))+'\');return false;" href="'+j((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===k?b.apply(a):b))+'">\n                    <img src="'+j((b=(b=(b=a.page,null==b||!1===b?b:b.company),null==b||!1===b?b:b.chatLogoURL),typeof b===k?b.apply(a):b))+'" alt=""/>\n                </a>\n            ')}function q(a){var b;return a=""+('\n                <img src="'+j((b=(b=
(b=a.page,null==b||!1===b?b:b.company),null==b||!1===b?b:b.chatLogoURL),typeof b===k?b.apply(a):b))+'" alt=""/>\n            ')}function p(a){var b;return a=""+("\n                <a onclick=\"window.open('"+j((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===k?b.apply(a):b))+'\');return false;" href="'+j((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===k?b.apply(a):b))+'">\n                    <img src="'+j((b=(b=a.page,null==b||!1===b?b:b.tplRoot),typeof b===k?b.apply(a):b))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}
function r(a){var b;return a=""+('\n                <img src="'+j((b=(b=a.page,null==b||!1===b?b:b.tplRoot),typeof b===k?b.apply(a):b))+'/images/default-logo.gif" alt=""/>\n            ')}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var g,k="function",j=this.escapeExpression,l=this;a='\n<div id="top2">\n    <div id="logo">\n        ';if((c=e["if"].call(b,(g=(g=b.page,null==g||!1===g?g:g.company),null==g||!1===g?g:g.chatLogoURL),{hash:{},inverse:l.program(6,function(b,a){var d,
c,g;d="\n            ";if((g=e["if"].call(b,(c=b.page,null==c||!1===c?c:c.webimHost),{hash:{},inverse:l.program(9,r,a),fn:l.program(7,p,a),data:a}))||0===g)d+=g;return d+"\n        "},c),fn:l.program(1,function(a,b){var d,c,g;d="\n            ";if((g=e["if"].call(a,(c=a.page,null==c||!1===c?c:c.webimHost),{hash:{},inverse:l.program(4,q,b),fn:l.program(2,h,b),data:b}))||0===g)d+=g;return d+"\n        "},c),data:c}))||0===c)a+=c;return a+='\n        &nbsp;\n        <div id="page-title">'+j((g=(g=b.page,
null==g||!1===g?g:g.title),typeof g===k?g.apply(b):g))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="headers">\n    <div class="wndb"><div class="wndl"><div class="wndr"><div class="wndt"><div class="wndtl"><div class="wndtr"><div class="wndbl"><div class="wndbr" id="description-region">\n    </div></div></div></div></div></div></div></div>\n</div>\n\n\n<div id="content-wrapper"></div>'});s.leave_message_sent_description=r(function(a,b,e,d,c){this.compilerInfo=
[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var h,q=e.helperMissing,p=this.escapeExpression;d={hash:{},data:c};a='<div class="buttons">\n        <a href="javascript:window.close();" title="'+(p((h=e.L10n||b.L10n,h?h.call(b,"chat.mailthread.sent.close",d):q.call(b,"L10n","chat.mailthread.sent.close",d)))+'">\n            <img class="tpl-image iclosewin" src="'+p((h=(h=b.page,null==h||!1===h?h:h.webimRoot),"function"===typeof h?h.apply(b):h))+'/images/free.gif" alt="');d={hash:{},data:c};a+=p((h=
e.L10n||b.L10n,h?h.call(b,"chat.mailthread.sent.close",d):q.call(b,"L10n","chat.mailthread.sent.close",d)))+'" />\n        </a>\n</div>\n<div class="messagetxt">';d={hash:{},data:c};return a+=p((h=e.L10n||b.L10n,h?h.call(b,"leavemessage.sent.message",d):q.call(b,"L10n","leavemessage.sent.message",d)))+"</div>"});s.survey_form=r(function(a,b,e,d,c){function h(b,a){var d,c;d='<input type="hidden" name="group" value="';(c=e.groupId)?c=c.call(b,{hash:{},data:a}):(c=b.groupId,c=typeof c===l?c.apply(b):
c);return d+=n(c)+'"/>'}function q(b,a){var d,c,f;d=""+('\n                        <option value="'+n((c=b.id,typeof c===l?c.apply(b):c))+'" ');if((f=e["if"].call(b,b.selected,{hash:{},inverse:m.noop,fn:m.program(10,p,a),data:a}))||0===f)d+=f;d+=">"+n((c=b.name,typeof c===l?c.apply(b):c));if((f=e.unless.call(b,b.online,{hash:{},inverse:m.noop,fn:m.program(12,r,a),data:a}))||0===f)d+=f;return d+"</option>\n                    "}function p(){return'selected="selected"'}function r(){return" (offline)"}
function g(b,a){var d;return(d=e["if"].call(b,b.selected,{hash:{},inverse:m.noop,fn:m.program(15,k,a),data:a}))||0===d?d:""}function k(b){var a;return n((a=b.description,typeof a===l?a.apply(b):a))}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var j,l="function",n=this.escapeExpression,m=this,f=e.helperMissing;a=""+('<form name="surveyForm" method="post" action="">\n    <input type="hidden" name="style" value="'+n((j=(j=b.page,null==j||!1===j?j:j.style),typeof j===l?j.apply(b):
j))+'"/>\n    <input type="hidden" name="info" value="');(d=e.info)?d=d.call(b,{hash:{},data:c}):(d=b.info,d=typeof d===l?d.apply(b):d);a+=n(d)+'"/>\n    <input type="hidden" name="referrer" value="';(d=e.referrer)?d=d.call(b,{hash:{},data:c}):(d=b.referrer,d=typeof d===l?d.apply(b):d);a+=n(d)+'"/>\n    <input type="hidden" name="survey" value="on"/>\n    ';if((d=e.unless.call(b,b.showEmail,{hash:{},inverse:m.noop,fn:m.program(1,function(b,a){var d,c;d='<input type="hidden" name="email" value="';
(c=e.email)?c=c.call(b,{hash:{},data:a}):(c=b.email,c=typeof c===l?c.apply(b):c);return d+=n(c)+'"/>'},c),data:c}))||0===d)a+=d;a+="\n    ";if((d=e.unless.call(b,b.groups,{hash:{},inverse:m.noop,fn:m.program(3,function(b,a){var d;return(d=e["if"].call(b,b.groupId,{hash:{},inverse:m.noop,fn:m.program(4,h,a),data:a}))||0===d?d:""},c),data:c}))||0===d)a+=d;a+="\n    ";if((d=e.unless.call(b,b.showMessage,{hash:{},inverse:m.noop,fn:m.program(6,function(b,a){var d,c;d='<input type="hidden" name="message" value="';
(c=e.message)?c=c.call(b,{hash:{},data:a}):(c=b.message,c=typeof c===l?c.apply(b):c);return d+=n(c)+'"/>'},c),data:c}))||0===d)a+=d;a+='\n\n    <div class="errors"></div>\n\n    <table class="form">\n    ';if((d=e["if"].call(b,b.groups,{hash:{},inverse:m.noop,fn:m.program(8,function(b,a){var d,c,h;h={hash:{},data:a};d="\n        <tr>\n            <td><strong>"+(n((c=e.L10n||b.L10n,c?c.call(b,"form.field.department",h):f.call(b,"L10n","form.field.department",h)))+'</strong></td>\n            <td>\n                <select name="group">\n                    ');
if((h=e.each.call(b,b.groups,{hash:{},inverse:m.noop,fn:m.program(9,q,a),data:a}))||0===h)d+=h;d+="\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td><strong>";h={hash:{},data:a};d+=n((c=e.L10n||b.L10n,c?c.call(b,"form.field.department.description",h):f.call(b,"L10n","form.field.department.description",h)))+'</strong></td>\n            <td id="groupDescription">';if((h=e.each.call(b,b.groups,{hash:{},inverse:m.noop,fn:m.program(14,g,a),data:a}))||0===h)d+=
h;return d+="</td>\n        </tr>\n    "},c),data:c}))||0===d)a+=d;d={hash:{},data:c};a=a+"\n        <tr>\n            <td><strong>"+(n((j=e.L10n||b.L10n,j?j.call(b,"presurvey.name",d):f.call(b,"L10n","presurvey.name",d)))+'</strong></td>\n            <td><input type="text" name="name" size="50" value="');(d=e.name)?d=d.call(b,{hash:{},data:c}):(d=b.name,d=typeof d===l?d.apply(b):d);a+=n(d)+'" class="username" ';if((d=e.unless.call(b,b.canChangeName,{hash:{},inverse:m.noop,fn:m.program(17,function(){return'disabled="disabled"'},
c),data:c}))||0===d)a+=d;a+="/></td>\n        </tr>\n    ";if((d=e["if"].call(b,b.showEmail,{hash:{},inverse:m.noop,fn:m.program(19,function(b,a){var d,c;d={hash:{},data:a};d="\n        <tr>\n            <td><strong>"+(n((c=e.L10n||b.L10n,c?c.call(b,"presurvey.mail",d):f.call(b,"L10n","presurvey.mail",d)))+'</strong></td>\n            <td><input type="text" name="email" size="50" value="');(c=e.email)?c=c.call(b,{hash:{},data:a}):(c=b.email,c=typeof c===l?c.apply(b):c);return d+=n(c)+'" class="username"/></td>\n        </tr>\n    '},
c),data:c}))||0===d)a+=d;a+="\n    ";if((d=e["if"].call(b,b.showMessage,{hash:{},inverse:m.noop,fn:m.program(21,function(b,a){var d,c;d={hash:{},data:a};d="\n        <tr>\n            <td><strong>"+(n((c=e.L10n||b.L10n,c?c.call(b,"presurvey.question",d):f.call(b,"L10n","presurvey.question",d)))+'</strong></td>\n            <td valign="top"><textarea name="message" tabindex="0" cols="45" rows="2">');(c=e.message)?c=c.call(b,{hash:{},data:a}):(c=b.message,c=typeof c===l?c.apply(b):c);return d+=n(c)+
"</textarea></td>\n        </tr>\n    "},c),data:c}))||0===d)a+=d;a+='\n    </table>\n    <a href="javascript:void(0);" class="but" id="submit-survey">';d={hash:{},data:c};return a+=n((j=e.L10n||b.L10n,j?j.call(b,"presurvey.submit",d):f.call(b,"L10n","presurvey.submit",d)))+'</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+n((j=(j=b.page,null==j||!1===j?j:j.tplRoot),typeof j===l?j.apply(b):j))+'/images/ajax-loader.gif" alt="Loading..." /></div>'});s.survey_layout=
r(function(a,b,e,d,c){function h(b){var a;return b=""+("\n                <a onclick=\"window.open('"+l((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===j?a.apply(b):a))+'\');return false;" href="'+l((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===j?a.apply(b):a))+'">\n                    <img src="'+l((a=(a=(a=b.page,null==a||!1===a?a:a.company),null==a||!1===a?a:a.chatLogoURL),typeof a===j?a.apply(b):a))+'" alt=""/>\n                </a>\n            ')}function q(a){var b;return a=
""+('\n                <img src="'+l((b=(b=(b=a.page,null==b||!1===b?b:b.company),null==b||!1===b?b:b.chatLogoURL),typeof b===j?b.apply(a):b))+'" alt=""/>\n            ')}function p(b){var a;return b=""+("\n                <a onclick=\"window.open('"+l((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===j?a.apply(b):a))+'\');return false;" href="'+l((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===j?a.apply(b):a))+'">\n                    <img src="'+l((a=(a=b.page,null==a||!1===a?a:a.tplRoot),
typeof a===j?a.apply(b):a))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}function r(a){var b;return a=""+('\n                <img src="'+l((b=(b=a.page,null==b||!1===b?b:b.tplRoot),typeof b===j?b.apply(a):b))+'/images/default-logo.gif" alt=""/>\n            ')}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);c=c||{};var g,k,j="function",l=this.escapeExpression,n=this;d=e.helperMissing;a='\n<div id="top2">\n    <div id="logo">\n        ';if((k=e["if"].call(b,
(g=(g=b.page,null==g||!1===g?g:g.company),null==g||!1===g?g:g.chatLogoURL),{hash:{},inverse:n.program(6,function(a,b){var c,d,g;c="\n            ";if((g=e["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(9,r,b),fn:n.program(7,p,b),data:b}))||0===g)c+=g;return c+"\n        "},c),fn:n.program(1,function(a,b){var c,d,g;c="\n            ";if((g=e["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(4,q,b),fn:n.program(2,h,b),data:b}))||0===g)c+=
g;return c+"\n        "},c),data:c}))||0===k)a+=k;a+='\n        &nbsp;\n        <div id="page-title">'+l((g=(g=b.page,null==g||!1===g?g:g.title),typeof g===j?g.apply(b):g))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="headers">\n    <div class="wndb"><div class="wndl"><div class="wndr"><div class="wndt"><div class="wndtl"><div class="wndtr"><div class="wndbl"><div class="wndbr">\n        <div class="buttons">\n            <a href="javascript:window.close();" title="';
k={hash:{},data:c};a+=l((g=e.L10n||b.L10n,g?g.call(b,"leavemessage.close",k):d.call(b,"L10n","leavemessage.close",k)))+'"><img class="tpl-image iclosewin" src="'+l((g=(g=b.page,null==g||!1===g?g:g.webimRoot),typeof g===j?g.apply(b):g))+'/images/free.gif" alt="';k={hash:{},data:c};a+=l((g=e.L10n||b.L10n,g?g.call(b,"leavemessage.close",k):d.call(b,"L10n","leavemessage.close",k)))+'" /></a>\n        </div>\n        <div class="messagetxt">';k={hash:{},data:c};return a+=l((g=e.L10n||b.L10n,g?g.call(b,
"presurvey.intro",k):d.call(b,"L10n","presurvey.intro",k)))+'</div>\n    </div></div></div></div></div></div></div></div>\n</div>\n\n\n<div id="content-wrapper"></div>'})})();
