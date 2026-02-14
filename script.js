// Dummy nearby users (simulated database)
const users = [
    { name: "User A", lat: 28.7041, lon: 77.1025 },
    { name: "User B", lat: 28.7050, lon: 77.1000 },
    { name: "User C", lat: 19.0760, lon: 72.8777 }
];

// Haversine Formula to calculate distance
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("status").innerHTML = "Fetching location...";
    } else {
        document.getElementById("status").innerHTML = "Geolocation not supported.";
    }
}

function showPosition(position) {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    let nearbyUsers = [];

    users.forEach(user => {
        let distance = getDistance(userLat, userLon, user.lat, user.lon);
        if (distance <= 2) {   // 2km radius
            nearbyUsers.push(user.name);
        }
    });

    if (nearbyUsers.length > 0) {
        document.getElementById("result").innerHTML =
            "🚨 Alert sent to: " + nearbyUsers.join(", ");
    } else {
        document.getElementById("result").innerHTML =
            "No nearby users found within 2km radius.";
    }
}
