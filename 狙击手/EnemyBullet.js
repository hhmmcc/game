class EnemyBullet{
		constructor(img, bulletX, bulletY, bulletW, bulletH, height){
		this.img = img;
		this.bulletX = bulletX;
		this.bulletY = bulletY;
		this.bulletW = bulletW;
		this.bulletH = bulletH; 
		this.height = height;
		this.initImage(img);
		this.speed = -15;
		//创建一个索引
		this.index = 0;
		this.STATE_FLY = 0;
		this.STATE_END = this.STATE_FLY + 1;
		this.state = this.STATE_FLY;
	}
	initImage(img){
		//创建一个图片
		this.img = new Image();
		//给图片设置资源
		this.img.src = img;
	}
	run(paint){
		this.logic();
		this.draw(paint);
	}
	logic(){
		switch (this.state){
			case this.STATE_FLY:
			this.bulletY = this.bulletY - this.speed;
			if(this.bulletY>this.height){
				this.state = this.STATE_END;
			}
				break;
			case this.STATE_END:
				break;
		}
	}
	
	draw(paint){
		switch (this.state){
			case this.STATE_FLY:
			paint.drawImage(this.img,
				this.bulletX,
				this.bulletY,
				this.bulletW, 
				this.bulletH);
				break;
			case this.STATE_END:
				break;
		}
	}
	
	destroy(){
		this.img = null;
	}
	
}
