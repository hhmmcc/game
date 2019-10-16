class Score{		
	constructor(width){
		this.width = width;
	}

	run(paint, score){
		this.draw(paint, score);
	}
	
	logic(){
		
	}
	draw(paint,score){
			paint.fillText(score, (this.width / 10) * 9, 85, 20, 30);
	}
	
}
