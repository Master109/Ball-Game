#pragma strict

var target : Transform;
private var thisTransform : Transform;

function Start()
{
	thisTransform = transform;
}

function Update() 
{
	thisTransform.position.x = target.position.x;
	thisTransform.position.y = target.position.y;
}