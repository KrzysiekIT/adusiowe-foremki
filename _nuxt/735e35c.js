(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,r){var content=r(193);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("1b7833da",content,!0,{sourceMap:!1})},191:function(e,t,r){e.exports=r.p+"videos/lava_cake.57c8bdd.mp4"},192:function(e,t,r){"use strict";var o=r(190);r.n(o).a},193:function(e,t,r){(t=r(76)(!1)).push([e.i,".input{border:1px solid #a020f0;border-radius:5px;width:3rem}.forms_inputs{margin-left:1%;margin-bottom:16px}.video{position:fixed;left:0;top:-150%;min-width:100%;min-height:100%;transform:translate(-50% -50%);z-index:-1}.video__background{min-width:100vw;min-height:100vh;background-color:rgba(215,161,248,.9);z-index:-1;padding:1rem}.header{color:#a020f0;text-align:center;text-transform:uppercase;padding:3rem 0 2rem;position:relative}.header__title{-webkit-animation:fromLeft 1s ease-out;animation:fromLeft 1s ease-out;display:block;font-family:Comic Sans MS,Comic Sans,cursive;font-size:4rem}.header__subtitle{-webkit-animation:fromRight 1s ease-out;animation:fromRight 1s ease-out;display:block;letter-spacing:.35rem;font-family:cursive;font-size:2rem;padding-top:.5rem}.forms,.forms__box{display:flex}.forms__box{justify-content:space-around}.forms__text{background-color:transparent;border:1px solid #a020f0;border-radius:5px;font-size:1rem;height:50vh;padding:.5rem;resize:none;width:48%}@-webkit-keyframes fromLeft{0%{transform:translateX(-6rem);opacity:0}80%{transform:translateX(.5rem)}to{transform:translateX(0);opacity:1}}@keyframes fromLeft{0%{transform:translateX(-6rem);opacity:0}80%{transform:translateX(.5rem)}to{transform:translateX(0);opacity:1}}@-webkit-keyframes fromRight{0%{transform:translateX(6rem);opacity:0}80%{transform:translateX(-.5rem)}to{transform:translateX(0);opacity:1}}@keyframes fromRight{0%{transform:translateX(6rem);opacity:0}80%{transform:translateX(-.5rem)}to{transform:translateX(0);opacity:1}}",""]),e.exports=t},194:function(e,t,r){"use strict";r.r(t);r(48),r(73),r(49),r(102),r(33),r(74),r(50),r(75),r(103);var o={computed:{newRecipe:function(){for(var e,t=JSON.parse(JSON.stringify(this.recipe)),r=/(\d+[\/\d.,%]*|\d)|[⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g,o=[];null!=(e=r.exec(this.recipe));)o.unshift(e);for(var i=0;i<o.length;i++){console.log(o[i][0]),t=t.slice(0,o[i].index)+t.slice(o[i].index+o[i][0].length,t.length);var n=this.newNumber(o[i][0]);t=t.slice(0,o[i].index)+n+t.slice(o[i].index)}return t}},data:function(){return{recipe:"",diameter:{source:1,target:1},length:{source:{width:1,height:1},target:{width:1,height:1}},form:{source:"foremka",target:"foremka",available:["foremka","blacha"]},example:"makaron tagliatelle 400 gramów\nNaturalnie smaczne Spaghetti Bolognese Knorr 1 opakowanie\nmielona wołowina 400 gramów\nkrojone pomidory z puszki 1 opakowanie\nmozzarella 1 sztuka\nząbek czosnku 2 sztuki\nświeża bazylia 2 łyżki\nolej rzepakowy 1 łyżka"}},methods:{getFieldSource:function(){return"foremka"===this.form.source?Math.PI*this.diameter.source*this.diameter.source*1/4:this.length.source.width*this.length.source.height},getFieldTarget:function(){return"foremka"===this.form.target?Math.PI*this.diameter.target*this.diameter.target*1/4:this.length.target.width*this.length.target.height},fitForm:function(){return this.getFieldTarget()/this.getFieldSource()},testFraction:function(text){return Array.from("⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞").some((function(e){return text.includes(e)}))},fractionCharToNumber:function(text){return{"⅓":1/3,"⅔":2/3,"⅕":.2,"⅖":.4,"⅗":.6,"⅘":.8,"⅙":1/6,"⅚":5/6,"⅛":1/8,"⅜":3/8,"⅝":5/8,"⅞":7/8}[text]},newNumber:function(e){var t,r;switch(e.includes("%")?r="percent":e.includes("/")?r="fracion":e.includes(",")?(e=e.replace(",","."),r="number"):this.testFraction(e)?(e=this.fractionCharToNumber(e),r="number"):r="number",r){case"percent":t=e;break;case"fracion":var o=e.split("/");t=""===o[1]?parseFloat(o[0])*this.fitForm():Math.round(100*parseFloat(o[0])*this.fitForm()/parseFloat(o[1]))/100;break;case"number":t=Math.round(100*parseFloat(e)*this.fitForm())/100}return t}}},n=(r(192),r(30)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video__background"},[o("video",{staticClass:"video",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[o("source",{attrs:{src:r(191),type:"video/mp4"}}),e._v("\n    Your browser does not support HTML5 video.\n  ")]),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"forms_inputs"},[e._v("\n    Przelicz:\n    "),o("div",[o("div",{staticStyle:{display:"inline-block",width:"24px"}},[e._v("z:")]),e._v(" "),e._l(e.form.available,(function(t){return o("span",{key:t},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.source,expression:"form.source"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.form.source,t)},on:{change:function(r){return e.$set(e.form,"source",t)}}}),e._v(e._s(t)+"\n      ")])}))],2),e._v(" "),o("div",[o("div",{staticStyle:{display:"inline-block",width:"24px"}},[e._v("na:")]),e._v(" "),e._l(e.form.available,(function(t){return o("span",{key:t},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.target,expression:"form.target"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.form.target,t)},on:{change:function(r){return e.$set(e.form,"target",t)}}}),e._v(e._s(t)+"\n      ")])}))],2),e._v(" "),o("div",["foremka"===e.form.source?o("div",[o("div",{staticStyle:{display:"inline-block",width:"170px"}},[e._v("\n          Średnica podstawowa: \n        ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.diameter.source,expression:"diameter.source"}],staticClass:"input",domProps:{value:e.diameter.source},on:{input:function(t){t.target.composing||e.$set(e.diameter,"source",t.target.value)}}})]):e._e(),e._v(" "),"blacha"===e.form.source?o("div",[o("div",{staticStyle:{display:"inline-block",width:"170px"}},[e._v("\n          Wymiary podstawowe: \n        ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.length.source.width,expression:"length.source.width"}],staticClass:"input",domProps:{value:e.length.source.width},on:{input:function(t){t.target.composing||e.$set(e.length.source,"width",t.target.value)}}}),e._v("x"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.length.source.height,expression:"length.source.height"}],staticClass:"input",domProps:{value:e.length.source.height},on:{input:function(t){t.target.composing||e.$set(e.length.source,"height",t.target.value)}}})]):e._e()]),e._v(" "),o("div",["foremka"===e.form.target?o("div",[o("div",{staticStyle:{display:"inline-block",width:"170px"}},[e._v("\n          Średnica docelowa: \n        ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.diameter.target,expression:"diameter.target"}],staticClass:"input",attrs:{placeholder:"Średnica docelowa"},domProps:{value:e.diameter.target},on:{input:function(t){t.target.composing||e.$set(e.diameter,"target",t.target.value)}}})]):e._e(),e._v(" "),"blacha"===e.form.target?o("div",[o("div",{staticStyle:{display:"inline-block",width:"170px"}},[e._v("\n          Wymiary docelowe: \n        ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.length.target.width,expression:"length.target.width"}],staticClass:"input",domProps:{value:e.length.target.width},on:{input:function(t){t.target.composing||e.$set(e.length.target,"width",t.target.value)}}}),e._v("x"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.length.target.height,expression:"length.target.height"}],staticClass:"input",domProps:{value:e.length.target.height},on:{input:function(t){t.target.composing||e.$set(e.length.target,"height",t.target.value)}}})]):e._e()])]),e._v(" "),o("div",{staticClass:"forms__box"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe,expression:"recipe"}],staticClass:"forms__text",attrs:{placeholder:"Przepis"},domProps:{value:e.recipe},on:{input:function(t){t.target.composing||(e.recipe=t.target.value)}}}),e._v(" "),o("textarea",{staticClass:"forms__text",domProps:{value:e.newRecipe}})])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"titles"},[t("span",{staticClass:"header__title"},[this._v("Kącik wypiekany")]),this._v(" "),t("span",{staticClass:"header__subtitle"},[this._v("Czyli Adusiowe pyszności")])])])}],!1,null,null,null);t.default=component.exports}}]);