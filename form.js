function showData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let noHp = document.getElementById("hp").value
    let subject = document.getElementById("subject").value
    let pesan = document.getElementById("pesan").value

    // Mengirimkan data
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("hp").value=""
    document.getElementById("pesan").value=""

    // Validasi
    if(name == ""){
        alert("Kolom Nama Harus Diisi")
    }
    if(email == ""){
        alert("Kolom Email Harus Diisi")
    }
    if(noHp == ""){
        alert("Kolom Nomor Handphone Harus Diisi")
    }
    if(subject == ""){
        alert("Kolom Subjek Harus Diisi")
    }

    // Mengirim Email
    let emailReceiver = "akuntrial123@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${subject}. Please contact me ${noHp}, ${pesan}`

    a.click()

    let dataObject = {
        name,
        email,
        noHp,
        subject,
        pesan
    }

    console.table(dataObject)
}
 