#pragma strict

final var GRAVITY = 0.25;
final var ESTIMATED_JUMP_HEIGHT = 2.0;
final var WALK_SPEED = 0.05;
final var RISE_SPEED = 0.1;
final var RISE_DRAG = 0.98;

var velX = 0.0;
var velY = 0.0;
var pLocY = 0.0;
var heightBeforeJump = 0.0;
var grounded = true;
var jumping = false;
var riseSpeedModifier = 1.0;

function Start ()
{
	grounded = true;
	jumping = false;
}

function Update ()
{
	if (Input.GetAxis("Horizontal") == 0)
		velX *= 0.97;
	else if (Input.GetAxis("Horizontal") == 1)
		velX += 999;
	else if (Input.GetAxis("Horizontal") == -1)
		velX -= 999;
	if (velX >= 0.1)
		velX = WALK_SPEED;
	else if (velX <= -0.1)
		velX = -WALK_SPEED;
	if (Input.GetAxis("Jump") == 1 && grounded)
		jumping = true;
	if (jumping)
		velY = RISE_SPEED * riseSpeedModifier;
	else
		velY = 0;
	transform.position.x += velX;
	transform.position.y += velY;
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