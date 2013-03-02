var descOfDance = {
	stageSize : {width:1000, height:1000},
	dancers : 	[
		{class : "boy", id : 1}, {class : "boy", id : 2}, {class : "boy", id : 3}, {class : "boy", id : 4},
		{class : "girl", id : 1}, {class : "girl", id : 2}, {class : "girl", id : 3}, {class : "girl", id : 4}],
	frames : [
		{
			time : 0,
			duration : 2000,
			descriptionId : 1,
			path : [{class:"boy", id: 1, movement : [{X: 100, Y: 100}]}, {class:"boy", id: 2, movement : [{X: 100, Y: 300}]}, {class:"girl", id: 1, movement : [{X: 100, Y: 700}]}, {class:"girl", id: 1, movement : [{X: 100, Y: 900}]}]
		},
		{
			time : 2000,
			duration : 3000,
			path : [{class:"boy", id: 1, movement : [{X: 900, Y: 100}]}, {class:"boy", id: 2, movement : [{X: 900, Y: 300}]}, {class:"girl", id: 1, movement : [{X: 900, Y: 700}]}, {class:"girl", id: 1, movement : [{X: 900, Y: 900}]}]
		}
	],
	description : 	[
		{
			name : "1st movement",
			instructions : [
				{
					from : 1,
					to : 6,
					text : "Dancers take each other by hand and form a circle. Starting witf right feet with 6 polkas dancers move the circle counterclockwise"
				},
				{
					from : 7,
					to : 8,
					text : "Dancers, standing towards center of the circle release the hands and clap their hands 3 times"
				},
				{
					from : 9,
					to : 16,
					text : "Dancers repeat same actions from beat 1-8, but moving the circle clockwise. At the beat 16 form a square"
				}
			]
		},
		{
			name : "2nd movement",
			instructions : [
				{
					from : 1,
					to : 8,
					text : "First half of pairs with waist-shoulder grasp dance the round polka towards center. When danced halfcircle around each other they return in their initial places"
				},
				{
					from : 9,
					to : 16,
					text : "Dancers repeat same actions as in beat 1-8, but moving the circle clockwise. At the beat 16 they form a square"
				}
			]
		}
	]
}