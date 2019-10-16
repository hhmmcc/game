class GameMenu{
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initImage();
		this.initDate();
		this.initStartButton();
	}
	initImage(){
		this.img = new Image();
		this.img.src = "./img/startBg.jpg";
		
	}
	initStartButton(){
		this.start = new StartButton(this.width, this.height);
		this.start.set = this.ChangeView.bind(this);
	}
	ChangeView(){
		this.set(1);
	}
	initDate(){
		this.gamestate = "Gameover";
	}
	
	run(paint){
		this.draw(paint);
		//绘制游戏结束的字
		paint.fillText(this.gamestate, (this.width / 10) * 3, 250, 150, 100);
		//绘制开始键
		this.start.run(paint);
	}
	logic(){

	}
	draw(paint){
			paint.drawImage(this.img,0,0, this.width,this.height);
	}
	onmousedown(x, y){
		this.start.onmousedown(x, y);
	}
}
