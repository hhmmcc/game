class Game{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initCanvas();
		this.initView();
		this.STATE_MENU = 0;
		this.STATE_VIEW = 1;
		this.state = this.STATE_VIEW;
	}
	initCanvas(){
		//创建一个画布
		let canvas = document.createElement("canvas");
		//获得画笔
		canvas.style.border = "1px solid black";
		canvas.width = this.width;
		canvas.height = this.height;
		this.paint = canvas.getContext("2d");
		this.paint.font = "30px Arial";
        this.paint.fillStyle = "red";
		let div = document.getElementById("app");
		div.append(canvas);
		
	}
	start(){
		setInterval(this.run.bind(this), 150);
	}
	
	initView(){
		switch (this.state){
			case this.STATE_VIEW:
			this.view = new GameView(this.width, this.height);
				break;
			case this.STATE_MENU:
			this.view = new GameMenu(this.width, this.height);
				break;
		}
		//让函数以参数的形势传给对象(其实传的就是引用地址)
		this.view.set = this.setState.bind(this);
	}
	
	setState(state){
		//设置状态值
		this.state = state;
		//改变状态值，对页面进行更换
		this.initView();
	}
	
	run(){
		this.view.run(this.paint);
	}
	
	logic(){
		
	}
	
	onmousedown(x, y){
		this.view.onmousedown(x, y);
	}
}
