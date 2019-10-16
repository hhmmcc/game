class Wolf{
	constructor(width, height) {
        this.width = width;
        this.height = height;
        this.initData();
        this.initWolf_1();
        this.STATE_NOMORL = 0;
        this.STATE_STROCK = this.STATE_NOMORL + 1;
        this.state = this.STATE_NOMORL;
    }
	
	initData(){
		
        /**
         * 狼的坐标数据
         */
        this.arrPos = [
            { x: 93, y: 111},
            { x: 25, y: 160},
            { x: 201, y:209},
            { x: 120, y: 275},
            { x: 208, y: 288},
            { x: 29, y: 290},
            { x: 115, y: 270},
            { x: 200, y: 300},
            { x: 189, y: 140}
        ];
        this.index = -1; 
        this.imgW = 108;
        this.imgH = 101;
		//狼位置的索引
		this.wolfType = 0;
		this.positionWolf = 0;
		//游戏分数
        this.score = 0;
	}
	getWolfPosition(){
		this.positionWolf = Math.floor(Math.random()*this.arrPos.length);
	}
	getWolfType(){
		this.wolfType = Math.floor(Math.random()*2);
	}
	initWolf_1(){
		this.wolfs = [[],[]];
		//大灰太狼的照片
		this.imgData = ['./img/wolf/h0.png',
						'./img/wolf/h1.png',
						'./img/wolf/h2.png', 
						'./img/wolf/h3.png',
						'./img/wolf/h4.png',
						'./img/wolf/h5.png',
						'./img/wolf/h6.png',
						'./img/wolf/h7.png',
						'./img/wolf/h8.png',
						'./img/wolf/h9.png'];
		//小灰太狼图片
        this.wolfXImages = ['./img/wolf/x0.png',
					        './img/wolf/x1.png', 
					        './img/wolf/x2.png',
					        './img/wolf/x3.png',
					        './img/wolf/x4.png', 
					        './img/wolf/x5.png', 
					        './img/wolf/x6.png', 
					        './img/wolf/x7.png',
					        './img/wolf/x8.png',
					        './img/wolf/x9.png'];
			for (let i = 0; i<this.imgData.length; i++) {
				let wolf = new Image();
				wolf.src = this.imgData[i];
				this.wolfs[this.wolfType].push(wolf);
			}
			
			this.wolfType = 1;
			for (let i = 0; i<this.wolfXImages.length; i++) {
				let wolf = new Image();
				wolf.src = this.wolfXImages[i];
				this.wolfs[this.wolfType].push(wolf);
			}
			 this.getWolfType();
	}
	run(paint){
		this.logic();
		this.draw(paint);
	}
	logic(){
		this.index++;
		switch (this.state){
			case this.STATE_NOMORL:
				if(this.index>=6){
					this.index = 0;
					this.getWolfType();
					this.getWolfPosition();
				}
				break;
			case this.STATE_STROCK:
				if(this.index>=10){
					this.index = 0;
					this.getWolfType();
					this.getWolfPosition();
					this.state = this.STATE_NOMORL;
				}
				break;
		}
		
	}
	draw(paint){
		
			paint.drawImage(this.wolfs[this.wolfType][this.index],
				this.arrPos[this.positionWolf].x,
				this.arrPos[this.positionWolf].y, 
				this.imgW, 
				this.imgH);
	}
	
	onmousedown(x, y){
		if(x>this.arrPos[this.positionWolf].x && x< this.arrPos[this.positionWolf].x + this.imgW&& y>this.arrPos[this.positionWolf].y && y<this.arrPos[this.positionWolf].y + this.imgH){
			
			if(this.state==this.STATE_NOMORL){
				this.state = this.STATE_STROCK;
			this.index = 5;	
			this.onClick(this.wolfType);
			}

		}
	}
}
