function totalPhoneBill(totalCost) {
    var callCost = [];
    var smsCost = [];
  var phoneBill = totalCost.split(',');
  for (let i = 0; i < phoneBill.length; i++) {
    if (phoneBill[i].endsWith('call')) {
        callCost.push(phoneBill[i]);
      
        
    }
  
    else if (phoneBill[i].endsWith('sms')) {
      smsCost.push(phoneBill[i]);  
    }
    
  }  
    var callCost1 = callCost.length*2.75;
    var smsCost1 = smsCost.length*0.65;
    var totalCost1 = callCost1 + smsCost1;
    totalCost1.toFixed(3);
    
    return 'R' + totalCost1.toFixed(2);
  }
      