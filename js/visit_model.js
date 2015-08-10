function Visit () {
}

Visit.prototype.focus_listener = function() {
	var self = this
	$(window).focus(function () { 
	 	this.isActive = true; 
	 	self.set_blur_end_time()
	}) 
};

Visit.prototype.blur_listener = function() {
	var self = this
	$(window).blur(function () { 
	 	isActive = false;
	 	self.set_blur_start_time()
	}) 
};

Visit.prototype.set_blur_start_time = function() {
	this.blur_start_time = new Date()
};

Visit.prototype.set_blur_end_time = function() {
	this.blur_end_time = new Date()
	this.calculate_away_time()
};

Visit.prototype.calculate_away_time = function() {
	this.away_time = this.blur_end_time - this.blur_start_time
	console.log(this.away_time / 1000)
};	