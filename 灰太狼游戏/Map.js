class Map{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initImage();
	}
	initImage(){
		this.map_1 = new Image();
		this.map_1.src = "./img/game_bg.jpg";
		this.map_1.style.width = this.width + 'px';
		this.map_1.style.height = this.height + 'px';
	}
	run(paint){
		this.draw(paint);
	}
	draw(paint){
		paint.drawImage(this.map_1,0,0, this.width,this.height );
	}
}
