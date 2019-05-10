/*
 
 * 
 *  jQuery 名称冲突
	jQuery 使用 $ 符号作为 jQuery 的简介方式。
	某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。
	jQuery 使用名为 noConflict() 的方法来解决该问题。
	var jq=jQuery.noConflict()，帮助您使用自己的名称（比如 jq）来代替 $ 符号。
 * */
//文档加载后执行的事件
$(document).ready(function(){
	//jquery的链式方法执行是逐个执行的,例如$(selected).animate().animate()会先执行第一个animate的效果,在执行第二个
	
	
	//隐藏和显示
	//toggle()方法可以切换hide()和show()方法
	//$(selector).toggle(speed,callback);
	//	可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
	//	可选的 callback 参数是 toggle() 方法完成后所执行的函数名称。
	
	//淡入淡出,淡出是把逐渐减小opacity，最后display设置为none
	//	fadeIn()
	//	fadeOut()
	//	fadeToggle()
	//	fadeTo()
//	fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
//	可选的 callback 参数是该函数完成后所执行的函数名称。
	//fadeTo()方法中若opacity设置为0，则最后不会把display修改成none

	//滑动，$(selector).slideDown(speed,callback);
	//slideDown()将display为none的元素显示出来，slideUp()方法最后将元素display设为none
//	slideDown()
//	slideUp()
//	slideToggle()

	//动画$(selector).animate({params},speed,callback);
//提示：可以用 animate() 方法来操作所有 CSS 属性吗？
//是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
//同时，色彩动画并不包含在核心 jQuery 库中。
//如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。
//	动画中css属性可以使用相对值，如下使当前选择，在原有的基础上扩大150px
/*
 * $("button").click(function(){
	  $("div").animate({
	    left:'250px',
	    height:'+=150px',
	    width:'+=150px'
	  });
});
 */
//  甚至可以把属性的动画值设置为 "show"、"hide" 或 "toggle",如下，可以来回隐藏和显示height
//$("button").click(function(){
//$("div").animate({
//  height:'toggle'
//});
//});
//jQuery animate() - 使用队列功能
//默认地，jQuery 提供针对动画的队列功能。
//这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法
//调用的“内部”队列。然后逐一运行这些 animate 调用。如下方法会逐条进行展示动画
//$("button").click(function(){
//var div=$("div");
//div.animate({height:'300px',opacity:'0.4'},"slow");
//div.animate({width:'300px',opacity:'0.8'},"slow");
//div.animate({height:'100px',opacity:'0.4'},"slow");
//div.animate({width:'100px',opacity:'0.8'},"slow");
//});

	//停止
//jQuery stop() 方法
//jQuery stop() 方法用于停止动画或效果，在它们完成之前。
//stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
//$(selector).stop(stopAll,goToEnd);
//可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
//可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

	//内容和属性
//text() - 设置或返回所选元素的文本内容(获取内容时，类似于 js的textContent)
//html() - 设置或返回所选元素的内容（包括 HTML 标记）(获取内容时，类似于 js的innerHTML)
//val() - 设置或返回表单字段的值 (获取内容时，类似于 js的value
//上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。
//回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。)
//如下i表示被选中的元素列表的（如果有）下标索引,origText为原始值	
//$("#btn1").click(function(){
//$("#test1").text(function(i,origText){
//  return "Old text: " + origText + " New text: Hello world!
//  (index: " + i + ")";
//});
//});
//attr() 方法也允许您同时设置多个属性。
//下面的例子演示如何同时设置 href 和 title 属性：(对象)
//$("button").click(function(){
//$("#w3s").attr({
//  "href" : "http://www.w3school.com.cn/jquery",
//  "title" : "W3School jQuery Tutorial"
//});
//});
//jQuery 方法 attr()，也提供回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，
//以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

//$("<p></p>")以jquery创建元素

	//添加新内容
//append() - 在被选元素的结尾插入内容
//prepend() - 在被选元素的开头插入内容
//after() - 在被选元素之后插入内容
//before() - 在被选元素之前插入内容
//四个方法的参数既可以添加网页内容(相当于innerHTML),也可以添加网页元素
//直接添加文本:
//$("p").append("Some appended text.");
//添加string样式的标签
//var txt="<p>Text.</p>";  
//$("p").append(txt);
//创建标签后添加
//var txt=$("<p></p>").text("Text.");//以jquery方式创建p标签，并添加内容
//$("p").append(txt);  

	//删除内容
//remove() - 删除被选元素（及其子元素）
//empty() - 从被选元素中删除子元素
//jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
//该参数可以是任何 jQuery 选择器的语法。
//下面的例子删除 class="italic" 的所有 <p> 元素：
//$("p").remove(".italic");

	//操作css
//addClass() - 向被选元素添加一个或多个类
//removeClass() - 从被选元素删除一个或多个类
//toggleClass() - 对被选元素进行添加/删除类的切换操作
//css() - 设置或返回样式属性
//$("#div1").addClass("important blue");添加多个类

//css() 方法设置或返回被选元素的一个或多个样式属性。
//设置多个样式
//$("p").css({"background-color":"yellow","font-size":"200%"});

	//尺寸大小
//width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
//height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
//innerWidth() 方法返回元素的宽度（包括内边距）。
//innerHeight() 方法返回元素的高度（包括内边距）。
//outerWidth() 方法返回元素的宽度（包括内边距和边框）。
//outerHeight() 方法返回元素的高度（包括内边距和边框）。
//设置:$("#div1").width(500).height(500);

	//遍历祖先
//parent() 方法返回被选元素的直接父元素。
//parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。
//parentsUntil()  方法返回介于两个给定元素之间的所有祖先元素。
//下面的例子返回介于 <span> 与 <div> 元素之间的所有祖先元素：
//$(document).ready(function(){
//$("span").parentsUntil("div");
//});
//parent()和parents()函数可给定参数,然后返回给定选择器的元素

	//遍历孩子
//children() 方法返回被选元素的所有直接子元素。(ps:参数同parent)
//find() 方法返回被选元素的后代元素，一路向下直到最后一个后代(必须要有参数指定元素才能返回,要想返回所有子元素则:find("*"))

	//遍历同胞
//siblings() 方法返回被选元素的所有同胞元素。(同胞就是同胞,返回的结果不包括自己)
//next() 方法返回被选元素的下一个同胞元素。
//nextAll() 方法返回被选元素的所有跟随的同胞元素。
//nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。
//prev() 方法返回被选元素的上一个同胞元素。
//prevAll() 方法返回被选元素所有上方的同胞元素。
//prevUntil() 方法返回介于两个给定参数之间的所有上方的同胞元素。

	//过滤
//first() 方法返回被选元素的首个元素。
//last() 方法返回被选元素的最后一个元素。
//eq() 方法返回被选元素中带有指定索引号的元素。索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。
//filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
//not() 方法返回不匹配标准的所有元素。(与filter()相对)
//first() last() eq()方法不能像parent()等方法一样则在括号里加选择器

	//ajax
//	load() 方法从服务器加载数据，并把返回的数据放入被选元素中。
//$(selector).load(URL,data,callback);
//必需的 URL 参数规定您希望加载的 URL。
//可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
//可选的 callback 参数是 load() 方法完成后所执行的函数名称。
//也可以把 jQuery 选择器添加到 URL 参数。
//下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：
//$("#div1").load("demo_test.txt #p1");
//可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：
//responseTxt - 包含调用成功时的结果内容
//statusTXT - 包含调用的状态
//xhr - 包含 XMLHttpRequest 对象
//下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示“外部内容加载成功！”，
//而如果失败，则显示错误消息：
//$("button").click(function(){
//$("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
//  if(statusTxt=="success")
//    alert("外部内容加载成功！");
//  if(statusTxt=="error")
//    alert("Error: "+xhr.status+": "+xhr.statusText);
//});
//});
//
//$.get() 方法通过 HTTP GET 请求从服务器上请求数据。
//$.get(URL,callback);
//必需的 URL 参数规定您希望请求的 URL。
//可选的 callback 参数是请求成功后所执行的函数名。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。
//$.post() 方法通过 HTTP POST 请求从服务器上请求数据。
//$.post(URL,data,callback);
//必需的 URL 参数规定您希望请求的 URL。
//可选的 data 参数规定连同请求发送的数据。
//可选的 callback 参数是请求成功后所执行的函数名。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。






})























