<?php
	
	header("Access-Control-Allow-Origin: *");

	$response = array(
		"cashFlow" => array(
			array(
				"x" => "12 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			),
			array(
				"x" => "13 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			),
			array(
				"x" => "14 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			),
			array(
				"x" => "15 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			),
			array(
				"x" => "16 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			),
			array(
				"x" => "17 Feb",
				"Cash In" => mt_rand(10000000,100000000),
				"Cash Out" => mt_rand(10000000,100000000)
			)
		)
	);

	echo json_encode($response);

?>