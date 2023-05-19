			// The Timer Logic & Code
            
      //       document.getElementById("name").innerText = "Aje Johns";
			// document.getElementById("team").innerText = "Storage Support Team";

			// document.getElementById("hold-button").addEventListener("click", function() {
      // var content = document.getElementById("hold-content");
			// 	content.classList.toggle("hidden");
			// });

          
      //       document.getElementById("hold-button").addEventListener("click", function() {
      //           var content = document.getElementById("hold-content");
      //           content.classList.toggle("hidden");

      //           var timerElement = document.getElementById("timer");
      //           var seconds = 0;

      //           var timerInterval = setInterval(function() {
      //           seconds++;
      //           var minutes = Math.floor(seconds / 60);
      //           var remainingSeconds = seconds % 60;
      //           timerElement.innerText = "On Hold: " + minutes.toString().padStart(2, "0") + ":" + remainingSeconds.toString().padStart(2, "0");
      //           }, 1000);

      //           setTimeout(function() {
      //           clearInterval(timerInterval);
      //           timerElement.innerText = "";
      //           }, 300000); // 5 minutes (300000 milliseconds)
      //       });


//************** */ NATO Code Confirmation ********************

// Define the NATO phonetic alphabet codes
const natoCodes = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliet",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
    " ": " ",
    '@': " ",
    '.': " ", 
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "0": "zero",
  };
//Name
const inputField = document.getElementById("inputField");
const content = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");

// Event listener for the input field : Name
inputField.addEventListener("input", () => {
const text = inputField.value.toUpperCase();
let contentHTML = "";

for (let i = 0; i < text.length; i++) {
const character = text.charAt(i);
const code = natoCodes[character];
if (code) {
  if (character === " ") {
    contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
  }else if (character === "@"){
    contentHTML += `<div class="character space">@</div>`;
  } else if (character === "."){
    contentHTML += `<div class="character space">Dot</div>`;
  } 
  else {
    contentHTML += `<div class="character">${character} - ${code}</div>`;
  }
}
}

content.innerHTML = contentHTML;
});

// Event listener for the name toggle button
toggleButton.addEventListener("click", (e) => {
e.preventDefault();
content.classList.toggle("hidden");
toggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
});


//Email
const EmailInputField = document.getElementById("EmailInputField");
const EmailContent = document.getElementById("EmailContent");
const EmailtoggleButton = document.getElementById("EmailToggleButton");

// Event listener for the input field : Email
EmailInputField.addEventListener("input", () => {
    const text = EmailInputField.value.toUpperCase();
    let contentHTML = "";
    
    for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    const code = natoCodes[character];
    if (code) {
      if (character === " ") {
        contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
      }else if (character === "@"){
        contentHTML += `<div class="character space">@</div>`;
      } else if (character === "."){
        contentHTML += `<div class="character space">Dot</div>`;
      } 
      else {
        contentHTML += `<div class="character">${character} - ${code}</div>`;
      }
    }
    }
    
    EmailContent.innerHTML = contentHTML;
    });
    
    // Event listener for the name toggle button
    EmailtoggleButton.addEventListener("click", (e) => {
      e.preventDefault();
    EmailContent.classList.toggle("hidden");
    EmailtoggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
    });

//Asset Serial Number
const assetSerialNumberInputField = document.getElementById("assetSerialNumberInputField");
const assetSerialNumberContent = document.getElementById("assetSerialNumberContent");
const assetSerialNumberToggleButton = document.getElementById("assetSerialNumberToggleButton");

