import { Items } from "../../items/item.js"
import { peekdown, place } from "../../misc/ant.js"
import { Block, Blocks } from "../block.js"

class Bush extends Block{
	static solid = false
	static targettable = true
	static breaktime = 0
	update(){
		if(!peekdown().dirt) this.destroy(), place(Blocks.air)
	}
}

Blocks.dandelion = class extends Bush{
	//drops(){ return new Items.dandelion(1) }
}

Blocks.rose = class extends Bush{
	//drops(){ return new Items.rose(1) }
}