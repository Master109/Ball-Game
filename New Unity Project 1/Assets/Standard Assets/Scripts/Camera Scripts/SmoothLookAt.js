var damping = 6.0;
var smooth = true;

@script AddComponentMenu("Camera-Control/Smooth Look At")

final var GRAVITY = 0.25;
final var ESTIMATED_JUMP_HEIGHT = 2.0;
final var WALK_SPEED = 0.1;
final var RISE_SPEED = 0.3;
final var RISE_DRAG = 0.97;
var initLocX = 0.0;
var initLocY = 20.0;
var initLocZ = -20.0;
var initRotaX = 40.0;
var initRotaY = 0.0;
var initRotaZ = 0.0;
var velX = 0.0;
var velY = 0.0;
var velZ = 0.0;
var pLocY = 0.0;
var heightBeforeJump = 0.0;
var grounded = true;
var jumping = false;
var riseSpeedModifier = 1.0;

function LateUpdate () {
	if (Input.GetAxis("Reset") == 1)
	{
		//Destroy(gameObject);
		//var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Camera);
		//sphere.transform.position = Vector3(0, 20, -20);
		//sphere.transform.rotation = Vector3(40, 0, 0);
		//sphere.AddComponent ("SmoothLookAt");
		/*transform.position.x = 0;
		transform.position.y = 20;
		transform.position.z = -20;
		transform.localRotation.x = 40;
		transform.localRotation.y = 0;
		transform.localRotation.z = 0;*/
	}
	/*if (target) {
		if (smooth)
		{
			// Look at and dampen the rotation
			var rotation = Quaternion.LookRotation(target.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
		}
		else
		{
			// Just lookat
		    transform.LookAt(target);
		}
	}*/
	if (Input.GetAxis("Horizontal") == 0)
		velX *= 0.97;
	else if (Input.GetAxis("Horizontal") == 1)
		velX += 999;
	else if (Input.GetAxis("Horizontal") == -1)
		velX -= 999;
	if (Input.GetAxis("Vertical") == 0)
		velZ *= 0.97;
	else if (Input.GetAxis("Vertical") == 1)
		velZ += 999;
	else if (Input.GetAxis("Vertical") == -1)
		velZ -= 999;
	if (velX >= 0.1)
		velX = WALK_SPEED;
	else if (velX <= -0.1)
		velX = -WALK_SPEED;
	if (velZ >= 0.1)
		velZ = WALK_SPEED;
	else if (velZ <= -0.1)
		velZ = -WALK_SPEED;
	transform.position.x += velX;
	transform.position.y += velY;
	transform.position.z += velZ;
}

function Start () {
  grounded = true;
	jumping = false;
	velX = 0.0;
	velY = 0.0;
	velZ = 0.0;
	pLocY = 0.0;
	heightBeforeJump = 0.0;
	riseSpeedModifier = 0.0;
	// Make the rigid body not change rotation
   	/*if (rigidbody)
		rigidbody.freezeRotation = true;*/
}