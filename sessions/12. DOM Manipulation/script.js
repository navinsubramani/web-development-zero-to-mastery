var button_clickMe = document.getElementsByTagName('button')[0]
var input_item = document.getElementsByTagName('input')[0]
var item_list = document.getElementsByClassName('item_list')[0]

var click_function = function() {
    txt = input_item.value
    if (txt === '') {
        alert('Enter a input item!!!');
        return
    }
    var item_tag = document.createElement('p')
    var item_info = document.createTextNode(txt)

    item_tag.appendChild(item_info)
    item_list.appendChild(item_tag)

    input_item.value = ''
}

var key_press = function(event){

    if (event.keyCode === 13) {
        click_function()
    }
}


button_clickMe.addEventListener('click', click_function)

input_item.addEventListener('keypress', key_press)