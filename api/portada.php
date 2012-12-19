<?php

$a1 = array(
	'id' => 1,
	'nombre' => 'Ignacio José'
);
$a2 = array(
	'id' => 2,
	'nombre' => 'Ignacio cabo'
);
$a3 = array(
	'id' => 3,
	'nombre' => 'Luis'
);
$a4 = array(
	'id' => 4,
	'nombre' => 'Cabo'
);
$a5 = array(
	'id' => 5,
	'nombre' => 'Pepe'
);

$result = array(
	'peliculas' => array(
		array(
			'id' => 1,
			'nombre' => "Piratas caribe",
			'actores' => array(1, 2)
		),
		array(
			'id' => 2,
			'nombre' => "Starwars",
			'actores' => array(3, 2)
		),
		array(
			'id' => 3,
			'nombre' => 'Casablanca',
			'actores' => array(3, 2, 4)
		)
	),
	'actores' => array($a1, $a2, $a3, $a4, $a5)
);

echo json_encode($result);

?>
