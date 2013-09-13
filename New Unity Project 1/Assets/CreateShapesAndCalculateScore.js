#pragma strict

var timer = 0;
var startTime = 0.0;
var shapeAppearTime = 0;
var shapeAppearDeadline = 0.0;
var bestHeight = 0;

function Start ()
{
	transform.position.x = 0;
	transform.position.y = 0;
	transform.position.z = 0;
	shapeAppearDeadline = 50.0;
	bestHeight = 0;
	shapeAppearTime = 0;
	startTime = Time.time;
	transform.position.Set(0, 0.6, 0);
	var r = Random.Range(0, 2);
	if (r == 0)
	{
		var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		for (var i = 1.0; i <= 8; i += 1.0)
		{
			r = Random.Range(0.0, i);
			if (r <= 2)
				break;
		}
		sphere.transform.position = Vector3(Random.Range(-r, r), 15, Random.Range(-r, r));
		sphere.AddComponent ("Rigidbody");
		sphere.AddComponent ("DestroyShape");
	}
	else if (r == 1)
	{
		var box : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
		for (var i2 = 1.0; i2 <= 8; i2 += 1.0)
		{
			r = Random.Range(0.0, i2);
			if (r <= 2)
				break;
		}
		box.transform.position = Vector3(Random.Range(-r, r), 15, Random.Range(-r, r));
		box.AddComponent ("Rigidbody");
		box.AddComponent ("DestroyShape");
	}
}

function Update ()
{
	if (transform.position.y >= -1)
	{
		shapeAppearTime ++;
		timer = Time.time - startTime;
	}

	if (shapeAppearTime >= shapeAppearDeadline)
	{
		shapeAppearTime = 0;
		shapeAppearDeadline *= .99;
		var r = Random.Range(0, 2);
		if (r == 0)
		{
			var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
			for (var i = 1.0; i <= 8; i += 1.0)
			{
				r = Random.Range(0.0, i);
				if (r <= 2)
					break;
			}
			sphere.transform.position = Vector3(Random.Range(-r, r), 15, Random.Range(-r, r));
			sphere.AddComponent ("Rigidbody");
			sphere.AddComponent ("DestroyShape");
		}
		else if (r == 1)
		{
			var box : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
			for (var i2 = 1.0; i2 <= 8; i2 += 1.0)
			{
				r = Random.Range(0.0, i2);
				if (r <= 2)
					break;
			}
			box.transform.position = Vector3(Random.Range(-r, r), 15, Random.Range(-r, r));
			box.AddComponent ("Rigidbody");
			box.AddComponent ("DestroyShape");
		}
	}
	if (transform.position.y - 0.6 > bestHeight)
		bestHeight = transform.position.y - 0.6;
		
	if (Input.GetAxis("Reset"))
		Start();
}

function OnGUI ()
{
	GUI.color = Color.green;
	GUI.Label (Rect (500, 10, 100, 20), "" + timer);
}