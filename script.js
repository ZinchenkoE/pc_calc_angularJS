var typeKit = [
    {name: 'материнская плата'},
    {name: 'системный блок'},
    {name: 'процессор'},
    {name: 'опереативная память'}
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

if(!localStorage.kit) localStorage.kit = JSON.stringify(kitsCollection);
else kitsCollection = JSON.parse(localStorage.kit);

var App = angular.module("pcKitApp",[]);
App.controller("MainCtrl", function ($scope) {
    $scope.typeKit        = typeKit;
    $scope.kitsCollection = kitsCollection;
    $scope.addKit = function  (){
        if($scope.addForm.$valid){
            var newKit = { type: $scope.typeNewKit, model: $scope.model, price: $scope.price };
            kitsCollection.push(newKit);
            localStorage.kit = JSON.stringify(kitsCollection);
        }
    };
    $scope.calc = function  (){
        var summ = 0;
        $scope.typeKit.forEach(function(select){
            summ += +select.selectPrice;
        });
        if(summ) $scope.calcPrice = 'Стоимость комплекта: ' + summ + ' грн';
    };
});
