<?php
	
	header("Access-Control-Allow-Origin: *");

	require_once('inc/random_max.php');

	$balance_available = random_max(5, 300000000);

	$response = array(
		"totalAsset" => mt_rand(500000000,800000000),
		"details" =>
			array(
				array(
				"account" => array(
					"no"=> "130-00-02345678-8",
					"name"=> "PT. ABC Holding"
				),
				"balance"=> array(
					"available"=> $balance_available[0],
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
				)
			),
			array(
				"account" => array(
					"no"=> "130-00-02345678-2",
					"name"=> "PT. ABC Regional 1"
				),
				"balance"=> array(
					"available"=> $balance_available[1],
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
				)
			),
			array(
				"account" => array(
					"no"=> "130-00-02345678-3",
					"name"=> "PT. ABC Regional 2"
				),
				"balance"=> array(
					"available"=> $balance_available[2],
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
				)
			),
			array(
				"account" => array(
					"no"=> "130-00-02345678-4",
					"name"=> "PT. ABC Regional 3"
				),
				"balance"=> array(
					"available"=> $balance_available[3],
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
				)
			),
			array(
				"account" => array(
					"no"=> "130-00-02345678-5",
					"name"=> "PT. ABC Regional 4"
				),
				"balance"=> array(
					"available"=> $balance_available[4],
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
				)
			)
		)
	);

	echo json_encode($response);

?>