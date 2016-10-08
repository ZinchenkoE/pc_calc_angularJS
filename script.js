var typeKit = {
    1:{
        value: 'Motherboard',
        name: 'материнская плата'
    },
    2:{
        value: 'SystemUnit',
        name: 'системный блок'
    },
    3:{
        value: 'CPU',
        name: 'процессор'
    },
    4:{
        value: 'RAM',
        name: 'опереативная память'
    }
};
var kitsCollection = {
    1:{
        type: 1,
        model: 'ASRock AM1B-M Socket AM1',
        price: 700
    },
    2:{
        type: 1,
        model: 'MSI AM1I Socket AM1',
        price: 800
    },
    3:{
        type: 1,
        model: 'Asus AM1I-A Socket AM1',
        price: 900
    },
    4:{
        type: 2,
        model: 'Корпус Frime 165B Без БП USB',
        price: 450
    },
    5:{
        type: 2,
        model: 'Корпус Frime FC-001B 400W-8cm 2 sata mATX',
        price: 500
    },
    6:{
        type: 2,
        model: 'Корпус Frime FC-311B 400W-12cm 2 sata',
        price: 700
    },
    7:{
        type: 3,
        model: 'AMD Sempron LE-145 AM3 Tray',
        price: 450
    },
    8:{
        type: 3,
        model: 'Athlon 64 II X2 220 (Socket AM3) Tray',
        price: 500
    },
    9:{
        type: 3,
        model: 'AMD Phenom II X2 B59 Socket AM3',
        price: 600
    },
    10:{
        type: 4,
        model: 'SO-DIMM 1Gb DDR3 1066 Hynix original (HMT112S6BFR6C-G7)',
        price: 200
    },
    11:{
        type: 4,
        model: 'SO-DIMM 2GB/1600 DDR3 1,35V Ramaxel (RMT3190ME76F8F-1600)',
        price: 300
    },
    12:{
        type: 4,
        model: 'DDR3 2GB/1600 Team Elite (TED32GM1600C1101)',
        price: 400
    }
};
function $E(selector) { return document.querySelectorAll(selector); }
function renderTypeSelect() {
    var options = '';
    for(var type in typeKit){
        options += '<option value="' + typeKit[type].value + '">' + typeKit[type].name + '</option>';
    }
    $E('#typeSelect')[0].innerHTML = options;
}
function renderTable() {
    var kits = '';
    for(var k in kitsCollection){
        var type  = typeKit[kitsCollection[k].type].name;
        var model = kitsCollection[k].model;
        var price = kitsCollection[k].price;
        kits += '<tr><td>' + type + '</td><td>' + model + '</td><td>' + price + ' грн</td></tr>';
    }
    $E('tbody')[0].innerHTML = kits;
}
function renderKitSelects() {
    var selects = '';
    for(var type in typeKit){
        var selectId    = typeKit[type].value;
        var selectLabel = typeKit[type].name;
        var options = '<option value="" selected></option>';
        for(var k in kitsCollection){
            if(kitsCollection[k].type == type) options += '<option value="' + k + '">' + kitsCollection[k].model + '</option>';
        }
        selects += '<label for="' + selectId + '">' + selectLabel + '</label>' +
            '<select id="' + selectId + '">' + options + '</select><br><br>';
    }
    $E('#kitSelects')[0].innerHTML = selects;
}
function Motherboard() {
    this.type  = 1;
    this.setPrice = function(price) {
        if(price > 1 && price < 10000 ){
            this.price = price;
            return true;
        }else return false;
    };
    this.setModel = function(model) {
        if( /^[aA-zZ0-9аА-яЯ\ \-\\\.\,\/\(\)]+$/.test(model) ){
            this.model = model;
            return true;
        }else return false;
    };
    this.getKit = function() {
        return {type: this.type, model: this.model, price: this.price}
    };
}
function SystemUnit() {
    this.type  = 2;
    this.setPrice = function(price) {
        if(price > 1 && price < 10000 ){
            this.price = price;
            return true;
        }else return false;
    };
    this.setModel = function(model) {
        if( /^[aA-zZ0-9аА-яЯ\ \-\\\.\,\/\(\)]+$/.test(model) ){
            this.model = model;
            return true;
        }else return false;
    };
    this.getKit = function() {
        return {type: this.type, model: this.model, price: this.price}
    };
}
function CPU() {
    this.type  = 3;
    this.setPrice = function(price) {
        if(price > 1 && price < 10000 ){
            this.price = price;
            return true;
        }else return false;
    };
    this.setModel = function(model) {
        if( /^[aA-zZ0-9аА-яЯ\ \-\\\.\,\/\(\)]+$/.test(model) ){
            this.model = model;
            return true;
        }else return false;
    };
    this.getKit = function() {
        return {type: this.type, model: this.model, price: this.price}
    };
}
function RAM() {
    this.type  = 4;
    this.setPrice = function(price) {
        if(price > 1 && price < 10000 ){
            this.price = price;
            return true;
        }else return false;
    };
    this.setModel = function(model) {
        if( /^[aA-zZ0-9аА-яЯ\ \-\\\.\,\/\(\)]+$/.test(model) ){
            this.model = model;
            return true;
        }else return false;
    };
    this.getKit = function() {
        return {type: this.type, model: this.model, price: this.price}
    };
}
window.onload = function() {
    if(!localStorage.kit) localStorage.kit = JSON.stringify(kitsCollection);
    else kitsCollection = JSON.parse(localStorage.kit);
    renderTypeSelect();
    renderTable();
    renderKitSelects();
    $E('#kitSelects select').forEach(function(select) {
        select.onchange = function() {
            var canCalc = true;
            $E('#kitSelects select').forEach(function(select) {
                if(!select.value) canCalc = false;
            });
            $E('#calc')[0].disabled = !canCalc;
            $E('#calcPrice')[0].innerHTML = '';
        }
    });
    $E('#calc')[0].onclick = function(e) {
        e.preventDefault();
        var price = 0;
        $E('#kitSelects select').forEach(function(select) {
            price += +kitsCollection[select.value].price;
        });
        $E('#calcPrice')[0].innerHTML = 'Стоимость комплекта: ' + price + ' грн';
        return false;
    };
    $E('#addKit')[0].onclick = function(e) {
        e.preventDefault();
        var Constructor = $E('#typeSelect')[0].value;
        var model = $E('#model')[0].value;
        var price = $E('#price')[0].value;
        var newKit = new window[Constructor]();
        if(newKit.setModel(model) && newKit.setPrice(price)){
            console.log('Создан новый инвентарь: ', newKit);
            var maxId = 0;
            for(var k in kitsCollection){
                if(+k > maxId) maxId = +k;
            }
            ++maxId;
            kitsCollection[maxId] =  newKit.getKit();
            localStorage.kit = JSON.stringify(kitsCollection);
            renderTable();
            renderKitSelects();
        } else {
            console.error('Некоректные данные для инвентаря!');
            alert('Некоректные данные для инвентаря!');
        }

    };
};

