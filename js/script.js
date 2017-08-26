
$(document).ready(function() {

interact('.center')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: endDrag, //function (event) {
    	/*var target = event.target;
    	
	    target.style.webkitTransform =
	    target.style.transform =
      	'translate(0px, 0px)';
	    target.setAttribute('data-x', 0);
	    target.setAttribute('data-y', 0);
    	$('.center').css({
    		'transition': '3s'
    	});
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }*/
  });
    var arr_1_width = $('.arr_1').width(),
     	arr_2_width = $('.arr_2').width(),
      	arr_3_width = $('.arr_3').width(),
        arr_4_width = $('.arr_4').width();

      function endDrag (event) {
    	var target = event.target;
    	$(".arrows").addClass('ez').css({
    		'width': arr_1_width,
    		'height': arr_1_width
    	});
	    target.style.webkitTransform =
	    target.style.transform =
      	'translate(0px, 0px)';
	    target.setAttribute('data-x', 0);
	    target.setAttribute('data-y', 0);
    	$('.center').css({
    		'transition': '3s'
    	});
  }

    function dragMoveListener (event) {
    	$('.center').css({
    		'transition': '0s'
    	});


    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (((parseFloat(target.getAttribute('data-x')) || 0) + event.dx <= 200) && ((parseFloat(target.getAttribute('data-x')) || 0) + event.dx >= -200)) ? (parseFloat(target.getAttribute('data-x')) || 0) + event.dx : ((parseFloat(target.getAttribute('data-x')) || 0) + event.dx < -200) ? -200 : 200,
        y = (((parseFloat(target.getAttribute('data-y')) || 0) + event.dy <= 200) && ((parseFloat(target.getAttribute('data-y')) || 0) + event.dy >= -200)) ? (parseFloat(target.getAttribute('data-y')) || 0) + event.dy : ((parseFloat(target.getAttribute('data-y')) || 0) + event.dy < -200) ? -200 : 200;
    // translate the element

	$(".arrows").removeClass('ez');

    $('.arr_1').css({
    	'width': arr_1_width - 0.15 * y,
    	'height': arr_1_width - 0.15 * y
    });
    $('.arr_2').css({
    	'width': arr_2_width + 0.15 * x,
    	'height': arr_2_width + 0.15 * x
    });
    $('.arr_3').css({
    	'width': arr_3_width + 0.15 * y,
    	'height': arr_3_width + 0.15 * y
    });
    $('.arr_4').css({
    	'width': arr_4_width - 0.15 * x,
    	'height': arr_4_width - 0.15 * x
    });

    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
});