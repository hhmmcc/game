class Bullet{
	constructor(img, bulletX, bulletY, bulletW, bulletH, type){
		this.img = img;
		this.bulletX = bulletX;
		this.bulletY = bulletY;
		this.bulletW = bulletW;
		this.bulletH = bulletH; 
		this.type = type;
		this.initImage(img);
		this.speed = 8;
		//初始化状态
		this.STATE_INIT = 0;
		//死亡状态
		this.STATE_END = this.STATE_INIT + 1;
		//设置状态
		this.state = this.STATE_INIT;
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
			case this.STATE_INIT:
			this.bulletY = this.bulletY - this.speed;
			if(this.bulletY<-this.bulletH){
				this.state = this.STATE_END;
			}
				break;
			case this.STATE_END:
			
				break;
		}
	}
	
	draw(paint){
		switch (this.state){
			case this.STATE_INIT:
			paint.drawImage(this.img,this.bulletX, this.bulletY, this.bulletW,  this.bulletH);
				break;
		}
	}
	
	collision(enemy){
		//每一颗子弹都要和敌机进行比较
		 if((this.bulletX + this.bulletW) > enemy.enemyX && 
		 this.bulletX < (enemy.enemyX + enemy.enemyW) && 
		 (enemy.enemyY + enemy.enemyH) > this.bulletY&&
		 enemy.enemyY < this.bulletY){
			return true;
		}else{
			return false;
		}
		
	}
	
	destroy() {
    //销毁图片
    this.img = null;
  	}
	
}
