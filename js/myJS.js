/*
 * 在对象的创建中，在如下方法中的属性或方法创建时会重复创建。
 * 即：若定义c1=new Car();c2=new Car();两个参数各保存一组参数和方法，
 * 而我们需要的对象的创建方式应该是参数独立，
 * 而方法指向同一个方法（最好只创建一遍，即使指向一个方法）才对；而使用这种方式
 * 会为每个定义的对象添加同一个函数，浪费资源
 * function Car(sColor,iDoors,iMpg) {
	  this.color = sColor;
	  this.doors = iDoors;
	  this.mpg = iMpg;
	  this.drivers = new Array("Mike","John");
	  this.showColor = function() {
	    alert(this.color);
	  };
	}
	当使用如下方法时，为对象的属性和方法都定义为指针，此时修改其中一个对象时，另一个对象的对应属性也会变化
	这又不合乎需求，所以需要结合以上两种方法
	function Car() {
	}
	
	Car.prototype.color = "blue";
	Car.prototype.doors = 4;
	Car.prototype.mpg = 25;
	Car.prototype.showColor = function() {
	  alert(this.color);
	};
	使用如下方法时，对向的属性别分别建立互相独立（而不是指向同一个内存），
	而方法都相同（指向一个函数），这样就符合需求了
	function Car(sColor,iDoors,iMpg) {
	  this.color = sColor;
	  this.doors = iDoors;
	  this.mpg = iMpg;
	  this.drivers = new Array("Mike","John");
	}
	
	Car.prototype.showColor = function() {
	  alert(this.color);
	};
	上述方法就是“打飞机”例子里老师使用的方法，能够解决问题，但是又不符合一些使用惯了
	其他语言的编程者（构造对象应该在一个函数内定义好，上述代码则是分离了(￢_￢)）
	所以开发者又研究出了以下方法，这样定义对象时，属性和方法都被定义在一个函数内，
	而属性和方法又能符合需求（属性独立，方法指向同一个方法），有因为里面的判断条件，
	Car.prototype.showColor语句只使用了一次，基本和java等其他语言中定义对象的过程一样了！
	function Car(sColor,iDoors,iMpg) {
	  this.color = sColor;
	  this.doors = iDoors;
	  this.mpg = iMpg;
	  this.drivers = new Array("Mike","John");
	  
	  if (typeof Car._initialized == "undefined") {
	    Car.prototype.showColor = function() {
	      alert(this.color);
	    };
		
	    Car._initialized = true;
	  }
	}
 * */

var test = 0;
//测试全局变量和局部变量的使用方式
//结论同时定义了局部变量和全局变量时，函数内若有var 变量则优先使用函数内定义的值，但函数内也可以使用全局变量，
//并修改全局变量的值，在函数内被改变的全局变量的值，全局变量是真的被改变了！
function testPropertyOfUseRange(){
	console.log(test);
	test = 1;
	
}
testPropertyOfUseRange();
console.log(test);

//减法运算若有字符串（两边都是，或其中一边），则把字符串转化为数字，如下
var result = "5" - "1";//输出4
//console.log(result);

//无论何时比较一个数字和一个字符串，ECMAScript 都会把字符串转换成数字，然后按照数字顺序比较它们。

var bResult = "25" < 3;//输出 "false"
//alert(bResult);	
//如果字符串为不能转化为数字的值，则返回false
var bResult = "a" < 3;//左边返回NaN，任何包括NaN的关系运算符都要返回false，所以输出为false
//alert(bResult);

//数值除了0为逻辑中的false其他正负数都为true
//字符串都为逻辑中的true，当然，不包括空字符串
//NaN为false

/*
 *  var patt1=new RegExp("e","g");
	do
	{
	result=patt1.exec("The best things in life are free");
	document.write(result);
	}
	while (result!=null) 
	输出:eeeeeenull
	设定g检索，则exec先查找指定字符然后返回该字符，同时保存当前找到的字符的位置，如果在次运行了exec()，则从存储的位置开始检索
 */
console.log(screen.availHeight + "+" + screen.availWidth);


//测试export和import,报错= =

//export const foo = "this is foo";
//console.log(foo);











