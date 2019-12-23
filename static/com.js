function m$y(obool,newMaskClassName) {
    this.scroll = function (fn) {
        window.onscroll=function () {
          var scrollH = document.body.scrollHeight||document.documentElement.scrollHeight;
          var clientHeight = window.innerHeight;
          var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
          var h = clientHeight + scrollTop;
          // console.log(scrollH-h);
          if((scrollH-h)<=10&&(scrollH-h)>=0){
            fn()
          }
          // if((scrollH-h)==0){
          //   fn()
          // }
        }
    };
	this.resizes = function(fonts, initW, minW) {
		var myIndoc = window.document.documentElement;
		var myIndocWidth = window.document.documentElement.clientWidth;
		if (minW && myIndocWidth <= minW) {
			myIndocWidth = min
		};
		var myInft = fonts * myIndocWidth / initW;
		myIndoc.style.fontSize = myInft + 'px';
		this.rem = myInft;
		this.precent = myIndocWidth / initW
		return {
			rem: myInft,
			percent: myIndocWidth / initW
		};
	};
	this.sessionStores = (function() {
		return {
			get: function(okey) {
				if (typeof okey == "object") {
					throw "参数不能是对象"
					return
				}
				//var ooval=baseCode.decode(window.sessionStorage.getItem(okey))
				var ooval = (window.sessionStorage.getItem(okey))
				try {
					ooval = JSON.parse(ooval)
				} catch (m) {
	
				}
				return ooval
			},
			set: function(okey, obj) {
				if (!okey) {
					throw "键名参数异常"
					return
				}
				if (typeof obj == 'object') {
					obj = JSON.stringify(obj)
				} else if (obj == null) {
					obj = ""
				}
				// obj=baseCode.encode(obj)
				window.sessionStorage.setItem(okey + '', obj)
			},
			remove: function(arr) {
				if (typeof arr == 'string') {
					window.sessionStorage.removeItem(arr)
				} else if (Object.prototype.toString.call(arr) === '[object Array]') {
					for (var ini = 0; ini < arr.length; ini++) {
						window.sessionStorage.removeItem(arr[ini])
					}
				} else if (typeof arr == 'undefined' || arr == null) {
					window.sessionStorage.clear();
				} else {
					throw "参数异常"
				}
			}
		}
	})();
	}
window.m$=new m$y();
//console.log(m$)