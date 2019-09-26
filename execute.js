const h_blocklyToolbox = () => {
    document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'none';
};
const h_blocklyReset = () => {
    document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'block';
}
const onMessage = (message) => {
    switch (message.action) {
        case 'HIDDEN':
            h_blocklyToolbox();
            break;
        case 'RESET':
            h_blocklyReset();
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);
//window.addListener(onMessage);