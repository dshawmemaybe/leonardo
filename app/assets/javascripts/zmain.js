var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#index"))
			.add($("#scuba"))
			.add($("#boat"))
			.add($("#bridge"))
			.add($("#screw"))
			.add($("#dredge"))
			.add($("#works_cited"));

	parallax.background = $("body");

	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};

	parallax.index.onload=function(){
		setRight("scuba", "Scuba");
		setLeft("dredge","Dredge");
		setBottom("works_cited","Works Cited");
	};

	parallax.scuba.onload=function(){
		setTop("index", "Index")
		setRight("boat", "Boat");
		setLeft("index","Index");
		setBottom("works_cited","Works Cited");
	};
	
	parallax.boat.onload=function(){
		setTop("index", "Index")
		setRight("bridge", "Bridge");
		setLeft("scuba","Scuba");
		setBottom("works_cited","Works Cited");
	};

	parallax.bridge.onload=function(){
		setTop("index", "Index")
		setRight("screw", "Screw");
		setLeft("boat","Boat");
		setBottom("works_cited","Works Cited");
	};

	parallax.screw.onload=function(){
		setTop("index", "Index")
		setRight("dredge", "Dredge");
		setLeft("bridge","Bridge");
		setBottom("works_cited","Works Cited");
	};

	parallax.dredge.onload=function(){
		setTop("index", "Index")
		setRight("index", "Index");
		setLeft("screw","Screw");
		setBottom("works_cited","Works Cited");
	};

	parallax.works_cited.onload=function(){
		setTop("index", "Index");
	};

	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();

	parallax.index.show();

	var Page = (function() {
					var $navArrows = $( '#nav-arrows' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
							
						},
						initEvents = function() {
							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {
								slitslider.next();
								return false;
							} );
							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;
							} );
						};
						return { init : init };
				})();
				Page.init();

				var Page2 = (function() {
					var $navArrows = $( '#nav-arrows-screw' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider-screw' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
							
						},
						initEvents = function() {
							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {
								slitslider.next();
								return false;
							} );
							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;
							} );
						};
						return { init : init };
				})();
				Page2.init();

				var Page3 = (function() {
					var $navArrows = $( '#nav-arrows-boat' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider-boat' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
							
						},
						initEvents = function() {
							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {
								slitslider.next();
								return false;
							} );
							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;
							} );
						};
						return { init : init };
				})();
				Page3.init();

				var Page4 = (function() {
					var $navArrows = $( '#nav-arrows-dredge' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider-dredge' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
							
						},
						initEvents = function() {
							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {
								slitslider.next();
								return false;
							} );
							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;
							} );
						};
						return { init : init };
				})();
				Page4.init();

				var Page5 = (function() {
					var $navArrows = $( '#nav-arrows-bridge' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider-bridge' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
							
						},
						initEvents = function() {
							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {
								slitslider.next();
								return false;
							} );
							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;
							} );
						};
						return { init : init };
				})();
				Page5.init();

				//$(".ripple").waterripple({onclick: true});
});