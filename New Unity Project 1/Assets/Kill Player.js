#pragma strict

final var NUM_OF_LEVELS = 2;
var currentLevel = 1;
var holdKeyTimer = 0;

function Start ()
{

}

function Update ()
{
	if (Input.GetAxis("Change Level") == 0)
		holdKeyTimer = 0;
	else if (Input.GetAxis("Change Level") == 1)
	{
		holdKeyTimer ++;
		if (holdKeyTimer >= 40 && currentLevel < NUM_OF_LEVELS)
		{
			currentLevel ++;
			holdKeyTimer = 0;			
		}
	}
	else if (Input.GetAxis("Change Level") == -1)
	{
		holdKeyTimer ++;
		if (holdKeyTimer >= 40 && currentLevel > 1)
		{
			currentLevel --;
			holdKeyTimer = 0;			
		}
	}
}

function OnCollisionEnter(collision : Collision)
{
	if (currentLevel == 1)
		collision.gameObject.transform.position = Vector3(0, 1, 0);
	else if (currentLevel == 2)
		collision.gameObject.transform.position = Vector3(100, 1, 250);
	else if (currentLevel == 3)
		collision.gameObject.transform.position = Vector3(-300, 1, 0);
}