class Enemy {
	constructor(imgData, width, height) {
		this.imgData = imgData;
		this.width = width;
		this.height = height;
		this.enemyW = this.width / 10;
		this.enemyH = this.width / 20;
		this.init();
		//初始化数据
		this.initData();
		this.imgEnemy(this.imgData);
		this.STATE_INIT = 0;
		this.STATE_FLY = this.STATE_INIT + 1;
		this.STATE_EXPLOSION = this.STATE_FLY + 1;
		this.STATE_END = this.STATE_EXPLOSION + 1;
		this.state = this.STATE_INIT;
	}
	imgEnemy(imgData) {
		this.enemy = new Image();
		this.enemy.src = imgData[this.index];

	}

	initBullet() {

		let bulletW = Math.floor(this.enemyW / 6);
		let bulletH = Math.floor(this.enemyW / 6);
		let bulletX = this.enemyX + (this.enemyW - bulletW) / 2;
		let bulletY = this.enemyY + this.enemyH;
		let bullet = new EnemyBullet("./img/enemyBullet.png", bulletX, bulletY, bulletW, bulletH,this.height);
		this.en_bu_box.push(bullet);

	}

	initData() {
		this.index = Math.floor(Math.random() * 2);
		this.speed = Math.floor(5 + Math.random() * 4);
		this.enemyX = Math.random() * (this.width - this.enemyW);
		this.enemyY = (-1) * (40 + Math.random() * (this.enemyH));
		this.state = this.STATE_INIT;
	}
	init() {
		//创建一个敌人子弹库
		this.en_bu_box = [];
	}
	run(paint) {
//		this.paint = paint;
		this.logic(paint);
		this.draw(paint);
	}

	logic(paint) {

		switch(this.state) {
			case this.STATE_INIT:
				this.enemyY = this.enemyY + 5;
				if(this.enemyY < -this.enemyH) {
					this.state = this.STATE_FLY;
				}
				break;
			case this.STATE_FLY:
				//移动屏幕
				this.enemyY = this.enemyY + 5;
				if(this.enemyY > this.height / 4) {
					let num = Math.floor(Math.random() * 5);
					if(num === 0) {
						this.initBullet();
					}
				}
				if(this.enemyY > this.height) {
					
					this.state = this.STATE_END;
					
				}
				this.deleteBullet(paint);
				break;
			case this.STATE_EXPLOSION:
				this.bomb.run(paint);
				if(this.bomb.state==this.bomb.STATE_END){
					this.state = this.STATE_END;
				}
				this.deleteBullet(paint);
				break;
			case this.STATE_END:
				//让飞机重生
				this.initData();
				//画子弹和删除子弹
				this.deleteBullet(paint);
				break;
		}

	}
	
	deleteBullet(paint){

		for (let i = 0 ; i<this.en_bu_box.length; i++) {
			if(this.en_bu_box[i].state = this.en_bu_box[i].STATE_END){
				this.en_bu_box[i].destroy();
				this.en_bu_box.splice(i, 1 );
				i--;
			}else{
				this.en_bu_box[i].run(paint);
			}
		}
	}

	setExploision() {		
		this.state = this.STATE_EXPLOSION;
		this.initBomd();
	}
	initBomd() {
	
		//设置炸弹的宽度和高度，以及所在位置
		let bombW = Math.floor((this.enemyW/3)*4);
		let bombX=this.enemyX + (bombW-this.enemyW)/2;
		let bombY = this.enemyY + (this.enemyH-bombW) / 2;
		this.bomb = new Bomb(bombX, bombY,bombW, bombW);
	}

	draw(paint) {

		switch(this.state) {
			case this.STATE_FLY:
				paint.drawImage(this.enemy, this.enemyX, this.enemyY, this.enemyW, this.enemyH);
				break;
		}

	}

}