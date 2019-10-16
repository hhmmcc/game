class StartButton{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initImage();
		this.initDate();
	}
	
	initDate(){
		this.imgW = 188;
		this.imgH = 66;
		this.imgX = 70;
		this.imgY = 350;
		
	}
	
	initImage(){
		this.img = new Image();
		this.img.src = "./img/IStart.png";
		
	}

	run(paint){
		this.draw(paint);
	}
	logic(){

	}
	draw(paint){
			paint.drawImage(this.img,this.imgX,this.imgY, this.imgW,this.imgH);
	}
	onmousedown(x, y){
		if(x>this.imgX && x<this.imgW + this.imgX && y>this.imgY && y<this.imgY + this.imgH){
			this.set();
		}
	}
}
