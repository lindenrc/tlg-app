import React from 'react';

class FeSetup {
	current_continuous_id: number = 0;
	current_oneshot_id: number = 0;
	Ncurrent_continuous_reps: number = 0;
	Ncurrent_oneshot_reps: number = 0;
	current_continuous_sequencer: number = 0;
	current_oneshot_sequencer: number = 0;
	current_continuous_length: number = 0;
    current_oneshot_length: number = 0;
	next_continuous_id: number = 0;
	next_oneshot_id: number = 0;
	Nnext_continuous_reps: number = 0;
	Nnext_oneshot_reps: number = 0;
	next_continuous_sequencer: number = 0;
	next_oneshot_sequencer: number = 0;
    next_continuous_length: number = 0;
	next_oneshot_length: number = 0;
	Ntimelines: number = 0;
	Nmodules: number = 0;
	Nstates: number = 0;
	Ndevices: number = 0;
	Nramps: number = 0;
	current_continuous_switching_length: number = 0;
	current_oneshot_switching_length: number = 0;
	next_continuous_switching_length: number = 0;
	next_oneshot_switching_length: number = 0;
	
	constructor( data: Array<number> ) {
		
		
	    let n = 0;
        this.current_continuous_id = data[n++];
	    this.current_oneshot_id = data[n++];
	    this.Ncurrent_continuous_reps = data[n++];
	    this.Ncurrent_oneshot_reps = data[n++];
	    this.current_continuous_sequencer = data[n++];
	    this.current_oneshot_sequencer = data[n++];
	    this.current_continuous_length = data[n++];
        this.current_oneshot_length = data[n++];
	    this.next_continuous_id = data[n++];
	    this.next_oneshot_id = data[n++];
	    this.Nnext_continuous_reps = data[n++];
	    this.Nnext_oneshot_reps = data[n++];
	    this.next_continuous_sequencer = data[n++];
	    this.next_oneshot_sequencer = data[n++];
        this.next_continuous_length = data[n++];
	    this.next_oneshot_length = data[n++];
	    this.Ntimelines = data[n++];
	    this.Nmodules = data[n++];
	    this.Nstates = data[n++];
	    this.Ndevices = data[n++];
	    this.Nramps = data[n++];
	    this.current_continuous_switching_length = data[n++];
	    this.current_oneshot_switching_length = data[n++];
	    this.next_continuous_switching_length = data[n++];
	    this.next_oneshot_switching_length = data[n++];
		
	}
}


export default FeSetup;
