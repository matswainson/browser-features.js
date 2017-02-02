;(function(window, undefined){

	if (window.browserFeatures) {
		var html = '',
			table = document.querySelector('#browser_features');
		for (var feature in window.browserFeatures) {
			if (typeof window.browserFeatures[feature] === 'object') {
				var i = 0;
				for (var test in window.browserFeatures[feature]) {
					html += '<tr>';
					if (!i) {
						html += '<td style="font-weight:bold" rowspan="2">' + feature + '</td>';
					}
					html += '<td style="font-weight:bold">' + test + '</td>';
					html += '<td>' + (window.browserFeatures[feature][test] ? 'yes' : 'no') + '</td>';
					html += '</tr>';
					i++;
				}
			} else {
				html += '<tr>';
				html += '<td colspan="2" style="font-weight:bold">' + feature + '</td>';
				html += '<td>' + (window.browserFeatures[feature] ? 'yes' : 'no') + '</td>';
				html += '</tr>';
			}
		}
		table.innerHTML = html;
	}

})(window);
