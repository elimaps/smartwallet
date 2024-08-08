actor {

  // Initialize balances for different currencies
  var kwachaBalance : Float = 1000;
  var shillingBalance : Float = 0;
  var dollarBalance : Float = 0;
  var bitcoinBalance : Float = 0;

  // Define exchange rates between currencies
  var kwachaToShilling : Float = 101.97;
  var kwachaToDollar : Float = 0.040;
  var kwachaToBitcoin : Float = 0.00000059;

  var shillingTokwacha : Float = 0.0098;
  var shillingToDollar : Float = 0.00039;
  var shillingToBitcoin : Float = 0.0000000058;

  var dollarToKwacha : Float = 25.0;
  var dollarToShilling : Float = 2557.73;
  var dollarToBitcoin : Float = 0.000015;

  var bitcoinTokwacha : Float = 1709099.76;
  var bitcoinToShilling : Float = 174098696.64;
  var bitcoinToDollar : Float = 68142.50;

  // Define a record type to represent balances
  type Balances = {
    kwacha : Float;
    shilling : Float;
    dollar : Float;
    bitcoin : Float;
  };

  // Define an array to store balances
  var balance = {
    kwacha = kwachaBalance;
    shilling = shillingBalance;
    dollar = dollarBalance;
    bitcoin = bitcoinBalance;
  };

  // Function to retrieve balances
  public func getBalance() : async Balances {
    return balance;
  };

  // Function for currency exchange: Kwacha to other currencies
  public func exchangeKwachaToDollarToShillingToBitcoin(currency : Text, amount : Float) : async Float {
    if (currency == "shilling") {
      var exchangedAmount = amount * kwachaToShilling;
      kwachaBalance -= amount;
      shillingBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "dollar") {
      var exchangedAmount = amount * kwachaToDollar;
      kwachaBalance -= amount;
      dollarBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "bitcoin") {
      var exchangedAmount = amount * kwachaToBitcoin;
      kwachaBalance -= amount;
      bitcoinBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function for currency exchange: Dollar to other currencies
  public func exchangeDollarToShillingToBitcoinToKwacha(currency : Text, amount : Float) : async Float {
    if (currency == "shilling") {
      var exchangedAmount = amount * dollarToShilling;
      dollarBalance -= amount;
      shillingBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "kwacha") {
      var exchangedAmount = amount * dollarToKwacha;
      dollarBalance -= amount;
      kwachaBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "bitcoin") {
      var exchangedAmount = amount * dollarToBitcoin;
      dollarBalance -= amount;
      bitcoinBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function for currency exchange: Shilling to other currencies
  public func exchangeShillingToBitcoinToKwachaDollar(currency : Text, amount : Float) : async Float {
    if (currency == "dollar") {
      var exchangedAmount = amount * shillingToDollar;
      shillingBalance -= amount;
      dollarBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "kwacha") {
      var exchangedAmount = amount * shillingTokwacha;
      shillingBalance -= amount;
      kwachaBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "bitcoin") {
      var exchangedAmount = amount * shillingToBitcoin;
      shillingBalance -= amount;
      bitcoinBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function for currency exchange: Bitcoin to other currencies
  public func exchangeBitcoinToKwachaDollarToShilling(currency : Text, amount : Float) : async Float {
    if (currency == "dollar") {
      var exchangedAmount = amount * bitcoinToDollar;
      bitcoinBalance -= amount;
      dollarBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "kwacha") {
      var exchangedAmount = amount * bitcoinTokwacha;
      bitcoinBalance -= amount;
      kwachaBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else if (currency == "shilling") {
      var exchangedAmount = amount * bitcoinToShilling;
      bitcoinBalance -= amount;
      shillingBalance += exchangedAmount;
      update();
      return exchangedAmount;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function to deposit funds
  public func deposit(currency : Text, amount : Float): async Float{
     if (currency == "dollar") {
      dollarBalance += amount;
      update();
      return dollarBalance ;
    } else if (currency == "kwacha") {
      kwachaBalance += amount;
      update();
      return kwachaBalance;
    } else if (currency == "bitcoin") {
      bitcoinBalance += amount;
      update();
      return bitcoinBalance;
    } else if (currency == "shilling"){
      shillingBalance += amount;
      update();
      return shillingBalance;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function to withdraw funds
  public func withDraw(currency : Text, amount : Float): async Float{
     if (currency == "dollar") {
      dollarBalance -= amount;
      update();
      return dollarBalance ;
    } else if (currency == "kwacha") {
      kwachaBalance -= amount;
      update();
      return kwachaBalance;
    } else if (currency == "bitcoin") {
      bitcoinBalance -= amount;
      update();
      return bitcoinBalance;
    } else if (currency == "shilling"){
      shillingBalance -= amount;
      update();
      return shillingBalance;
    } else {
      return 0.0; // Handle unsupported currency types
    };
  };

  // Function to update balances
  private func update() : () {
    balance := {
      kwacha = kwachaBalance;
      shilling = shillingBalance;
      dollar = dollarBalance;
      bitcoin = bitcoinBalance;
    };
  };
};
