#pragma strict

final var GRAVITY = 0.25;
final var ESTIMATED_JUMP_HEIGHT = 2.0;
final var WALK_SPEED = 0.1;
final var RISE_SPEED = 0.3;
final var RISE_DRAG = 0.97;
final var WALK_DRAG = 0.91;
final var NUM_OF_LEVELS = 100;

var velX = 0.0;
var velY = 0.0;
var velZ = 0.0;
var pLocY = 0.0;
var heightBeforeJump = 0.0;
var grounded = true;
var jumping = false;
var riseSpeedModifier = 1.0;
var currentLevel = 1;
var holdKeyTimer = 0;

function Start ()
{
	grounded = true;
	jumping = false;
	velX = 0.0;
	velY = 0.0;
	velZ = 0.0;
	pLocY = 0.0;
	heightBeforeJump = 0.0;
	riseSpeedModifier = 0.0;
}

function Update ()
{
	transform.rotation.x += Input.GetAxis("Mouse X");
	transform.rotation.y += Input.GetAxis("Mouse Y");
	if (Input.GetAxis("Horizontal") == 0)
		velX *= WALK_DRAG;
	else if (Input.GetAxis("Horizontal") == 1)
		velX += 999;
	else if (Input.GetAxis("Horizontal") == -1)
		velX -= 999;
	if (Input.GetAxis("Vertical") == 0)
		velZ *= WALK_DRAG;
	else if (Input.GetAxis("Vertical") == 1)
		velZ += 999;
	else if (Input.GetAxis("Vertical") == -1)
		velZ -= 999;
	if (Input.GetAxis("Reset") == 1)
	{
		if (currentLevel == 1)
			transform.position = Vector3(0, 1, 0);
		else if (currentLevel == 2)
			transform.position = Vector3(-100, 1, 250);
		else if (currentLevel == 3)
			transform.position = Vector3(-300, 1, 0);
	}
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
		Start();
	}
	else if (Input.GetAxis("Change Level") == -1)
	{
		holdKeyTimer ++;
		if (holdKeyTimer >= 40 && currentLevel > 1)
		{
			currentLevel --;
			holdKeyTimer = 0;			
		}
		Start();
	}
	if (velX >= 0.1)
		velX = WALK_SPEED;
	else if (velX <= -0.1)
		velX = -WALK_SPEED;
	if (velZ >= 0.1)
		velZ = WALK_SPEED;
	else if (velZ <= -0.1)
		velZ = -WALK_SPEED;
	if (Input.GetAxis("Jump") == 1 && grounded)
		jumping = true;
	if (jumping)
		velY = RISE_SPEED * riseSpeedModifier;
	else
		velY = 0;
	var moveDirection = Vector3.RotateTowards(Vector3(velX, 0, velZ), Vector3(transform.rotation.x, transform.rotation.y, transform.rotation.z), 999, 0);
	transform.position.x += velX;
	transform.position.y += velY;
	transform.position.z += velZ;
	//if (Mathf.Abs(transform.position.y - heightBeforeJump) >= ESTIMATED_JUMP_HEIGHT)
		//jumping = false;
	if (Mathf.Abs(pLocY - transform.position.y) <= 0.0 || !jumping)
		heightBeforeJump = transform.position.y;
	if (Mathf.Abs(transform.position.y - heightBeforeJump) <= 0.125)
	{
		grounded = true;
		riseSpeedModifier = 1.0;
		jumping = false;
	}
	else
	{
		grounded = false;
		riseSpeedModifier *= RISE_DRAG;
	}
	pLocY = transform.position.y;
}

function OnGUI ()
{
	GUI.color = Color.green;
	GUI.Label (Rect (10, 10, 100, 20), "" + currentLevel);
	//GUI.Label (Rect (10, 20, 100, 20), "" + Input.GetAxis("Mouse X"));
}