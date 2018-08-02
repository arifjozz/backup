const simpanDOM = document.getElementById('simpan')
const inputDOM = document.getElementById('input')
const listDOM = document.getElementById('list')
let Data = []

localData = JSON.parse(localStorage.getItem("Daftar"))
if(localData != null){
    Data = localData
}
render()

function Tambah (){
    const inputBaru = inputDOM.value
    Data.push(inputBaru)
    
    inputDOM.value = ""
    localStorage.setItem("Daftar", JSON.stringify(Data))
   
    
}

function render(){
    let Tampil = ""
    for(let i = 0; i < Data.length; i++){
        Tampil +=  `
        <li style="display:flex">
        <div class="container"style="width: 18rem;>
        <div class="row" >
        <div style="width: 18rem;display: flex;">
       <p>
         ${Data[i]}
         
          
            <div class="col-md-6">
              <button type="button" class="btn btn-outline-danger btn btn-block" onclick="hapus(${i})">Hapus</button>
              </p>
            </div>
            </div>
            </div>
        </li>
        `
    }
    listDOM.innerHTML = Tampil
    
}
function hapus(id){
    Data.splice(id, 1);
    localStorage.setItem("Daftar",JSON.stringify(Data));
    render()
}

