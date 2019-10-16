class Map{
	constructor(mapData, width, height){
		this.width = width;
		this.height = height;
		this.initImage(mapData);
	}
	
	initImage(mapData){
		//创建一个图片容器
		this.img = [];
		//创建图片并设置背景图
		//设置图片背景
		for (let i = 0; i<mapData.length; i++) {
		//创建一个图片
		this.img[i] = document.createElement("img");
		//设置背景图片
		this.img[i].src = mapData[i];
		this.img[i].imgH = Math.ceil(this.height/7);
		this.img[i].imgX = this.width;
		this.img[i].imgY = this.img[i].imgH*i;
		}
		
	}
	
	run(paint){
		this.logic();
		this.draw(paint);
	}
	
	logic(){
		for (let i = 0; i<this.img.length; i++) {
			this.img[i].imgY--;
			if(this.img[i].imgY<-this.img[i].imgH){
				this.img[i].imgY = (this.img.length-1)*this.img[i].imgH;
			}
		}
	}
	
	draw(paint){
		for (let i = 0; i<this.img.length; i++) {
			paint.drawImage(this.img[i], 0, this.img[i].imgY, this.img[i].imgX, this.img[i].imgH);
		}
	}
	
}