// Event listener for the input field : Email
assetSerialNumberInputField.addEventListener("input", () => {
    const text = assetSerialNumberInputField.value.toUpperCase();
    let contentHTML = "";
    
    for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    const code = natoCodes[character];
    if (code) {
      if (character === " ") {
        contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
      }else if (character === "@"){
        contentHTML += `<div class="character space">@</div>`;
      } else if (character === "."){
        contentHTML += `<div class="character space">Dot</div>`;
      } 
      else {
        contentHTML += `<div class="character">${character} - ${code}</div>`;
      }
    }
    }
    
    assetSerialNumberContent.innerHTML = contentHTML;
    });
    
    // Event listener for the name toggle button
    assetSerialNumberToggleButton.addEventListener("click", (e) => {
      e.preventDefault();
    assetSerialNumberContent.classList.toggle("hidden");
    EmailtoggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
    });


//*********************Timer************ */

var timerButton = document.getElementById('timerButton');
    var timerDisplay = document.getElementById('timerDisplay');

    var startTime;
    var elapsedTime = 0; // Variable to store the elapsed time
    var timerInterval;

    timerButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (timerInterval) {
        // If timer is running, pause it
        clearInterval(timerInterval);
        timerInterval = null;
        timerButton.textContent = 'Start';
      } else {
        // If timer is paused, start or resume it
        startTime = Date.now() - elapsedTime; // Adjust start time based on elapsed time
        timerInterval = setInterval(updateTimer, 1000);
        timerButton.textContent = 'Pause';
      }
    });

    function updateTimer() {
      var currentTime = Date.now();
      elapsedTime = currentTime - startTime; // Update elapsed time
      var seconds = Math.floor(elapsedTime / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      timerDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    }

    function formatTime(time) {
      return time < 10 ? '0' + time : time;
    }

  const cuntomerName =document.getElementById('inputField');


  //The Final Output
  // extracting information

const customerInformation = {
  'Name':'',
  'Issue Description':'',
  'Case Type':'',
  'Phone Number':'',
  'Alternative Contact Number':'',
  'Alternative Contact Number Holders Name':'',
  'Email Address':'',
  'Asset Serial Number':'',
  'System Location':'',
  'Name of the Company':'',
  'Operating System':'',
  'Issue Start Date':'',
  'Case ID':'',
  'Summary':'',
  'Further Assistance':'',
  'GST': '',
}

  const customerName = document.getElementById('inputField');
  const customerPhone = document.getElementById('phone');
  const customerPhoneAlt = document.getElementById('altPhone');
  const customerPhoneAltName = document.getElementById('altPhoneName');
  const customerEmail = document.getElementById('EmailInputField');
  const customerAssetSeriaNumber = document.getElementById('assetSerialNumberInputField');
  const customerSystemLocation = document.getElementById('systemLocation');
  const customerGST = document.getElementById('systemGST');
  const customerCompanyName = document.getElementById('companyName');
  const customerAssetOs = document.getElementById('os');
  const customerIssueStartDate = document.getElementById('issueStart');
  const customerIssueDescription = document.getElementById('issueDescription');

const printButton = document.getElementById('consoleLog');
printButton.addEventListener('click' , (e)=>{
  e.preventDefault();
  customerInformation['Name'] = cuntomerName.value;
  customerInformation['Phone Number'] = customerPhone.value;
  customerInformation['Issue Description'] = customerIssueDescription.value;
  customerInformation['Alternative Contact Number'] = customerPhoneAlt.value;
  customerInformation['Email Address'] = customerEmail.value;
  customerInformation['Alternative Contact Number Holders Name'] = customerPhoneAltName.value;
  customerInformation['Asset Serial Number'] = customerAssetSeriaNumber.value;
  customerInformation['System Location'] = customerSystemLocation.value;
  customerInformation['GST'] = customerGST.value;
  customerInformation['Name of the Company'] = customerCompanyName.value;
  customerInformation['Operating System'] = customerAssetOs.value;
  customerInformation['Issue Start Date'] = customerIssueStartDate.value;

 

  // 'Case Type':'',
  // 'Case ID':'',
  // 'Summary':'',
  // 'Further Assistance':'',

  console.log(customerInformation)
})

const submtiButton = document.getElementById('submit')
submtiButton.addEventListener('click', (e)=>{
  e.preventDefault();
})