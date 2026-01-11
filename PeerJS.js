peer.on('call', async (call) => {
    // 1. Спрашиваем доступ к своей камере для ответа
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    // 2. Отвечаем на звонок и отправляем свой поток
    call.answer(stream);
    // 3. Показываем видео собеседника
    call.on('stream', (remoteStream) => {
        document.getElementById('remoteVideo').srcObject = remoteStream;
    });
});
