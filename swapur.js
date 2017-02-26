/**
 * Created by Hakan on 2/14/2016.
 */
init();

function createSwapur() {
    var div = document.createElement('div');
    div.id = 'swap_confirm ferryboat';
    div.className = 'btn btn-sm swapur';
    div.style = 'float: right; position: relative;right: 184px; top: -4px; padding: 0;';
    div.addEventListener("click", swapFerryboat);

    var image = document.createElement('img');
    image.src = chrome.extension.getURL("images/swapur.svg");
    div.appendChild(image);

    return div;
}

function init() {
    var unique = document.querySelector('.submenu');
    var vapur = unique.childNodes.item(4);
    var divVapur = createSwapur();
    unique.insertBefore(divVapur, vapur);
}

function swapFerryboat() {

    var fromForm = document.querySelectorAll('.form-group')[0];
    var textFrom = fromForm.children.item(0);
    var from = fromForm.children.item(1);

    from.children.item(0).children.item(0).id = 'vapurNereye';
    from.children.item(0).children.item(0).name = 'nereye';

    var toForm = document.querySelectorAll('.form-group')[1];
    var textTo = toForm.children.item(0);
    var to = toForm.children.item(1);

    to.children.item(0).children.item(0).id = 'vapurNereden';
    to.children.item(0).children.item(0).name = 'nereden';

    textFrom.parentNode.insertBefore(to, textFrom.nextSibling);
    textTo.parentNode.insertBefore(from, textTo.nextSibling);

}
