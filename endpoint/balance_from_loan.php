<?php
	
	header("Access-Control-Allow-Origin: *");

	require_once('inc/random_max.php');

	$percentages = random_max(4, 100);

	$response = array(
		"balance" => array(
			array(
				"IDR" => array(
					"amount" => mt_rand(5000000, 10000000),
					"percentage" => $percentages[0]
				),

				"USD" => array(
					"amount" => mt_rand(500, 1000),
					"percentage" => $percentages[2]
				),

				"JPY" => array(
					"amount" => mt_rand(20000,50000),
					"percentage" => $percentages[3]
				),

				"SGD" => array(
					"amount" => mt_rand(1000,5000),
					"percentage" => $percentages[4]
				)
			)
		),

		"total" => array(
			"idr"=> mt_rand(10000000,30000000)
		)
	);

	echo json_encode($response);

?>