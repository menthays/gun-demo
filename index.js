let gun = Gun(location.origin + '/gun');
let channel = {};

document.querySelector('#join').addEventListener('click', () => {
    let channelName = document.querySelector('#channel').value
    channel = gun.get('channel/' + channelName);
    channel.map().on(((data, key) => {
        console.log(data, key)
    }))
    channel.put({
        uid: document.querySelector('#uid').value,
        nickname: document.querySelector('#nickname').value
    })

})