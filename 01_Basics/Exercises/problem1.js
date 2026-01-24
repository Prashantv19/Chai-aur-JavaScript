let loginStatus = "true";

console.log("Before:", typeof loginStatus);

loginStatus = Boolean(loginStatus) //this method will not work here.
// loginStatus = (loginStatus === "true")

console.log("After:", typeof loginStatus);

if (loginStatus) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

/*
In JavaScript:

Any non-empty string is truthy

Empty string "" is falsy
 */