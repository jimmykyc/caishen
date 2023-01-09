const web3 = new Web3("https://bscrpc.com")

let abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addAmountCollected",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositBNB",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setAmountCollected",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setHardCap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tx1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tx2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tx3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tx41",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tx42",
				"type": "uint256"
			}
		],
		"name": "setLimits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "subtractAmountCollected",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transferEthToOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "cap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "howMuchSent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tx1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tx2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tx3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tx41",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tx42",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}

]

let contractAddress = "0x061e0fed88453558ef84725a30d1089f24474a55";

let c = new web3.eth.Contract(abi, contractAddress);

var total = 0;
var cap = 0;
var accountBalance = 0;
var tokensReserved = 0;
var address;

const totalHandler = async () => {
    try {
        const val = await c.methods.total().call();
        return parseFloat(web3.utils.fromWei(val, 'ether'));
    } catch (err) {
        console.log(err);
        return 0;
    }
};

const capHandler = async () => {
    try {
        const val = await c.methods.cap().call();
        return parseFloat(web3.utils.fromWei(val, 'ether'));
    } catch (err) {
        console.log(err);
        return 0;
    }
};

const balanceHandler = async () => {
    try {
        const val = await c.methods.howMuchSent(address).call()
        return web3.utils.fromWei(val, 'ether');
    } catch (err) {
        return 0;
    }
};







setInterval(function () {
    ;(async () => {
        total = await totalHandler();
        cap = 1000;
        accountBalance = await balanceHandler();
       	tokensReserved = (accountBalance * 1500000).toFixed(2);
    })()


	var progress = (total / cap * 100).toFixed(2);




    $("#totalRaised").text(total.toFixed(2) + " / " + cap + " BNB (" + progress + "%)");

    $("#userRaised").text(accountBalance+' BNB');

    $("#tokensReserved").text(tokensReserved+' $USAGI');

    $("#walletAddress").text(address);

	$("#reflink").val('https://usagi-protocol.com/tokensale?r='+address);
	
	$("#progress-bar").animate({width: progress + "%"});


	
	




	
}, 1000);



const connectWallet = async () => {
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        address = accounts[0];
        web3.eth.setProvider(Web3.givenProvider);
	$("#connectWallet").hide();
	$("#connectWallet2").hide();
	$("#depositBNB").show();
	$("#connected_wallet").show();
	$("#wnotconnected").hide();	
	$("#wconnected").show();	
	$("#ref").show();	
	$("#connectedWalletnav").show();
    }).catch((err) => console.log(err))
}





const depositBNB = async () => {
    try {
        let buyAmount = $("#bnbAmount").val();

		if(buyAmount < 0.2 ){

			alert('Min 0.2 BNB');
        
		}else {
			await c.methods.depositBNB().send({
				from: address.toLowerCase(),
				value: web3.utils.toWei(buyAmount.toString(2), "ether"),
			}).then((callback) => {
				if(callback.hasOwnProperty("blockHash")) {
					$("#successToast").addClass("show");
					setTimeout(function() {
						$("#successToast").removeClass("show");
						$('#resultMsg').load('https://usagi-protocol.com/privatesale/send_presale_buy_message.php?amount='+$('#bnbAmount').val()+'&total_raised='+total);
						$('#refMsg').load('https://usagi-protocol.com/privatesale/referral.php?chaintype=bsc&amount='+$('#bnbAmount').val()+'&walletadress='+address+'&ref='+$('#refwalletaddress').val());
					}, 5000);
				} else if(callback.hasOwnProperty("code")) {
					$("#failToast").addClass("show");
					setTimeout(function() {
						$("#failToast").removeClass("show");
					}, 5000);
				}
			});
		}


    } catch (err) {
        console.log(err);
    }
};







if(!window.ethereum) {document.getElementById("dapperror").style.display = "block";
$( "#connectWallet" ).click(function() {
			alert('Please use a dApp browser.');
});
$( "#connectWallet2" ).click(function() {
	alert('Please use a dApp browser.');
});
};

$("#connectWallet_navbar").show();
$("#connectWallet").show();
$("#depositBNB").hide();
$("#wconnected").hide();
$("#part1").hide();





ethereum.on('accountsChanged', (accounts) => {
	if(accounts.length == 0) {
		$("#connectWallet").show();
		$("#connectWallet_navbar").show();
		$("#depositBNB").hide();
		$("#w_connected").hide();
		connectedWalletnav
	} else {
		$("#connectWallet").hide();
		$("#connectWallet_navbar").hide();
		$("#depositBNB").show();
		$("#wconnected").show();
		$("#wnotconnected").hide();	
		$("#connectedWalletnav").show();
	}
});



