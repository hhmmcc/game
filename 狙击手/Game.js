class Game{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initCanvas();
		this.initGameView();
	}
	/**
	 * 初始化画板
	 * */
	initCanvas(){
		//创建画板
		let canvans = document.createElement("canvas");
		 console.log(this.width);
		 canvans.width = this.width;
		canvans.height = this.height;
		//设置边界
		canvans.style.border = "1px solid #6c6c92";
		//创建画笔
		 this.paint = canvans.getContext("2d");
		 //获取盒子app
		 let div = document.getElementById("app");
		//把画板添加到当前页面
		div.append(canvans);
	}
	/**
	 * 初始化游戏页面
	 * */
	initGameView(){
		 this.view = new  GameView(this.width, this.height);
	}
	/**
	 * 游戏开始
	 * */
	start(){
		setInterval(this.run.bind(this), 50);
	}
	/**
	 * 定时器每隔50ms调用的函数
	 * */
	run(){
		this.view.run(this.paint);
	}
	onkeypress(keyCode){
		this.view.onkeypress(keyCode);
	}
	
}
