
// 1. ----------kilometerToMeter----------


function kilometerToMeter(kilometer){

    var meter=0 ;  
    if(kilometer<0){
        console.log('Negative value is not allow');
    }
    else{
         meter = kilometer*1000;
    }
    return meter;
}


// 2.---------budgetCalculator-----------


function budgetCalculator(watch, mobile, laptop){

    var watchPrice = 50*watch;
    var mobilePrice = 100*mobile;
    var laptopPrice = 500*laptop;
    var totalPrice=0;

    if (watchPrice < 0 || mobilePrice < 0 || laptopPrice < 0){
        console.log('Negative Value is not allow')
    }
    else{
         totalPrice= watchPrice + mobilePrice + laptopPrice;
    }
    return totalPrice;
}


// 3.-----------hotelCost------------


function hotelCost(days){
    var stayCost = 0;

    if(days<=10){
        stayCost = days*100;
    }
    else if(days<=20){
        firstTenDays = 10*100;
        remainingDays = days - 10;
        secondTenDays = remainingDays*80;
        stayCost = firstTenDays + secondTenDays;
    }
    else {
        firstTenDays = 10*100;
        secondTenDays = 10*80;
        remainingDays = days-20;
        otherMoreDays = remainingDays*50;
        stayCost = firstTenDays + secondTenDays + otherMoreDays;
    }
    return stayCost;
}


// 4.-------------megaFriend------------


function megaFriend(friends){
     
    var max = friends[0];

    for(var i=0; i<friends.length; i++){
    var element = friends[i];

    if (element.length>max.length){
        max= element;
    }
    }
    return max;
    }
