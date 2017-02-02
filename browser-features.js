;(function(window, undefined){

	var browserFeatures = {
		css: {
			transform: 0,
			transition: 0
		},
		localStorage: 0,
		svg: 0
	};

	function testProps(prop) {
		var body = document.body || document.documentElement,
			bodyStyle = body.style,
			attr = prop;
		if (typeof bodyStyle[attr] === 'string') {
			return true;
		}
		var vendors = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
		attr = attr.charAt(0).toUpperCase() + attr.substr(1);
		for (var i=0; i < vendors.length; i++) {
			if (typeof bodyStyle[vendors[i] + attr] === 'string') {
				return true;
			}
		}
		return false;
	}

	var tests = {
		css: {
			transform: testProps('transform'),
			transition: testProps('transition')
		},
		localStorage: (function() {
			if (typeof window.localStorage === 'undefined') {
				return false;
			}
			var store = 'browserFeature';
			try {
				window.localStorage.setItem(store, store);
				window.localStorage.removeItem(store);
				return true;
			} catch (e) {
				return false;
			}
		})(),
		svg: (function() {
			return typeof SVGRect !== 'undefined';
		})()
	};

	for (var feature in tests) {
		if (typeof tests[feature] === 'object') {
			for (var test in tests[feature]) {
				browserFeatures[feature][test] = tests[feature][test] ? true : false
			}
		} else {
			browserFeatures[feature] = tests[feature] ? true : false;
		}
	}
	
	window.browserFeatures = browserFeatures;

})(window);
