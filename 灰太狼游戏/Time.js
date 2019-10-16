class Time{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initImage();
		this.initDate();
	}
	initImage(){
		this.img = new Image();
		this.img.src = "./img/progress.png";
	}
	
	initDate(){
		this.runTime = 0;
		this.time = 1000;
		this.imgX = 63;
		this.imgY = 66;
		this.imgW = 180;
		this.imgH = 16;
		this.data = 0;
		//时间进度条
		this.temp = this.imgW;
	}
	
	run(paint){
		this.logic();
		this.runTime += 150;
		this.draw(paint);
	}
	logic(){
		this.temp = this.imgW - this.data;
		if(this.runTime%this.time==0){
			this.data += 10;
		}
		if(this.temp<=0){
			this.temp = 0;
			//通过回调机制，先通知游戏页面，再游戏页面通知game页面，对游戏页面进行管理,进行游戏菜单的绘制
			this.set();
		}
	}
	draw(paint){
			paint.drawImage(this.img,this.imgX,this.imgY, this.temp,this.imgH);
	}
}
