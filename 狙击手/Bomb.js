class Bomb{
	constructor(bombX, bombY, bombW, bombH){
			this.bombX = bombX;
			this.bombY = bombY;
			this.bombW = bombW;
			this.bombH = bombH;
			this.STATE_FLY = 0;
			this.STATE_END = this.STATE_FLY + 1;
			this.state = this.STATE_FLY;
			this.initData();
			this.initImage();
	}
	
	initData(){
		//设置炸弹开始的坐标
		this.bombIndex = 0;
		//炸弹图片数据
		this.bombData = [
			"./img/explosion01.png",
			"./img/explosion02.png",
			"./img/explosion03.png",
			"./img/explosion04.png",
			"./img/explosion05.png",
			"./img/explosion06.png"
		];
		this.bombs = [];
	}
	initImage(){
		for(let i = 0; i < this.bombData.length; i++) {
			let bomd = new Image();
			//设置图片资源
			bomd.src = this.bombData[i];
			this.bombs.push(bomd);
		}
	}
	run(paint){
		this.logic();
		this.draw(paint);
	}
	logic(){
		switch (this.state){
			case this.STATE_FLY:
				this.bombIndex++;
				if(this.bombIndex>=6){
					this.state = this.STATE_END;
					this.bombs = null;
				}
				break;
			case this.STATE_END:
				break;
		}
	}

	draw(paint){
		switch (this.state){
			case this.STATE_FLY:
				paint.drawImage(this.bombs[this.bombIndex],this.bombX,this.bombY, this.bombW, this.bombH);
				break;
		}
	}
}
