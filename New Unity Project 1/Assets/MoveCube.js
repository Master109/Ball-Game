#pragma strict

var wayPoint = 1;
var speed = 0.0;
var initLocX = 0.0;
var initLocY = 0.0;
var initLocZ = 0.0;

function Start ()
{
	
}

function Update ()
{
	if (Input.GetAxis("Reset") == 1)
	{
		transform.position.x = initLocX;
		transform.position.y = initLocY;
		transform.position.z = initLocZ;
	}
	if (transform.position.z >= 16.5)
		wayPoint = 0;
	else if (transform.position.z <= 7.5)
		wayPoint = 1;
	if (wayPoint == 0)
		transform.position.z -= speed;
	else if (wayPoint == 1)
		transform.position.z += speed;
}