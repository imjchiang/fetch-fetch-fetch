console.log("this works");
let container = document.querySelector(".container");

fetch("https://api.spacexdata.com/v3/capsules") //return some resonse
.then(response =>
{
    console.log(response);
    return response.json();                     //data we will return
})
.then(data =>
{
    //console.log(data);
    /*
    const firstElement = data[0];
    console.log(firstElement);

    let capsuleID = firstElement.capsule_id;
    console.log(capsuleID);

    let details = firstElement.details;
    console.log(details);

    let landings = firstElement.landings;
    console.log(landings);
    */

    for (let i = 0; i < data.length; i++)
    {
        let eachCapsule = data[i];
        //console.log(eachCapsule);
        const obj = 
        {
            capsuleID: eachCapsule.capsule_id,
            details: eachCapsule.details,
            landings: eachCapsule.landings
        };
        console.log(obj);

        if (obj.details === null)
        {
            obj.details = "NO DETAILS ON CAPSULE... ";
        }

        const capsuleElement = document.createElement("p");
        capsuleElement.textContent = obj.capsuleID + ": " + obj.details + ". Confirmed " + obj.landings + " landings.";

        container.appendChild(capsuleElement);
    }
})