#pragma strict

var wayPoint = 1;
var rotaSpeedX = 0.05;
var rotaSpeedY = 0.05;
var rotaSpeedZ = 0.05;
var initRotaX = 0.0;
var initRotaY = 0.0;
var initRotaZ = 0.0;

function Start ()
{
	
}

function Update ()
{
	if (Input.GetAxis("Reset") == 1)
	{
		transform.rotation.x = initRotaX;
		transform.rotation.y = initRotaY;
		transform.rotation.z = initRotaZ;
	}
	transform.Rotate(rotaSpeedX, rotaSpeedY, rotaSpeedZ);
}