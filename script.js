var typeKit = [
    {
        value: 'Motherboard',
        name: 'материнская плата'
    },
    {
        value: 'SystemUnit',
        name: 'системный блок'
    },
    {
        value: 'CPU',
        name: 'процессор'
    },
    {
        value: 'RAM',
        name: 'опереативная память'
    }
];
var kitsCollection = [
    {
        type: 0,
        model: 'ASRock AM1B-M Socket AM1',
        price: 700
    },
    {
        type: 0,
        model: 'MSI AM1I Socket AM1',
        price: 800
    },
    {
        type: 0,
        model: 'Asus AM1I-A Socket AM1',
        price: 900
    },
    {
        type: 1,
        model: 'Корпус Frime 165B Без БП USB',
        price: 450
    },
    {
        type: 1,
        model: 'Корпус Frime FC-001B 400W-8cm 2 sata mATX',
        price: 500
    },
    {
        type: 1,
        model: 'Корпус Frime FC-311B 400W-12cm 2 sata',
        price: 700
    },
    {
        type: 2,
        model: 'AMD Sempron LE-145 AM3 Tray',
        price: 450
    },
    {
        type: 2,
        model: 'Athlon 64 II X2 220 (Socket AM3) Tray',
        price: 500
    },
    {
        type: 2,
        model: 'AMD Phenom II X2 B59 Socket AM3',
        price: 600
    },
    {
        type: 3,
        model: 'SO-DIMM 1Gb DDR3 1066 Hynix original (HMT112S6BFR6C-G7)',
        price: 200
    },
    {
        type: 3,
        model: 'SO-DIMM 2GB/1600 DDR3 1,35V Ramaxel (RMT3190ME76F8F-1600)',
        price: 300
    },
    {
        type: 3,
        model: 'DDR3 2GB/1600 Team Elite (TED32GM1600C1101)',
        price: 400
    }
];
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
}
function CPU() {
    this.type  = 3;
}
function RAM() {
    this.type  = 4;
}




var App = angular.module("kitApp", ["LocalStorageModule"]);

App.controller("MainCtrl", function ($scope) {
    $scope.typeKit        = typeKit;
    $scope.kitsCollection = kitsCollection;
    $scope.test = function  (){
        console.log($scope);
    };
    $scope.calc = function  (){
        var summ = 0;
        $scope.typeKit.forEach(function(select){
            summ += +select.selectPrice;
        });
        if(summ) $scope.calPrice = 'Стоимость комплекта: ' + summ + ' грн';
    };
});

//window.onload = function() {
//    if(!localStorage.kit) localStorage.kit = JSON.stringify(kitsCollection);
//    else kitsCollection = JSON.parse(localStorage.kit);


//    $E('#addKit')[0].onclick = function(e) {
//        e.preventDefault();
//        var Constructor = $E('#typeSelect')[0].value;
//        var model = $E('#model')[0].value;
//        var price = $E('#price')[0].value;
//        var newKit = new window[Constructor]();
//        if(newKit.setModel(model) && newKit.setPrice(price)){
//            console.log('Создан новый инвентарь: ', newKit);
//            var maxId = 0;
//            for(var k in kitsCollection){
//                if(+k > maxId) maxId = +k;
//            }
//            ++maxId;
//            kitsCollection[maxId] =  newKit.getKit();
//            localStorage.kit = JSON.stringify(kitsCollection);
//            renderTable();
//            renderKitSelects();
//        } else {
//            console.error('Некоректные данные для инвентаря!');
//            alert('Некоректные данные для инвентаря!');
//        }
//    };
//};
//
