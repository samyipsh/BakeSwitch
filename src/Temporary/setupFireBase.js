import React, { useState } from "react";
import { db } from "../config/firebase";
import { bakeDocObj_1, bakeDocObj_2, bakeDocObj_3 } from "./test-bakes";
import { storeDocObj_1, storeDocObj_2, storeDocObj_3 } from "./test-stores";
import { userDocObj_1, userOrderDocObj_1 } from "./test-users";

export function setupBakeDoc() {
	//modify object and name before pressing button
	const bakeRef = db.collection("bakes").doc("bake_0003"); 	//modify name
	const bakeDocObj = bakeDocObj_3; 							//modify obj
	bakeRef
		.set(bakeDocObj)
		.then(() => alert("bake successfully written to db"))
		.catch(() => alert("error writing to db"));
}

export function setupStoreDoc() {
	//modify object and name before pressing button
	const storeRef = db.collection("stores").doc("store_0003"); //modify name
	const storeDocObj = storeDocObj_3;							//modify obj
	storeRef
		.set(storeDocObj)
		.then(() => alert("store successfully written to db"))
		.catch(() => alert("error writing to db"));
}

export function setupUserDoc() {
	//modify object and name before pressing button
	const userRef = db.collection("users").doc("Wq33g2sv1Qbkj3RvxARGS419oNC2"); //bakeswitch user
	const userDocObj = userDocObj_1;							//modify obj
	userRef
		.set(userDocObj)
		.then(() => alert("user successfully written to db"))
		.catch(() => alert("error writing to db"));
}

export function setupUserOrderDoc() {
	//modify object and name before pressing button
	const userOrderRef = db
		.collection("users").doc("Wq33g2sv1Qbkj3RvxARGS419oNC2")
		.collection("user-order").doc("store_0001"); //modify name (storeID)
	const userOrderDocObj = userOrderDocObj_1;							//modify obj
	userOrderRef
		.set(userOrderDocObj)
		.then(() => alert("user-order successfully written to db"))
		.catch(() => alert("error writing to db"));
}