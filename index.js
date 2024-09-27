import { Blocks, Block, BlockTexture } from 'definitions'
import blocksPng from './blocks.png'

class Bush extends Block{
	static solid = false
	static opacity = 0
	static targettable = true
	static placeSounds = audioSet('grass/place', 4)
}

Blocks.dandelion = class extends Bush{
  static texture = BlockTexture(blocksPng, 13, 0)
}

Blocks.rose = class extends Bush{
  static texture = BlockTexture(blocksPng, 12, 0)
}
