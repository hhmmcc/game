class GameView{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initMap();
		this.initWolf();
		this.initTime();
		this.initData();
		this.initScore();
	}
	initData(){
		this.score = 0;
	}
	initScore(){
		this.score_1 = new Score(this.width);
	}
	initMap(){
		this.map = new Map(this.width, this.height);
	}
	initWolf(){
		this.wolf_1 = new Wolf(this.width, this.height);
		this.wolf_1.onClick = this.addScore.bind(this);
	}
	initTime(){
		this.time_1 = new Time(this.width, this.height);
		//同样将函数以参数的形势传递给一个对象的属性值，调用时直接属性+（）进行调用即可
		this.time_1.set = this.ChangeView.bind(this);
	}
	ChangeView(){
		//回调机制
		this.set(0);
	}
	/**
	 * 分数的设置
	 * */
	addScore(type){
		if(type===0){
			this.score = this.score + 10;
		}else{
			this.score = this.score - 10;
		}
	}
	run(paint){
		this.map.run(paint);
		this.wolf_1.run(paint);
		this.time_1.run(paint);
		//绘制游戏分数
		this.score_1.run(paint, this.score);
	}
	
	onmousedown(x, y){
		this.wolf_1.onmousedown(x, y);
	}
}
