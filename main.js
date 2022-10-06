document.getElementById('height').value = 0
document.getElementById('width').value = 0
let input1 = document.getElementById('height')
let input2 = document.getElementById('width')
input1.addEventListener('input', function () {

    if (document.getElementById('height').value != '') {
        res()
    }
})
input2.addEventListener('input', function () {
    if (document.getElementById('width').value != '') {
        res()
    }
})

function res() {

    let height = Number(document.getElementById('height').value)
    let width = Number(document.getElementById('width').value)
    let otvetBox1 = document.getElementById('zag1')
    let otvetBox2 = document.getElementById('zag2')
    let otvetBox3 = document.getElementById('zag3')
    let h1_r_1 = 3000
    let w1_r_1 = 1500
    let h1_l_1 = 1500
    let w1_l_1 = 3000
    if (height != 0 && width != 0) {
        let hRes_l = Math.floor(h1_r_1 / height)
        let wRes_l = Math.floor(w1_r_1 / width)
        let hRes_r = Math.floor(h1_l_1 / height)
        let wRes_r = Math.floor(w1_l_1 / width)
        let res1 = hRes_l * wRes_l
        let res2 = hRes_r * wRes_r
        if (res1 > res2) {
            otvetBox1.textContent = Math.floor(res1)
        } else otvetBox1.textContent = Math.floor(res2)

    }
    let h1_r_2 = 2440
    let w1_r_2 = 1220
    let h1_l_2 = 1220
    let w1_l_2 = 2440

    if (height != 0 && width != 0) {
        let hRes_l = Math.floor(h1_r_2 / height)
        let wRes_l = Math.floor(w1_r_2 / width)
        let hRes_r = Math.floor(h1_l_2 / height)
        let wRes_r = Math.floor(w1_l_2 / width)
        let res1 = hRes_l * wRes_l
        let res2 = hRes_r * wRes_r
        if (res1 > res2) {
            otvetBox2.textContent = Math.floor(res1)
        } else otvetBox2.textContent = Math.floor(res2)

    }
    let h1_r_3 = 1525
    let w1_r_3 = 1525
    let h1_l_3 = 1525
    let w1_l_3 = 1525
    if (height != 0 && width != 0) {
        let hRes_l = Math.floor(h1_r_3 / height)
        let wRes_l = Math.floor(w1_r_3 / width)
        let hRes_r = Math.floor(h1_l_3 / height)
        let wRes_r = Math.floor(w1_l_3 / width)
        let res1 = hRes_l * wRes_l
        let res2 = hRes_r * wRes_r
        if (res1 > res2) {
            otvetBox3.textContent = Math.floor(res1)
        } else otvetBox3.textContent = Math.floor(res2)

    }

    
}