<?php
	
	header("Access-Control-Allow-Origin: *");

	$response = array(
		"monthlyEnding" => array(
			array(
				"Jan" => mt_rand(-40000000, 70000000),
				"Feb" => mt_rand(-40000000, 70000000),
				"Mar" => mt_rand(-40000000, 70000000),
				"Apr" => mt_rand(-40000000, 70000000),
				"May" => mt_rand(-40000000, 70000000),
				"Jun" => mt_rand(-40000000, 70000000),
				"Jul" => mt_rand(-40000000, 70000000),
				"Aug" => mt_rand(-40000000, 70000000),
				"Sep" => mt_rand(-40000000, 70000000),
				"Oct" => mt_rand(-40000000, 70000000),
				"Nov" => mt_rand(-40000000, 70000000),
				"Dec" => mt_rand(-40000000, 70000000)
			)
		)
	);

	echo json_encode($response);

?>