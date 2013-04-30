Crafty.c('BlockMap', {
  init: function() {
    this.requires('Mouse');
    this.bind("Click", function(e) {
  		//destroy on click
		this.destroy();
	});
	//configure polygon where event click
	this.areaMap([0,16], [32,0],[64,16],[64,48],[32,64], [0,48]);


  },
     
 
  

  
 
  
});