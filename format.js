// Instantiate the JS to the HTML elements and store
function resetForms() {
    var root = document.getElementById('dropdown-admin-portal');
    var root2 = document.getElementById('dropdown-brink-version');
    var root3 = document.getElementById('dropdown-replicate-version');
    var root4 = document.getElementById('textField-concept-name');
    var root5 = document.getElementById('textField-location-name');
    var root6 = document.getElementById('textField-location-id');
    var root7 = document.getElementById('bug-details');
    var root8 = document.getElementById('bug-replication');
    var root9 = document.getElementById('current-behavior');
    var root10 = document.getElementById('expected-behavior');
}

function initialLoad() {    
    var root = document.getElementById('dropdown-admin-portal');
    var adminPortal = new mdc.select.MDCSelect(root);

    var root2 = document.getElementById('dropdown-brink-version');
    var brinkVersion = new mdc.select.MDCSelect(root2);

    var root3 = document.getElementById('dropdown-replicate-version');
    var replicateVersion = new mdc.select.MDCSelect(root3);

    var root4 = document.getElementById('textField-concept-name');
    var conceptName = new mdc.textField.MDCTextField(root4);

    var root5 = document.getElementById('textField-location-name');
    var locationName = new mdc.textField.MDCTextField(root5);

    var root6 = document.getElementById('textField-location-id');
    var locationID = new mdc.textField.MDCTextField(root6);

    var root7 = document.getElementById('bug-details');
    var bugDetails = new mdc.textField.MDCTextField(root7);

    var root8 = document.getElementById('bug-replication');
    var bugReplication = new mdc.textField.MDCTextField(root8);

    var root9 = document.getElementById('current-behavior');
    var currentBehavior = new mdc.textField.MDCTextField(root9);

    var root10 = document.getElementById('expected-behavior');
    var expectedBehavior = new mdc.textField.MDCTextField(root10);

    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#mdc-dialog-default'));

    var dialogContent = document.getElementById('jira-format-text');



    function getAdminPortal() {
        var item = adminPortal.selectedOptions[0];
        return item.textContent;
    }

    function getBrinkVersion() {
        var item = brinkVersion.selectedOptions[0];

        return item.textContent;
    }

    function getReplicateVersion() {
        var item = replicateVersion.selectedOptions[0];

        return item.textContent;
    }

    function getConceptName() {
        var name = conceptName.value;

        return name;
    }

    function getLocationName() {
        var name = locationName.value;

        return name;
    }

    function getLocationID() {
        var id = locationID.value;

        return id;
    }

    function getBugDetails() {
        var rawText = bugDetails.value;
        
        return rawText;
    }

    function getBugReplication() {
        var rawText = bugReplication.value;
        
        return rawText;
    }

    function getCurrentBehavior() {
        var rawText = currentBehavior.value;
        
        return rawText;
    }

    function getExpectedBehavior() {
        var rawText = expectedBehavior.value;
        
        return rawText;
    }

    function setDialogText(dialogText) {
        document.getElementById('dialog-error').innerText = '';
        document.getElementById('clipboard').innerHTML = dialogText;
    }


    document.getElementById('submit-button').addEventListener('click', function(evt) {
        var _adminPortal = getAdminPortal();
        var _brinkVersion = getBrinkVersion();
        var _replicateVersion = getReplicateVersion();
        var _conceptName = getConceptName();
        var _bugDetails = getBugDetails();
        var _expectedBehavior = getExpectedBehavior();
        var _currentBehavior = getCurrentBehavior();
        var _bugReplication = getBugReplication();
        var _locationName = getLocationName();
        var _locationID = getLocationID();
            
        var finalString = ` 
{noformat}
Brink Version: ${_brinkVersion.trim()}
Replicated on version ${_replicateVersion.trim()}
{noformat}

h2. All Affected Locations
||{color:#333333}Portal{color}||{color:#333333}Group Name{color}||{color:#333333}Location Name{color}||{color:#333333}Location ID{color}||
|${_adminPortal.trim()}|${_conceptName.trim()}|${_locationName.trim()}|${_locationID.trim()}|

h2. Bug Details
{panel:title=Bug Description|titleBGColor=#e0c398}
${_bugDetails.trim()}
{panel}
{panel:title=Bug Replication Steps|titleBGColor=#ff6347}
${_bugReplication.trim()}
{panel}
{panel:title=Current Behavior|titleBGColor=#ff7f50}
    ${_currentBehavior.trim()}
{panel}
{panel:title=Expected Behavior|titleBGColor=#90ee90}
    ${_expectedBehavior.trim()}
{panel}`;

        setDialogText(finalString);

        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
};

// Function to setup the clipboard.
var clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});

// Ensure HTML objects have their JS counterparts instantiated for Material Components
initialLoad();



const button = document.getElementById("add-locations"); //Button to trigger JS
const node = document.getElementById('locations-wrapper') //Direct Div Parent element for Inputs
const nodeWrapper = document.getElementById('locations-outer-wrapper')

button.addEventListener('click', function() {
    const count = document.querySelector('[class="locations-wrapper"]');
    
    const newNode = node.cloneNode(true);
    setIds(newNode.querySelector("#textField-concept-name"), count);
    setIds(newNode.querySelector("#textField-location-name"), count);
    setIds(newNode.querySelector("#textField-location-id"), count);

    nodeWrapper.appendChild(newNode);
    console.log(newNode);

});

function setIds(node, count) {
    node.id = `${node.id}-${count}`;
}










