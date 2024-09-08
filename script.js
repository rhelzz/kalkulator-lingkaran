function calculateKeliling() {
    var radius = document.getElementById("radiusKeliling").value;
    var keliling = 2 * Math.PI * radius;
    document.getElementById("resultKeliling").textContent = "Keliling lingkaran adalah: " + keliling;
}

function calculateDiameter() {
    var radius = document.getElementById("radiusDiameter").value;
    var diameter = 2 * radius;
    document.getElementById("resultDiameter").textContent = "Diameter adalah: " + diameter;
}

function calculateLuas() {
    var radius = document.getElementById("radiusLuas").value;
    var luas = Math.PI * (radius ** 2);
    document.getElementById("resultLuas").textContent = "Luas lingkaran adalah: " + luas;
}