//Bars

$(document).ready(function(){
	var bar = new ProgressBar.Circle(html, {
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#ED6A5A', a:0},
	  to: {color: '#ED6A5A', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar1 = new ProgressBar.Circle(css, {
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#18BC9C', a:0},
	  to: {color: '#18BC9C', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar2 = new ProgressBar.Circle(php, {
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#e84a64', a:0},
	  to: {color: '#e84a64', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar3 = new ProgressBar.Circle(mysql, {
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#e6cf4c', a:0},
	  to: {color: '#e6cf4c', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar4 = new ProgressBar.Circle(wordpress, {
	  color: '#062d27',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#062d27', a:0},
	  to: {color: '#062d27', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar5 = new ProgressBar.Circle(magento, {
	  color: '#e4763b',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#e4763b', a:0},
	  to: {color: '#e4763b', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar6 = new ProgressBar.Circle(angular, {
	  color: '#bc6198',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#bc6198', a:0},
	  to: {color: '#bc6198', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar7 = new ProgressBar.Circle(node, {
	  color: '#61afbc',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#61afbc', a:0},
	  to: {color: '#61afbc', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar8 = new ProgressBar.Circle(javascript, {
	  color: '#f93fa5',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#f93fa5', a:0},
	  to: {color: '#f93fa5', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});
	var bar9 = new ProgressBar.Circle(ionic, {
	  color: '#d4f93f',
	  trailColor: '#eee',
	  trailWidth: 10,
	  duration: 1400,
	  easing: 'easeInOut',
	  strokeWidth: 10,
	  from: {color: '#d4f93f', a:0},
	  to: {color: '#d4f93f', a:1},
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	  }
	});

	$(window).scroll(function() {
	    var top_of_element = $("#skills").offset().top;
	    var bottom_of_element = $("#skills").offset().top + $("#skills").outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    var top_of_screen = $(window).scrollTop();

	    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	        bar.animate(1.0);
	        bar1.animate(0.9);
	        bar2.animate(0.8);
	        bar3.animate(0.8);
	        bar4.animate(0.7);
	        bar5.animate(0.6);
	        bar6.animate(0.8);
	        bar7.animate(0.6);
	        bar8.animate(0.8);
	        bar9.animate(0.7);
	    }
	});
})


//Text typewriter
// $(document).ready(function(){
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #2C3E50}";
        document.body.appendChild(css);
    };

// })

//Timeline
$(document).ready(function(){
    var my_posts = $("[rel=tooltip]");
    for(i=0;i<my_posts.length;i++){
        the_post = $(my_posts[i]);
        if(the_post.hasClass('invert')){
            the_post.tooltip({ placement: 'left'});
            the_post.css("cursor","pointer");
        }else{
            the_post.tooltip({ placement: 'rigt'});
            the_post.css("cursor","pointer");
        }
    }
});
