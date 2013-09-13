#pragma strict

function Start ()
{
	
}

function Update ()
{
	if (transform.position.y <= -1 || Input.GetAxis ("Reset") == 1)
	{
		Destroy(gameObject.renderer);
		Destroy(gameObject.rigidbody);
		Destroy(gameObject.collider);
		Destroy(gameObject);
	}
}