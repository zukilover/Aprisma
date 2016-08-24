<?php
	
	header("Access-Control-Allow-Origin: *");

	require_once('inc/random_max.php');

	$percentages = random_max(4, 100);

	$response = array(
			"balance" => array(
				array(
					"IDR" => array(
						"amount" => mt_rand(758000000, 888000000),
						"percentage" => $percentages[0]
					),

					"USD" => array(
						"amount" => mt_rand(5000, 10000),
						"percentage" => $percentages[1]
					),

					"JPY" => array(
						"amount" => mt_rand(500000, 1000000),
						"percentage" => $percentages[2]
					),

					"SGD" => array(
						"amount" => mt_rand(10000, 50000),
						"percentage" => $percentages[3]
					)
				)
			),

			"total" => array(
				"idr" => mt_rand(900000000, 1000000000)
			)
		);

	echo json_encode($response);

?>