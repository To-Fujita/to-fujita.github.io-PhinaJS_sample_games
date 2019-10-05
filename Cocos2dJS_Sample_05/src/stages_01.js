// All the rooms are here. 
// by T. Fujita
// 
// A: Again
// B: Block(Movable)
// F: Floor
// G: Goal
// P: Player
// W: Wall

var room = [];
    room[0] = [ "WwwwwGwW",
		"WFFFFFFW",
		"WFFFFFFW",
		"WFPFFFFW",
		"WFFFFFFW",
		"WwwwwwwA"]

    room[1] = [ "WwwwwGwW",
		"WFFFFBFW",
		"WFFFFFFW",
		"WFPFFFFW",
		"WFFFFFFW",
		"WwwwwwwA"]

    room[2] = [ "WwwwwwwwwwwwwGwW",
		"WFFFFFFFFFFFFFFW",
		"WBBBBBBBBBBBBBBW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFPFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[3] = [ "WwwwwwwwGwwwwwwW",
		"WFFFFFFFFFFFFFFW",
		"WBBBBBBBBBBBBBBW",
		"WFFFFFFFFFFFFFFW",
		"WBBBBBBBBBBBBBBW",
		"WFFFFFFFFFFFFFFW",
		"WBBBBBBBBBBBBBBW",
		"WFFFFFFFFFFFFFFW",
		"WBBBBBBBBBBBBBBW",
		"WFFFFFFFFFFFFFFW",
		"WFFPFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[4] = [ "WwwwwwwGwwwwwwwW",
		"WBFBFBFBFBFBFBFW",
		"WFBFBFBFBFBFBFBW",
		"WBFBFBFBFBFBFBFW",
		"WFBFBFBFBFBFBFBW",
		"WBFBFBFBFBFBFBFW",
		"WFBFBFBFBFBFBFBW",
		"WBFBFBFBFBFBFBFW",
		"WFBFBFBFBFBFBFBW",
		"WBFBFBFBFBFBFBFW",
		"WFPFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[5] = [ "WwwwwwwwwwwwwGwW",
		"WFFBFFFFFFFFFBFW",
		"WFFFBFBFBFBFBFFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WPFWFWFWFWFWFWFW",
		"WFFBFFFFFFBFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[6] = [ "WwwwwwwwwwwwwGwW",
		"WFFBFBFBFBFBFBFW",
		"WFFFBFBFBFBFBFFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFFWFWFWFWFWFWFW",
		"WFPWFWFWFWFWFWFW",
		"WFFBFFFFFFBFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[7] = [ "WwwwwwwwwwwwwGwW",
		"WFFFFFFFFBFFFBFW",
		"WFFFFFFFBFBBBFBW",
		"WFFFFFFBFBFBFBFW",
		"WFFFFFBFBFBFBFFW",
		"WFFFFBFBFBFBFBFW",
		"WFFFBFBFBFBFBFBW",
		"WFFBFBFBFBFBFBFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFPFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[8] = [ "WwwwwwwGwwwwwwwW",
		"WFPFFBFBFBFFFFFW",
		"WFBFBFBFBFFFFFFW",
		"WBFBFBFBFBFFFFFW",
		"WFBFBBFFFBFFFFFW",
		"WBFBFBFBFBFFFFFW",
		"WFBFBBFFFBFFFFFW",
		"WBFBFBBBBBFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[9] = [ "WwwwwwwGwwwwwwwW",
		"WFFFFBFBFBFFFFFW",
		"WFFFBFBFBFBFFFFW",
		"WBFBFBBBFBBFFFFW",
		"WFBFBFFFBFBFBFBW",
		"WBFBFBFBFBFBFBFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFPFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]

    room[10] = ["WwwwwwwGwwwwwwwW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WBWwwBWFFWBWwFBW",
		"WFWFFFWwFWFWFWFW",
		"WFWwFFWwwWFWFWFW",
		"WFWFFFWFwWFWFWFW",
		"WBWwwBWFFWBWwFBW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFPFFFFFFFFFFFFW",
		"WwwwwwwwwwwwwwwA"]
