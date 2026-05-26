let carArr = [];

class Car {
    constructor(id, nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(el.checked && carArr.length >= 2) {
        alert("Só é possível comparar 2 carros ao mesmo tempo.");
        el.checked = false;
        return;
    }

    if(el.checked) {
        carArr.push(carClass);
    } else {
        const index = GetCarArrPosition(carArr, carClass);
        if(index !==-1) {
            carArr.splice(index,1);
        }
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("É necessário escolher 2 carros para apresentar a comparação.");
        return;
    }

    carArr.sort((a, b) => a.id - b.id);
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for(let i = 0; i < 2; i++) {
        if(carArr[i]) {
            document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" width="200" alt="${carArr[i].nome}">`;
            document.getElementById(`compare_modelo_${i}`).innerText = carArr[i].nome;
            document.getElementById(`compare_alturacacamba_${i}`).innerText = carArr[i].alturaCacamba;
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = carArr[i].alturaVeiculo;
            document.getElementById(`compare_alturasolo_${i}`).innerText = carArr[i].alturaSolo;
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = carArr[i].capacidadeCarga;
            document.getElementById(`compare_motor_${i}`).innerText = carArr[i].motor;
            document.getElementById(`compare_potencia_${i}`).innerText = carArr[i].potencia;
            document.getElementById(`compare_volumecacamba_${i}`).innerText = carArr[i].volumeCacamba;
            document.getElementById(`compare_roda_${i}`).innerText = carArr[i].roda;
            document.getElementById(`compare_preco_${i}`).innerText = `R$ ${carArr[i].preco.toLocaleString()}`;
        }
    }
}