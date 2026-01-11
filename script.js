const callButton = document.getElementById('callButton');

callButton.onclick = async () => {
    // 1. Просим доступ к камере
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    // 2. Показываем свое видео себе
    document.getElementById('localVideo').srcObject = stream;
    // 3. Звоним другу (friendId — это его Peer ID)
    const call = peer.call(friendId, stream);
    // 4. Ждем ответа и получаем его видеопоток
    call.on('stream', (remoteStream) => {
        document.getElementById('remoteVideo').srcObject = remoteStream;
    });
};
