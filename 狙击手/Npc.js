class Npc{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initFly();
//		//初始化子弹
//		this.initBullet();
		
		//创建一个子弹库方法时间
		this.bulletTime();
		//创建一个索引
		this.onkeypress();
		//初始化数据
		this.initDate();
	}
	initDate(){
		this.KEY_UP = 119;
		this.KEY_DOWN = 115;
		this.KEY_LEFT = 97;
		this.KEY_RIGHT = 100;
		this.KEY_ENTER = 13;
		//建立创建子弹库的时间
		this.time = 30;
		this.index = 0;		
	}
	initFly(){
		//创建一个子弹库
		this.bulletbox = [];
		this.img = new Image();
		this.img.src = "./img/player.png";
		this.img.imgW = (this.width/30)*3;
		this.img.imgH = (this.width/30)*2;
		this.img.imgX = (this.width-this.img.imgW)/2;
		this.img.imgY = this.height-this.img.imgH*2;
	}
	initBullet(){
		let bulletW = Math.floor(this.img.imgW/6);
		let bulletH = Math.floor(this.img.imgW/3);
		let bulletX = this.img.imgX + (this.img.imgW - bulletW)/2;
		let bulletY = this.img.imgY - bulletH;
		let bullet = new Bullet("./img/bullet.png", bulletX, bulletY, bulletW, bulletH);
		
		this.bulletbox.push(bullet);
	}
	/**
	 * 初始化子弹库
	 * */
	logic(paint){
		this.index++;
		if(this.index%this.time == 0){
			this.initBullet();
		}

		for (let i = 0; i<this.bulletbox.length; i++) {
			if(this.bulletbox[i].state==this.bulletbox[i].STATE_END){
				this.bulletbox[i].destroy();
				this.bulletbox.splice(i,1);//删除掉超出屏幕的子弹
				
			}else{
				this.bulletbox[i].run(paint);
			}
			
		}
}
	
	bulletTime(){
		this.time = 8 + Math.floor(Math.random()*4);
	}
	
	run(paint){
		this.draw(paint);
		this.logic(paint);
	}
	
	draw(paint){
		
		paint.drawImage(this.img, this.img.imgX, this.img.imgY,this.img.imgW,this.img.imgH);
		
	}
	onkeypress(keyCode){
		this.keyCode = keyCode;
			switch (keyCode){
				case this.KEY_UP:
				this.img.imgY = this.img.imgY - 10;
				if(this.img.imgY<0){
					this.img.imgY = 0;
				}
					break;
				case this.KEY_DOWN:
				this.img.imgY = this.img.imgY + 10;
				if(this.img.imgY>this.height-this.img.imgH){
					this.img.imgY = this.height-this.img.imgH;
				}
					break;
				case this.KEY_LEFT:
				this.img.imgX = this.img.imgX - 10;
				if(this.img.imgX<0){
					this.img.imgX = 0;
				}
					break;
				case this.KEY_RIGHT:
				this.img.imgX = this.img.imgX + 10;
				if(this.img.imgX>(this.width-this.img.imgW)){
					this.img.imgX = this.width-this.img.imgW;
				}
					break;
				case this.KEY_ENTER:
					this.initBullet();
					break;

			}
	}
}
