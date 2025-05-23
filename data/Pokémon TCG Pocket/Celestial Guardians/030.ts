import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Litten"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "If you try too hard to get close to it, it won't open up to you. Even if you do grow close, giving it too much affection is still a no-no."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Heat Tackle"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card