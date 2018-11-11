$(window).on("load", function() {
  window.addEventListener("lynxMobileLoaded", function() {
    (async () => {
      try {
        //var result = await window.lynxMobile.requestSetAccountName();
        let result = await window.lynxMobile.requestSetAccount("sessiontry1222");
        $('#res').html(JSON.stringify(result));
      } catch (err) {
        console.log(err);
      }
    })();
  });
})
$('sendTx').addEventListener('click', function() {
  (async () => {
    try {
      let result = await window.lynxMobile.requestSetAccount("sessiontry1222");
      let relevantInfo = {
        "balance": result['core_liquid_balance'],
        "name": result['total_resources']["owner"],
        "txReceiver": $('txReceiver').val(),
        "txAmount": $('txAmount').val()
      }
      let transaction = {
        actions: [{
          account: "eosio",
          name: relevantInfo['name'],
          data: {
            from: relevantInfo['name'],
            receiver: elevantInfo['txReceiver'],
            quantity: elevantInfo['txAmount'],
          },
          authorization: [{
            actor: relevantInfo['name'],
            permission: "active"
          }]
        }]
      }
      //sending Tx
      txResult = await window.lynxMobile.transact(transaction);
    } catch (err) {
      console.log(err);
    }
    $('#txRes').html(JSON.stringify(txResult));
  })();
})
