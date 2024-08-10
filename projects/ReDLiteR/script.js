function OpenCommandsList(id){
    OffAllCommandsLists()
    console.log('open')
    document.getElementById(`commands_list_${id}`).style.display = "flex";
    console.log('id')
}

function OffAllCommandsLists(){
    document.getElementById('commands_list_1').style.display = "none";
    document.getElementById('commands_list_2').style.display = "none";
    document.getElementById('commands_list_3').style.display = "none";
    document.getElementById('commands_list_4').style.display = "none";
    document.getElementById('commands_list_5').style.display = "none";
    document.getElementById('commands_list_6').style.display = "none";
    document.getElementById('commands_list_7').style.display = "none";
    document.getElementById('commands_list_8').style.display = "none";
    document.getElementById('commands_list_9').style.display = "none";
}

async function api_get_color(){
    response = await fetch('http://127.0.0.1:8000/get/color/1242442754383155270')
    let data = await response.json()
    document.getElementById('input_color').value = data
}

async function api_get_emoji(){
    response = await fetch('http://127.0.0.1:8000/get/emoji/1242442754383155270')
    let data = await response.json()
    document.getElementById('input_emoji').value = data
}

function api_set_color(){
    let data = document.getElementById('input_color').value
    data = data.replace('#', '')
    fetch(`http://127.0.0.1:8000/set/color/1242442754383155270/${data}`)
}

function api_set_emoji(){
    console.log('Трай')
    let data = document.getElementById('input_emoji').value
    data = data.replace('#', '')
    console.log(data)
    fetch(`http://127.0.0.1:8000/set/emoji/1242442754383155270/${data}`)
}

api_get_color()
api_get_emoji()
// .then(data=>{console.log(data)})
