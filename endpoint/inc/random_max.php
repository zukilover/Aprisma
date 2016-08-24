<?php 

	function random_max($length, $max){
		$n = $length;
		$max = $max;
		$array = array();

		$current_min = 1;
		while( $n > 1 ) {
		    //solve for the highest possible number that would allow for $n many random numbers
		    $current_max = floor( ($max/$n) - (($n-1)/2) );
		    if( $current_max < $current_min ) throw new Exception( "Can't use combination" );
		    $new_rand = rand( $current_min, $current_max ); //get a new rand
		    $max -= $new_rand; //drop the max
		    $current_min = $new_rand + 1; //bump up the new min
		    $n--; //drop the n
		    $array[] = $new_rand; //add rand to array
		}
		$array[] = $max; //we know what the last element must be
		return $array;
	}

?>