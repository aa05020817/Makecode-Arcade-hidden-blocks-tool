const h_blocklyToolbox = () => {
    document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'none';
};
const h_blocklyReset = () => {
    document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'block';
};
const h_cha = () => {
    document.getElementById('CDBZU)A.7xwctt;x~sUj').style.display = 'none';
};
const r_cha = () => {
    document.getElementById('CDBZU)A.7xwctt;x~sUj').style.display = 'block';
}
const onMessage = (message) => {
    switch (message.action) {
        case 'HIDDEN':
            h_blocklyToolbox();
            break;
        case 'RESET':
            h_blocklyReset();
            break;
        case 'HIDDEN_CHA':
            h_cha();
            break;
        case 'RESET_CHA':
            r_cha();
            break;    
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);
//window.addListener(onMessage);