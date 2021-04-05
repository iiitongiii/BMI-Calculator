let weightControl = document.getElementById("weight")
let heightControl = document.getElementById("height")
let weight = weightControl.value
// let weight = null
let height = heightControl.value
let BMI = 0
let status = null
let BMITextColor = document.getElementById("showBMI")
let statusTextColor = document.getElementById("showStatus")
let color = ["#6FCF97", "#27AE60", "#F2994A", "#EB5757"]
let colorThree = ["0x6FCF97", "0x27AE60", "0xF2994A", "0xEB5757"]

function calBMI() {
  weight = weightControl.value
  height = heightControl.value

  BMI = weight / ((height / 100) * (height / 100))
  BMI = BMI.toFixed(1)

  if (BMI < 18.5) {
    status = "偏輕"
    BMITextColor.style.color = color[0]
    statusTextColor.style.color = color[0]
    material.color.setHex(colorThree[0])
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    status = "一般"
    BMITextColor.style.color = color[1]
    statusTextColor.style.color = color[1]
    material.color.setHex(colorThree[1])
  } else if (BMI >= 25 && BMI <= 29.9) {
    status = "超重"
    BMITextColor.style.color = color[2]
    statusTextColor.style.color = color[2]
    material.color.setHex(colorThree[2])
  } else if (BMI > 30) {
    status = "肥胖"
    BMITextColor.style.color = color[3]
    statusTextColor.style.color = color[3]
    material.color.setHex(colorThree[3])
  }

  document.getElementById("showWeight").innerHTML = weight
  document.getElementById("showHeight").innerHTML = height
  document.getElementById("showBMI").innerHTML = BMI
  document.getElementById("showStatus").innerHTML = status

  document.cookie = "weight=" + weight
  document.cookie = "height=" + height

  //let sentence = "You are " + height + "cm, and " + weight + "kg. Your BMI is " + BMI + ". " + status
  // console.log(sentence)
}

// weightControl.onmouseover = function () {
//   console.log("over")
// }

// weightControl.onmouseleave = function () {
//   console.log("leave")
// }

weightControl.oninput = function () {
  calBMI()  
}

weightControl.onchange = function () {
  calBMI()
}

heightControl.oninput = function () {
  calBMI()
}

heightControl.onchange = function () {
  calBMI()
}

let cookies
function getCookie() {
  cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value)
    }), {});
    console.log(cookies)
}


function checkCookie(){
  if (cookies.weight != ""){
    console.log("checked cookie is " + cookies.weight)
    weightControl.value = cookies.weight
  } else {
    console.log("no cookie")
  }
}

function init() {

  getCookie()
  checkCookie()
  calBMI()
  
}

init()