class GameView{
	constructor(width, height){
		this.width = width;
		this.height = height;
	  	this.initImageDate();
		this.initMap();
		this.initNpc();
		this.initEnemy();
	}
	initImageDate(){
		//准备图片资源
	   this.mapData = [
	      "./img/bg__01.png",
	      "./img/bg__02.png",
	      "./img/bg__03.png",
	      "./img/bg__04.png",
	      "./img/bg__05.png",
	      "./img/bg__06.png",
	      "./img/bg__07.png",
	      "./img/bg__08.png"
	    ];
	}
	initMap(){
		this._map = new Map(this.mapData, this.width, this.height);
	}
	
	initNpc(){
		this.npc = new Npc(this.width, this.height);
	}
	initEnemy(){
		let imgData = ["./img/enemy1.png", "./img/enemy2.png"];
		this.num = 2;
		this.enemyBox = [];
		for (let i = 0; i<this.num; i++) {
			let  enemy = new Enemy(imgData, this.width, this.height);
			this.enemyBox.push(enemy);
		}
	}
	
	run(paint){
		
		this._map.run(paint);
		this.npc.run(paint);
		this.enemyBox.forEach(function(enemy){
			enemy.run(paint);
		});
		let that = this;
		this.npc.bulletbox.forEach(function(bullet){
			
			that.enemyBox.forEach(function(enemy){
				let bool = bullet.collision(enemy);
				if(bool){
					bullet.state = bullet.STATE_END;
					enemy.setExploision();
				}
				
			});
		});
		
	}
	
	onkeypress(keyCode){
		this.npc.onkeypress(keyCode);
	}
		
}
